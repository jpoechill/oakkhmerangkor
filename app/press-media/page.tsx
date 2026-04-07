import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

type PressCard = {
  outlet: string;
  title: string;
  summary: string;
  href: string;
  dateLabel: string;
  imageSrc: string;
  imageAlt: string;
};

const PRESS_CARDS: PressCard[] = [
  {
    outlet: "The Oaklandside",
    title: "Cambodian Community Bursts with Color, Dance and Khmer Tradition in Oakland",
    summary:
      "Around 1,500 people gathered in Oakland to celebrate Khmer New Year with traditional dance, food, and community activities. The festival honors Cambodian history while helping younger generations connect with their culture and continue its traditions.",
    href: "https://oaklandside.org/",
    dateLabel: "April 6, 2026",
    imageSrc: "/press/oaklandside-cover.png",
    imageAlt: "Khmer New Year community performance in Oakland",
  },
  {
    outlet: "The Mercury News",
    title: "Cambodian, Khmer communities celebrate solar New Year in Stockton with reflection and pride",
    summary:
      "Thousands of Cambodian and Khmer people gathered in Stockton to celebrate Khmer New Year through traditional dance, food, and rituals, while also honoring 50 years since the Khmer Rouge genocide.",
    href: "https://www.mercurynews.com/2025/04/14/cambodian-khmer-solar-new-year/",
    dateLabel: "April 14, 2025",
    imageSrc: "/press/mercury-cover.png",
    imageAlt: "Festival photo placeholder for press coverage",
  },
  {
    outlet: "Alameda Post",
    title: "The Asian & Pacific Islander Arts & Culture Festival Returns April 26",
    summary:
      "We performed at Rhythmix’s annual Asian & Pacific Islander Arts & Culture Festival in Alameda alongside cultural groups from across the Bay Area. The event brought the community together through dance, music, food, and art.",
    href: "https://alamedapost.com/features/arts/the-asian-pacific-islander-arts-culture-festival-returns-april-26/",
    dateLabel: "April 7, 2025",
    imageSrc: "/press/alameda-cover.png",
    imageAlt: "Youth dancers in traditional Khmer costumes",
  },
  {
    outlet: "The Record",
    title: "“Like we’re back at home in Cambodia”: New Year draws thousands to temple",
    summary:
      "Thousands gathered at Wat Dhammararam Buddhist Temple in Stockton to celebrate Cambodian New Year with traditional performances, prayers, and community rituals. The event brought together families and cultural groups, creating a strong sense of connection, heritage, and home for Cambodian Americans.",
    href: "https://www.recordnet.com/picture-gallery/news/local/2018/04/15/x2018-like-we-x2019-re-back-at-home/711734007/",
    dateLabel: "April 14, 2018",
    imageSrc: "/press/recordnet-cover.png",
    imageAlt: "Khmer Angkor Dance Troupe performance at Wat Dhammararam Buddhist Temple",
  },
];

export const metadata: Metadata = {
  title: "Press and Media | Oakland Khmer Angkor Dance Troupe",
  description:
    "Dedicated press and media page for Oakland Khmer Angkor Dance Troupe, with placeholder coverage cards linked to major news outlets.",
};

export default function PressMediaPage() {
  return (
    <main>
      <Header />
      <div className="bg-white">
        <div className="flex w-full justify-center bg-white p-5 px-5 pb-16 pt-0 animate-[fade-me-in_.5s_ease-in-out] lg:px-10">
          <div className="mt-[130px] flex w-full max-w-[1040px] flex-col">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#F28904]">Press and Media</p>
              <h1 className="mt-2 text-3xl font-bold tracking-wide text-[#200073]">News Coverage and Mentions</h1>
            </div>

            <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2" aria-label="Press coverage cards">
              {PRESS_CARDS.map((card) => (
                <article
                  key={`${card.outlet}-${card.title}`}
                  className="overflow-hidden rounded-2xl border border-[#e8e4f2] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] w-full bg-[#f6f4fb]">
                    <Image src={card.imageSrc} alt={card.imageAlt} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F28904]">{card.outlet}</p>
                    <h2 className="mt-2 font-serif text-xl font-bold leading-snug text-[#200073]">{card.title}</h2>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500">{card.dateLabel}</p>
                    <Link
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-[#F28904] transition-colors hover:text-[#5E489A]"
                    >
                      Visit outlet
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
