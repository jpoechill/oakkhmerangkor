/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL in production if needed. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oakkhmerangkor.vercel.app"
).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
