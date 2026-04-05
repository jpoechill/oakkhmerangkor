import type { ComponentType } from "react";
import BeautifulStartPost from "./posts/BeautifulStartPost";
import RhythmixPost from "./posts/RhythmixPost";

const blogPostBodies: Record<string, ComponentType> = {
  "beautiful-start": BeautifulStartPost,
  "rhythmix-api-festival-2025": RhythmixPost,
};

export function getBlogPostBody(slug: string): ComponentType | undefined {
  return blogPostBodies[slug];
}
