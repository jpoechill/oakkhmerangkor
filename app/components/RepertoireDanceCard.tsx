import Image from "next/image";
import Link from "next/link";
import type { RepertoireDance } from "@/lib/dances-repertoire";

const SITE_LOGO_SRC = "/logo.svg";

/**
 * Single repertoire row: site logo thumbnail + English + Khmer + arrow.
 * Shared by /dances and the homepage Our Performances list.
 */
export default function RepertoireDanceCard({ dance }: { dance: RepertoireDance }) {
  return (
    <li className="min-w-0">
      <Link
        href={dance.href}
        aria-label={`${dance.title}, ${dance.khmer}`}
        className="group flex h-full min-h-[3.5rem] items-center gap-3 overflow-visible rounded-xl border border-[#e8e4f2] bg-white px-2.5 py-2.5 transition-colors hover:border-[#e0d8ef] hover:bg-[#faf9fc] sm:min-h-0 sm:gap-4 sm:px-4 sm:py-4"
      >
        <span className="relative z-0 flex shrink-0 items-center group-hover:z-10">
          <Image
            src={SITE_LOGO_SRC}
            alt=""
            width={50}
            height={50}
            className="transition-all duration-300 group-hover:scale-110"
          />
        </span>
        <div className="min-w-0 flex-1 py-0.5">
          <span className="block font-serif text-base font-bold leading-tight tracking-tight text-[#1a1a1a] transition-colors group-hover:text-[#200073] sm:text-lg lg:text-xl">
            {dance.title}
          </span>
          <span className="mt-0.5 block text-sm font-medium leading-snug tracking-wide text-gray-700 sm:mt-1 sm:text-[0.9375rem] lg:text-base">
            {dance.khmer}
          </span>
        </div>
        <span
          className="hidden shrink-0 self-center font-light text-[#F28904] opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100 sm:block sm:text-lg"
          aria-hidden
        >
          →
        </span>
      </Link>
    </li>
  );
}
