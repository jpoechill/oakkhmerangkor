'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/dances", label: "Dances" },
    { href: "/profiles", label: "Profiles" },
    { href: "/blog", label: "Blog" },
    { href: "/events", label: "Events" },
    { href: "/funding", label: "Funding" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" }
  ];

  const isActiveLink = (href) => {
    return pathname.split('/')[1] === href.split('/')[1];
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 pattern-bg transition-all duration-300 ${isScrolled
        ? 'bg-gradient-to-br from-[#200073]/95 via-[#2d0a7a]/95 to-[#1a0056]/95 backdrop-blur-md shadow-lg'
        : 'bg-gradient-to-br from-[#200073] via-[#2d0a7a] to-[#1a0056]'
        }`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Left side: Logo + Nav */}
            <div className="flex items-center space-x-10">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo.svg"
                  alt="Oakland Khmer Angkor Dance Troupe"
                  width={50}
                  height={50}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-white text-[1.05rem] hover:text-[#F28904] transition-colors duration-200 font-medium
                      ${isActiveLink(link.href) ? 'text-[#F28904]' : ''}
                    `}
                  >
                    {link.label}
                    {isActiveLink(link.href) && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F28904] rounded-full"></div>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right side: CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/donate">
                <div className="min-w-[160px] text-center bg-gradient-to-r from-[#5E489A] to-[#7B5FB8] hover:from-[#7B5FB8] hover:to-[#9E91C2] 
                  text-white font-medium px-6 py-3 rounded-full transition-all duration-300 
                  hover:shadow-lg hover:scale-105 transform">
                  Donate
                </div>
              </Link>
              <Link href="/getinvolved">
                <div className="min-w-[160px] text-center bg-gradient-to-r from-[#F28904] to-[#FF9F1A] hover:from-[#FF9F1A] hover:to-[#FFC67F] 
                  text-white font-medium px-6 py-3 rounded-full transition-all duration-300 
                  hover:shadow-lg hover:scale-105 transform">
                  Get Involved
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${showMenu ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${showMenu ? 'opacity-0' : 'top-3'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${showMenu ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${showMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowMenu(false)}
        ></div>

        <div className={`absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-gradient-to-br from-[#200073] via-[#2d0a7a] to-[#1a0056] 
          pattern-bg shadow-2xl transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-24">

            {/* Mobile Navigation Links */}
            <nav className="space-y-6 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-[1.25rem] font-medium transition-colors duration-200 
                    ${isActiveLink(link.href)
                      ? 'text-[#F28904] border-l-4 border-[#F28904] pl-4'
                      : 'text-white hover:text-[#F28904] hover:translate-x-2 pl-4'
                    }
                  `}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="space-y-4">
              <Link href="/donate" onClick={() => setShowMenu(false)}>
                <div className="min-w-full text-center bg-gradient-to-r from-[#5E489A] to-[#7B5FB8] hover:from-[#7B5FB8] hover:to-[#9E91C2] 
                  text-white font-medium py-3 px-6 rounded-full transition-all duration-300 
                  hover:shadow-lg">
                  Donate
                </div>
              </Link>
              <Link href="/getinvolved" onClick={() => setShowMenu(false)}>
                <div className="min-w-full text-center bg-gradient-to-r from-[#F28904] to-[#FF9F1A] hover:from-[#FF9F1A] hover:to-[#FFC67F] 
                  text-white font-medium py-3 px-6 rounded-full transition-all duration-300 
                  hover:shadow-lg">
                  Get Involved
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
