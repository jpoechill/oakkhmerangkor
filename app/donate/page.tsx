import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className="flex justify-center text-lg w-full p-5 pt-0 mb-0 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] mb-5">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Donate
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Support Our Mission
              </div>
            </div><br /><br />

            <div>
              Support our cause by making a donation through our secure Stripe payment system. Your generous contribution helps us continue our important work and make a difference in the community.
              <br /><br />
              Thank you for your support and for helping us create a positive impact!
            </div>
            <br /><br />
            <Link href="https://donate.stripe.com/test_cN29Bo6Eh2fS0Ny5kk" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#F28904] text-center shadow-xl text-lg rounded-full text-white py-2 px-6 ml-1">
                Make a Donation with Stripe
              </div>
            </Link>

            <div className="mb-[50px]"></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
