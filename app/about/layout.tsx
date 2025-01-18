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
                  <br /><br /></div>
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


            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="w-full">
                <div id="question1" className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold">
                  Our Leadership
                </div>
                <div className="grid grid-cols-2 w-full lg:grid-cols-5 justify-end items-end gap-10">
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
                      <Image src="/avatar_placeholder.svg" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Sineth</span>
                    <br />
                    Real Estate Agent
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
                    <div className="bg-slate-200 rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/teacher-04.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Paul Lang</span>
                    <br />
                    Entreprenuer
                  </div>

                  <div className="m-auto text-sm text-center">
                    <div className="bg-slate-200 mx-auto rounded-full h-[100px] w-[100px] overflow-hidden">
                      <Image src="/avatars/teacher-05.png" alt="Placeholder Image" width={125} height={125}></Image>
                    </div>
                    <br />
                    <span className="font-bold">Neary Neou</span>
                    <br />
                    Teacher @ OUSD
                  </div>
                  <br />
                </div>
              </div>
            </div>


            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="">
                <div id="question1" className="text-center border-b-2 mb-8 border-[#F28904] pb-6 font-serif text-2xl font-bold">
                  Art
                </div>
                <div id="answer1" className="font-light text-md">
                  Khmer art, a treasure of Southeast Asia, embodies the rich cultural and historical heritage of Cambodia, dating back to the Angkor era and earlier. Renowned for its intricate stone carvings, serene sandstone sculptures, and detailed bas-reliefs, Khmer art portrays a sophisticated understanding of aesthetics and spirituality. The art forms range from majestic temple architectures, like the world-famous Angkor Wat, to delicate silk weavings and vibrant paintings that depict scenes from mythology and daily Cambodian life. This art not only serves as a cornerstone of national pride but also continues to inspire and influence contemporary artists and craftspeople around the world, keeping the spirit and traditions of Cambodia alive and vibrant.
                </div>
              </div>
            </div>

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


        <div className="pb-[20px]"></div>
      </div>
      <Footer></Footer>
    </main>
  )
}