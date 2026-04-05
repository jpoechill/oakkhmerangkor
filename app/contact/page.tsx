import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Oakland Khmer Angkor Dance Troupe",
  description:
    "Contact Oakland Khmer Angkor Dance Troupe about youth enrollment, volunteering, and programs—or connect by email and social media. Book performances on our Book a Performance page.",
};

export default function GetInvolvedPage() {
  return <ContactForm />;
}
