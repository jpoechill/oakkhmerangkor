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
              <div className="space-y-6 font-light text-md leading-relaxed text-gray-800">
                <p>
                  Each winter and spring, our dancers prepare for our flagship Cambodian New Year celebration in
                  Oakland—an evening of classical and folk Khmer dance, community, and tradition.{" "}
                  <strong className="font-semibold text-[#200073]">
                    Weekly practices run from January through March
                  </strong>
                  , focused on skill-building, discipline, and looking after one another as a group. Participants learn a
                  range of Cambodian folkloric and classical dances, with costumes and accessories provided, in line with
                  how we have operated for decades.
                </p>
                <p>
                  That commitment matters: it carries language, gesture, and story across generations, and it keeps our
                  heritage vivid for dancers ages six to seventy-two and for everyone who comes to watch. The March
                  celebration is both a goal and a homecoming—often drawing well over a thousand guests from across
                  California to share performances, music, and social dancing.
                </p>

                <div className="mx-auto w-full max-w-2xl rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-center font-serif text-lg font-bold text-[#200073] sm:text-xl">
                    Season at a glance
                  </h3>
                  <ol className="mt-5 space-y-4 border-l-2 border-[#e8e4f2] pl-5 sm:pl-6">
                    <li>
                      <span className="font-semibold text-[#200073]">January</span> — Rehearsals begin; foundations,
                      repertoire, and community routines take shape after the new year.
                    </li>
                    <li>
                      <span className="font-semibold text-[#200073]">February</span> — Training and refinement:
                      cleaning movement, deepening cultural context, and supporting newer dancers alongside veterans.
                    </li>
                    <li>
                      <span className="font-semibold text-[#200073]">March</span> — Final preparation, dress rehearsals,
                      and stage rehearsals, leading into the Cambodian New Year performance and celebration.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Community Performances */}
            <section
              id="community-performances"
              aria-labelledby="community-heading"
              className="scroll-mt-28 pt-16"
            >
              <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start gap-0 lg:gap-10">
                <div className="w-full lg:w-1/2 lg:min-w-0">
                  <h2 id="community-heading" className="pb-6 font-serif text-2xl font-bold">
                    Community Performances
                  </h2>
                  <div className="space-y-6 font-light text-md leading-relaxed text-gray-800">
                    <p>
                      After the big spring celebration, our troupe does not go quiet. We continue to show up as a
                      community-facing ensemble through the rest of the year—an intentional part of how we serve Oakland
                      and the wider Bay Area, not an afterthought.
                    </p>
                    <p>
                      We are invited to share Khmer dance at{" "}
                      <strong className="font-semibold text-[#200073]">
                        festivals, school events, weddings, cultural programs, and other gatherings
                      </strong>
                      . Each outing is a chance to introduce our art to new audiences, honor hosts and partners, and keep
                      our dancers stage-ready. If you are planning an event and want Cambodian dance in the room, we would
                      love to hear from you.
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
            </section>

            {/* Khmer Language Classes */}
            <section
              id="khmer-language-classes"
              aria-labelledby="khmer-language-heading"
              className="scroll-mt-28 pt-16 pb-16"
            >
              <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row-reverse items-start gap-0 lg:gap-10">
                <div className="w-full lg:w-2/3 lg:min-w-0">
                  <h2 id="khmer-language-heading" className="pb-6 font-serif text-2xl font-bold">
                    Khmer Language Classes
                  </h2>
                  <div className="space-y-6 font-light text-md leading-relaxed text-gray-800">
                    <p>
                      We are building Khmer language classes for youth, heritage learners, and community members who want
                      to learn and stay connected to their culture. These classes create space to practice, build
                      confidence, and strengthen identity through language.
                    </p>
                    <p>
                      Access to Khmer language education remains limited, especially for youth growing up in the United
                      States. As we grow, we are developing structured curriculum and dedicated teachers to provide
                      consistent, high-quality instruction and expand access for our community.
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
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
