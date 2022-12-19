// @ts-nocheck
import React, { FC } from 'react';
import { ImageProps } from 'next/image';

import MediaElementStructure from './MediaElementStructure';

const MediaElement = ({
  alt,
  mediaList,
  type = 'next-image',
  video,
  label,
  imageType = 'responsive' as ImageProps['layout'],
  imgPriority,
  sizes,
}) => {

  const componentProps = {
    alt,
    type,
    video,
    label,
    mediaList,
    imageType,
    imgPriority,
    sizes
  };

  return <MediaElementStructure {...componentProps} />;
};

export default MediaElement;
