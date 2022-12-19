// @ts-nocheck
import styled from 'styled-components';
import { StyledNextImageWrapper } from '../NextImage/NextImageStyles';

export const StyledMediaBanner = styled.div`
  position: relative;
  min-height: 25rem;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ backgroundColour }) => backgroundColour};
  @media ${({ theme }) => theme.devices.large} {
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 40rem;
  }
`;

export const StyledMediaBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledBackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  img,
  source {
    object-fit: cover;
    height: 100%;
    width: 100%;
  @media ${({ theme }) => theme.devices.large} {
    position: static;
  }

  ${StyledNextImageWrapper} {
    height: 100%;

    span {
      height: 100% !important;
    }
  }
`;


export const StyledBannerContent = styled.div`
  color: ${({ theme, colourTheme }) => {
  if (colourTheme === 'LIGHT') {
    return theme.blockTextColors.light;
  }
  if (colourTheme === 'DARK') {
    return theme.blockTextColors.dark;
  }
  return theme.blockTextColors.default;
}};
  width: 90%;
  margin: ${({ headerHeight }) => `${headerHeight + 36}px auto 0`};
  display: flex;
  flex-direction: column;
  z-index: 1;
  @media ${({ theme }) => theme.devices.large} {
    position: absolute;
    top: ${({ headerHeight }) => `${headerHeight + 40}px`};
    left: 3rem;
    max-width: 50%;
    margin: 0 auto;
  }
  img {
    max-width: 32rem;
    height: auto;
    object-fit: contain;
  }
  p {
    text-align: center;
    @media ${({ theme }) => theme.devices.large} {
      text-align: left;
    }
  }
  h2,
  p {
    color: inherit;
  }
`;

export const StyledCtaList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  li {
    margin: 0 ${({ ctaNumber = 0 }) => (ctaNumber > 3 ? 1 : 2)}rem;
    white-space: nowrap;
    &:first-of-type {
      margin-left: 0;
    }
    a {
      color: inherit;
    }
  }
  @media ${({ theme }) => theme.devices.large} {
    margin-top: ${({ theme }) => theme.vars.sizeM};
    justify-content: unset;
    width: 100%;
  }
`;

export const StyledContentInner = styled.div`
  padding: ${({ theme }) => theme.vars.sizeS};;
  @media ${({ theme }) => theme.devices.large} {
    padding: ${({ theme }) => theme.vars.sizeS};
  }
`;
