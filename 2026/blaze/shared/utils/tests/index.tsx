import React, { ReactElement } from 'react';
import { MantineProvider } from '@mantine/core';
import { render, type RenderOptions } from '@testing-library/react';

import { mainTheme } from '../../theme/mantine-theme';

function AllTheProviders({ children }: { children: React.ReactNode }): ReactElement {
  return <MantineProvider theme={mainTheme}>{children}</MantineProvider>;
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
}

export { customRender as render };
export { screen } from '@testing-library/react';
export * from '@testing-library/react';
