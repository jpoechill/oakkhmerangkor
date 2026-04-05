'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Outer wrapper classes (full-bleed overlay over hero) */
  className?: string;
  /** When true, copy is always shown (no fade/hide). Use on /programs, /dances. */
  alwaysVisible?: boolean;
};

/**
 * Hero copy stays hidden until the pointer moves (or taps) over this overlay.
 * On hover-capable devices it hides again when the pointer leaves the hero.
 * On touch-first devices (no hover), it stays visible after the first reveal—there is no hover to keep it open.
 * With prefers-reduced-motion, it appears on pointer enter so interaction is not blocked.
 * Set `alwaysVisible` to skip reveal behavior entirely.
 */
export default function HeroTextReveal({ children, className = "", alwaysVisible = false }: Props) {
  const [visible, setVisible] = useState(alwaysVisible);
  const prefersReducedMotionRef = useRef(false);
  const supportsHoverRef = useRef(false);
  const alwaysVisibleRef = useRef(alwaysVisible);
  alwaysVisibleRef.current = alwaysVisible;

  useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotionRef.current = mqReduce.matches;
    const onReduceChange = () => {
      prefersReducedMotionRef.current = mqReduce.matches;
    };
    mqReduce.addEventListener("change", onReduceChange);

    const mqHover = window.matchMedia("(hover: hover)");
    supportsHoverRef.current = mqHover.matches;
    const onHoverChange = () => {
      supportsHoverRef.current = mqHover.matches;
    };
    mqHover.addEventListener("change", onHoverChange);

    return () => {
      mqReduce.removeEventListener("change", onReduceChange);
      mqHover.removeEventListener("change", onHoverChange);
    };
  }, [alwaysVisible]);

  const onPointerEnter = useCallback(() => {
    if (alwaysVisibleRef.current) return;
    if (prefersReducedMotionRef.current) setVisible(true);
  }, []);

  const onPointerLeave = useCallback(() => {
    if (alwaysVisibleRef.current) return;
    if (supportsHoverRef.current) setVisible(false);
  }, []);

  const reveal = useCallback(() => {
    if (alwaysVisibleRef.current) return;
    setVisible(true);
  }, []);

  const effectiveVisible = alwaysVisible || visible;

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
          opacity: effectiveVisible ? 1 : 0,
          pointerEvents: effectiveVisible ? "auto" : "none",
        }}
        aria-hidden={!effectiveVisible}
      >
        {children}
      </div>
    </div>
  );
}
