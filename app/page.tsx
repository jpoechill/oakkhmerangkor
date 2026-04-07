import type { Metadata } from "next";
import Image from "next/image";
import Header from "./Header"
import Footer from "./Footer"
import Link from "next/link"
import ScrollReveal from "./components/ScrollReveal";
import RepertoireDanceGrid from "./components/RepertoireDanceGrid";
import BlogPostPreview from "./components/BlogPostPreview";
import HeroVideoBackground from "./components/HeroVideoBackground";
import HeroTextReveal from "./components/HeroTextReveal";
import { getRecentPosts } from "@/lib/blog-data";
import { CLASSICAL_DANCES, FOLK_DANCES } from "@/lib/dances-repertoire";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  openGraph: { url: SITE_URL, type: "website" },
};

export default function Home() {
  return (
    <main>
      <Header></Header>

      {/* Hero video + text panel */}
      <section
        id="home-hero"
        aria-label="Homepage hero"
        className="relative isolate box-border h-[90vh] min-h-[29rem] w-full max-w-none overflow-hidden bg-[#0c0b1a]"
      >
        <HeroVideoBackground src="/hero/stage_2026_3.mp4" />
        <HeroTextReveal className="absolute inset-0 z-[1] px-4 pb-12 pt-24 sm:px-6 lg:pb-16 lg:pt-28">
          <div className="relative z-[1] mx-auto inline-flex w-fit max-w-[min(100%,36rem)] flex-col items-center text-center rounded-lg bg-black/40 px-5 py-5 sm:max-w-[min(100%,44rem)] sm:px-7 sm:py-6 lg:max-w-[min(100%,48rem)]">
            <p className="text-sm font-bold uppercase tracking-widest text-[#F28904]">
              Oakland Khmer Angkor Dance Troupe
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-wide text-white sm:text-4xl lg:text-5xl">
              Preserving Cambodian Culture Through Dance
            </h1>
            <p className="mt-5 text-base font-medium tracking-wide text-white/90 sm:text-lg">
              Youth. Community. Tradition.
            </p>
            <p className="mt-6 max-w-xl text-pretty text-base font-light leading-relaxed text-white/80 sm:text-lg">
              A home for the next generation to learn, perform, and carry forward the beauty of Khmer dance.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/support">
                <div className="min-w-[160px] text-center bg-gradient-to-r from-[#5E489A] to-[#7B5FB8] hover:from-[#7B5FB8] hover:to-[#9E91C2]
                  text-white font-medium px-6 py-3 rounded-full transition-all duration-300
                  hover:shadow-lg hover:scale-105 transform">
                  Get Involved
                </div>
              </Link>
              <Link href="/getinvolved">
                <div className="min-w-[160px] text-center bg-gradient-to-r from-[#F28904] to-[#FF9F1A] hover:from-[#FF9F1A] hover:to-[#FFC67F]
                  text-white font-medium px-6 py-3 rounded-full transition-all duration-300
                  hover:shadow-lg hover:scale-105 transform">
                  Book a Performance
                </div>
              </Link>
            </div>
          </div>
        </HeroTextReveal>
      </section>

      <div className="bg-white">
        <div className="animate-[fade-me-in_.5s_ease-in-out] bg-white pt-6 lg:pt-10">
          {/* <div className="flex justify-center w-full pt- pt-0 px-10">
            <div className="flex flex-col w-full max-w-[1040px] overflow-hidden mt-[130px]">
              <div className="text-sm uppercase w-full text-center font-bold mb-4 text-[#333333] tracking-wider">
                Oakland Khmer Angkor Dance Troupe

              </div>
              <hr />
              <Image src="/cover_01.png" alt="Group Photo" className="rounded-xl h-[300px] shadow-xl lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
            </div>
          </div> */}

          <ScrollReveal className="mb-5 flex w-full justify-center px-10 pb-5 sm:pt-16 lg:pt-6">
            <div className="flex w-full max-w-[1040px] flex-col">
              <h2 className="text-md text-center font-bold">Recent Events</h2>
              <hr className="mb-8 mt-2" />
              <article className="group/card grid w-full grid-cols-1 overflow-hidden rounded-2xl shadow-xl lg:grid-cols-8">
                <div className="relative col-span-5 h-full min-h-[250px] w-full overflow-hidden">
                  <a
                    href="https://templehill.org/event/30th-annual-cambodian-new-year-celebration-at-temple-hill/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-full min-h-[250px] w-full rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28904] focus-visible:ring-offset-2 lg:rounded-l-2xl lg:rounded-r-none"
                  >
                    <Image
                      src="/events/okadt_social_rect_01_021826.jpg"
                      alt="Oakland Khmer Angkor Dance Troupe performers at Cambodian New Year"
                      className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.02]"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 62.5vw"
                    />
                  </a>
                </div>
                <div className="col-span-3 flex flex-col p-5 font-light text-md">
                  <h3 className="text-lg font-bold">2026 Cambodian New Year Celebration</h3>
                  <div className="mt-4 flex-1 text-[#333]">
                    <p>
                      Join us on a journey of discovery and celebration as we continue to illuminate stages with the
                      beauty of Cambodian Khmer dance.
                    </p>
                    <p className="mt-4">4770 Lincoln Ave, Oakland, CA 94602</p>
                    <p className="mt-4">March 21, 2026 · 3pm–9pm</p>
                  </div>
                  <p className="mt-4">
                    <Link
                      href="https://templehill.org/event/30th-annual-cambodian-new-year-celebration-at-temple-hill/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#F28904] transition-colors hover:text-[#5E489A]"
                    >
                      Reserve your free ticket
                    </Link>
                    <span className="text-sm text-[#333]"> (opens external site)</span>
                  </p>
                </div>
              </article>
            </div>
          </ScrollReveal>

          {getRecentPosts(2).map((post) => (
            <BlogPostPreview key={post.slug} post={post} showSectionHeading={false} stackBelow />
          ))}

          <ScrollReveal className="mt-12 flex w-full justify-center bg-[#f6f6f6] px-10 py-20 text-center sm:mt-16 sm:py-24 lg:mt-24 lg:py-32">
            <div className="flex w-full max-w-[1040px] flex-col text-[#200073]">
              <div className="font-medium text-3xl italic font-serif">
                “Dance is the hidden language of the soul, of the body.”
              </div>
              <div className="font-light mt-5 text-3xl">
                របាំគឺជាភាសាលាក់កំបាំងនៃព្រលឹង រូបកាយ។
              </div>
              <br />
              – Khmer Proverb
            </div>
          </ScrollReveal>

          <ScrollReveal className="mb-10 flex w-full justify-center px-10 pb-10 pt-12 sm:pt-16 lg:pt-20">
            <div className="flex w-full max-w-[1040px] flex-col">
              {/* <h2 className="text-center text-md font-bold">Our Performances</h2> */}
              {/* <hr className="mt-4" /> */}
              <div className="mt-0 w-full space-y-10">
                <div>
                  <h3 className="border-b-2 border-[#F28904] pb-2 text-left font-serif text-xl font-bold text-[#1a1a1a]">
                    Classical Dance
                  </h3>
                  <RepertoireDanceGrid dances={CLASSICAL_DANCES} className="mt-4" ariaLabel="Classical dances" />
                </div>
                <div>
                  <h3 className="border-b-2 border-[#F28904] pb-2 text-left font-serif text-xl font-bold text-[#1a1a1a]">
                    Folk Dance
                  </h3>
                  <RepertoireDanceGrid dances={FOLK_DANCES} className="mt-4" ariaLabel="Folk dances" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-10 flex w-full justify-center bg-[#f6f6f6] px-10 py-12 pb-16 sm:py-14 sm:pb-20">
            <div className="flex flex-col w-full max-w-[1040px]">
              {/* <div className="text-sm uppercase w-full text-center font-bold mb-8 text-[#F28904] tracking-wider">
                Our Sponsors
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 justify-end items-end gap-10">
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
              </div>

              <br /><br /><br />
              <br /> */}


              <div className="text-sm uppercase w-full text-center font-bold mt-[0px] mb-8 text-[#F28904] tracking-wider">
                Our Partners
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px]">
                <Link href="https://www.instagram.com/khmeryouthofmodesto/" target="_blank">
                  <div className="bg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    KYOM
                  </div>
                </Link>
                <Link href="https://www.facebook.com/morodokkhmerperformingarts/" target="_blank">
                  <div className="xbg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    <div className="xgroup xhover:cursor-pointer border-2 relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                      <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                      </div>
                      <div className="">
                        <Image src="/mkpa_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill loading="lazy"></Image>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/ukcpdancetroupe/" target="_blank">
                  <div className="xbg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    <div className="xgroup xhover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                      <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                      </div>
                      <div className="">
                        <Image src="/ukpc_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill loading="lazy"></Image>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.facebook.com/cambodianculturaldancetroupe/" target="_blank">
                  <div className="bg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    <div className="xgroup xhover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                      <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                        SJCCD
                      </div>
                      <div className="">
                        {/* <Image src="/lds_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px] pt-8 md:hidden">
                <div className="xbg-slate-200 flex md:hidden items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  <div className="xgroup xhover:cursor-pointer border-2 relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                    <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                    </div>
                    <div className="">
                      <Image src="/mkpa_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill loading="lazy"></Image>
                    </div>
                  </div>
                </div>
                <div className="xbg-slate-200 md:hidden items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  <div className="xgroup xhover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                    <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                    </div>
                    <div className="">
                      <Image src="/ukpc_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill loading="lazy"></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px] pt-8 md:hidden">
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  KYOM
                </div>
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  SJCCD
                </div>
              </div>

              <div className="mt-14 text-sm uppercase w-full text-center font-bold text-[#F28904] tracking-wider sm:mt-16">
                Our Sponsors
              </div>
              <div className="mt-8 flex flex-row flex-wrap justify-center items-center gap-8 lg:gap-[90px]">
                <div className="">
                  {/* <Link href="https://chucks-donuts.com/" target="_blank"> */}
                  <Image src="/sponsors/monynop.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={190} height={300} loading="lazy"></Image>
                  {/* </Link> */}
                </div>
                <div className="">
                  <Link href="https://chucks-donuts.com/" target="_blank">
                    <Image src="/sponsors/chucks.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={140} height={300} loading="lazy"></Image>
                  </Link>
                </div>
                <div className="">
                  <Link href="https://stocksandblondessalon.com/" target="_blank">
                    <Image src="/sponsors/stocksnblondes.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={190} height={300} loading="lazy"></Image>
                  </Link>
                </div>
                <div className="">
                  <Link href="https://www.akhmerbuddhistfoundation.org/" target="_blank">
                    <Image src="/sponsors/khmerbuddhist_logo.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={190} height={300} loading="lazy"></Image>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer></Footer>
    </main >
  );
}
