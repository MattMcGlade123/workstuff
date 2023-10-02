import { css, cva } from '../../../styled-system/css';

export const testWrapper = css({
  backgroundColor: {
    base: 'gainsboro',
    lg: 'blue'
  },
  color: 'secondary',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  lg: {
    color: 'white'
  }
})

export const styledButton = cva({
  base: {
    display: 'flex',
    _hover: {
      bg: 'green.100'
    },
  },
  variants: {
    visual: {
      solid: { bg: 'red.100', color: 'white' },
      outline: { borderWidth: '4px', borderColor: 'red.100' }
    },
    size: {
      sm: { padding: '4px', fontSize: '12px' },
      lg: { padding: '8px', fontSize: '24px' }
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