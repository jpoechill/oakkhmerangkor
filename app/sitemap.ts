import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

/** Slugs from `app/dances/[slug]/page.tsx` BlogPostRepository (keep in sync). */
const DANCE_SLUGS = [
  "apsara",
  "coconut",
  "love-moon",
  "kane",
  "flower",
  "blessing",
  "stick",
  "choun-por",
  "mon-mekhala",
  "sovann",
  "phloy-suoy",
  "nesat",
] as const;

const STATIC_PATHS = [
  "/",
  "/about",
  "/about/art",
  "/about/history",
  "/about/leadership",
  "/about/mission",
  "/blog",
  "/community",
  "/contact",
  "/dances",
  "/dances/apsaraa",
  "/events",
  "/faqs",
  "/getinvolved",
  "/impact",
  "/profiles",
  "/programs",
  "/support",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastMod,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/dances" || path === "/programs" ? 0.9 : 0.8,
  }));

  const danceEntries: MetadataRoute.Sitemap = DANCE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/dances/${slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const profileSlugs = ["sora"] as const;
  const profileEntries: MetadataRoute.Sitemap = profileSlugs.map((slug) => ({
    url: `${SITE_URL}/profiles/${slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...danceEntries, ...blogEntries, ...profileEntries];
}
