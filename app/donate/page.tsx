import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";
import Script from 'next/script';

export default function Home() {
  return (
    <main>
      {/* <Script src="https://widgets.givebutter.com/latest.umd.cjs?acct=R855gzojCk3J1AEH&p=other" strategy="beforeInteractive" /> */}

      <Header></Header>

      <div className="font-light bg-white">
        <div className="flex justify-center text-md font-light w-full p-5 pt-0 mb-0 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] mb-5">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Donate

                {/* <givebutter-widget id="pzyX6g"></givebutter-widget>
                <givebutter-widget id="paAanp"></givebutter-widget> */}

              </div>
              <div className="text-3xl font-bold tracking-wide">
                {/* Support Our Mission */}
                Support Our Mission
              </div>
            </div>
            <br />
            The Oakland Khmer Angkor Dance Troupe is dedicated to preserving the rich heritage of traditional Cambodian dance and passing it on to future generations. Our troupe serves as a cultural bridge, sharing the beauty of classical and folk Khmer dances with the community and beyond.
            <br />
            <br />
            Every donation, big or small, makes a difference. By giving, you become a part of a legacy that transcends generations, connecting us to our roots and sharing Khmer culture with the world.
            {/* Support our cause by making a donation through our secure Stripe payment system. Your generous contribution helps us continue our important work and make a difference in the community. */}
            <br />
            <br />
            <div className="font-light text-md relative grid grid-cols-1 lg:grid-cols-8 w-full gap-6 lg:gap-10">

              <div className="col-span-8 lg:col-span-5">
                {/* The Oakland Khmer Angkor Dance Troupe is dedicated to preserving the rich heritage of traditional Cambodian dance and passing it on to future generations. Our troupe serves as a cultural bridge, sharing the beauty of classical and folk Khmer dances with the community and beyond. */}
                {/* <br /><br /> */}
                Your generosity enables us to: <br />
                <ul className="list-disc pl-8 pt-2">
                  <li className="pt-2">Provide free or affordable dance classes to youth and adults in the community, fostering inclusivity and skill-building.</li>
                  <li className="pt-2">Sustain traditional costumes, instruments, and teaching materials, keeping our performances authentic.</li>
                  <li className="pt-2">Host cultural showcases and community events, celebrating Cambodian heritage and engaging the public.</li>
                  <li className="pt-2">Support our talented dancers and instructors, ensuring the continuation of this art form.</li>
                  <li className="pt-2">Partner with local and international cultural organizations to promote the exchange of knowledge and performances.</li>
                </ul>
                {/* <br /> */}
                {/* Every donation, big or small, makes a difference. By giving, you become a part of a legacy that transcends generations, connecting us to our roots and sharing Khmer culture with the world. */}

                {/* Thank you for your support and for helping us create a positive impact! */}
              </div>
              <div className="col-span-8 lg:col-span-3 mb-0 lg:mb-4 group bg-cover relative h-0 w-full pb-[100%] hover:cursor-pointer rounded-2xl overflow-hidden">
                <Image src="/getintouch_02.png" alt="thumb" className="bg-contain transition-all duration-500 h-full w-full ease-in-out" fill></Image>
              </div>
            </div>
            <br />
            {/* <br /><br /> */}
            <div className="grid grid-cols-2 gap-4">

              {/* <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded text-white py-2 px-6 ml-1">
                  ❤️ Donate with Stripe
                </div>
              </Link> */}

              <Link href="https://givebutter.com/CyPzgh" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded text-white py-2 px-6 ml-1">
                  ❤️ Donate with Givebutter
                </div>
              </Link>
              {/* <givebutter-widget id="pzyX6g"></givebutter-widget> */}

              {/* 
              <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded text-white py-2 px-6 ml-1">
                  ❤️ Donate with Zeffy
                </div>
              </Link>


              <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded text-white py-2 px-6 ml-1">
                  ❤️ Donate with Donorbox
                </div>
              </Link> */}
            </div>

            <div className="mb-[50px]"></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
