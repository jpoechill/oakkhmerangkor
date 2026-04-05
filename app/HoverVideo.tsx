'use client'
import { useRef, useState } from "react";
import Image from "next/image"; // Import Next.js Image component

const HoverVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && videoRef.current?.parentElement?.contains(relatedTarget)) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.3; // Set to 30% volume when unmuting
      } else {
        videoRef.current.muted = true;
      }
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleMute} // Click anywhere to toggle mute
    >
      <video
        ref={videoRef}
        src="/video/b-roll.mp4" // Replace with actual path
        className="w-full h-full object-cover scale-[1.01]"
        loop
        muted={isMuted}
        playsInline
      />

      {/* Logo in Bottom-Left */}
      <Image
        src="/logo.svg"
        className="absolute bottom-4 left-4 p-1 pb-0"
        alt="Top Logo"
        width={50}
        height={40}
      />

      {/* Mute/Unmute Button */}
      <button
        className="absolute bottom-3 right-4 p-2 bg-black/50 text-white text-xl rounded-full hover:bg-black/70 transition"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click from bubbling to the parent div
          toggleMute();
        }}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default HoverVideo;
