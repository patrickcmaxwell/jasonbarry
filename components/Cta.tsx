import Link from "next/link";
import Magnetic from "./Magnetic";

export default function Cta({
  href,
  children,
  tone = "fg",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "fg" | "amber" | "outline";
}) {
  const cls =
    tone === "amber"
      ? "bg-[color:var(--color-amber)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-amber-hot)]"
      : tone === "outline"
        ? "border border-[color:var(--color-line-strong)] text-[color:var(--color-fg)] hover:border-[color:var(--color-amber)] hover:text-[color:var(--color-amber)]"
        : "bg-[color:var(--color-fg)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-amber)]";

  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const inner = (
    <span
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold tracking-tight transition-colors ${cls}`}
    >
      {children}
      <span className="relative inline-block w-4 h-4 overflow-hidden">
        <span className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-4" aria-hidden>→</span>
        <span className="absolute inset-0 -translate-x-4 transition-transform duration-500 group-hover:translate-x-0" aria-hidden>→</span>
      </span>
    </span>
  );

  return (
    <Magnetic strength={0.18}>
      {external ? (
        <a href={href}>{inner}</a>
      ) : (
        <Link href={href}>{inner}</Link>
      )}
    </Magnetic>
  );
}
