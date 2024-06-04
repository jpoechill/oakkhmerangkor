import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] mb-5">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Dances
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Dance Forms We Celebrate
              </div>
            </div><br /><br />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  APSARA
                </div>
                <div className="">
                  <Image src="/thumbs/apsara.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  COCONUT
                </div>
                <div className="">
                  <Image src="/thumbs/coconut.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  LOVE MOON
                </div>
                <div className="">
                  <Image src="/thumbs/lovemoon.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  KANE
                </div>
                <div className="">
                  <Image src="/thumbs/kane.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  FLOWER
                </div>
                <div className="">
                  <Image src="/thumbs/flower.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  BLESSING
                </div>
                <div className="">
                  <Image src="/thumbs/blessing.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  STICK
                </div>
                <div className="">
                  <Image src="/thumbs/stick.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  CHOUN POR
                </div>
                <div className="">
                  <Image src="/thumbs/choun.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  MON MEKHALA
                </div>
                <div className="">
                  <Image src="/thumbs/other_01.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  PLET
                </div>
                <div className="">
                  <Image src="/thumbs/plet.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  PHLOY SUOY
                </div>
                <div className="">
                  <Image src="/thumbs/phloy.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  NESAT
                </div>
                <div className="">
                  <Image src="/thumbs/nesat.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[20px]"></div>
      </div>
      <Footer></Footer>
    </main>
  );
}
