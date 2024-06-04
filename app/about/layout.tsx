'use client';

import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 pb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">About</div>
              <div className="text-3xl font-bold tracking-wide">
                Our Journey and Vision
              </div>
            </div>

            <div className="flex flex-row mt-10 justify-center gap-x-[40px] mb-4 text-lg">
              <div>
                <Link href="/about" className={pathname === '/about' ? 'text-[#F28904]' : ''}>Mission</Link>
              </div>
              <div>
                <Link href="/about/history" className={pathname === '/about/history' ? 'text-[#F28904]' : ''}>History</Link></div>
              <div>
                <Link href="/about/leadership" className={pathname === '/about/leadership' ? 'text-[#F28904]' : ''}>Leadership</Link>
              </div>
              <div>
                <Link href="/about/art" className={pathname === '/about/art' ? 'text-[#F28904]' : ''}>Art</Link>
              </div>
            </div>

            <hr />

            <br />
            <div className="text-lg">

              {children}
            </div>
          </div>
        </div>


        <div className="pb-[20px]"></div>
      </div>
      <Footer></Footer>
    </main>
  )
}