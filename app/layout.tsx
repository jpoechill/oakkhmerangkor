import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SiteJsonLd from "./components/SiteJsonLd";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap", adjustFontFallback: true });

const defaultDescription =
  "Oakland Khmer Angkor Dance Troupe — Cambodian classical and folk dance for youth in Oakland, CA. 25+ years of performances, training, and community programs preserving Khmer culture.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Oakland Khmer Angkor Dance Troupe | Khmer Dance in Oakland, CA",
  description: defaultDescription,
  keywords: [
    "Khmer dance",
    "Cambodian dance",
    "Oakland",
    "Bay Area",
    "classical dance",
    "folk dance",
    "Cambodian New Year",
    "youth dance",
    "cultural heritage",
  ],
  authors: [{ name: "Oakland Khmer Angkor Dance Troupe", url: SITE_URL }],
  creator: "Oakland Khmer Angkor Dance Troupe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Oakland Khmer Angkor Dance Troupe",
    title: "Oakland Khmer Angkor Dance Troupe | Khmer Dance in Oakland, CA",
    description: defaultDescription,
    images: [
      {
        url: absoluteUrl("/metaimg.jpg"),
        width: 1200,
        height: 630,
        alt: "Oakland Khmer Angkor Dance Troupe performers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakland Khmer Angkor Dance Troupe",
    description: defaultDescription,
    images: [absoluteUrl("/metaimg.jpg")],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#site-main" className="skip-to-main">
          Skip to main content
        </a>
        <SiteJsonLd />
        <div id="site-main" tabIndex={-1}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
