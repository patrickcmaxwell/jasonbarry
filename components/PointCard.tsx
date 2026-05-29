import { Check, X } from "lucide-react";
import Reveal from "./Reveal";

export function PointCard({
  num,
  text,
  variant = "fit",
  tone = "paper",
  delay = 0,
}: {
  num: number;
  text: string;
  variant?: "fit" | "unfit";
  tone?: "paper" | "dark";
  delay?: number;
}) {
  const isPaper = tone === "paper";
  const isFit = variant === "fit";
  const Icon = isFit ? Check : X;

  const cardCls = isPaper
    ? "border-black/15 bg-white hover:border-[color:var(--color-accent)]"
    : "border-[color:var(--color-line-strong)] bg-[color:var(--color-bg-elev)] hover:border-[color:var(--color-accent)]";

  const badgeCls = isFit
    ? "bg-[color:var(--color-accent)] text-white"
    : isPaper
      ? "bg-black text-[color:var(--color-paper)]"
      : "bg-white/8 text-[color:var(--color-fg-soft)] border border-[color:var(--color-line-strong)]";

  const numCls = isPaper ? "text-black/40" : "text-[color:var(--color-fg-soft)]";
  const textCls = isPaper ? "text-black/90" : "text-[color:var(--color-fg)]";

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group relative h-full border-2 ${cardCls} p-7 lg:p-9 transition-colors duration-500 flex flex-col`}
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className={`inline-flex h-11 w-11 items-center justify-center ${badgeCls}`}
            aria-hidden
          >
            <Icon size={22} strokeWidth={3} />
          </span>
          <span
            className={`mono text-[11px] tracking-[0.22em] ${numCls} pt-1`}
          >
            {String(num).padStart(2, "0")}
          </span>
        </div>
        <p
          className={`h-display text-[19px] md:text-[22px] lg:text-[24px] leading-[1.12] tracking-tight mt-8 ${textCls}`}
        >
          {text}
        </p>
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[color:var(--color-accent)] group-hover:w-full transition-[width] duration-700 ease-out" />
      </div>
    </Reveal>
  );
}
