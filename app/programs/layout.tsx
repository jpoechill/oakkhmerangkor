import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Programs | Oakland Khmer Angkor Dance Troupe",
  description:
    "Annual performance program (Cambodian New Year in Oakland), year-round community performances, and developing Khmer language and cultural learning for the Bay Area.",
};

export default function ProgramsLayout({ children }: { children: ReactNode }) {
  return children;
}
