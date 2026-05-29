import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

export function ServiceCard({
  num,
  title,
  icon: Icon,
  delay = 0,
}: {
  num: number;
  title: string;
  icon: LucideIcon;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full border-2 border-[color:var(--color-line-strong)] bg-[color:var(--color-bg-elev)] p-7 lg:p-9 hover:border-[color:var(--color-accent)] transition-colors duration-500 flex flex-col">
        <div className="flex items-center justify-between">
          <span
            className="inline-flex h-12 w-12 items-center justify-center bg-[color:var(--color-accent)] text-white"
            aria-hidden
          >
            <Icon size={22} strokeWidth={2.5} />
          </span>
          <span className="mono text-[11px] tracking-[0.22em] text-[color:var(--color-fg-soft)] pt-1">
            /{String(num).padStart(2, "0")}
          </span>
        </div>
        <p className="h-display text-[19px] md:text-[22px] lg:text-[24px] leading-[1.12] tracking-tight mt-9 text-[color:var(--color-fg)]">
          {title}
        </p>
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[color:var(--color-accent)] group-hover:w-full transition-[width] duration-700 ease-out" />
      </div>
    </Reveal>
  );
}
