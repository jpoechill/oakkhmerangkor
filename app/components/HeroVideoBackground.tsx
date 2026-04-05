'use client';

import { useEffect, useRef, useState } from "react";

const HERO_VIDEOS = [
  "/hero/stage_2026.mp4",
  "/hero/stage_2026_2.mp4",
  "/hero/stage_2026_3.mp4",
] as const;

const envHeroSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || "";

function pickRandomHeroVideo(): string {
  return HERO_VIDEOS[Math.floor(Math.random() * HERO_VIDEOS.length)];
}

/**
 * Full-bleed hero video (muted + loop for autoplay). Paused when prefers-reduced-motion.
 * Picks randomly between two stage clips on each visit unless NEXT_PUBLIC_HERO_VIDEO_URL is set.
 */
export default function HeroVideoBackground() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState(() => envHeroSrc || HERO_VIDEOS[0]);

  useEffect(() => {
    if (envHeroSrc) return;
    setSrc(pickRandomHeroVideo());
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.pause();
    el.removeAttribute("autoplay");
    el.currentTime = 0;
  }, [src]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 box-border overflow-hidden">
      <video
        key={src}
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Oakland Khmer Angkor Dance Troupe on stage"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
