import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#200073] via-[#2d0a7a] to-[#1a0056] pattern-bg text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image src="/logo.svg" alt="Oakland Khmer Angkor Dance Troupe" width={50} height={50} />
            </Link>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Preserving and celebrating Khmer cultural heritage through traditional dance,
              connecting communities and inspiring future generations.
            </p>

            {/* Flag Icons */}
            <div className="flex items-center gap-3 mb-6">
              <Image src="/flags/krom.png" width={32} height={24} alt="Khmer Krom Flag" className="rounded-sm" />
              <Image src="/flags/cam.png" width={32} height={24} alt="Cambodia Flag" className="rounded-sm" />
              <Image src="/flags/usa.png" width={32} height={24} alt="USA Flag" className="rounded-sm" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                { href: "/about", label: "About" },
                { href: "/dances", label: "Dances" },
                { href: "/profiles", label: "Profiles" },
                { href: "/blog", label: "Blog" },
                { href: "/events", label: "Events" },
                { href: "/funding", label: "Funding" },
                { href: "/faqs", label: "FAQs" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 ease-out font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 text-white">Get Involved</h3>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <Link href="/donate" className="block">
                <div className="bg-gradient-to-r from-[#5E489A] to-[#7B5FB8] hover:from-[#7B5FB8] hover:to-[#9E91C2] 
                               text-center rounded-full py-3 px-6 font-medium transition-all duration-300 
                               hover:shadow-lg hover:scale-105 transform text-white hover:text-gray-100">
                  Donate
                </div>
              </Link>
              <Link href="/getinvolved" className="block">
                <div className="bg-gradient-to-r from-[#F28904] to-[#FF9F1A] hover:from-[#FF9F1A] hover:to-[#FFC67F] 
                               text-center rounded-full py-3 px-6 font-medium transition-all duration-300 
                               hover:shadow-lg hover:scale-105 transform text-white hover:text-gray-100">
                  Get Involved
                </div>
              </Link>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="https://www.gofundme.com/f/oakkhmerangkor" target="_blank"
                  className="hover:scale-110 transition-transform duration-200">
                  <Image src="/gofundme_logo.svg" alt="GoFundMe" width={120} height={24} className="opacity-90 hover:opacity-100" />
                </Link>
              </div>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/profile.php?id=61571557875106" target="_blank"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200">
                  <Image src="/social-facebook.svg" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/oakkhmerangkor/" target="_blank"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200">
                  <Image src="/social-instagram.svg" alt="Instagram" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-white font-medium">Oakland Khmer Angkor Dance Troupe © 2025</p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-400">
                Media Credits: Alvaro Batista, Sek Meas, Samphan Rith, Chett Bullock
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}