'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Outer wrapper classes (full-bleed overlay over hero) */
  className?: string;
};

/**
 * Hero copy stays hidden until the pointer moves (or taps) over this overlay.
 * It hides again when the pointer leaves the hero. With prefers-reduced-motion,
 * it appears on pointer enter so interaction is not blocked.
 */
export default function HeroTextReveal({ children, className = "" }: Props) {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotionRef.current = mq.matches;
    const onChange = () => {
      prefersReducedMotionRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onPointerEnter = useCallback(() => {
    if (prefersReducedMotionRef.current) setVisible(true);
  }, []);

  const onPointerLeave = useCallback(() => {
    setVisible(false);
  }, []);

  const reveal = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={className}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={reveal}
      onPointerDown={reveal}
    >
      <div
        className="flex min-h-full w-full flex-col items-center justify-center transition-opacity duration-500 ease-out motion-reduce:transition-none"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
        aria-hidden={!visible}
      >
        {children}
      </div>
    </div>
  );
}
