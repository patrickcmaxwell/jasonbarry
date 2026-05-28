import Image from "next/image";

export default function Hero({
  src,
  alt,
  eyebrow,
  headline,
  body,
  cta,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  headline: React.ReactNode;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  objectPosition?: string;
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="grain absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12 pt-40 lg:pt-44 pb-24 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9 xl:col-span-8">
            {eyebrow && (
              <div className="rise rise-1 tag">
                <span className="mono text-[11px]">{eyebrow}</span>
              </div>
            )}
            <h1 className="rise rise-2 h-display-tight mt-8 text-[64px] sm:text-[112px] lg:text-[160px] xl:text-[200px]">
              {headline}
            </h1>
            {body && (
              <div className="rise rise-3 body mt-9 max-w-2xl text-[17px] lg:text-[18px] text-[color:var(--color-fg-dim)] leading-[1.65]">
                {body}
              </div>
            )}
            {cta && <div className="rise rise-4 mt-12 flex flex-wrap items-center gap-6">{cta}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
