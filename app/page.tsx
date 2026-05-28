import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { credentials, idealFor, notProvides, provides, contact } from "@/lib/content";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      {/* HERO — full-bleed photo with monolithic black blocks overlaid */}
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* Photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/iron-setup.jpg"
            alt="Jason Barry at setup"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-black/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent" />
          <div className="grain absolute inset-0 opacity-30 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10 pt-36 lg:pt-40 pb-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="rise rise-1 tag">
              <span className="mono text-[11px]">2026 cycle — now booking</span>
            </div>

            <h1 className="h-display-black mt-8 text-[64px] sm:text-[96px] lg:text-[128px] xl:text-[148px]">
              <span className="block rise rise-2">Former</span>
              <span className="block rise rise-3">college coach.</span>
              <span className="block rise rise-4">Honest recruiting</span>
              <span className="block rise rise-5">strategy.</span>
            </h1>

            <p className="body rise rise-5 mt-8 max-w-xl text-lg text-[color:var(--color-fg-dim)]">
              Strategic college golf recruiting guidance for families seeking clarity, fit, and a realistic path forward — without hype, pressure, or unrealistic promises.
            </p>

            <div className="rise rise-5 mt-10 flex flex-wrap items-center gap-4">
              <Cta href={contact.bookingUrl}>Schedule a Recruiting Fit Call</Cta>
              <Link href="/about-us" className="ulink h-display text-[15px] tracking-[0.06em] text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
                Meet Jason →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT — black with newspaper rule */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">01 · The problem</p>
            <Reveal as="h2" className="h-display-black text-[44px] md:text-[72px] mt-3">
              Recruiting has become increasingly confusing for families.
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80} className="space-y-6 body text-[17px] text-[color:var(--color-fg-dim)] leading-relaxed">
              <p>
                Families struggle to understand <strong>competitive fit</strong>, <strong>recruiting timing</strong>, and how to plan a junior's path toward college golf. Bad advice is loud. Honest perspective is rare.
              </p>
              <p>
                Jason provides <strong>honest evaluation</strong>, <strong>experienced perspective</strong>, and <strong>clear guidance</strong> throughout the recruiting process — without hype, pressure, or unrealistic promises.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & BACKGROUND — NCAA tee marker photo + stats */}
      <section className="relative">
        <div className="relative">
          <Image
            src="/images/NCAA-tee-markers.jpg"
            alt="NCAA tee markers"
            width={2048}
            height={1330}
            className="w-full h-[60svh] md:h-[70svh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="grain absolute inset-0 opacity-30 pointer-events-none" />

          <div className="absolute inset-0">
            <div className="mx-auto max-w-[1600px] h-full px-6 lg:px-10 flex flex-col justify-center">
              <p className="eyebrow text-[color:var(--color-fg-soft)]">02 · Experience & background</p>
              <Reveal as="h2" className="h-display-black text-[44px] md:text-[88px] mt-3 max-w-[16ch] leading-[0.86]">
                Eleven years inside college golf. Five Best Young Teacher honors.
              </Reveal>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line-strong)] max-w-3xl">
                {credentials.map((c) => (
                  <div key={c.label} className="bg-black p-5">
                    <p className="h-display-black text-[44px] md:text-[56px] leading-none">
                      {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
                    </p>
                    <p className="mt-2 eyebrow text-[color:var(--color-fg-soft)] leading-snug">
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS ADVISORY PROVIDES — two column block layout */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <p className="eyebrow text-[color:var(--color-fg-soft)]">03 · What this provides</p>
              <Reveal as="h2" className="h-display-black text-[44px] md:text-[72px] mt-3 leading-[0.86]">
                A coach's perspective — strategic, not tactical.
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="body text-[17px] text-[color:var(--color-fg-dim)] leading-relaxed">
                Not technical instruction or placement service. Strategic advisory grounded in how college coaches actually evaluate players. Honest, structured, and built around the player in front of us.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
            {provides.map((p, i) => (
              <Reveal key={p} delay={i * 50} className="bg-black p-7 lg:p-9">
                <p className="mono text-[11px] text-[color:var(--color-fg-soft)]">{String(i + 1).padStart(2, "0")}</p>
                <p className="h-display mt-3 text-[24px] leading-[1.05]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT — inverted cream block, brutalist callout */}
      <section className="relative bg-[color:var(--color-paper)] text-black">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-black/55">What this is NOT</p>
              <Reveal as="h2" className="h-display-black text-[36px] md:text-[56px] mt-3 leading-[0.88]">
                We don't do placement. We don't do promises.
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3 body text-[18px]">
                {notProvides.map((n, i) => (
                  <Reveal key={n} delay={i * 60} as="li" className="flex items-start gap-4 border-t border-black/15 pt-4">
                    <span className="h-display text-[24px] text-black/40 leading-none w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span>{n}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-6">
              <p className="eyebrow text-[color:var(--color-fg-soft)]">04 · Who this is for</p>
              <Reveal as="h2" className="h-display-black text-[44px] md:text-[72px] mt-3 leading-[0.86]">
                Built for families who want the truth.
              </Reveal>
            </div>
          </div>

          <ul className="grid gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
            {idealFor.map((line, i) => (
              <Reveal key={line} delay={i * 50} as="li" className="bg-black flex items-center gap-6 px-6 lg:px-10 py-6 lg:py-7 hover:bg-[color:var(--color-bg-elev)] transition-colors">
                <span className="h-display-black text-[32px] md:text-[44px] text-[color:var(--color-fg-soft)] w-14 shrink-0 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-display text-[20px] md:text-[28px] leading-[1.05]">{line}</span>
                <Check size={20} className="ml-auto text-[color:var(--color-fg-soft)] shrink-0" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA — bold sport-mag callout */}
      <section className="relative border-t border-[color:var(--color-fg)] bg-black">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="eyebrow text-[color:var(--color-accent)]">Recruiting fit assessment</p>
          <Reveal as="h2" className="h-display-black text-[60px] md:text-[120px] xl:text-[160px] mt-4 leading-[0.84] max-w-[14ch]">
            One call. Honest answer. Real path forward.
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Cta href={contact.bookingUrl}>Book the Fit Call</Cta>
            <a href={`mailto:${contact.email}`} className="ulink h-display text-[15px] tracking-[0.06em] text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
              Or email Jason directly →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
