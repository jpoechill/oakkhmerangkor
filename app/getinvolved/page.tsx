'use client'

import Link from "next/link";
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
                Book a Performance
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Bring Cambodian Dance to Your Event
              </div>
            </div><br /><br />

            <div className="font-light text-md">
              We perform at festivals, school events, weddings, and cultural programs, sharing Khmer dance with new audiences. Tell us your event details, dates, venue, and audience—we&apos;ll follow up with availability, repertoire, and logistics.
              <br /><br />
              For youth enrollment, volunteering, or general questions, visit our{" "}
              <Link href="/contact" className="text-[#F28904] hover:text-[#5E489A] underline underline-offset-2">
                Get Involved
              </Link>{" "}
              page.
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
