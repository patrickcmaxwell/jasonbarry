import { Check } from "lucide-react";
import Reveal from "./Reveal";

export function CheckList({
  items,
  variant = "check",
  cols = 1,
  className = "",
}: {
  items: string[];
  variant?: "check" | "dash" | "number";
  cols?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={`grid gap-y-0 ${cols === 2 ? "md:grid-cols-2 md:gap-x-12" : ""} ${className}`}
    >
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 40} as="li" className="border-t border-[color:var(--color-line)] py-4 flex items-start gap-4">
          {variant === "check" && <Check size={16} className="mt-1.5 shrink-0 text-[color:var(--color-fg)]" />}
          {variant === "dash" && <span className="mt-3 inline-block h-px w-4 shrink-0 bg-[color:var(--color-fg-soft)]" />}
          {variant === "number" && (
            <span className="h-display text-[20px] leading-none text-[color:var(--color-fg-soft)] w-8 shrink-0 mt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <span className="body text-[15px] lg:text-[16px] leading-[1.65] text-[color:var(--color-fg-dim)]">{item}</span>
        </Reveal>
      ))}
    </ul>
  );
}
