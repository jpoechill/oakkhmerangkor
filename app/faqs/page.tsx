import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                FAQs
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Get Your Answers Here
              </div>
            </div><br /><br />
            <div id="testimonials" className="text-center flex px-5 md:px-20 pb-5 justify-center">
              <div id="testimonials-mobile" className="max-w-[500px] lg:max-w-[1200px]">

                <div className="text-left w-full max-w-[900px]">
                  <div className="border-b-2 border-[#F28904] pt-3 py-[50px]">
                    <div id="question1" className="pb-6 font-serif text-2xl font-bold">
                      What is Cambodian traditional dance?
                    </div>
                    <div id="answer1" className="font-light text-md">
                      Cambodian traditional dance, also known as Khmer dance, is a form of performing arts that has been practiced in Cambodia for centuries. It encompasses classical dance, which is deeply rooted in the country&apos;s culture and history, as well as folk dances that are performed during festivals and community events.
                    </div>
                  </div>

                  <div className="border-b-2 border-[#F28904] py-[50px]">
                    <div id="question3" className="pb-6 font-serif text-2xl font-bold">
                      What are the main types of Cambodian traditional dance?
                    </div>
                    <div id="answer3" className="font-light text-md">
                      The main types of Cambodian traditional dance include classical dance, folk dance, and social dances. Classical dance is characterized by its elaborate costumes and intricate movements, while folk dance is more lively and often tells stories of daily life and nature. Social dances are performed at gatherings and celebrations.
                    </div>
                  </div>

                  <div className="border-b-2 border-[#F28904] py-[50px]">
                    <div id="question4" className="pb-6 font-serif text-2xl font-bold">
                      Where can I watch a performances?</div>
                    <div id="answer4" className="font-light text-md">
                      Performances of Cambodian traditional dance can be seen at cultural festivals, special events, and some theaters in Cambodia. Additionally, many cultural centers and tourism hubs offer regular shows. Check our website or local event listings for upcoming performances.</div>
                  </div>

                  <div className="border-b-2 border-[#F28904] py-[50px]">
                    <div id="question5" className="pb-6 font-serif text-2xl font-bold">
                      How can I get involved with the dance group?
                    </div>
                    <div id="answer5" className="font-light text-md">
                      There are various ways to get involved with our dance group. You can join as a volunteer, participate in our workshops, attend our performances, or support us through donations. Visit our &quot;Get Involved&quot; section for more details.
                    </div>
                  </div>

                  <div className="border-b-2 border-[#F28904] py-[50px]">
                    <div id="question6" className="pb-6 font-serif text-2xl font-bold">
                      What age groups can participate?</div>
                    <div id="answer6" className="font-light text-md">
                      There are various ways to get involved with our dance group. You can join as a volunteer, participate in our workshops, attend our performances, or support us through donations. Visit our &quot;Get Involved&quot; section for more details.
                    </div>
                  </div>

                  <div className="border-b-0 border-[#F28904] py-[50px]">
                    <div id="question10" className="pb-6 font-serif text-2xl font-bold">
                      Can I book the dance group for private events?
                    </div>
                    <div id="answer10" className="font-light text-md">
                      Yes, our dance group is available for private events, including weddings, corporate functions, and cultural festivals. Please contact us for more information on booking and availability.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
