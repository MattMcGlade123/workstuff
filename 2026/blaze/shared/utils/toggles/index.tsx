'use client';

import type { ReactNode } from 'react';
import type { LDContext } from 'launchdarkly-react-client-sdk';
import { LDProvider } from 'launchdarkly-react-client-sdk';

const clientSideID = process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_SIDE_ID ?? '';

/** Seconds; passed to LD `waitForInitialization` to avoid SDK deprecation warnings. */
export const LD_INIT_TIMEOUT_SECONDS = 5;

const anonymousContext: LDContext = {
  kind: 'user',
  key: 'anonymous',
};

let warnedMissingClientSideId = false;

function warnMissingClientSideId() {
  if (warnedMissingClientSideId || process.env.NODE_ENV !== 'development') {
    return;
  }
  warnedMissingClientSideId = true;
  // TODO: replace this with monitoring error.
  // eslint-disable-next-line no-console
  console.warn(
    '[LaunchDarkly] NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_SIDE_ID is not set; LDProvider is omitted and useFlags will not work.',
  );
}

export function LaunchDarklyProvider({ children }: { children: ReactNode }) {
  if (!clientSideID) {
    warnMissingClientSideId();
    return <>{children}</>;
  }

  return (
    <LDProvider
      clientSideID={clientSideID}
      context={anonymousContext}
      timeout={LD_INIT_TIMEOUT_SECONDS}
    >
      {children}
    </LDProvider>
  );
}
