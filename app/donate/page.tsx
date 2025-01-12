import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="font-light bg-white">
        <div className="flex justify-center text-lg w-full p-5 pt-0 mb-0 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] mb-5">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Donate
              </div>
              <div className="text-3xl font-bold tracking-wide">
                {/* Support Our Mission */}
                Preserving Culture, Inspiring Generations
              </div>
            </div>
            <br />

            <div>
              The Oakland Khmer Angkor Dance Troupe is dedicated to preserving the rich heritage of traditional Cambodian dance and passing it on to future generations. Our troupe serves as a cultural bridge, sharing the beauty of classical and folk Khmer dances with the community and beyond.
              <br /><br />
              Your generosity enables us to: <br />
              <ul className="list-disc pl-8 pt-2">
                <li className="pt-2">Provide free or affordable dance classes to youth and adults in the community.</li>
                <li className="pt-2">Sustain traditional costumes, instruments, and teaching materials, keeping our performances authentic.</li>
                <li className="pt-2">Host cultural showcases and community events, celebrating Cambodian heritage and engaging the public.</li>
                <li className="pt-2">Support our talented dancers and instructors, ensuring the continuation of this art form.</li>
              </ul>
              <br />
              Every donation, big or small, makes a difference. By giving, you become a part of a legacy that transcends generations, connecting us to our roots and sharing Khmer culture with the world.
              {/* Support our cause by making a donation through our secure Stripe payment system. Your generous contribution helps us continue our important work and make a difference in the community. */}
              <br /><br />
              {/* Thank you for your support and for helping us create a positive impact! */}
            </div>
            <br />
            {/* <br /><br /> */}
            <div className="grid grid-cols-2 gap-4">

              <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded-full text-white py-2 px-6 ml-1">
                  Donate with Stripe
                </div>
              </Link>

              <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded-full text-white py-2 px-6 ml-1">
                  Donate with Givebutter
                </div>
              </Link>

              <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded-full text-white py-2 px-6 ml-1">
                  Donate with Zeffy
                </div>
              </Link>


              <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] text-center shadow-xl text-lg font-medium rounded-full text-white py-2 px-6 ml-1">
                  Donate with Donorbox
                </div>
              </Link>
            </div>

            <div className="mb-[50px]"></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
