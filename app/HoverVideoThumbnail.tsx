'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HoverVideoThumbnailProps {
  title: string;
  subtitle: string;
  link: string;
  videoSrc?: string;
  imageSrc: string;
  fallbackImageSrc?: string;
}

const HoverVideoThumbnail: React.FC<HoverVideoThumbnailProps> = ({
  title,
  subtitle,
  link,
  videoSrc,
  imageSrc,
  fallbackImageSrc,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link href={link}>
      <div
        className="group hover:cursor-pointer relative h-0 w-full pb-[100%] overflow-hidden rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute h-full w-full z-10 tracking-widest bg-black opacity-10 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center"></div>
        <div className="absolute h-full w-full text-center z-10 tracking-widest text-white flex flex-col justify-center items-center">
          {title}
          <div className="text-2xl font-light">{subtitle}</div>
        </div>

        <div className="">

          {/* Show video only if not on mobile */}
          {!isMobile && videoSrc ? (
            <div className="transition-all duration-500 bg-black ease-in-out group-hover:scale-[1.10]">
              <video
                ref={videoRef}
                preload="auto"
                muted
                loop
                className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            // Show fallback image on mobile or when no video is provided
            <div className="transition-all duration-500 ease-in-out group-hover:scale-[1.1]">
              <Image
                src={fallbackImageSrc || imageSrc}
                alt="fallback thumbnail"
                className="transition-all h-full w-full duration-500 ease-in-out"
                width={200}
                height={200}
              />
            </div>
          )}

          {/* Show main thumbnail if not hovered */}
          <Image
            src={imageSrc}
            alt="thumb"
            className="transition-all duration-500 ease-in-out group-hover:hidden"
            fill
          />
        </div>
      </div>
    </Link>
  );
};

export default HoverVideoThumbnail;
