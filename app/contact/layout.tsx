'use client';

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
            <div className="text-center animate-[fade-me-in_s_ease-in-out] mb-10">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">Meet Our Students</div>
              <div className="text-3xl font-bold tracking-wide">Student Profiles</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sokha Chan",
                  image: "/play.jpg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula cursus magna, vitae posuere arcu.",
                },
                {
                  name: "Vanna Seng",
                  image: "/play.jpg",
                  description:
                    "Praesent nec felis nec tortor pharetra faucibus. Curabitur ac velit vitae justo suscipit tincidunt.",
                },
                {
                  name: "Dara Meas",
                  image: "/play.jpg",
                  description:
                    "Aenean mattis ante ut dolor facilisis fermentum. Vivamus finibus diam nec eros lacinia, non tincidunt sapien porttitor.",
                },
              ].map((student, index) => (
                <div key={index} className="rounded-xl shadow-md overflow-hidden bg-white border border-gray-200">
                  <div className="relative w-full pb-[100%]">
                    <Image
                      src={student.image}
                      alt={`${student.name} profile`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
                    <p className="text-sm text-gray-600">{student.description}</p>
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
