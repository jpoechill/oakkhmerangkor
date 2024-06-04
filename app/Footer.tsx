import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row justify-center pattern-bg bg-[#200073] text-white w-full py-10 px-10 mt-0">
      {/* <div className="flex mb-10">
        <Link href="/" className="lg:hidden">
          <Image src="/logo.svg" alt="Logo Basic" width={50} height={300}></Image>
        </Link>
      </div> */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1040px]">
        <div className="flex flex-row gap-10">
          <Link href="/" className="">
            <Image src="/logo.svg" alt="Logo Basic" width={50} height={300}></Image>
          </Link>
          <div className="pl-0 grid grid-cols-3 lg:grid-cols-2 text-lg gap-x-10 h-min gap-y-10">
            <div>
              About
            </div>
            <div>
              Dances
            </div>
            <div>Events</div>
            <div>FAQs</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="lg:text-right">
          <div className="flex flex-row pt-10 lg:pt-0 lg:flex-col w-full items-end gap-5 justify-start lg:justify-end">
            <Link href="/donate">
              <div className="bg-[#5E489A] w-min shadow-xl text-lg rounded-full text-white py-1 px-6 ml-1">
                Donate
              </div>
            </Link>
            <Link href="/getinvolved">
              <div className="bg-[#F28904] w-min whitespace-nowrap shadow-xl text-lg rounded-full text-white py-1 px-6 ml-1">
                Get Involved
              </div>
            </Link>
          </div>
          <br /><br />
          <Image src="/social-facebook.svg" className="inline mr-7" alt="Facebook Logo" width={40} height={30}></Image>
          <Image src="/social-instagram.svg" className="inline" alt="Instagram Logo" width={40} height={30}></Image>
          <br /><br />
          <div className="hidden lg:block">Oakland Khmer Angkor Dance Troupe © 2024</div>
        </div>

      </div>
      <br /><br />
      <div className="lg:hidden text-sm">Oakland Khmer Angkor Dance Troupe © 2024</div>

    </div>
  );
}
