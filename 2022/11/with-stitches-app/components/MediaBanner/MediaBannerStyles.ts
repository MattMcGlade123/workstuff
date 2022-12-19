// @ts-nocheck
import { styled } from '../../stitches.config'
import { StyledNextImageWrapper } from '../NextImage/NextImageStyles';

export const StyledMediaBanner = styled('div', {
  position: 'relative',
  minHeight: '25rem',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  backgroundColor: '$$backgroundColour',
  '@large': {
    boxSizing: 'border-box',
    overflow: 'hidden',
    width: '100%',
    height: '40rem'
  }
});

export const StyledMediaBannerContainer = styled('div', {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const StyledBackgroundImage = styled('div', {
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  '@large': {
    position: 'static',
  },

  [`& ${StyledNextImageWrapper}`]: {
    height: '100%',

    '& span': {
      height: '100% !important'
    }
  }
});

export const StyledBannerContent = styled('div', {
  variants: {
    colourTheme: {
      LIGHT: {
        color: '$white'
      },
      DARK: {
        color: '$black'
      },
      defaultVariants: {
        color: '$black'
      }
    },
  },
  width: '90%',
  margin: '$headerHeightMob auto 0',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1,
  '@large': {
    position: 'absolute',
    top: '$$headerHeightDesk',
    left: '3rem',
    maxWidth: '50%',
    margin: '0 auto',
  },
  '& img': {
    maxWidth: '32rem',
    height: 'auto',
    objectFit: 'contain',
  },
  '& p': {
    textAlign: 'center',
    '@large': {
      textAlign: 'left',
    }
  },
  '&h2, &p': {
    color: 'inherit'
  }
});

export const StyledCtaList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  justifyContent: 'center',
  marginTop: '3rem',
  marginBottom: '3rem',
  '& li': {
    margin: `0 ${({ ctaNumber = 0 }) => (ctaNumber > 3 ? 1 : 2)}rem`,
    whiteSpace: 'nowrap',
    '&: first-of-type': {
      marginLeft: 0,
    },
    '& a': {
      color: 'inherit',
    }
  },
  '@large': {
    marginTop: '$3',
    justifyContent: 'unset',
    width: '100 %'
  }
});

export const StyledContentInner = styled('div', {
  padding: '$3',
  '@large': {
    padding: '$2'
  }
});
