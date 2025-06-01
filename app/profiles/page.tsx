import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oakland Khmer Angkor Dance Troupe | Meet Our Students",
  description: "Discover the bright young talents of the Oakland Khmer Angkor Dance Troupe. Learn more about each student’s background, passions, and cultural journey.",
  openGraph: {
    images: 'https://www.oakkhmerangkor.com/profiles/sora.jpeg',
  },
};


export default function Home() {
  const students = [
    {
      name: "Sora",
      slug: "sora",
      image: "/profiles/sora.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula cursus magna, vitae posuere arcu.",
    }
  ];

  return (
    <main>
      <Header />

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
            <div className="text-center mb-10">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">Student Profiles</div>
              <div className="text-3xl font-bold tracking-wide">Meet Our Dancer</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md transition-shadow duration-300 ease-in-out hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)] group"
                >
                  <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <Link href={'/profiles/' + student.slug}>
                      <Image
                        src={student.image}
                        alt={`${student.name} profile`}
                        fill
                        className="object-cover"
                      /></Link>
                  </div>
                </div>
              ))}
            </div>



            <div className="pb-[50px]"></div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
