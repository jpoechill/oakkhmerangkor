import type { Metadata } from "next";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved | Oakland Khmer Angkor Dance Troupe",
  description:
    "Get involved with Oakland Khmer Angkor Dance Troupe as a family, donor, or grant partner. Preserve culture, support youth, and build community through Khmer dance education.",
};

export default function SupportPage() {
  return (
    <main>
      <Header />

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 pb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex w-full max-w-[1040px] flex-col mt-[130px]">
            <header className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#F28904] mb-2">
                Get Involved
              </p>
              <h1 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-wide text-[#1a1a1a] sm:text-4xl">
                Preserving Khmer Culture Through Education
              </h1>
            </header>

            <div className="mt-12 space-y-5 font-light text-md leading-relaxed text-gray-800">
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a]">Overview</h2>
              <p>
                The Oakland Khmer Angkor Dance Troupe preserves Khmer culture through dance education, performance, and
                community engagement. Our dance program is the foundation of our work, providing consistent training and
                cultural connection for youth and community members.
              </p>
              <p>
                We welcome youth, students, and families who are interested in learning and connecting with Khmer
                culture through dance. Whether you are a beginner or have prior experience, our program offers a
                supportive space to build skills, confidence, and a sense of community while honoring tradition.
              </p>
            </div>

            <section className="mt-14" aria-labelledby="families-heading">
              <h2
                id="families-heading"
                className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold text-[#1a1a1a]"
              >
                For Families &amp; Students
              </h2>
              <div className="grid grid-cols-1 gap-10 font-light text-md leading-relaxed text-gray-800 lg:grid-cols-8 lg:gap-8">
                <div className="min-w-0 lg:col-span-5">
                  <p>
                    Our dance program is the heart of what we do. Students learn traditional Khmer dance, build
                    confidence, and connect with their cultural roots in a supportive community.
                  </p>
                  <h4 className="mt-5 font-semibold text-[#1a1a1a]">What students gain</h4>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Weekly dance training rooted in classical and folk traditions</li>
                    <li>Opportunities to perform at cultural events and festivals</li>
                    <li>A strong sense of identity, discipline, and community</li>
                  </ul>
                  <h4 className="mt-5 font-semibold text-[#1a1a1a]">Who can join</h4>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Youth and beginners with no prior experience</li>
                    <li>Returning dancers continuing their training</li>
                  </ul>
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-md lg:col-span-3">
                  <Image
                    src="/getintouch_02.png"
                    alt="Students learning Khmer dance in rehearsal"
                    fill
                    className="object-cover transition-all duration-500 ease-in-out"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </section>

            <section className="mt-14" aria-labelledby="donors-heading">
              <h2
                id="donors-heading"
                className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold text-[#1a1a1a]"
              >
                For Donors, Supporters &amp; Partners
              </h2>
              <div className="font-light text-md leading-relaxed text-gray-800">
                <p>
                  Your support directly sustains and grows our programs. From individual donors to foundations and
                  community partners, your contributions allow us to provide consistent training, expand access, and
                  preserve Khmer traditions for future generations.
                </p>
                <h4 className="mt-5 font-semibold text-[#1a1a1a]">Your support makes possible</h4>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-10 font-light text-md leading-relaxed text-gray-800 lg:grid-cols-2 lg:gap-8">
                <div className="min-w-0 rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-balance font-semibold text-lg text-[#200073]">Dance Education (Core Program)</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Weekly instruction and seasonal training</li>
                    <li>Instructor compensation and teaching support</li>
                    <li>Costumes, music, and essential materials</li>
                  </ul>
                </div>
                <div className="min-w-0 rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-balance font-semibold text-lg text-[#200073]">Program Development (Expansion)</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Khmer language classes and curriculum development</li>
                    <li>Structured learning pathways for students</li>
                    <li>Training future instructors and cultural leaders</li>
                  </ul>
                </div>
                <div className="min-w-0 rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-balance font-semibold text-lg text-[#200073]">Community Access &amp; Outreach</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Cultural workshops in schools and community spaces</li>
                    <li>Performances across the Bay Area</li>
                    <li>Outreach to underserved youth and families</li>
                  </ul>
                </div>
                <div className="min-w-0 rounded-xl border border-[#e8e4f2] bg-[#faf9fc] p-5 sm:p-6">
                  <h3 className="text-balance font-semibold text-lg text-[#200073]">Essential Support Needs</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#F28904]">
                    <li>Meals for dancers during long practice and event days</li>
                    <li>Costumes, props, and cultural materials</li>
                    <li>Youth mentorship and leadership development</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-14" aria-labelledby="why-this-work-matters-heading">
              <h2
                id="why-this-work-matters-heading"
                className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold text-[#1a1a1a]"
              >
                Why This Work Matters
              </h2>
              <div className="space-y-5 font-light text-md leading-relaxed text-gray-800">
                <p>
                  Access to Khmer cultural education is limited for many youth growing up in the United States.
                  Without intentional support, these traditions risk fading across generations.
                </p>
                <p>
                  Our programs create a living connection to culture through movement, storytelling, and shared
                  experience, while building confidence, belonging, and leadership in young people.
                </p>
              </div>
            </section>

            <section className="mt-3 mb-5" aria-labelledby="join-us-heading">
              <div className="mt-8 flex justify-start sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] justify-center rounded-full bg-gradient-to-r from-[#F28904] to-[#FF9F1A] px-8 py-3 text-center text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:text-white hover:from-[#FF9F1A] hover:to-[#FFC67F]"
                >
                  Join Us
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
