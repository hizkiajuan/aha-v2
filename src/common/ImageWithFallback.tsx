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
      {...rest}
    />
  );
};
