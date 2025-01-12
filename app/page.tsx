import Image from "next/image";
import Header from "./Header"
import Footer from "./Footer"
import Link from "next/link"

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
              <div className="w-full rounded-2xl overflow-hidden min-h-[350px] grid grid-cols-1 lg:grid-cols-8 shadow-xl">
                <div className="col-span-5 group relative h-full w-full hover:cursor-pointer overflow-hidden">
                  <Image src="/events/cny_cover_01.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
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
                  5:30pm - 9:00pm
                  {/* Let the rhythms of our heritage inspire and uplift your spirit! */}

                  <br /><br />
                  {/* Learn more... */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full pt-0 p-5 px-10 pb-10 mb-10">
            <div className="flex flex-col w-full text-center max-w-[1040px]">
              <h1>Our Dances</h1>
              <hr className="mt-4" />
              <br />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    APSARA
                    <div className="text-2xl font-light">(អប្សរា)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/apsara.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                {/* </Link> */}
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    COCONUT
                    <div className="text-2xl font-light">(ដូង)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/coconut.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    LOVE MOON
                    <div className="text-2xl font-light">(ស្រឡាញ់ព្រះច័ន្ទ)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/lovemoon.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    KANE
                    <div className="text-2xl font-light">(កេន)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/kane.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    FLOWER
                    <div className="text-2xl font-light">(ផ្កា)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/flower.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    BLESSING
                    <div className="text-2xl font-light">(ជូនពរ)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/blessing.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    STICK
                    <div className="text-2xl font-light">(ដំបង)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/stick.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    CHOUN POR
                    <div className="text-2xl font-light">(ជូនពរ)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/choun.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    MON MEKHALA
                    <div className="text-2xl font-light">(ម៉ន មេកាឡា)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/other_01.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
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

              {/* <div className="text-sm uppercase w-full text-center font-bold mb-8 text-[#F28904] tracking-wider">
                Our Sponsors
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px]">
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                </div>
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                </div>
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                </div>
              </div> */}

              <div className="text-sm uppercase w-full text-center font-bold mb-8 text-[#F28904] tracking-wider">
                Our Partners
              </div>
              <div className="flex flex-row justify-center gap-8 lg:gap-[90px]">
                {/* <div className="m-auto"> */}
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  KYOM
                </div>
                {/* </div> */}
                {/* <div className="m-auto"> */}
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  MKPA
                </div>
                {/* </div> */}
                {/* <div className="m-auto"> */}
                <div className="bg-slate-200 flex items-center justify-center font-bold tracking-widest pt-1 rounded-full h-[125px] w-[125px]">
                  UKCP
                </div>
                {/* </div> */}
                {/* <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div>
                <div className="m-auto">
                  <div className="bg-slate-200 rounded-full h-[125px] w-[125px]">
                  </div>
                </div> */}
              </div>
              <br /><br />
            </div>
          </div>

        </div >
      </div>
      <Footer></Footer>
    </main >
  );
}
