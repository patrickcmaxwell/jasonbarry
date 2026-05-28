import Image from "next/image";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import FitCallCta from "@/components/FitCallCta";
import { contact, credentials, provides, notProvides, idealFor } from "@/lib/content";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      {/* HERO BANNER — full-bleed portrait-2 (IMG_5410) with overlaid copy */}
      <Hero
        src="/images/portrait-2.jpg"
        alt="Jason Barry"
        objectPosition="65% 25%"
        eyebrow="Honest recruiting strategy"
        headline={
          <>
            <span className="block">Former</span>
            <span className="block">college coach.</span>
            <span className="block">Honest recruiting</span>
            <span className="block">strategy.</span>
          </>
        }
        body={
          <>
            Strategic college golf recruiting guidance for families seeking clarity, fit, and a realistic path forward — without hype, pressure, or unrealistic promises.
          </>
        }
        cta={<Cta href={contact.bookingUrl}>Schedule a Recruiting Fit Call</Cta>}
      />

      {/* SECTION 01 — RECRUITING HAS BECOME INCREASINGLY CONFUSING FOR FAMILIES */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">01 · The problem</p>
            <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[88px] xl:text-[108px] leading-[0.86]">
              Recruiting has become increasingly confusing for families.
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal as="div" delay={100} className="relative overflow-hidden border border-[color:var(--color-line)] photo-shadow aspect-[4/5]">
              <Image
                src="/images/portrait-1.jpg"
                alt="Jason coaching a player"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-1 -mt-4">
            <Reveal delay={150} className="space-y-5 body text-[17px] text-[color:var(--color-fg-dim)] leading-relaxed max-w-2xl">
              <p>
                After more than a decade coaching college golf, Jason has seen how difficult it can be for families to understand where a player realistically fits, when to begin communication, and how to build a recruiting plan that aligns with both performance and long-term goals.
              </p>
              <p>
                His role is to provide <strong>honest evaluation</strong>, <strong>experienced perspective</strong>, and <strong>clear guidance</strong> throughout the recruiting process — without hype, pressure, or unrealistic promises.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 02 — EXPERIENCE & BACKGROUND with putting green photo */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-6">
              <p className="eyebrow text-[color:var(--color-fg-soft)]">02 · Experience & background</p>
              <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[88px] xl:text-[108px] leading-[0.86]">
                Eleven years inside the college game.
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={100}>
                <ul className="body space-y-3 text-[17px] text-[color:var(--color-fg-dim)]">
                  <li className="border-t border-[color:var(--color-line)] pt-3 flex items-start gap-3"><span className="mono text-[12px] text-[color:var(--color-fg-soft)] mt-1">·</span> <span><strong>11 years</strong> of college coaching experience</span></li>
                  <li className="border-t border-[color:var(--color-line)] pt-3 flex items-start gap-3"><span className="mono text-[12px] text-[color:var(--color-fg-soft)] mt-1">·</span> <span>Former <strong>Rider University Men's Golf Coach</strong></span></li>
                  <li className="border-t border-[color:var(--color-line)] pt-3 flex items-start gap-3"><span className="mono text-[12px] text-[color:var(--color-fg-soft)] mt-1">·</span> <span><strong>Conference Championship</strong> & multiple NCAA Regional appearances</span></li>
                  <li className="border-t border-[color:var(--color-line)] pt-3 flex items-start gap-3"><span className="mono text-[12px] text-[color:var(--color-fg-soft)] mt-1">·</span> <span><strong>5× Golf Digest Best Young Teacher</strong></span></li>
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
            {credentials.map((c) => (
              <div key={c.label} className="bg-black p-7">
                <p className="h-display-black text-[56px] md:text-[80px] leading-none">
                  {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
                </p>
                <p className="mt-3 eyebrow text-[color:var(--color-fg-soft)] leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — WHAT THIS ADVISORY PROVIDES (two columns: this is / this is not) */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-6">
              <p className="eyebrow text-[color:var(--color-fg-soft)]">03 · What this advisory provides</p>
              <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[88px] xl:text-[108px] leading-[0.86]">
                What this is — and is not.
              </Reveal>
            </div>
          </div>

          {/* IS vs IS NOT — with huge JB watermark in the middle */}
          <div className="relative grid lg:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.08]">
              <Image src="/images/jb-mark.png" alt="" width={520} height={520} className="w-[360px] md:w-[520px] h-auto" />
            </div>

            <Reveal className="relative bg-black p-10 lg:p-14">
              <p className="eyebrow text-[color:var(--color-fg)]">This advisory IS:</p>
              <ul className="mt-7 space-y-4 body text-[17px]">
                {provides.map((p) => (
                  <li key={p} className="flex items-start gap-3 border-t border-[color:var(--color-line)] pt-4">
                    <Check size={16} className="mt-1 text-[color:var(--color-fg)] shrink-0" />
                    <span className="text-[color:var(--color-fg-dim)]">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="relative bg-black p-10 lg:p-14">
              <p className="eyebrow text-[color:var(--color-accent)]">This advisory IS NOT:</p>
              <ul className="mt-7 space-y-4 body text-[17px]">
                {notProvides.map((p) => (
                  <li key={p} className="flex items-start gap-3 border-t border-[color:var(--color-line)] pt-4">
                    <span className="mt-2 inline-block h-px w-3 bg-[color:var(--color-fg-soft)] shrink-0" />
                    <span className="text-[color:var(--color-fg-dim)]">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHO THIS IS FOR */}
      <section className="bg-[color:var(--color-paper)] text-black">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <p className="eyebrow text-black/55">04 · Who this is for</p>
          <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[88px] xl:text-[108px] leading-[0.86]">
            Built for families who want the truth.
          </Reveal>

          <ul className="mt-14 grid gap-px bg-black/15 border border-black/15">
            {idealFor.map((line, i) => (
              <Reveal key={line} delay={i * 50} as="li" className="bg-[color:var(--color-paper)] flex items-center gap-6 px-6 lg:px-10 py-6 lg:py-7">
                <span className="h-display-black text-[32px] md:text-[56px] text-black/30 w-14 shrink-0 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-display text-[20px] md:text-[32px] leading-[1.05]">{line}</span>
                <Check size={20} className="ml-auto text-black/40 shrink-0" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FIT CALL CTA */}
      <FitCallCta />
    </>
  );
}
