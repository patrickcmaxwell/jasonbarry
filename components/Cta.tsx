import Link from "next/link";
import Magnetic from "./Magnetic";

export default function Cta({
  href,
  children,
  tone = "fg",
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "fg" | "outline" | "accent";
  size?: "md" | "lg";
}) {
  const cls =
    tone === "accent"
      ? "bg-[color:var(--color-accent)] text-white hover:bg-[color:var(--color-fg)] hover:text-[color:var(--color-bg)]"
      : tone === "outline"
        ? "border border-[color:var(--color-fg)] text-[color:var(--color-fg)] hover:bg-[color:var(--color-fg)] hover:text-[color:var(--color-bg)]"
        : "bg-[color:var(--color-fg)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent)] hover:text-white";

  const sizeCls = size === "lg" ? "px-8 py-5 text-[15px]" : "px-7 py-4 text-[13px]";

  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const inner = (
    <span
      className={`group inline-flex items-center gap-3 ${sizeCls} transition-colors font-semibold uppercase tracking-[0.14em] ${cls}`}
    >
      {children}
      <span className="relative inline-block w-4 h-4 overflow-hidden">
        <span className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-4" aria-hidden>→</span>
        <span className="absolute inset-0 -translate-x-4 transition-transform duration-500 group-hover:translate-x-0" aria-hidden>→</span>
      </span>
    </span>
  );

  return (
    <Magnetic strength={0.14}>
      {external ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{inner}</a>
      ) : (
        <Link href={href}>{inner}</Link>
      )}
    </Magnetic>
  );
}
