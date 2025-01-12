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
        <div className="flex justify-center w-full p-5 pt-0 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
            <div className="text-center animate-[fade-me-in_s_ease-in-out]">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">Contact</div>
              <div className="text-3xl font-bold tracking-wide">
                Get in Touch with Us
              </div>
            </div><br /><br />

            <div className="font-light text-md relative grid grid-cols-1 lg:grid-cols-8 w-full gap-10">
              <div className="col-span-4 group relative h-full w-full pb-[100%] hover:cursor-pointer rounded-2xl overflow-hidden">
                <Image src="/getintouch.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
              </div>
              <div className="col-span-4">
                We&apos;re always ready to connect with you!
                <br /><br />
                Whether you have questions about our dances, or want to get involved, our team is here to provide the support you need.
                <br /><br />
                {/* We value every inquiry and strive to enhance your experience with prompt and personalized service. */}
                {/* <br /><br /> */}
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <div className="font-bold mb-2">
                      Email
                    </div>
                    oakkhmerangkor@gmail.com <br /><br />
                  </div>
                  <div>
                    <div className="font-bold mb-2">
                      Phone
                    </div>
                    510-555-1234  <br /><br />
                  </div>
                  <div>

                    <div className="font-bold mb-4">
                      Follow Us
                    </div>
                    <Link href="https://www.facebook.com/profile.php?id=61571557875106" target="_new">
                      <Image src="/social-facebook_blk.svg" className="inline mr-7" alt="Facebook Logo" width={40} height={30}></Image>
                    </Link>
                    <Link href="https://www.instagram.com/oakkhmerangkor/" target="_new">
                      <Image src="/social-instagram_blk.svg" className="inline" alt="Instagram Logo" width={40} height={30}></Image>
                    </Link>
                  </div>
                </div>
              </div>


            </div>
            {/* <div className="flex flex-row justify-center gap-x-[40px] mt-4 mb-4 text-lg">
            <div>
              <Link href="/contact/electronic" className={pathname === '/about/electronic' ? 'text-[#007AFF]' : ''}>Electronic</Link>
            </div>
            <div>
              <Link href="/contact/telephone" className={pathname === '/about/telephone' ? 'text-[#007AFF]' : ''}>Telephone</Link></div>
            <div>
              <Link href="/contact/offices" className={pathname === '/about/offices' ? 'text-[#007AFF]' : ''}>Offices</Link>
            </div>
            <div>
              <Link href="/contact/careers" className={pathname === '/about/careers' ? 'text-[#007AFF]' : ''}>Careers</Link>
            </div>
          </div> */}
            {/* <hr /> */}

            <br /><br />
            {/* {children} */}

            <div className="pb-[25px]"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  )
}