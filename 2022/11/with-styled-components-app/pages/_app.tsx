// @ts-nocheck
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const vars = {
  brandPrimary: '#333333',
  greyLight: '#f6f6f9',
  greyLightest: '#f2f2f2',
  greyDark: '#d7d7d7',
  greyDarkest: '#333333',
  greyDisabled: '#aaaaaa',
  greyAppBanner: '#808080',
  greyAppBannerLight: '#bfbfbf',
  greyAppBannerLightest: '#f2f2f2',
  greyAppBannerDark: '#3d3d3d',
  blueLight: '#0c71fd',
  white: '#ffffff',
  black: '#333333',
  green: '#42ca49',
  greenLightest: '#f5fcf6',
  red: '#d12034',
  redDark: '#b9092f',
  defaultBlack: '#000000',
  fontWeightLight: 300,
  slowSpeed: '1s',
  mediumSpeed: '.5s',
  fastSpeed: '.25s',
  imageBaseUrl: 'https://kg-static.s3.amazonaws.com/assets/kurtgeiger',
  tabletBp: 768,
  desktopBp: 1024,
  sizeXS: '.8rem',
  sizeS: '1.2rem',
  sizeM: '1.6rem',
  sizeL: '2rem',
  sizeXL: '2.4rem',
  sizeXXL: '4rem',
};

const breakpoints = {
  tablet: `${vars.tabletBp}px`,
  desktop: `${vars.desktopBp}px`,
  tabletMax: `${vars.tabletBp - 1}px`,
  desktopMax: `${vars.desktopBp - 1}px`,
};


const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
  devices: {
    smallOnly: `(max-width: ${breakpoints.tabletMax})`,
    medium: `(min-width: ${breakpoints.tablet})`,
    mediumOnly: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktopMax})`,
    large: `(min-width: ${breakpoints.desktop})`,
  },
  blockTextColors: {
    default: vars.black,
    dark: vars.brandPrimary,
    light: vars.white,
  },
  vars
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
