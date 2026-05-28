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
}: {
  eyebrow?: string;
  num?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "dark" | "deep" | "paper";
  align?: "default" | "center";
  divider?: boolean;
}) {
  const bg =
    tone === "paper"
      ? "bg-[color:var(--color-paper)] text-black"
      : tone === "deep"
        ? "bg-[color:var(--color-bg-deep)] text-[color:var(--color-fg)]"
        : "bg-[color:var(--color-bg)] text-[color:var(--color-fg)]";

  const eyebrowCls = tone === "paper" ? "eyebrow text-black/55" : "eyebrow";

  return (
    <section className={`relative ${bg} ${divider ? "rule" : ""}`}>
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-28 lg:py-40">
        {(eyebrow || title) && (
          <header className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-5xl"}>
            {eyebrow && (
              <p className={eyebrowCls}>
                {num && <span className="mr-3 mono">{num}</span>}
                {eyebrow}
              </p>
            )}
            {title && (
              <Reveal as="h2" className="section-h2 mt-5">
                {title}
              </Reveal>
            )}
            {intro && (
              <Reveal delay={100} className="body mt-7 max-w-2xl text-[15px] leading-[1.75] text-[color:var(--color-fg-dim)]">
                {intro}
              </Reveal>
            )}
          </header>
        )}
        {children && <div className={(eyebrow || title) ? "mt-16 lg:mt-20" : ""}>{children}</div>}
      </div>
    </section>
  );
}
