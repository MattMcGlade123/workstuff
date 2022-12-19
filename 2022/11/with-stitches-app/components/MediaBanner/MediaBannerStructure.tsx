// @ts-nocheck
import React, { FC } from 'react';
import {
  StyledBackgroundImage,
  StyledBannerContent,
  StyledContentInner,
  StyledMediaBanner,
  StyledMediaBannerContainer,
} from './MediaBannerStyles';

import MediaElement from '../MediaElement'

const MediaBannerStructure = ({
  backgroundImage,
  subtitle,
  title,
  titleImage,
  pageName,
  colourTheme,
  moduleIndex,
  animate,
  fontSize,
  headerHeight,
  backgroundColour = 'transparent',
}) => {
  return (
    <StyledMediaBanner
      css={{ $$backgroundColour: backgroundColour }}
      className="branded-banner"
      data-hookid={`${pageName}MediaBanner`}
    >
      <StyledMediaBannerContainer
        animate={animate}
        moduleIndex={moduleIndex}
      >
        <StyledBackgroundImage
          animate={animate}
          moduleIndex={moduleIndex}
        >
          <MediaElement {...backgroundImage} imgPriority={moduleIndex === 0} />
        </StyledBackgroundImage>
        <StyledBannerContent
          colourTheme={colourTheme}
          fontMediaSize={fontSize}
          css={{ $$headerHeightMob: headerHeight + 36, $$headerHeightDesk: headerHeight + 40 }}
        >
          <StyledContentInner>
            {titleImage ? (
              <MediaElement {...titleImage} imageType="intrinsic" />
            ) : (
              <div className="custom-size-title">
                <h2>{title}</h2>
              </div>
            )}
            <p className="custom-size-description">{subtitle}</p>
          </StyledContentInner>
        </StyledBannerContent>
      </StyledMediaBannerContainer>
    </StyledMediaBanner>
  );
};

export default MediaBannerStructure;
