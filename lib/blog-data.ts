export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date string (YYYY-MM-DD) for sorting and display */
  date: string;
  excerpt: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  ogImage?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "beautiful-start",
    title: "A Beautiful Start... ✨",
    date: "2026-02-28",
    excerpt:
      "We welcomed 75+ students on the first day of practice. This season features classical dances and youth performances led by our dedicated instructors, many of whom are former students.\n\nWe meet Friday evenings and are excited for our upcoming performance. Thank you, parents, for your continued support!",
    description:
      "Opening day of practice with 75+ students, classical dances, youth performances, and instructors who are former students.",
    heroImage: "/blog/022826/practice_022826.jpg",
    heroAlt: "Khmer dance practice",
    ogImage: "/blog/022826/practice_022826.jpg",
  },
  {
    slug: "rhythmix-api-festival-2025",
    title: "Rhythmix API Festival 🌸",
    date: "2025-04-26",
    excerpt:
      "On April 26, 2025, we proudly shared Cambodian classical dance at the Rhythmix API Festival in Alameda. The event celebrated Asian and Pacific Islander cultures with music, dance, food, and art.\n\nThank you to Rhythmix Cultural Works and everyone who came to support and celebrate with us!",
    description:
      "Oakland Khmer Angkor Dance Troupe at the 2025 Rhythmix API Festival in Alameda — celebrating API cultures through dance.",
    heroImage: "/blog/051425/Rhythmix-API-2025-3120.jpg",
    heroAlt: "Oakland Khmer Angkor Dance Troupe performing at Rhythmix API Festival",
    ogImage: "/blog/051425/Rhythmix-API-2025-3120.jpg",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostsSorted(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getRecentPosts(count: number): BlogPost[] {
  return getAllPostsSorted().slice(0, count);
}
