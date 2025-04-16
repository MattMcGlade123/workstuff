import styled from 'styled-components';
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin']
})


export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${tangerine.style.fontFamily};
    font-size: 6.5rem;
    font-weight: 400;
    font-style: normal;

    @media ${({ theme }) => theme.devices.large} {
      font-size: 10rem;
    }

    > svg {
      font-size: 3rem;

      @media ${({ theme }) => theme.devices.large} {
        font-size: 5rem;
      }
    }
  }

  > div {
    margin-left: 0;
    margin-right: 5rem;
  }
`;