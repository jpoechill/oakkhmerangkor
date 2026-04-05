import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Programs | Oakland Khmer Angkor Dance Troupe",
  description:
    "Our annual training and performance cycle, community appearances throughout the year, and how we are growing programs for Khmer dance in the Bay Area.",
};

export default function ProgramsLayout({ children }: { children: ReactNode }) {
  return children;
}
