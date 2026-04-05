import type { ReactNode } from "react";

type PanelProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  children: ReactNode;
  /** Softer shell for “projected” / in-development programs */
  variant?: "default" | "projected";
};

export function ProgramOutcomesPanel({
  eyebrow,
  title,
  titleId,
  children,
  variant = "default",
}: PanelProps) {
  const ring =
    variant === "projected"
      ? "ring-1 ring-dashed ring-[#200073]/[0.12]"
      : "ring-1 ring-[#200073]/[0.04]";

  return (
    <div
      className={`relative mx-auto mt-6 max-w-2xl overflow-hidden rounded-xl border border-[#e8e4f2] bg-white shadow-sm ${ring}`}
      role="region"
      aria-labelledby={titleId}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#F28904]/[0.08] blur-xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#5E489A]/[0.1] blur-xl"
        aria-hidden
      />

      <div className="relative flex items-center gap-2.5 border-b border-[#e8e4f2] bg-gradient-to-r from-[#faf9fc] to-white px-4 py-2.5 sm:gap-3 sm:px-5 sm:py-3">
        <div className="h-7 w-0.5 shrink-0 rounded-full bg-[#F28904]" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#F28904]">{eyebrow}</p>
          <h3 id={titleId} className="mt-0.5 font-serif text-base font-bold tracking-tight text-[#200073] sm:text-lg">
            {title}
          </h3>
        </div>
      </div>

      {children}
    </div>
  );
}

const OUTCOME_ICONS = [
  // venues / year-round
  <svg key="a" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"
    />
  </svg>,
  // visibility
  <svg key="b" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // artistic growth
  <svg key="c" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>,
] as const;

const PROJECTED_ICONS = [
  <svg key="p1" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v15.342A9.97 9.97 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v15.342a9.023 9.023 0 0 1-6 2.292m0-14.25v14.25"
    />
  </svg>,
  <svg key="p2" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>,
  <svg key="p3" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>,
] as const;

type ThreeProps = {
  items: readonly [string, string, string];
  mode?: "program" | "projected";
};

export function ProgramOutcomesThreeColumn({ items, mode = "program" }: ThreeProps) {
  const icons = mode === "projected" ? PROJECTED_ICONS : OUTCOME_ICONS;
  const iconStyles: [string, string, string] =
    mode === "projected"
      ? [
          "bg-[#200073]/[0.08] text-[#200073]",
          "bg-[#F28904]/[0.12] text-[#F28904]",
          "bg-[#200073]/[0.08] text-[#200073]",
        ]
      : [
          "bg-[#200073]/[0.08] text-[#200073]",
          "bg-[#F28904]/[0.12] text-[#F28904]",
          "bg-[#200073]/[0.08] text-[#200073]",
        ];

  const iconWrap = "mb-2 flex h-8 w-8 items-center justify-center rounded-lg";

  const cellPad = "px-4 py-5 text-center sm:py-6";

  const textClass = "max-w-[14rem] text-pretty text-xs font-medium leading-snug text-gray-700";

  return (
    <div className="relative grid divide-y divide-[#e8e4f2] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {items.map((text, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center ${cellPad} ${i === 1 ? "bg-[#faf9fc]" : "bg-white"}`}
        >
          <span className={`${iconWrap} ${iconStyles[i]}`} aria-hidden>
            {icons[i]}
          </span>
          <p className={textClass}>{text}</p>
        </div>
      ))}
    </div>
  );
}
