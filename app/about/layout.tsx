'use client';

import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";
import { usePathname } from 'next/navigation'

import { useEffect } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 pb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">About</div>
              <div className="text-3xl font-bold tracking-wide">
                Our Journey and Vision
              </div>
            </div>


            <div className="flex flex-col justify-center w-full p-0 px-0 my-5">
              <Image src="/events/group_cover_2019.jpg" alt="thumb" className="w-full h-full transition-all duration-500 ease-in-out" width="800" height="800"></Image>
              <div className="w-full text-right text-xs italic text-gray-700 pt-2 pr-2 ">
                Youth Dancers, Cambodian New Year 2019
              </div>
              {/* <div className="flex flex-col w-full max-w-[1040px]">
                <div className="w-full rounded-2xl overflow-hidden min-h-[500px] shadow-xl">
                  <div className="relative h-full w-full hover:cursor-pointer overflow-hidden">
                    <Image src="/events/group_cover_2019.jpg" alt="thumb" className="transition-all duration-500 ease-in-out" fill></Image>

                  </div>
                </div>
              </div> */}
            </div>




            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="">
                <div id="question1" className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold">
                  Our Mission
                </div>
                <div id="answer1" className="font-light text-md">
                  The Oakland Khmer Angkor Dance Troupe is dedicated to preserving and promoting the rich cultural heritage of Cambodian traditional dance. Through education, performance, and community engagement, we aim to inspire and empower youth, foster cross-cultural understanding, and celebrate the beauty of Khmer arts. For over 25 years, we have been committed to nurturing the next generation of dancers and enriching the cultural tapestry of Oakland, CA.
                  <br /><br />
                  We support the artistic growth of our members by providing opportunities for creative expression and collaboration. Through our programs, dancers can explore their artistic potential, develop new choreography, and participate in innovative projects that blend traditional and contemporary elements.
                  <br /><br />
                  Our work is grounded in the mission to preserve the rich traditions of Khmer dance for future generations. We maintain a comprehensive archive of dance forms, costumes, music, and historical materials, ensuring that this invaluable cultural heritage remains vibrant and accessible.
                  <br /><br />
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <Image src="/umbrella_group.jpg" alt="Grantors and dancers at a partnership event" className="w-full rounded-lg shadow-md" width="500" height="300" />
                  </div>
                  <div>
                    <Image src="/flower_group.jpg" alt="Grantors and dancers at a partnership event" className="w-full rounded-lg shadow-md" width="500" height="300" />
                  </div>
                  <div>
                    <Image src="/general_group.jpg" alt="Grantors and dancers at a partnership event" className="w-full rounded-lg shadow-md" width="500" height="300" />
                  </div>
                </div>
              </div>
            </div>


            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="">
                <div id="question1" className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold">
                  Our History
                </div>
                <div id="answer1" className="font-light text-md">
                  The Oakland Khmer Angkor Dance Troupe was established in 1996 with the mission of preserving Cambodian culture through the art of dance. Building unity and strengthening the Khmer community in the Greater Bay Area, our troupe celebrates cultural dances, traditional food, clothing, and music. Our performances have captivated local audiences, sharing the beauty and elegance of our heritage and ensuring that every member, especially the younger generation, has a chance to succeed in all facets of life.
                  <br /><br />
                  Originally organized by a dedicated group of volunteers, with strong support from members of the Church of Jesus Christ of Latter-Day Saints&apos; Oakland 10th Cambodian Branch, our program serves more than 60 participants annually, ages 6 to 72. These dancers are taught a range of Cambodian folkloric and classical dances and are provided with costumes and accessories. Our weekly practices, running from January to March, focus on skill-building and community, with refreshments offered to keep our participants energized. Each March, in partnership with other Khmer dance communities, we host a vibrant Cambodian New Year celebration in Oakland, drawing over 1,200 attendees from throughout California.<br /><br />
                  This event is a vibrant showcase of cultural performances, games, and social dancing, creating a memorable experience that brings together people from all walks of life to celebrate and preserve our rich cultural heritage.
                  <br /><br />
                </div>
              </div>
            </div>
            {/* 
            <div className="border-[#F28904] py-8 lg:py-12 flex flex-col lg:flex-row items-start">
              <div className="w-full max-w-4xl mx-auto px-4">
                <div
                  id="question1"
                  className="text-center border-b-2 mb-10 border-[#F28904] pb-8 font-serif text-3xl lg:text-4xl font-bold text-gray-800"
                >
                  Our History
                </div>


                <div id="answer1" className="font-light text-lg leading-relaxed text-gray-700 space-y-6">

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-[#F28904]">
                    <p className="text-lg font-medium text-gray-800">
                      <strong className="text-[#F28904]">Established in 1996</strong>, the Oakland Khmer Angkor Dance Troupe
                      preserves Cambodian culture through the art of dance, building unity and strengthening the Khmer
                      community in the Greater Bay Area.
                    </p>
                  </div>


                  <p>
                    Our troupe celebrates cultural dances, traditional food, clothing, and music. Our performances have
                    captivated local audiences, sharing the beauty and elegance of our heritage and ensuring that every
                    member, especially the younger generation, has a chance to succeed in all facets of life.
                  </p>


                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                      <div className="text-3xl font-bold text-[#F28904]">60+</div>
                      <div className="text-sm font-medium text-gray-600 mt-1">Annual Participants</div>
                      <div className="text-xs text-gray-500">Ages 6 to 72</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                      <div className="text-3xl font-bold text-[#F28904]">1,200+</div>
                      <div className="text-sm font-medium text-gray-600 mt-1">Annual Event Attendees</div>
                      <div className="text-xs text-gray-500">Cambodian New Year</div>
                    </div>
                  </div>


                  <p>
                    Originally organized by a dedicated group of volunteers, with strong support from members of the
                    Church of Jesus Christ of Latter-Day Saints' Oakland 10th Cambodian Branch, our program teaches
                    a range of Cambodian folkloric and classical dances. Participants are provided with authentic
                    costumes and accessories.
                  </p>


                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3">Our Program</h3>
                    <p className="mb-4">
                      <strong>Weekly practices</strong> run from January to March, focusing on skill-building and
                      community development. Refreshments are provided to keep our participants energized throughout
                      their learning journey.
                    </p>

                    <p>
                      Each March, in partnership with other Khmer dance communities, we host a vibrant
                      <strong className="text-[#F28904]"> Cambodian New Year celebration</strong> in Oakland,
                      drawing attendees from throughout California.
                    </p>
                  </div>


                  <p className="text-lg font-medium text-gray-800 italic border-l-4 border-[#F28904] pl-6">
                    This event is a vibrant showcase of cultural performances, games, and social dancing, creating
                    a memorable experience that brings together people from all walks of life to celebrate and
                    preserve our rich cultural heritage.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="w-full">
                <div id="question1" className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold">
                  Our Leadership
                </div>
                <div className="grid grid-cols-2 w-full lg:grid-cols-6 justify-end items-end gap-10">
                  <div className="m-auto text-sm text-center">
                    <div className="bg-slate-200 rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/teacher-01.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Sovandy Hang</span>
                    <br />
                    Social Worker
                  </div>
                  <div className="m-auto text-sm text-center">
                    <div className="bg-slate-200 mx-auto rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/sinath_02.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Sinath Thi</span>
                    <br />
                    Real Estate Broker
                  </div>

                  <div className="m-auto text-sm text-center">
                    <div className="bg-slate-200 mx-auto rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/macy.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Macy Lieu</span>
                    <br />
                    Nurse Practitioner
                  </div>
                  <div className="m-auto text-sm text-center">
                    <div className="bg-slate-200 rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/pom.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Pom Rith</span>
                    <br />
                    Graphic Designer
                  </div>
                  <div className="m-auto text-sm text-center">
                    <div className="bg-slate-200 rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/teacher-03.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Neary Rith</span>
                    <br />
                    Salon Owner
                  </div>
                  <div className="m-auto text-sm text-center">
                    <div className="bg-slate-200 mx-auto rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/teacher-05.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Neary Neou</span>
                    <br />
                    Teacher
                  </div>
                </div>
              </div>
            </div>

            {/* <br />
            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="">
                <div id="question1" className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold">
                  Art
                </div>
                <div className="grid grid-cols-5 gap-8">
                  <div className="col-span-1">
                    <div>
                      <Image src="/angkor_ill.jpg" alt="thumb" className="top-0 object-contain w-full h-full transition-all duration-500 ease-in-out" width="200" height="400"></Image>
                    </div>
                  </div>
                  <div id="answer1" className="col-span-4 font-light text-md">

                    Khmer art, a treasure of Southeast Asia, reflects Cambodia’s rich history and culture. Dating back to the Angkor era, it is known for intricate stone carvings, serene sculptures, and detailed bas-reliefs. From grand temples like Angkor Wat to delicate silk weavings and vibrant paintings, Khmer art captures both mythology and daily life.
                    It remains a source of national pride and continues to inspire artists worldwide, preserving Cambodia&apos;s traditions and spirit.</div>
                </div>
              </div>
            </div> */}

            {/* <div className="flex flex-row mt-4 justify-center gap-x-[40px] mb-4 text-lg">
              <div>
                <Link href="/about" className={pathname === '/about' ? 'text-[#F28904]' : ''}>Mission</Link>
              </div>
              <div>
                <Link href="/about/history" className={pathname === '/about/history' ? 'text-[#F28904]' : ''}>History</Link></div>
              <div>
                <Link href="/about/leadership" className={pathname === '/about/leadership' ? 'text-[#F28904]' : ''}>Leadership</Link>
              </div>
              <div>
                <Link href="/about/art" className={pathname === '/about/art' ? 'text-[#F28904]' : ''}>Art</Link>
              </div>
            </div> */}

            {/* <hr />

            <br />
            <div className="text-md">

              {children}
            </div> */}
          </div>
        </div>


        {/* <div className="pb-[5px]"></div> */}
      </div>
      <Footer></Footer>
    </main>
  )
}