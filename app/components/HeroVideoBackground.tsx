'use client';

import { useEffect, useRef } from "react";

const HERO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || "/hero/stage_2026.mp4";

/**
 * Full-bleed hero video (muted + loop for autoplay). Paused when prefers-reduced-motion.
 */
export default function HeroVideoBackground() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.pause();
    el.removeAttribute("autoplay");
    el.currentTime = 0;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 box-border overflow-hidden">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Oakland Khmer Angkor Dance Troupe on stage"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
