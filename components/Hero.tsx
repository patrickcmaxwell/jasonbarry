import Image from "next/image";

export default function Hero({
  src,
  alt,
  eyebrow,
  headline,
  body,
  cta,
  objectPosition = "center",
  align = "left",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  headline: React.ReactNode;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  objectPosition?: string;
  align?: "left" | "right";
}) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-end">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div className={`absolute inset-0 ${align === "left" ? "bg-gradient-to-r from-black/95 via-black/55 to-black/10" : "bg-gradient-to-l from-black/95 via-black/55 to-black/10"}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="grain absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10 pt-36 lg:pt-44 pb-20 w-full">
        <div className={`grid lg:grid-cols-12 gap-10 ${align === "right" ? "lg:justify-end" : ""}`}>
          <div className={`lg:col-span-8 xl:col-span-7 ${align === "right" ? "lg:col-start-6" : ""}`}>
            {eyebrow && (
              <div className="rise rise-1 tag">
                <span className="mono text-[11px]">{eyebrow}</span>
              </div>
            )}
            <h1 className="rise rise-2 h-display-black mt-7 text-[60px] sm:text-[96px] lg:text-[128px] xl:text-[148px]">
              {headline}
            </h1>
            {body && (
              <div className="rise rise-3 body mt-7 max-w-xl text-[18px] text-[color:var(--color-fg-dim)]">
                {body}
              </div>
            )}
            {cta && <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-6">{cta}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
