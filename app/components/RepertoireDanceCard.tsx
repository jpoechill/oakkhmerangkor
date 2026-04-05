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
        className="group flex h-full min-h-[4.5rem] items-start gap-3 rounded-xl border border-[#e8e4f2] bg-white px-2.5 py-2.5 transition-colors hover:border-[#e0d8ef] hover:bg-[#faf9fc] sm:min-h-0 sm:gap-4 sm:px-4 sm:py-4"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-white p-2 sm:h-[4.5rem] sm:w-[4.5rem] sm:p-2.5 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
          <Image
            src={SITE_LOGO_SRC}
            alt=""
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 56px, (max-width: 1024px) 72px, 80px"
          />
        </div>
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
