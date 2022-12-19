import { styled } from '../../stitches.config'

export const StyledNextImageWrapper = styled('div', {
  '& > span' : {
    display: 'block !important',

    '& img' : {
      width: '100% !important',
      maxHeight: 'unset !important',
    }
  }
});
