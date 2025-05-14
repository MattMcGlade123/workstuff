import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-size: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, li {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  main {
    padding: 0 2rem;
  }
`;

export default GlobalStyle;
