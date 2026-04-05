import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Performance | Oakland Khmer Angkor Dance Troupe",
  description:
    "Invite the Oakland Khmer Angkor Dance Troupe to your event. Share your date, venue, and audience—we will follow up about repertoire, availability, and next steps.",
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
