import { css, cva } from '../../styled-system/css';

export const testWrapper = css({
  backgroundColor: {
    base: 'blue.100',
    lg: 'grey.200'
  },
  display: 'flex',
  flexDirection: 'column',
  color: 'secondary',
  fontSize: '13px',
  padding: '10px 15px',
  borderRadius: '5px',
  lg: {
    color: 'black'
  },
  '& img': {
    width: '200px'
  }
})

export const styledButton = cva({
  base: {
    display: 'flex',
    _hover: {
      bg: 'purple.200',
      cursor: 'pointer'
    },
  },
  variants: {
    visual: {
      solid: { bg: 'purple.100', color: 'white' },
      outline: { borderWidth: '4px', borderColor: 'purple.100' }
    },
    size: {
      sm: { padding: '4px', fontSize: '12px' },
      lg: { padding: '8px 16px', fontSize: '18px' }
    }
  }
})

export const styledContainer = cva({
  variants: {
    visual: {
      on: { display: 'block' },
      off: { display: 'none' }
    }
  }
})