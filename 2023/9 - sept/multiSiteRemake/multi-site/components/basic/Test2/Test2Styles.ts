import { css, cva } from '../../../styled-system/css';

export const testWrapper = css({
  backgroundColor: {
    base: 'gainsboro',
    lg: 'blue'
  },
  color: 'primary',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  lg: {
    color: 'white'
  }
})

export const button = cva({
  base: {
    display: 'flex'
  },
  variants: {
    visual: {
      solid: { bg: 'red.100', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'red.100' }
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' }
    }
  }
})