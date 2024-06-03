import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oakland Khmer Angkor Dance Troupe",
  description: "Discover the Oakland Khmer Angkor Dance Troupe, a vibrant Cambodian youth traditional dance group in Oakland, CA. Celebrating over 25 years of cultural heritage and artistic excellence. Join us in preserving and promoting the beauty of Khmer dance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
