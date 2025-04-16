'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyles';
import Normalize from '@/styles/normalize';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
