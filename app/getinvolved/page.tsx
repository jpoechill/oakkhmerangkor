'use client'

import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import ContactForm from "../components/ContactForm"

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] mb-5">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Get Involved
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Join Us in Making a Difference
              </div>
            </div><br /><br />

            <div className="font-light text-md">
              Whether you have questions, feedback, or would like to get involved with our group, please don&apos;t hesitate to reach out.
            </div>
            <br />

            <ContactForm />

          </div>
        </div>

        <div className="pb-[5px]"></div>

      </div>
      <Footer></Footer>
    </main>
  );
}
