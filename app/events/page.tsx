import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className=" animate-[fade-me-in_.5s_ease-in-out]">
          <div className="flex justify-center w-full p-5 pt-0 px-5 lg:px-10">
            <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
              <div className="text-center">
                <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                  Events
                </div>
                <div className="text-3xl font-bold tracking-wide">
                  Join Us at Our Next Event
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full pt-0 p-5 px-5 lg:px-10 my-5">
            <div className="flex flex-col w-full max-w-[1040px]">
              <div className="w-full rounded-2xl overflow-hidden min-h-[350px] grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full w-full hover:cursor-pointer overflow-hidden">
                  <Image src="/events/cny_cover_01.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
                <div className="col-span-3 p-5 text-lg">
                  <span className="font-bold text-lg">
                    Cambodian New Year 2025
                  </span>
                  <br /><br />
                  Join us on a journey of discovery and celebration as we continue to illuminate stages with the radiant beauty of Cambodian Khmer dance.
                  <br /><br />
                  Let the rhythms of our heritage inspire and uplift your spirit!<br /><br />
                  {/* Learn more... */}
                </div>
              </div>
            </div>
          </div>


          <div className="flex justify-center w-full pt-0 p-5 px-5 lg:px-10 my-5">
            <div className="flex flex-col w-full max-w-[1040px]">
              <div className="text-center pb-4">
                Other Upcoming Events
              </div>
              <hr />
              <br />
              <div className="w-full rounded-2xl overflow-hidden min-h-[350px] grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full w-full hover:cursor-pointer overflow-hidden">
                  <Link href="https://www.sabaideefest.com/" target="_blank">
                    <Image src="/events/sabaideefest_24.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </Link>
                </div>
                <div className="col-span-3 p-5 text-lg">
                  <span className="font-bold text-lg">
                    Sabaidee Fest 2024
                  </span>
                  <br /><br />
                  Music and Cultural Festival<br /><br />
                  Union Square<br />
                  San Francisco, CA
                  <br /><br />
                  September 28th, 2024 <br />
                  10am-8:30pm
                  <br /><br />
                  {/* <Link href="https://www.cambodiaday.com/" target="_blank">
                    Learn More...
                  </Link> */}
                </div>
              </div>
              <br /><br />
              <div className="w-full rounded-2xl overflow-hidden min-h-[350px] grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full w-full hover:cursor-pointer overflow-hidden">
                  <Link href="https://www.cambodiaday.com/" target="_blank">
                    <Image src="/events/cambodiaday_24.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </Link>
                </div>
                <div className="col-span-3 p-5 text-lg">
                  <span className="font-bold text-lg">
                    Cambodia Day 2024
                  </span>
                  <br /><br />
                  Music and Cultural Festival<br /><br />
                  Union Square<br />
                  San Francisco, CA
                  <br /><br />
                  September 28th, 2024 <br />
                  10am-8:30pm
                  <br /><br />
                  {/* <Link href="https://www.cambodiaday.com/" target="_blank">
                    Learn More...
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full pt-0 p-5 px-5 lg:px-10 my-5">
            <div className="flex flex-col w-full max-w-[1040px]">
              <div className="text-center pb-4">
                Past Events
              </div>
              <hr />
              <br />
              <div className="w-full rounded-2xl overflow-hidden min-h-[350px] grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full w-full hover:cursor-pointer overflow-hidden">
                  <Image src="/thumb_mid_01.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
                <div className="col-span-3 p-5 text-lg">
                  <span className="font-bold text-lg">
                    Cambodian New Year 2024
                  </span>
                  <br /><br />
                  Join us on a journey of discovery and celebration as we continue to illuminate stages with the radiant beauty of Cambodian Khmer dance.
                  <br /><br />
                  Let the rhythms of our heritage inspire and uplift your spirit!<br /><br />
                  {/* Learn more... */}
                </div>
              </div>
            </div>
          </div>
          <div className="pb-10"></div>
        </div>
      </div>
      <Footer></Footer>
    </main >
  );
}
