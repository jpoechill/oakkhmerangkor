import type { RepertoireDance } from "@/lib/dances-repertoire";
import RepertoireDanceCard from "./RepertoireDanceCard";

const DEFAULT_LIST =
  "grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4";

type Props = {
  dances: RepertoireDance[];
  /** Merged with default grid classes */
  className?: string;
  ariaLabel?: string;
};

/**
 * Two-column grid (from `sm`) of {@link RepertoireDanceCard} rows — same layout as /dances.
 */
export default function RepertoireDanceGrid({ dances, className = "", ariaLabel }: Props) {
  return (
    <ul className={[DEFAULT_LIST, className].filter(Boolean).join(" ")} aria-label={ariaLabel}>
      {dances.map((d) => (
        <RepertoireDanceCard key={d.href} dance={d} />
      ))}
    </ul>
  );
}
