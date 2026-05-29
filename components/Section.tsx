import Reveal from "./Reveal";

export function Section({
  eyebrow,
  num,
  title,
  intro,
  children,
  tone = "dark",
  align = "default",
  divider = true,
  size = "default",
}: {
  eyebrow?: string;
  num?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "dark" | "deep" | "paper";
  align?: "default" | "center";
  divider?: boolean;
  size?: "default" | "compact" | "wide";
}) {
  const bg =
    tone === "paper"
      ? "bg-[color:var(--color-paper)] text-black"
      : tone === "deep"
        ? "bg-[color:var(--color-bg-deep)] text-[color:var(--color-fg)]"
        : "bg-[color:var(--color-bg)] text-[color:var(--color-fg)]";

  const eyebrowCls = tone === "paper" ? "eyebrow text-black/70" : "eyebrow";

  const pad = size === "compact" ? "py-20 lg:py-28" : "py-24 lg:py-36";
  const titleCls = size === "wide" ? "section-h2-statement" : "section-h2";

  return (
    <section className={`relative ${bg} ${divider ? "rule" : ""}`}>
      <div className={`mx-auto max-w-[1400px] px-6 lg:px-12 ${pad}`}>
        {(eyebrow || title) && (
          <header className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-4xl"}>
            {eyebrow && (
              <p className={eyebrowCls}>
                {num && <span className={tone === "paper" ? "eyebrow-num text-black/55" : "eyebrow-num"}>{num}</span>}
                <span>{eyebrow}</span>
              </p>
            )}
            {title && (
              <Reveal as="h2" className={`${titleCls} mt-5`}>
                {title}
              </Reveal>
            )}
            {intro && (
              <Reveal delay={100} className="body mt-6 max-w-2xl text-[15px] leading-[1.75]">
                {intro}
              </Reveal>
            )}
          </header>
        )}
        {children && <div className={(eyebrow || title) ? "mt-12 lg:mt-16" : ""}>{children}</div>}
      </div>
    </section>
  );
}
