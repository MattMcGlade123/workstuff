import { Box, ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import type { Metadata } from 'next';

import Header from '../shared/components/Header';
import styles from './layout.module.css';
import { Providers } from './providers';

import '@mantine/core/styles.css';
import '../shared/theme/mantine-overrides.css';

export const metadata: Metadata = {
  title: 'Blaze',
  description: 'Blaze testing',
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <Providers>
          <Header />
          <Box component="main" className={styles.content}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
