// @ts-nocheck
import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { StyledNextImageWrapper } from './NextImageStyles';

interface NextImageStrcutureProps {
  src: string;
  alt?: string | null;
  width?: number | string | null;
  height?: number | string | null;
  imageType: ImageProps['layout'];
  quality: number;
  priority?: boolean;
  sizes?: string;
  lazyBoundary?: string;
  tabIndex?: number;
  className?: string;
  dataHookId?: string;
}

const NextImageStructure: FC<NextImageStrcutureProps> = ({
  src,
  alt,
  width,
  height,
  imageType,
  quality,
  priority,
  sizes,
  lazyBoundary,
  tabIndex,
  className,
  dataHookId,
}) => (
  <StyledNextImageWrapper>
    <Image
      data-hookid={dataHookId}
      src={src}
      alt={alt || ''}
      width={width || undefined}
      height={height || undefined}
      layout={imageType}
      quality={quality}
      priority={priority}
      sizes={sizes}
      lazyBoundary={lazyBoundary}
      tabIndex={tabIndex}
      className={className}
    />
  </StyledNextImageWrapper>
);

export default NextImageStructure;
