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
  flex-direction: column;

  h1 {
    font-family: ${tangerine.style.fontFamily};
    font-size: 6.5rem;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 2rem;

    @media ${({ theme }) => theme.devices.large} {
      font-size: 10rem;
      margin-bottom: 5rem;
    }

    > svg {
      font-size: 3rem;

      @media ${({ theme }) => theme.devices.large} {
        font-size: 5rem;
      }
    }
  }
`;

export const StyledNav = styled.nav`
  margin-bottom: 5rem;
  width: 30vw;

  > ul {
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`