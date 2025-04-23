import styled from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInner = styled.div`
  @media ${({ theme }) => theme.devices.large} {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    object-fit: cover;

    @media ${({ theme }) => theme.devices.large} {
      width: 70%;
      height: auto;
      margin-right: 3rem;
    }
  }
`;

export const StyleIngWrapper = styled.div`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  @media ${({ theme }) => theme.devices.large} {
    padding-right: 4rem;
    margin-right: 4rem;
    border-right: 1px solid ${({ theme }) => theme.colors.grey};
    border-bottom: none;
  }
`;

export const StyleIngList = styled.ul`
  padding: 1rem;

  > li {
    margin-bottom: 1rem;
  }
`;

export const StyledSubTitle = styled.p`
  font-size: 2rem;
`;