import { LOADING_INDICATOR } from '@/common/constant.ts';
import Image from 'next/image';
import React, { useState } from 'react';

export const ImageWithFallback = (props: any) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt="Fallback image"
      onError={(): void => {
        setImgSrc(fallbackSrc);
      }}
      placeholder="blur"
      blurDataURL={`data:image/png;base64,${LOADING_INDICATOR}`}
      {...rest}
    />
  );
};
