'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HoverVideoThumbnailProps {
  title: string;
  subtitle: string;
  link: string;
  videoSrc?: string;  // Make videoSrc optional
  imageSrc: string;   // Thumbnail image
  fallbackImageSrc?: string; // Optional fallback thumbnail if no video
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

  // Start video from the beginning on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Play the video
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when hover ends
    }
  };

  return (
    <Link href={link}>
      <div
        className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-[.1] group-hover:opacity-[0] transition-all duration-500 flex text-xl justify-center items-center"></div>
        <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
          {title}
          <div className="text-2xl font-light">{subtitle}</div>
        </div>

        <div className="">

          {/* If videoSrc exists, show the video */}
          {videoSrc ? (
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
            // Show the fallback thumbnail if there is no video source
            <div className="transition-all duration-500 ease-in-out group-hover:scale-[1.1]">
              <Image
                src={fallbackImageSrc || imageSrc} // Use fallback image if provided, otherwise use the main image
                alt="fallback thumbnail"
                className="transition-all h-full w-full duration-500 ease-in-out"
                width={200}
                height={200}
              />
            </div>
          )}

          {/* Show the main thumbnail when not hovered or no video */}
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
