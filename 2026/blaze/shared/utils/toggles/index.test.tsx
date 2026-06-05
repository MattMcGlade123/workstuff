import React from 'react';

import { render, screen } from '../../utils/tests';

const mockLDProvider = jest.fn(({ children }: { children: React.ReactNode }) => (
  <div data-testid="ld-provider">{children}</div>
));

jest.mock('launchdarkly-react-client-sdk', () => ({
  LDProvider: (props: {
    children: React.ReactNode;
    clientSideID: string;
    context: { kind: string; key: string };
    timeout?: number;
  }) => mockLDProvider(props),
}));

const ORIGINAL_ENV = process.env;

describe('LaunchDarklyProvider (shared/utils/toggles)', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  async function loadLaunchDarklyProvider() {
    const mod = await import('./index');
    return mod.LaunchDarklyProvider;
  }

  it('renders LDProvider with client id and anonymous context when env is set', async () => {
    process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_SIDE_ID = 'test-client-id';

    const { LaunchDarklyProvider, LD_INIT_TIMEOUT_SECONDS } = await import('./index');

    render(
      <LaunchDarklyProvider>
        <span>child</span>
      </LaunchDarklyProvider>,
    );

    expect(screen.getByTestId('ld-provider')).toBeInTheDocument();
    expect(screen.getByText('child')).toBeInTheDocument();
    expect(mockLDProvider).toHaveBeenCalledWith(
      expect.objectContaining({
        clientSideID: 'test-client-id',
        context: { kind: 'user', key: 'anonymous' },
        timeout: LD_INIT_TIMEOUT_SECONDS,
      }),
    );
  });

  it('renders children without LDProvider when client id is missing', async () => {
    delete process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_SIDE_ID;

    const LaunchDarklyProvider = await loadLaunchDarklyProvider();

    render(
      <LaunchDarklyProvider>
        <span>no-ld</span>
      </LaunchDarklyProvider>,
    );

    expect(screen.queryByTestId('ld-provider')).not.toBeInTheDocument();
    expect(screen.getByText('no-ld')).toBeInTheDocument();
    expect(mockLDProvider).not.toHaveBeenCalled();
  });

  it('logs a dev warning once when client id is missing and NODE_ENV is development', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    delete process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_SIDE_ID;
    process.env.NODE_ENV = 'development';

    const LaunchDarklyProvider = await loadLaunchDarklyProvider();

    const { rerender } = render(
      <LaunchDarklyProvider>
        <span>a</span>
      </LaunchDarklyProvider>,
    );

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_SIDE_ID is not set'),
    );

    rerender(
      <LaunchDarklyProvider>
        <span>b</span>
      </LaunchDarklyProvider>,
    );

    expect(warnSpy).toHaveBeenCalledTimes(1);

    warnSpy.mockRestore();
  });
});
