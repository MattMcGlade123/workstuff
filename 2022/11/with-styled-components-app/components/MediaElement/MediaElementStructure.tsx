// @ts-nocheck
import React, { FC } from 'react';

import NextImage from '../NextImage';


const MediaElementStructure = ({
  alt,
  mediaList,
  type,
  imageType,
  imgPriority,
  sizes,
}) => (
  <>
    {type === 'next-image' && (
      (
        <NextImage
          mediaList={mediaList}
          alt={alt}
          imageType={imageType}
          priority={imgPriority}
          sizes={sizes}
        />
      )
    )}
  </>
);

export default MediaElementStructure;
