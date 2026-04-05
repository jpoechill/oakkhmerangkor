import { SITE_URL, absoluteUrl } from "@/lib/site";

const performingGroup = {
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  name: "Oakland Khmer Angkor Dance Troupe",
  url: SITE_URL,
  description:
    "Youth Cambodian classical and folk dance in Oakland, California — training, performances, and community events preserving Khmer heritage.",
  image: absoluteUrl("/metaimg.jpg"),
  areaServed: {
    "@type": "AdministrativeArea",
    name: "San Francisco Bay Area",
    containedInPlace: {
      "@type": "State",
      name: "California",
    },
  },
} as const;

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oakland Khmer Angkor Dance Troupe",
  url: SITE_URL,
  description: performingGroup.description,
  publisher: { "@type": "PerformingGroup", name: performingGroup.name, url: SITE_URL },
} as const;

export default function SiteJsonLd() {
  const json = JSON.stringify([performingGroup, website]);
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
