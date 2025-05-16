'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed pattern-bg  bg-[#200073] text-white flex justify-center w-full z-[99] top-0 py-3 lg:pt-4 lg:p-3 px-10 ">
        <div className="flex flex-row justify-between w-full max-w-[1040px]">
          <div className="flex  flex-row w-full justify-between lg:items-center">

            <div className="flex lg:hidden flex-row gap-4 mt-2 mb-2">
              <Link href="/" className="flex  flex-row gap-3 pr-3 items-center">
                <Image src="/logo.svg" className="" alt="Top Logo" width={50} height={40}></Image>
              </Link>

            </div>
            <div className="hidden lg:flex flex-row gap-6 mt-2 mb-2 items-center text-lg">
              <div className="rounded-full transition-transform duration-300 group">
                <div className="w-full h-full group-hover:animate-pulse-in-out">
                  <Link href="/" className="flex flex-row gap-3 pr-3 items-center">
                    <Image src="/logo.svg" className="transition-all duration-500 ease-in-out hover:scale-[1.10]" alt="Top Logo" width={50} height={40}></Image>
                  </Link>
                </div>
              </div>

              <div>
                <Link href="/about" className={pathname.split('/')[1] == 'about' ? 'text-[#F28904]' : ''}>About</Link>
              </div>
              <div>
                <Link href="/dances" className={pathname.split('/')[1] == 'dances' ? 'text-[#F28904]' : ''}>Dances</Link>
              </div>
              <div>
                <Link href="/blog" className={pathname.split('/')[1] == 'blog' ? 'text-[#F28904]' : ''}>Blog</Link>
              </div>
              <div>
                <Link href="/events" className={pathname.split('/')[1] == 'events' ? 'text-[#F28904]' : ''}>Events</Link>
              </div>
              <div>
                <Link href="/funding" className={pathname.split('/')[1] == 'funding' ? 'text-[#F28904]' : ''}>Funding</Link>
              </div>
              <div>
                <Link href="/faqs" className={pathname.split('/')[1] == 'faqs' ? 'text-[#F28904]' : ''}>FAQs</Link>
              </div>
              <div>
                <Link href="/contact" className={pathname.split('/')[1] == 'contact' ? 'text-[#F28904]' : ''}>Contact</Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-row lg:items-center gap-2 text-lg">
              <Link href="/donate">
                <div className="bg-[#5E489A] hover:bg-[#9E91C2] shadow-xl text-lg rounded-full text-white py-1 px-6 ml-1">
                  Donate
                </div>
              </Link>
              <Link href="/getinvolved">
                <div className="bg-[#F28904] hover:bg-[#FFC67F] shadow-xl text-lg rounded-full text-white py-1 px-6 ml-1">
                  Get Involved
                </div>
              </Link>
            </div>
            <div className="cursor-pointer lg:hidden pt-6 pr-0" onClick={() => { setShowMenu(!showMenu) }}>
              {
                showMenu ?
                  <Image src="/cross_icon.svg" alt="Cross" className="fill-[#FFFFFF]" width={23} height={23}></Image>
                  :
                  <Image src="/hamburger_icon.svg" className="fill-[#FFFFFF]" alt="Hamburger Icon" width={30} height={30}></Image>
              }
            </div>

          </div>


        </div>

      </div>
      {
        showMenu &&
        <div className="pattern-bg fixed lg:hidden pt-[100px] z-[50] w-full px-10 pb-5 shadow-xl bg-white">
          <div className="flex flex-col text-white w-full gap-5 text-left text-lg">
            <Link href="/about/mission">
              <div className="border-b-2 pb-4 border-[#F28904]">
                About
              </div>
            </Link>
            <Link href="/dances">
              <div className="border-b-2 pb-4 border-[#F28904]">
                Dances
              </div>
            </Link>
            <Link href="/blog">
              <div className="border-b-2 pb-4 border-[#F28904]">
                Blog
              </div>
            </Link>
            <Link href="/events">
              <div className="border-b-2 pb-4 border-[#F28904]">
                Events
              </div>
            </Link>
            <Link href="/faqs">
              <div className="border-b-2 pb-4 border-[#F28904]">
                FAQs
              </div>
            </Link>
            <Link href="/contact">
              <div className="">
                Contact
              </div>
            </Link>
          </div>
          <div>
            <Link href="/donate" className="flex mt-5">
              <div className="bg-[#5E489A] hover:bg-[#9E91C2] shadow-xl text-lg rounded-2xl w-full text-center text-white py-2 px-8 ml-1">
                Donate
              </div>
            </Link>
            <Link href="/getinvolved" className="flex mt-3">
              <div className="bg-[#F28904] hover:bg-[#FFC67F] shadow-xl text-lg rounded-2xl w-full text-center text-white py-2 px-8 ml-1">
                Get Involved
              </div>
            </Link>
          </div>
        </div>
      }
    </div>


  );
}
