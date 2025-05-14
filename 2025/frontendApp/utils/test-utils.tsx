import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import StoreProvider from '@/lib/StoreProvider'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        {children}
      </StoreProvider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }