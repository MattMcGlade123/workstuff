import React, { FC, useEffect, useState } from 'react';
import { ImageProps } from 'next/image';
import { useTheme } from 'styled-components';

import NextImageStructure from './NextImageStructure';


const NextImage = ({
  mediaList: { mobile, tablet, desktop },
  alt = '',
  imageType = 'responsive' as ImageProps['layout'],
  priority,
  sizes,
  lazyBoundary,
  tabIndex,
  className,
  dataHookId,
}) => {

  const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? true
    : false;

  const [image, setImage] = useState(
    (isMobile && mobile) || desktop,
  );

  useEffect(() => {
    if (isMobile) {
      setImage(mobile);
    } else {
      setImage(desktop);
    }
  }, [isMobile, mobile, tablet, desktop]);

  const defaultSizes = (imageType === 'fill' || imageType === 'responsive') ?
    "(max-width: 1024px) 100vw, 50vw" : undefined;

  const props = {
    ...image,
    alt,
    imageType,
    priority,
    quality: 75,
    sizes: sizes || defaultSizes,
    lazyBoundary,
    tabIndex,
    className,
    dataHookId,
  };

  return <NextImageStructure {...props} />;
};
export default NextImage;
