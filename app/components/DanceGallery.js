'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function ImageChangeOnHover({
  src,
  hoverSrc,
  alt,
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleMouseEnter = () => {
    setCurrentSrc(hoverSrc);
  };

  const handleMouseLeave = () => {
    setCurrentSrc(src);
  };

  return (
    <Image
      src={currentSrc}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width={300}
      height={200}
    />
  );
}