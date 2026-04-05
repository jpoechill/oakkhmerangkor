'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { smoothScrollToId } from "@/lib/smooth-scroll";

const ABOUT_SUBLINKS = [
  { href: "/about#mission", label: "Our Mission", hash: "mission" },
  { href: "/about#history", label: "Our History", hash: "history" },
  { href: "/about#leadership", label: "Leadership", hash: "leadership" },
] as const;

const COMMUNITY_SUBLINKS = [
  { href: "/profiles", label: "Dancers & Teachers" },
  { href: "/events", label: "Upcoming Events" },
  { href: "/blog", label: "Past Events" },
] as const;

const PROGRAMS_SUBLINKS = [
  {
    href: "/programs#annual-performance-program",
    label: "Annual Performance Program",
    hash: "annual-performance-program",
  },
  {
    href: "/programs#community-performances",
    label: "Community Performances",
    hash: "community-performances",
  },
  {
    href: "/programs#khmer-language-classes",
    label: "Khmer Language Classes",
    hash: "khmer-language-classes",
  },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [hash, setHash] = useState("");

  const syncHash = useCallback(() => {
    setHash(typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "");
  }, []);

  useEffect(() => {
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname, syncHash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setShowMenu(false);
    setMobileAboutOpen(false);
    setMobileCommunityOpen(false);
    setMobileProgramsOpen(false);
  }, [pathname]);

  const isAboutActive = pathname === '/about' || pathname.startsWith('/about/');

  const isProgramsActive = pathname === "/programs";

  const isCommunityActive =
    pathname === "/community" ||
    pathname === "/profiles" ||
    pathname.startsWith("/profiles/") ||
    pathname === "/events" ||
    pathname === "/blog" ||
    pathname.startsWith("/blog/");

  const isActiveLink = (href: string) => {
    const seg = href.split('/')[1];
    return pathname.split('/')[1] === seg;
  };

  const isAboutSubActive = (h: string) =>
    pathname === '/about' && hash === h;

  const isProgramsSubActive = (h: string) => pathname === "/programs" && hash === h;

  const isCommunitySubActive = (href: string) => {
    if (href === "/profiles") return pathname === "/profiles" || pathname.startsWith("/profiles/");
    if (href === "/events") return pathname === "/events";
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    return false;
  };

  /** Same-page /about → section: Next Link may not scroll; handle explicitly. */
  const goAboutSection = (sectionHash: string, closeMobileMenu: boolean) => {
    if (closeMobileMenu) setShowMenu(false);
    if (pathname !== '/about') return;
    window.history.pushState(null, '', `#${sectionHash}`);
    setHash(sectionHash);
    requestAnimationFrame(() => {
      smoothScrollToId(sectionHash);
    });
  };

  const goProgramsSection = (sectionHash: string, closeMobileMenu: boolean) => {
    if (closeMobileMenu) setShowMenu(false);
    if (pathname !== "/programs") return;
    window.history.pushState(null, "", `#${sectionHash}`);
    setHash(sectionHash);
    requestAnimationFrame(() => {
      smoothScrollToId(sectionHash);
    });
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 pattern-bg transition-all duration-300 ${isScrolled
        ? 'bg-gradient-to-br from-[#200073]/95 via-[#2d0a7a]/95 to-[#1a0056]/95 backdrop-blur-md shadow-lg'
        : 'bg-gradient-to-br from-[#200073] via-[#2d0a7a] to-[#1a0056]'
        }`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">

            <div className="flex items-center space-x-10 min-w-0">
              <Link href="/" className="flex shrink-0 items-center group">
                <Image
                  src="/logo.svg"
                  alt="Oakland Khmer Angkor Dance Troupe"
                  width={50}
                  height={50}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main">
                <div className="relative group/aboutdd">
                  <Link
                    href="/about"
                    className={`relative inline-flex items-center gap-0.5 whitespace-nowrap text-white text-[1.05rem] font-medium transition-all duration-200 ease-out hover:text-[#F28904] hover:translate-x-0.5
                      ${isAboutActive ? 'text-[#F28904]' : ''}
                    `}
                  >
                    About
                    <span
                      className="ml-1 inline-block origin-center translate-y-px text-[1.15rem] font-semibold leading-none text-inherit drop-shadow-[0_0_1px_rgba(255,255,255,0.35)] transition-transform duration-300 ease-out group-hover/aboutdd:-rotate-180 group-focus-within/aboutdd:-rotate-180"
                      aria-hidden
                    >
                      ▾
                    </span>
                    {isAboutActive && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#F28904]" />
                    )}
                  </Link>
                  <div
                    className="invisible absolute left-0 top-full z-[60] min-w-[12rem] pt-2 opacity-0 transition-all duration-150 group-hover/aboutdd:visible group-hover/aboutdd:opacity-100 group-focus-within/aboutdd:visible group-focus-within/aboutdd:opacity-100"
                    role="menu"
                    aria-label="About submenu"
                  >
                    <div className="min-w-[12rem] overflow-hidden rounded-xl border border-[#e8e4f2] bg-white/95 py-2 shadow-2xl backdrop-blur-md">
                      {ABOUT_SUBLINKS.map((item) => (
                        <Link
                          key={item.hash}
                          href={item.href}
                          role="menuitem"
                          onClick={(e) => {
                            if (pathname === '/about') {
                              e.preventDefault();
                              goAboutSection(item.hash, false);
                            }
                          }}
                          className={`block px-4 py-2.5 text-[0.95rem] font-medium transition-colors hover:bg-[#f5f2fb] hover:text-[#F28904] ${
                            isAboutSubActive(item.hash) ? "text-[#F28904]" : "text-[#200073]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group/programsdd">
                  <Link
                    href="/programs"
                    className={`relative inline-flex items-center gap-0.5 whitespace-nowrap text-white text-[1.05rem] font-medium transition-all duration-200 ease-out hover:text-[#F28904] hover:translate-x-0.5
                      ${isProgramsActive ? "text-[#F28904]" : ""}
                    `}
                  >
                    Programs
                    <span
                      className="ml-1 inline-block origin-center translate-y-px text-[1.15rem] font-semibold leading-none text-inherit drop-shadow-[0_0_1px_rgba(255,255,255,0.35)] transition-transform duration-300 ease-out group-hover/programsdd:-rotate-180 group-focus-within/programsdd:-rotate-180"
                      aria-hidden
                    >
                      ▾
                    </span>
                    {isProgramsActive && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#F28904]" />
                    )}
                  </Link>
                  <div
                    className="invisible absolute left-0 top-full z-[60] w-max pt-2 opacity-0 transition-all duration-150 group-hover/programsdd:visible group-hover/programsdd:opacity-100 group-focus-within/programsdd:visible group-focus-within/programsdd:opacity-100"
                    role="menu"
                    aria-label="Programs submenu"
                  >
                    <div className="w-max overflow-hidden rounded-xl border border-[#e8e4f2] bg-white/95 py-2 shadow-2xl backdrop-blur-md">
                      {PROGRAMS_SUBLINKS.map((item) => (
                        <Link
                          key={item.hash}
                          href={item.href}
                          role="menuitem"
                          onClick={(e) => {
                            if (pathname === "/programs") {
                              e.preventDefault();
                              goProgramsSection(item.hash, false);
                            }
                          }}
                          className={`block whitespace-nowrap px-4 py-2.5 text-[0.95rem] font-medium transition-colors hover:bg-[#f5f2fb] hover:text-[#F28904] ${
                            isProgramsSubActive(item.hash) ? "text-[#F28904]" : "text-[#200073]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/dances"
                  className={`relative inline-block whitespace-nowrap text-white text-[1.05rem] hover:text-[#F28904] hover:translate-x-0.5 transition-all duration-200 ease-out font-medium
                    ${isActiveLink("/dances") ? "text-[#F28904]" : ""}
                  `}
                >
                  Performances
                  {isActiveLink("/dances") && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F28904] rounded-full" />
                  )}
                </Link>

                <Link
                  href="/impact"
                  className={`relative inline-block whitespace-nowrap text-white text-[1.05rem] hover:text-[#F28904] hover:translate-x-0.5 transition-all duration-200 ease-out font-medium
                    ${isActiveLink("/impact") ? "text-[#F28904]" : ""}
                  `}
                >
                  Impact
                  {isActiveLink("/impact") && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F28904] rounded-full" />
                  )}
                </Link>

                <div className="relative group/communitydd">
                  <Link
                    href="/community"
                    className={`relative inline-flex items-center gap-0.5 whitespace-nowrap text-white text-[1.05rem] font-medium transition-all duration-200 ease-out hover:text-[#F28904] hover:translate-x-0.5
                      ${isCommunityActive ? "text-[#F28904]" : ""}
                    `}
                  >
                    Community
                    <span
                      className="ml-1 inline-block origin-center translate-y-px text-[1.15rem] font-semibold leading-none text-inherit drop-shadow-[0_0_1px_rgba(255,255,255,0.35)] transition-transform duration-300 ease-out group-hover/communitydd:-rotate-180 group-focus-within/communitydd:-rotate-180"
                      aria-hidden
                    >
                      ▾
                    </span>
                    {isCommunityActive && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#F28904]" />
                    )}
                  </Link>
                  <div
                    className="invisible absolute left-0 top-full z-[60] min-w-[12rem] pt-2 opacity-0 transition-all duration-150 group-hover/communitydd:visible group-hover/communitydd:opacity-100 group-focus-within/communitydd:visible group-focus-within/communitydd:opacity-100"
                    role="menu"
                    aria-label="Community submenu"
                  >
                    <div className="min-w-[12rem] overflow-hidden rounded-xl border border-[#e8e4f2] bg-white/95 py-2 shadow-2xl backdrop-blur-md">
                      {COMMUNITY_SUBLINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className={`block px-4 py-2.5 text-[0.95rem] font-medium transition-colors hover:bg-[#f5f2fb] hover:text-[#F28904] ${
                            isCommunitySubActive(item.href) ? "text-[#F28904]" : "text-[#200073]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div className="hidden lg:flex shrink-0 items-center gap-3">
              <Link href="/support">
                <div className="min-w-[140px] xl:min-w-[160px] whitespace-nowrap text-center bg-gradient-to-r from-[#5E489A] to-[#7B5FB8] hover:from-[#7B5FB8] hover:to-[#9E91C2] 
                  text-white font-medium px-5 xl:px-6 py-3 rounded-full transition-all duration-300 
                  hover:shadow-lg hover:scale-105 transform">
                  Support Us
                </div>
              </Link>
              <Link href="/getinvolved">
                <div className="min-w-[140px] xl:min-w-[160px] whitespace-nowrap text-center bg-gradient-to-r from-[#F28904] to-[#FF9F1A] hover:from-[#FF9F1A] hover:to-[#FFC67F] 
                  text-white font-medium px-5 xl:px-6 py-3 rounded-full transition-all duration-300 
                  hover:shadow-lg hover:scale-105 transform">
                  Book a Performance
                </div>
              </Link>
            </div>

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

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${showMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowMenu(false)}
        ></div>

        <div className={`absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-gradient-to-br from-[#200073] via-[#2d0a7a] to-[#1a0056] 
          pattern-bg shadow-2xl transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-24">

            <nav className="space-y-1 mb-8" aria-label="Mobile main">
              <div className="border-b border-white/10 pb-2 mb-2">
                <div className="flex w-full items-center gap-1 py-2 pl-4 pr-2">
                  <Link
                    href="/about"
                    onClick={() => setShowMenu(false)}
                    className={`flex-1 text-left text-[1.1rem] font-medium transition-colors hover:text-[#F28904] ${
                      isAboutActive ? "text-[#F28904]" : "text-white"
                    }`}
                  >
                    About
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileAboutOpen((o) => !o)}
                    className="shrink-0 rounded p-2 text-white hover:bg-white/10 hover:text-[#F28904]"
                    aria-expanded={mobileAboutOpen}
                    aria-label={mobileAboutOpen ? "Collapse About sections" : "Expand About sections"}
                  >
                    <span
                      className={`inline-block origin-center text-xl font-semibold leading-none text-inherit drop-shadow-[0_0_1px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out ${
                        mobileAboutOpen ? "rotate-0" : "-rotate-90"
                      }`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>
                </div>
                {mobileAboutOpen && (
                  <div className="mt-1 space-y-1 border-l-2 border-[#F28904]/40 pl-4 ml-4">
                    {ABOUT_SUBLINKS.map((item) => (
                      <Link
                        key={item.hash}
                        href={item.href}
                        onClick={(e) => {
                          if (pathname === '/about') {
                            e.preventDefault();
                            goAboutSection(item.hash, true);
                          } else {
                            setShowMenu(false);
                          }
                        }}
                        className={`block py-2 text-base font-medium transition-colors hover:text-[#F28904] ${
                          isAboutSubActive(item.hash) ? "text-[#F28904]" : "text-white/90"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-white/10 pb-2 mb-2">
                <div className="flex w-full items-center gap-1 py-2 pl-4 pr-2">
                  <Link
                    href="/programs"
                    onClick={() => setShowMenu(false)}
                    className={`flex-1 text-left text-[1.1rem] font-medium transition-colors hover:text-[#F28904] ${
                      isProgramsActive ? "text-[#F28904]" : "text-white"
                    }`}
                  >
                    Programs
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileProgramsOpen((o) => !o)}
                    className="shrink-0 rounded p-2 text-white hover:bg-white/10 hover:text-[#F28904]"
                    aria-expanded={mobileProgramsOpen}
                    aria-label={mobileProgramsOpen ? "Collapse Programs sections" : "Expand Programs sections"}
                  >
                    <span
                      className={`inline-block origin-center text-xl font-semibold leading-none text-inherit drop-shadow-[0_0_1px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out ${
                        mobileProgramsOpen ? "rotate-0" : "-rotate-90"
                      }`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>
                </div>
                {mobileProgramsOpen && (
                  <div className="mt-1 space-y-1 border-l-2 border-[#F28904]/40 pl-4 ml-4">
                    {PROGRAMS_SUBLINKS.map((item) => (
                      <Link
                        key={item.hash}
                        href={item.href}
                        onClick={(e) => {
                          if (pathname === "/programs") {
                            e.preventDefault();
                            goProgramsSection(item.hash, true);
                          } else {
                            setShowMenu(false);
                          }
                        }}
                        className={`block py-2 text-base font-medium transition-colors hover:text-[#F28904] ${
                          isProgramsSubActive(item.hash) ? "text-[#F28904]" : "text-white/90"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/dances"
                onClick={() => setShowMenu(false)}
                className={`block border-b border-white/10 py-3 pl-4 text-[1.15rem] font-medium transition-all duration-200 ease-out ${
                  isActiveLink("/dances")
                    ? "text-[#F28904] border-l-4 border-[#F28904]"
                    : "text-white hover:text-[#F28904] hover:translate-x-1"
                }`}
              >
                Performances
              </Link>

              <Link
                href="/impact"
                onClick={() => setShowMenu(false)}
                className={`block border-b border-white/10 py-3 pl-4 text-[1.15rem] font-medium transition-all duration-200 ease-out ${
                  isActiveLink("/impact")
                    ? "text-[#F28904] border-l-4 border-[#F28904]"
                    : "text-white hover:text-[#F28904] hover:translate-x-1"
                }`}
              >
                Impact
              </Link>

              <div className="border-b border-white/10 pb-2 mb-2">
                <div className="flex w-full items-center gap-1 py-2 pl-4 pr-2">
                  <Link
                    href="/community"
                    onClick={() => setShowMenu(false)}
                    className={`flex-1 text-left text-[1.1rem] font-medium transition-colors hover:text-[#F28904] ${
                      isCommunityActive ? "text-[#F28904]" : "text-white"
                    }`}
                  >
                    Community
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileCommunityOpen((o) => !o)}
                    className="shrink-0 rounded p-2 text-white hover:bg-white/10 hover:text-[#F28904]"
                    aria-expanded={mobileCommunityOpen}
                    aria-label={
                      mobileCommunityOpen ? "Collapse Community links" : "Expand Community links"
                    }
                  >
                    <span
                      className={`inline-block origin-center text-xl font-semibold leading-none text-inherit drop-shadow-[0_0_1px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out ${
                        mobileCommunityOpen ? "rotate-0" : "-rotate-90"
                      }`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>
                </div>
                {mobileCommunityOpen && (
                  <div className="mt-1 space-y-1 border-l-2 border-[#F28904]/40 pl-4 ml-4">
                    {COMMUNITY_SUBLINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setShowMenu(false)}
                        className={`block py-2 text-base font-medium transition-colors hover:text-[#F28904] ${
                          isCommunitySubActive(item.href) ? "text-[#F28904]" : "text-white/90"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="space-y-4">
              <Link href="/support" onClick={() => setShowMenu(false)}>
                <div className="min-w-full text-center bg-gradient-to-r from-[#5E489A] to-[#7B5FB8] hover:from-[#7B5FB8] hover:to-[#9E91C2] 
                  text-white font-medium py-3 px-6 rounded-full transition-all duration-300 
                  hover:shadow-lg">
                  Support Us
                </div>
              </Link>
              <Link href="/getinvolved" onClick={() => setShowMenu(false)}>
                <div className="min-w-full text-center bg-gradient-to-r from-[#F28904] to-[#FF9F1A] hover:from-[#FF9F1A] hover:to-[#FFC67F] 
                  text-white font-medium py-3 px-6 rounded-full transition-all duration-300 
                  hover:shadow-lg">
                  Book a Performance
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
