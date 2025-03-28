import Image from "next/image";
import Header from "./Header"
import Footer from "./Footer"
import Link from "next/link"
import HoverVideo from "./HoverVideo";
import HoverVideoThumbnail from "./HoverVideoThumbnail"

export default function Home() {

  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className="animate-[fade-me-in_.5s_ease-in-out] bg-white">
          {/* <div className="flex justify-center w-full pt- pt-0 px-10">
            <div className="flex flex-col w-full max-w-[1040px] overflow-hidden mt-[130px]">
              <div className="text-sm uppercase w-full text-center font-bold mb-4 text-[#333333] tracking-wider">
                Oakland Khmer Angkor Dance Troupe

              </div>
              <hr />
              <Image src="/cover_01.png" alt="Group Photo" className="rounded-xl h-[300px] shadow-xl lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
            </div>
          </div> */}

          <div className="flex flex-col w-full pt-[130px]">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Oakland Khmer Angkor Dance Troupe
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Preserving and Practicing Khmer Traditional Dance
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full p-5 px-10 mt-3 my-5">
            <div className="flex flex-col w-full max-w-[1040px]">
              {/* <h1>Upcoming Events</h1>
              <br /> */}
              <div className="w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full min-h-[250px] w-full hover:cursor-pointer overflow-hidden">

                  {/* <Image src="/thumbs/apsara.png" alt="thumb" className="transition-all duration-[5000] ease-in-out group-hover:hidden" fill></Image> */}

                  <HoverVideo />
                  <Image src="/cover_03.png" alt="thumb" className="object-cover w-full h-full transition-all duration-[5000] delay-[.0s] ease-in-out group-hover:hidden" fill></Image>
                </div>
                <div className="col-span-3 font-light p-5 text-md">
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

              <div className="text-center mt-5">
                <Link target="_blank" href="https://templehill.org/event/29th-annual-cambodian-new-year-celebration/">
                  <div className="bg-[#F28904] hover:bg-[#FFC67F] shadow-xl text-lg rounded-full text-white py-2 px-6 ml-1">
                    Reserve Your Free Ticket
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full pt-0 p-5 px-10 pb-10 mb-10">
            <div className="flex flex-col w-full text-center max-w-[1040px]">
              <h1>Our Dances</h1>
              <hr className="mt-4" />
              <br />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <HoverVideoThumbnail
                  title="APSARA"
                  subtitle="(អប្សរា)"
                  link="/dances/apsara"
                  // videoSrc="/video/apsara.mp4"
                  imageSrc="/thumbs/apsara.png"
                />


                <HoverVideoThumbnail
                  title="COCONUT"
                  subtitle="(របាំគោះត្រឡោក)"
                  link="/dances/coconut"
                  // videoSrc="/video/coconut.mp4"
                  imageSrc="/thumbs/coconut.png"
                />

                <HoverVideoThumbnail
                  title="LOVE MOON"
                  subtitle="(របាំដួងច័ន្ទ្រា)"
                  link="/dances/love-moon"
                  // videoSrc="/video/dancer.mp4"
                  imageSrc="/thumbs/lovemoon.png"
                />

                <HoverVideoThumbnail
                  title="KANE"
                  subtitle="(របាំគែន)"
                  link="/dances/kane"
                  // videoSrc="/video/kane.mp4"
                  imageSrc="/thumbs/kane.png"
                />

                <HoverVideoThumbnail
                  title="FLOWER"
                  subtitle="(របាំបុប្ផាលោកីយ៏)"
                  link="/dances/flower"
                  // videoSrc="/video/flower.mp4"
                  imageSrc="/thumbs/flower.png"
                />

                <HoverVideoThumbnail
                  title="BLESSING"
                  subtitle="(ជូនពរ)"
                  link="/dances/blessing"
                  imageSrc="/thumbs/blessing.png"
                // fallbackImageSrc="/thumbs/blessing_02.png"
                />

                <HoverVideoThumbnail
                  title="STICK"
                  subtitle="(របាំឱផ្ទៃស្រុកខ្មែរ ឬរបាំគោះអង្រែ)"
                  link="/dances/stick"
                  imageSrc="/thumbs/stick.png"
                // fallbackImageSrc="/thumbs/stick_02.png"
                />

                <HoverVideoThumbnail
                  title="PLET"
                  subtitle="(ផ្លិត)"
                  link="/dances/plet"
                  imageSrc="/thumbs/plet.png"
                />

                <HoverVideoThumbnail
                  title="PHLOY SUOY"
                  subtitle="(ផ្លយ ស៊ូយ)"
                  link="/dances/phloy-suoy"
                  imageSrc="/thumbs/phloy.png"
                />



              </div>
            </div>
          </div>

          <div className="flex justify-center w-full py-10 px-10 text-center bg-[#f6f6f6]">
            <div className="flex flex-col w-full max-w-[1040px] text-[#200073] my-20 py-10 bg-[#f6f6f6]">
              <div className="font-medium text-3xl italic font-serif">
                “Dance is the hidden language of the soul, of the body.”
              </div>
              <div className="font-light mt-5 text-3xl">
                របាំគឺជាភាសាលាក់កំបាំងនៃព្រលឹង រូបកាយ។
              </div>
              <br />
              – Khmer Proverb
            </div>
          </div>

          <div className="flex justify-center w-full p-5 px-10 mt-10 py-10">
            <div className="flex flex-col w-full max-w-[1040px]">
              {/* <div className="text-sm uppercase w-full text-center font-bold mb-8 text-[#F28904] tracking-wider">
                Our Sponsors
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 justify-end items-end gap-10">
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
              </div>

              <br /><br /><br />
              <br /> */}


              <div className="text-sm uppercase w-full text-center font-bold mt-[0px] mb-8 text-[#F28904] tracking-wider">
                Our Partners
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px]">
                <Link href="https://www.instagram.com/khmeryouthofmodesto/" target="_blank">
                  <div className="bg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    KYOM
                  </div>
                </Link>
                <Link href="https://www.facebook.com/morodokkhmerperformingarts/" target="_blank">
                  <div className="xbg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    <div className="xgroup xhover:cursor-pointer border-2 relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                      <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                      </div>
                      <div className="">
                        <Image src="/mkpa_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/ukcpdancetroupe/" target="_blank">
                  <div className="xbg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    <div className="xgroup xhover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                      <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                      </div>
                      <div className="">
                        <Image src="/ukpc_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.facebook.com/cambodianculturaldancetroupe/" target="_blank">
                  <div className="bg-slate-200 hidden md:flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                    <div className="xgroup xhover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                      <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                        SJCCD
                      </div>
                      <div className="">
                        {/* <Image src="/lds_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px] pt-8 md:hidden">
                <div className="xbg-slate-200 flex md:hidden items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  <div className="xgroup xhover:cursor-pointer border-2 relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                    <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                    </div>
                    <div className="">
                      <Image src="/mkpa_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                    </div>
                  </div>
                </div>
                <div className="xbg-slate-200 md:hidden items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  <div className="xgroup xhover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-full">
                    <div className="absolute h-full font-bold w-full z-10 tracking-widest xbg-black xopacity-25 group-hover:opacity-0 transition-all duration-500 flex justify-center items-center">
                    </div>
                    <div className="">
                      <Image src="/ukpc_logo.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px] pt-8 md:hidden">
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  KYOM
                </div>
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  SJCCD
                </div>
              </div>
            </div>
          </div>

          <div className="m-[60px]">
            <div className="text-sm uppercase w-full text-center font-bold mb-8 text-[#F28904] tracking-wider">
              Our Sponsors
            </div>
            <div className="flex flex-row justify-center items-center gap-8 lg:gap-[90px]">
              <div className="">
                {/* <Link href="https://chucks-donuts.com/" target="_blank"> */}
                <Image src="/sponsors/monynop.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={190} height={300}></Image>
                {/* </Link> */}
              </div>
              <div className="">
                <Link href="https://chucks-donuts.com/" target="_blank">
                  <Image src="/sponsors/chucks.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={140} height={300}></Image>
                </Link>
              </div>
              <div className="">
                <Link href="https://stocksandblondessalon.com/" target="_blank">
                  <Image src="/sponsors/stocksnblondes.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={190} height={300}></Image>
                </Link>
              </div>
              <div className="">
                <Link href="https://www.akhmerbuddhistfoundation.org/" target="_blank">
                  <Image src="/sponsors/khmerbuddhist_logo.png" alt="A Khmer Buddhist Foundation" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" width={190} height={300}></Image>
                </Link>
              </div>
            </div>
          </div>
        </div >

        <br />
      </div>
      <Footer></Footer>
    </main >
  );
}
