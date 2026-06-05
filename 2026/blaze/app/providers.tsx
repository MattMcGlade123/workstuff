'use client';

import type { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { mainTheme } from '../shared/theme/mantine-theme';
import { AuthProvider } from '../shared/hooks/useAuth';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={mainTheme}>
      <NuqsAdapter>
        <AuthProvider>{children}</AuthProvider>
      </NuqsAdapter>
    </MantineProvider>
  );
}
