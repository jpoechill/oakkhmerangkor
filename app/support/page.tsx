import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function SupportPage() {
  return (
    <main>
      <Header />

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 pb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex w-full max-w-[1040px] flex-col mt-[130px]">
            <header className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#F28904] mb-2">
                Support Us
              </p>
              <h1 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-wide text-[#1a1a1a] sm:text-4xl">
                Preserving Khmer Culture Through Education
              </h1>
            </header>

            <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-8 lg:gap-10">
              <div className="space-y-5 font-light text-md leading-relaxed text-gray-800 lg:col-span-5">
                <h2 className="font-serif text-2xl font-bold text-[#1a1a1a]">Overview</h2>
                <p>
                  The Oakland Khmer Angkor Dance Troupe preserves Khmer culture through dance education,
                  performance, and community engagement. Our dance program is the foundation of our work,
                  providing consistent training and cultural connection for youth and community members.
                </p>
                <p>
                  We are building toward a more structured and sustainable program, with expanded access,
                  stronger teaching capacity, and the development of Khmer language and cultural education
                  to support long-term impact.
                </p>
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-md lg:col-span-3">
                <Image
                  src="/getintouch_02.png"
                  alt="Oakland Khmer Angkor Dance Troupe dancers and community"
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
            </div>

            <section className="mt-14" aria-labelledby="funding-priorities-heading">
              <h2
                id="funding-priorities-heading"
                className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold text-[#1a1a1a]"
              >
                Funding Priorities
              </h2>
              <div className="grid grid-cols-1 gap-10 font-light text-md leading-relaxed text-gray-800 lg:grid-cols-3 lg:gap-8">
                <div className="min-w-0 rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-balance font-semibold text-lg text-[#200073]">
                    Dance Education (Core Program)
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Weekly instruction and seasonal training programs</li>
                    <li>Instructor compensation and teaching support</li>
                    <li>Costumes, music, and cultural materials</li>
                    <li>Food and support for dancers during practices and events</li>
                  </ul>
                </div>
                <div className="min-w-0 rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-balance font-semibold text-lg text-[#200073]">
                    Program Development (Expansion)
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Development of Khmer language classes and curriculum</li>
                    <li>Structured learning pathways for students</li>
                    <li>Training and support for future instructors</li>
                  </ul>
                </div>
                <div className="min-w-0 rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-balance font-semibold text-lg text-[#200073]">Community Access &amp; Outreach</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Performances across festivals, schools, and community events</li>
                    <li>Workshops and cultural education in community spaces</li>
                    <li>Outreach to underserved youth and families</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-14" aria-labelledby="why-matters-heading">
              <h2
                id="why-matters-heading"
                className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold text-[#1a1a1a]"
              >
                Why This Work Matters
              </h2>
              <div className="space-y-5 font-light text-md leading-relaxed text-gray-800">
                <p>
                  Access to Khmer cultural and language education remains limited, especially for youth growing
                  up in the United States. Without sustained investment, these traditions risk being lost across
                  generations.
                </p>
                <p>
                  Our work preserves cultural knowledge through active practice and teaching, while creating
                  accessible pathways for youth to connect with identity, community, and heritage.
                </p>
              </div>
            </section>

            <section className="mt-14" aria-labelledby="support-possible-heading">
              <h2
                id="support-possible-heading"
                className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold text-[#1a1a1a]"
              >
                What Support Makes Possible
              </h2>
              <p className="font-light text-md leading-relaxed text-gray-800">
                With increased funding, we can expand program consistency, invest in dedicated instructors, and
                serve more youth and families with greater depth and continuity.
              </p>
            </section>

            <section className="mt-14" aria-labelledby="partner-heading">
              <h2
                id="partner-heading"
                className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold text-[#1a1a1a]"
              >
                Partner With Us
              </h2>
              <p className="font-light text-md leading-relaxed text-gray-800">
                We welcome support from foundations, organizations, and individual donors committed to cultural
                preservation, youth development, and arts education.
              </p>
              <div className="mt-8 flex justify-start sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] justify-center rounded-full bg-gradient-to-r from-[#F28904] to-[#FF9F1A] px-8 py-3 text-center text-lg font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
                >
                  Partner with us
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
