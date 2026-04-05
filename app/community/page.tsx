import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

export default function CommunityPage() {
  return (
    <main>
      <Header />

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 px-5 pb-16 animate-[fade-me-in_.5s_ease-in-out] lg:px-10">
          <div className="flex w-full max-w-[1040px] flex-col mt-[130px]">
            <header className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#F28904]">Community</p>
              <h1 className="mt-3 text-balance text-3xl font-bold tracking-wide text-[#1a1a1a] sm:text-4xl">
                Our people, our stages, our gatherings
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty font-light text-md leading-relaxed text-gray-700 sm:text-lg">
                The troupe is rooted in families, students, teachers, and neighbors who show up for rehearsal, celebration,
                and each other. Meet our dancers and see highlights from events where we share Khmer dance with the wider
                Bay Area.
              </p>
            </header>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              <Link
                href="/profiles"
                className="group flex flex-col rounded-2xl border border-[#e8e4f2] bg-gradient-to-br from-white to-[#faf9fc] p-8 shadow-sm transition-all hover:border-[#F28904]/35 hover:shadow-md"
              >
                <h2 className="font-serif text-2xl font-bold text-[#200073] group-hover:text-[#F28904] transition-colors">
                  Dancers & Teachers
                </h2>
                <p className="mt-4 flex-1 font-light text-md leading-relaxed text-gray-700">
                  Meet the dancers and students who carry our repertoire forward—faces and stories from the troupe.
                </p>
                <span className="mt-6 inline-flex items-center font-medium text-[#F28904] group-hover:text-[#5E489A]">
                  View dancers
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="/events"
                className="group flex flex-col rounded-2xl border border-[#e8e4f2] bg-gradient-to-br from-white to-[#faf9fc] p-8 shadow-sm transition-all hover:border-[#F28904]/35 hover:shadow-md"
              >
                <h2 className="font-serif text-2xl font-bold text-[#200073] group-hover:text-[#F28904] transition-colors">
                  Events
                </h2>
                <p className="mt-4 flex-1 font-light text-md leading-relaxed text-gray-700">
                  Photos and moments from performances, celebrations, and community appearances throughout the year.
                </p>
                <span className="mt-6 inline-flex items-center font-medium text-[#F28904] group-hover:text-[#5E489A]">
                  Browse events
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </div>

            <p className="mt-12 text-center font-light text-sm text-gray-600">
              Want to perform with us or book the troupe? Visit{" "}
              <Link href="/contact" className="font-medium text-[#F28904] underline underline-offset-2 hover:text-[#5E489A]">
                Get Involved
              </Link>{" "}
              or{" "}
              <Link
                href="/getinvolved"
                className="font-medium text-[#F28904] underline underline-offset-2 hover:text-[#5E489A]"
              >
                Book a performance
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
