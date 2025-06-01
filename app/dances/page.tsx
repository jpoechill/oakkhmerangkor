import Image from "next/image"
import Header from "../Header"
import Footer from "../Footer"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


              <Link href="/dances/apsara">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    APSARA
                    <div className="text-2xl font-light">(អប្សរា)</div>
                  </div>
                  <div className="">

                    <Image src="/thumbs/apsara.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]"
                      width={500}
                      height={500}
                    ></Image>
                    <Image src="/thumbs/apsara.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:hidden" fill></Image>

                  </div>
                </div>
              </Link>

              <Link href="/dances/coconut">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-[.1] transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    COCONUT
                    <div className="text-2xl font-light">(របាំគោះត្រឡោក)</div>
                  </div>
                  <div className="">

                    <Image src="/thumbs/coconut_02.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]"
                      width={500}
                      height={500}
                    ></Image>
                    <Image src="/thumbs/coconut.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:hidden" fill></Image>

                    {/* <Image src="/thumbs/coconut.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image> */}
                  </div>
                </div>
              </Link>


              <Link href="/dances/love-moon">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-[.25] group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    LOVE MOON
                    <div className="text-2xl font-light">(របាំដួងច័ន្ទ្រា)</div>
                  </div>
                  <div className="">

                    <Image src="/thumbs/lovemoon_02.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]"
                      width={500}
                      height={500}
                    ></Image>
                    <Image src="/thumbs/lovemoon.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:hidden" fill></Image>
                  </div>
                </div>
              </Link>


              <Link href="/dances/kane">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    KANE
                    <div className="text-2xl font-light">(របាំគែន)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/kane.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>


              <Link href="/dances/flower">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    FLOWER
                    <div className="text-2xl font-light">(របាំបុប្ផាលោកីយ៏)</div>
                  </div>
                  <div className="">

                    <Image src="/thumbs/flower_02.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]"
                      width={500}
                      height={500}
                    ></Image>
                    <Image src="/thumbs/flower.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:hidden" fill></Image>


                  </div>
                </div>
              </Link>


              <Link href="/dances/blessing">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    BLESSING
                    <div className="text-2xl font-light">(ជូនពរ)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/blessing_02.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]"
                      width={500}
                      height={500}
                    ></Image>
                    <Image src="/thumbs/blessing.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:hidden" fill></Image>
                  </div>
                </div>
              </Link>

              <Link href="/dances/stick">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    STICK
                    <div className="text-2xl font-light">(របាំឱផ្ទៃស្រុកខ្មែរ​ ឬរបាំគោះអង្រែ)</div>
                  </div>
                  <div className="">

                    <Image src="/thumbs/stick_02.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]"
                      width={500}
                      height={500}
                    ></Image>
                    <Image src="/thumbs/stick.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:hidden" fill></Image>
                  </div>
                </div>
              </Link>

              <Link href="/dances/sovann">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    SOVANN MACHA
                    <div className="text-2xl font-light">(សុវណ្ណមច្ឆា)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/sovann.jpg" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>

              <Link href="/dances/phloy-suoy">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    PHLOY SUOY
                    <div className="text-2xl font-light">(ផ្លយ ស៊ូយ)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/phloy.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>


            </div>
          </div>
        </div>
        <div className="pb-[20px]"></div>
      </div>
      <Footer></Footer>
    </main>
  );
}
