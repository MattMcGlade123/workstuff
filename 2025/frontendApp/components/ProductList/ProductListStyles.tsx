import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: initial;
  }

  @media ${({ theme }) => theme.devices.large} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    > a {
      flex-grow: 1;
      flex-shrink: 1;
      max-width: calc(25% - 2rem);
      min-width: calc(25% - 2rem);
    }
  }
`;

export const StyledTitle = styled.p`
  font-size: 2rem;
  display: flex;
`;