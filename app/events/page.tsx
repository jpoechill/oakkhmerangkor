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
              <div className="w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full min-h-[250px] w-full hover:cursor-pointer overflow-hidden">
                  <Image src="/cover_03.png" alt="thumb" className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
                <div className="col-span-3 p-5 font-light text-md">
                  <span className="font-bold text-lg">
                    Cambodian New Year 2025
                  </span>
                  <br /><br />
                  Join us on a journey of discovery and celebration as we continue to illuminate stages with the radiant beauty of Cambodian Khmer dance.
                  <br /><br />
                  {/* Tickets: Coming Soon... <br /><br /> */}
                  📍 4770 Lincoln Ave Oakland, CA 94602
                  {/* Join us on a journey of discovery and celebration as we continue to illuminate stages with the radiant beauty of Cambodian Khmer dance. */}
                  <br /><br />

                  March 29th, 2025 <br />
                  4pm - 9:00pm
                  {/* Let the rhythms of our heritage inspire and uplift your spirit! */}

                  <br /><br />
                  {/* Learn more... */}
                </div>
              </div>
            </div>
          </div>


          <div className="flex justify-center w-full pt-0 p-5 px-5 lg:px-10 my-5">
            <div className="flex flex-col w-full max-w-[1040px]">
              <div className="text-center pb-4">
                Other Cultural Events This Year
              </div>
              <hr />
              <br />

              <div className="grid gap-3 grid-cols-2 w-full">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3622.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_1925.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_2641.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_2806.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_2945.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3088.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3090.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3091.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3092.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3093.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3096.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3590.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3593.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3616.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3619.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3620.JPG" alt="thumb" className="w-full h-full" width={400} height={400}></Image>
                </div>

                {/* <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3627.JPG" alt="thumb" className="w-full h-full" width={500} height={500}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3638.JPG" alt="thumb" className="w-full h-full" width={500} height={500}></Image>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image src="/events/2025/IMG_3698.JPG" alt="thumb" className="w-full h-full" width={500} height={500}></Image>
                </div> */}

              </div>

              {/* 
              <div className="w-full rounded-2xl overflow-hidden grid grid-cols-1 gap-5 lg:grid-cols-3 shadow-xl">
                <div className="relative h-full min-h-[250px] w-full hover:cursor-pointer roundedmoverflow-hidden">
                  <Image src="/thumb_mid_01.png" alt="thumb" className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
                <div className="relative h-full min-h-[250px] w-full hover:cursor-pointer overflow-hidden">
                  <Image src="/thumb_mid_01.png" alt="thumb" className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div><div className="relative h-full min-h-[250px] w-full hover:cursor-pointer overflow-hidden">
                  <Image src="/thumb_mid_01.png" alt="thumb" className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>

              </div> */}
              {/* <br /><br /> */}

              {/* <div className="text-center pb-4">
                Past Events
              </div>
              <hr />
              <br />

              <div className="w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full min-h-[250px] w-full hover:cursor-pointer overflow-hidden">
                  <Image src="/thumb_mid_01.png" alt="thumb" className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
                <div className="col-span-3 font-light text-md p-5 text-md">
                  <span className="font-bold text-lg">
                    Cambodian New Year 2024
                  </span>
                  <br /><br />
                  Join us on a journey of discovery and celebration as we continue to illuminate stages with the radiant beauty of Cambodian Khmer dance.
                  <br /><br />
                  Let the rhythms of our heritage inspire and uplift your spirit!<br /><br />
                </div>
              </div>
              <br /><br />
              <div className="text-center pb-4">
                Other Past Events (Not Directly Affiliated)
              </div>
              <hr />
              <br />
              <div className="w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full min-h-[250px] w-full hover:cursor-pointer overflow-hidden">
                  <Link href="https://www.sabaideefest.com/" target="_blank">
                    <Image src="/events/sabaideefest_24.png" alt="thumb" className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </Link>
                </div>
                <div className="col-span-3 p-5 font-light text-md">
                  <span className="font-bold text-lg">
                    Sabaidee Fest 2024
                  </span>
                  <br /><br />
                  Celebrate the vibrant culture and diverse music of Southeast Asia. This three-day festival showcases art, food, fashion, and entertainment from the region.
                  <br /><br />
                  Prado Regional Park<br />
                  16700 Euclid Ave, Chino, CA 91708
                  <br /><br />
                  June 14-16th, 2024 <br />
                  <br /><br />
                </div>
              </div>
              <br /><br />
              <div className="w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full min-h-[250px] w-full hover:cursor-pointer overflow-hidden">
                  <Link href="https://www.cambodiaday.com/" target="_blank">
                    <Image src="/events/cambodiaday_24.jpg" alt="thumb" className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </Link>
                </div>
                <div className="col-span-3 p-5 font-light text-md">
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
                </div>
              </div> */}
            </div>
          </div>

          <div className="pb-10"></div>
        </div>
      </div>
      <Footer></Footer>
    </main >
  );
}
