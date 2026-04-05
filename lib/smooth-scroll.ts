/** Native smooth scrolling; honors scroll-margin on targets. */

export function prefersReducedScroll(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function scrollBehavior(): ScrollBehavior {
  return prefersReducedScroll() ? "auto" : "smooth";
}

export function smoothScrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
}

export function smoothScrollToTop(): void {
  window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior() });
}
