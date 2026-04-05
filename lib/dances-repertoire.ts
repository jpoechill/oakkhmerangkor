/**
 * Single source for /dances and homepage “Our Performances”.
 * Order and grouping match the Performances page (classical vs folk).
 */
export type RepertoireDance = {
  href: string;
  title: string;
  khmer: string;
  /** Used by homepage HoverVideoThumbnail */
  imageSrc: string;
};

export const CLASSICAL_DANCES: RepertoireDance[] = [
  {
    href: "/dances/apsara",
    title: "Apsara",
    khmer: "អប្សរា",
    imageSrc: "/thumbs/apsara.jpg",
  },
  {
    href: "/dances/sovann",
    title: "Sovann Macha",
    khmer: "សុវណ្ណមច្ឆា",
    imageSrc: "/thumbs/sovann.jpg",
  },
  {
    href: "/dances/blessing",
    title: "Blessing",
    khmer: "ជូនពរ",
    imageSrc: "/thumbs/blessing_02.png",
  },
  {
    href: "/dances/love-moon",
    title: "Love Moon",
    khmer: "របាំដួងច័ន្ទ្រា",
    imageSrc: "/thumbs/lovemoon_02.png",
  },
];

export const FOLK_DANCES: RepertoireDance[] = [
  {
    href: "/dances/coconut",
    title: "Coconut",
    khmer: "របាំគោះត្រឡោក",
    imageSrc: "/thumbs/coconut_02.png",
  },
  {
    href: "/dances/kane",
    title: "Kane",
    khmer: "របាំគែន",
    imageSrc: "/thumbs/kane.png",
  },
  {
    href: "/dances/flower",
    title: "Flower",
    khmer: "របាំបុប្ផាលោកីយ៏",
    imageSrc: "/thumbs/flower_02.png",
  },
  {
    href: "/dances/stick",
    title: "Stick",
    khmer: "របាំឱផ្ទៃស្រុកខ្មែរ​ ឬរបាំគោះអង្រែ",
    imageSrc: "/thumbs/stick_02.png",
  },
  {
    href: "/dances/phloy-suoy",
    title: "Phloy Suoy",
    khmer: "ផ្លយ ស៊ូយ",
    imageSrc: "/thumbs/phloy.png",
  },
];
