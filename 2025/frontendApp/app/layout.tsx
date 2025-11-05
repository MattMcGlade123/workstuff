import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import StoreProvider from '@/lib/StoreProvider';
import Header from '@/components/Header';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ApolloWrapper } from './ApolloWrapper';
config.autoAddCss = false

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <ClientLayout>
              <Header />
              <main>
                <ApolloWrapper>{children}</ApolloWrapper>
              </main>
            </ClientLayout>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
