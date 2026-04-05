import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import HeroVideoBackground from "../components/HeroVideoBackground";
import HeroTextReveal from "../components/HeroTextReveal";
import RepertoireDanceGrid from "../components/RepertoireDanceGrid";
import {
  CLASSICAL_DANCES,
  FOLK_DANCES,
  type RepertoireDance,
} from "@/lib/dances-repertoire";

export const metadata: Metadata = {
  title: "Performances | Oakland Khmer Angkor Dance Troupe",
  description:
    "Classical and folk Khmer dances we perform in the Bay Area — Apsara, Blessing, Coconut, Kane, Sovann Macha, and more. Explore Oakland Khmer Angkor Dance Troupe repertoire.",
};

function RepertoireSection({
  id,
  title,
  intro,
  dances,
}: {
  id: string;
  title: string;
  intro: string;
  dances: RepertoireDance[];
}) {
  return (
    <section id={id} className="scroll-mt-28" aria-labelledby={`${id}-heading`}>
      <h2
        id={`${id}-heading`}
        className="border-b-2 border-[#F28904] pb-3 font-serif text-2xl font-bold text-[#1a1a1a]"
      >
        {title}
      </h2>
      <p className="mt-4 font-light text-md leading-relaxed text-gray-700">{intro}</p>
      <RepertoireDanceGrid dances={dances} className="mt-6 sm:mt-8" ariaLabel={title} />
    </section>
  );
}

export default function DancesPage() {
  return (
    <main>
      <Header />

      <section
        id="dances-hero"
        aria-label="Performances hero"
        className="relative isolate box-border h-[90vh] min-h-[29rem] w-full max-w-none overflow-hidden bg-[#0c0b1a]"
      >
        <HeroVideoBackground src="/hero/stage_2026_2.mp4" />
        <HeroTextReveal
          alwaysVisible
          className="absolute inset-0 z-[1] px-4 pb-12 pt-24 sm:px-6 lg:pb-16 lg:pt-28"
        >
          <div className="relative z-[1] mx-auto inline-flex w-fit max-w-[min(100%,36rem)] flex-col items-center rounded-lg bg-black/40 px-5 py-5 text-center sm:max-w-[min(100%,44rem)] sm:px-7 sm:py-6 lg:max-w-[min(100%,48rem)]">
            <p className="text-sm font-bold uppercase tracking-widest text-[#F28904]">Performances</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-wide text-white sm:text-4xl lg:text-5xl">
              Dance Forms We Celebrate
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
              We perform both classical and folk Khmer dances, each with its own story and meaning. Our performances
              help share and preserve Cambodian culture with the community.
            </p>
          </div>
        </HeroTextReveal>
      </section>

      <div className="bg-white">
        <div className="flex w-full justify-center bg-white p-5 px-5 pb-16 pt-12 animate-[fade-me-in_.5s_ease-in-out] lg:px-10 lg:pt-16">
          <div className="flex w-full max-w-[1040px] flex-col gap-14 lg:gap-16">
            <RepertoireSection
              id="classical-dance"
              title="Classical Dance"
              intro="Refined court and ceremonial forms that carry sacred gesture, story, and the elegance of Khmer classical technique."
              dances={CLASSICAL_DANCES}
            />

            <RepertoireSection
              id="folk-dance"
              title="Folk Dance"
              intro="Lively community dances rooted in village rhythm, play, and celebration."
              dances={FOLK_DANCES}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
