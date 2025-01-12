import Image from "next/image";
import Header from "../../Header"
import Footer from "../../Footer"
import Link from "next/link"

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div>

                <div className=" hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="">
                    <Image src="/apsara_lg.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10] " fill></Image>
                  </div>
                </div>
                <div className="pt-5"></div>
                <div className="grid grid-cols-4 gap-5">
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                </div>
              </div>
              <div className="text-lg">
                <div className="text-2xl font-medium pt-4 tracking-wide">
                  {/* <br /> */}
                  COCONUT DANCE
                </div>
                <br />
                <div className="text-md font-light">
                  The Coconut Dance (Robam Trov or Robam Koung) is a traditional Cambodian folk dance that originated in rural villages, inspired by agricultural life and harvest celebrations. Performed with coconut shells to create rhythmic sounds through synchronized clapping, the dance features graceful movements and colorful costumes.
                  <br /><br />
                  Traditionally, it symbolizes themes of harmony, courtship, and festivity, bringing people together during festivals, weddings, and community gatherings. Over time, it has become a cherished expression of Cambodia&apos;s rich cultural heritage and joyful spirit.
                </div>
              </div>
            </div>

            <div className="pt-[50px]"></div>

            <div className="text-center">
              <h1>Other Dances</h1>
              <hr className="mt-4" />
              <br />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="group relative h-0 w-[100%] pb-[100%] hover:cursor-pointer overflow-hidden rounded-2xl">
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
              <Link href="/dances">
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
              </Link>
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
            </div>

          </div>
        </div>
        <div className="pb-[5px]"></div>
      </div>
      <Footer></Footer>
    </main>
  );
}
