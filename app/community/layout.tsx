import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Community | Oakland Khmer Angkor Dance Troupe",
  description:
    "Meet our dancers, see where we perform, and connect with the Oakland Khmer Angkor Dance Troupe community in the Bay Area.",
};

export default function CommunityLayout({ children }: { children: ReactNode }) {
  return children;
}
