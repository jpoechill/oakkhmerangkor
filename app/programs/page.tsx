"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import HeroVideoBackground from "../components/HeroVideoBackground";
import HeroTextReveal from "../components/HeroTextReveal";
import {
  prefersReducedScroll,
  smoothScrollToId,
  smoothScrollToTop,
} from "@/lib/smooth-scroll";
import {
  ProgramOutcomesPanel,
  ProgramOutcomesThreeColumn,
} from "../components/ProgramOutcomesPanel";

export default function ProgramsPage() {
  useEffect(() => {
    const run = () => {
      const id = window.location.hash.replace(/^#/, "");
      requestAnimationFrame(() => {
        if (id) {
          smoothScrollToId(id);
        } else if (prefersReducedScroll()) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        } else {
          smoothScrollToTop();
        }
      });
    };

    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, []);

  return (
    <main>
      <Header />

      <section
        id="programs-intro"
        aria-label="Programs hero"
        className="relative isolate box-border h-[90vh] min-h-[29rem] w-full max-w-none scroll-mt-28 overflow-hidden bg-[#0c0b1a]"
      >
        <HeroVideoBackground src="/hero/stage_2026.mp4" />
        <HeroTextReveal
          alwaysVisible
          className="absolute inset-0 z-[1] px-4 pb-12 pt-24 sm:px-6 lg:pb-16 lg:pt-28"
        >
          <div className="relative z-[1] mx-auto inline-flex w-fit max-w-[min(100%,36rem)] flex-col items-center rounded-lg bg-black/40 px-5 py-5 text-center sm:max-w-[min(100%,44rem)] sm:px-7 sm:py-6 lg:max-w-[min(100%,48rem)]">
            <p className="text-sm font-bold uppercase tracking-widest text-[#F28904]">Programs</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-wide text-white sm:text-4xl lg:text-5xl">
              Train, Perform, Grow
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
              Our programs teach Khmer dance through regular practice, performance, and community events. Dancers
              build skills, confidence, and a strong connection to culture.
            </p>
          </div>
        </HeroTextReveal>
      </section>

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 px-5 pb-16 pt-6 animate-[fade-me-in_.5s_ease-in-out] lg:px-10 lg:pt-8">
          <div className="flex w-full max-w-[1040px] flex-col">
            {/* Annual Performance Program */}
            <section
              id="annual-performance-program"
              aria-labelledby="annual-heading"
              className="scroll-mt-28"
            >
              <h2 id="annual-heading" className="pb-6 font-serif text-2xl font-bold">
                Annual Performance Program
              </h2>
              <div className="space-y-6 font-light mb-4 text-md leading-relaxed text-gray-800">
                <p>
                  Each winter and spring, our organization delivers a structured cultural arts training program culminating
                  in a public Cambodian New Year performance in Oakland.{" "}
                  <strong className="font-semibold text-[#200073]">
                    From January through March, youth and adult participants (starting ages 6+) engage in weekly rehearsals
                    focused on Khmer classical and folk dance, cultural education, and community-building.
                  </strong>
                </p>
                <p>
                  Participants receive hands-on training in traditional movement, storytelling, and performance
                  technique, while also developing discipline, confidence, and teamwork. Costumes and materials are provided
                  to ensure accessibility for all participants, including those from low-income and immigrant backgrounds.
                </p>
                <p>
                  The program culminates in a large-scale public performance that regularly reaches over 1,000 audience
                  members from across California. This event serves as both a cultural celebration and a platform for
                  intergenerational connection, preserving Cambodian heritage while making it accessible to broader
                  audiences.
                  <br /><br />
                </p>
                <div>
                  <ProgramOutcomesPanel
                    eyebrow="Annual program"
                    title="Season at a glance"
                    titleId="annual-season-heading"
                  >
                    <div className="space-y-4 bg-[#faf9fc] px-4 py-5 sm:space-y-5 sm:px-5 sm:py-6">
                      <p className="text-pretty font-light text-sm leading-relaxed text-gray-800 sm:text-base">
                        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#F28904]">
                          January
                        </span>
                        <span className="text-[#200073]/35"> — </span>
                        Rehearsals begin; foundations, repertoire, and community routines take shape after the new year.
                      </p>
                      <p className="text-pretty font-light text-sm leading-relaxed text-gray-800 sm:text-base">
                        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#F28904]">
                          February
                        </span>
                        <span className="text-[#200073]/35"> — </span>
                        Training and refinement: cleaning movement, deepening cultural context, and supporting newer dancers
                        alongside veterans.
                      </p>
                      <p className="text-pretty font-light text-sm leading-relaxed text-gray-800 sm:text-base">
                        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#F28904]">
                          March
                        </span>
                        <span className="text-[#200073]/35"> — </span>
                        Final preparation, dress rehearsals, and stage rehearsals, leading into the Cambodian New Year
                        performance and celebration.
                      </p>
                    </div>
                  </ProgramOutcomesPanel>
                </div>
              </div>
            </section>

            {/* Community Performance Program */}
            <section
              id="community-performances"
              aria-labelledby="community-heading"
              className="scroll-mt-28 pt-16"
            >
              <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start gap-0 lg:gap-10">
                <div className="w-full lg:w-1/2 lg:min-w-0">
                  <h2 id="community-heading" className="pb-6 font-serif text-2xl font-bold">
                    Community Performance Program
                  </h2>
                  <div className="space-y-6 font-light text-md leading-relaxed text-gray-800">
                    <p>
                      Following the annual spring production, our troupe continues to provide cultural programming
                      throughout the year across Oakland and the greater Bay Area.
                    </p>
                    <p>
                      We partner with schools, community organizations, and event hosts to present Khmer dance at
                      festivals, assemblies, weddings, and cultural events.{" "}
                      <strong className="font-semibold text-[#200073]">
                        These performances expand access to Southeast Asian arts, particularly in communities where
                        cultural representation is limited.
                      </strong>
                    </p>
                    <p>
                      For participants, this program provides ongoing performance opportunities that strengthen skills,
                      build confidence, and encourage continued engagement in the arts. For audiences, it offers meaningful
                      exposure to Cambodian culture, history, and storytelling.
                    </p>
                  </div>
                </div>
                <div className="mt-6 w-full shrink-0 lg:mt-0 lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md ring-1 ring-inset ring-slate-300/60">
                    <Image
                      src="/programs/community-performances.png"
                      alt="Traditional Cambodian dancers in silk costumes and gold jewelry performing outdoors for a community audience"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="w-full min-w-0 md:w-3/4">
                  <ProgramOutcomesPanel
                    eyebrow="Community program"
                    title="Program Outcomes"
                    titleId="community-outcomes-heading"
                  >
                    <ProgramOutcomesThreeColumn
                      items={[
                        "Year-round performances across diverse community settings",
                        "Increased cultural visibility and representation",
                        "Continued artistic development for youth performers",
                      ]}
                    />
                  </ProgramOutcomesPanel>
                </div>
              </div>
            </section>

            {/* Khmer Language Classes */}
            <section
              id="khmer-language-classes"
              aria-labelledby="khmer-language-heading"
              className="scroll-mt-28 pt-16 pb-4"
            >
              <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row-reverse items-start gap-0 lg:gap-10">
                <div className="w-full lg:w-2/3 lg:min-w-0">
                  <h2
                    id="khmer-language-heading"
                    className="pb-6 font-serif text-2xl font-bold text-balance"
                  >
                    Khmer Language Classes
                  </h2>
                  <div className="space-y-6 font-light text-md leading-relaxed text-gray-800">
                    <p>
                      We are developing a Khmer language and cultural education program to address the limited access to
                      heritage language learning for Cambodian youth and community members in the United States.
                    </p>
                    <p>
                      This program will provide structured instruction in Khmer language, integrated with cultural learning
                      through dance, storytelling, and community engagement. It is designed to support heritage learners in
                      building language skills, cultural identity, and intergenerational connection.
                    </p>
                    <p>
                      As the program grows, we aim to expand curriculum development, train instructors, and increase access
                      for underserved populations in our community.
                    </p>
                  </div>
                </div>
                <div className="mt-6 w-full shrink-0 lg:mt-0 lg:w-1/3">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md ring-1 ring-inset ring-slate-300/60">
                    <Image
                      src="/programs/khmer-language-classes.png"
                      alt="Traditional woven hat with a Cambodia flag patch, beside wooden and bamboo cultural items"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="w-full min-w-0 md:w-3/4">
                  <ProgramOutcomesPanel
                    eyebrow="Developing program"
                    title="Projected Outcomes"
                    titleId="khmer-outcomes-heading"
                    variant="projected"
                  >
                    <ProgramOutcomesThreeColumn
                      mode="projected"
                      items={[
                        "Increased access to Khmer language education",
                        "Strengthened cultural identity among youth participants",
                        "Expanded opportunities for intergenerational learning",
                      ]}
                    />
                  </ProgramOutcomesPanel>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
