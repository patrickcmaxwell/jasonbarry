import Image from "next/image";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import FitCallCta from "@/components/FitCallCta";
import AnimatedJB from "@/components/AnimatedJB";
import { Section } from "@/components/Section";
import { CheckList } from "@/components/CheckList";
import {
  homeHero,
  contact,
  credentials,
  experience,
  confusingForFamilies,
  whoThisIsFor,
  whatThisProvides,
  whoThisIsNotFor,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      {/* HERO */}
      <Hero
        src="/images/portrait-2.jpg"
        alt="Jason Barry"
        objectPosition="65% 22%"
        eyebrow="Honest recruiting strategy"
        headline={
          <>
            <span className="block">Former</span>
            <span className="block">college coach.</span>
            <span className="block">Honest recruiting</span>
            <span className="block">strategy.</span>
          </>
        }
        body={<>{homeHero.sub}</>}
        cta={<Cta href={contact.bookingUrl}>Schedule a Recruiting Fit Call</Cta>}
      />

      {/* EXPERIENCE & BACKGROUND */}
      <Section
        eyebrow="Experience & background"
        num="01"
        title={<>Eleven years inside the college game.</>}
      >
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <ul className="space-y-0">
              {experience.map((e, i) => (
                <Reveal key={e} delay={i * 60} as="li" className="border-t border-[color:var(--color-line)] py-5 flex items-baseline gap-6">
                  <span className="h-display text-[28px] text-[color:var(--color-fg-soft)] w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-display text-[24px] md:text-[34px] tracking-tight leading-[1]">{e}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="grid grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
                {credentials.map((c) => (
                  <div key={c.label} className="bg-black p-6 lg:p-7">
                    <p className="h-display text-[48px] md:text-[64px] leading-none">
                      {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
                    </p>
                    <p className="mt-3 eyebrow leading-snug">{c.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* RECRUITING HAS BECOME INCREASINGLY CONFUSING FOR FAMILIES */}
      <Section
        eyebrow="The problem"
        num="02"
        title={<>Recruiting has become increasingly confusing for families.</>}
      >
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="space-y-6 body text-[16px] lg:text-[17px] leading-[1.7] text-[color:var(--color-fg-dim)] max-w-2xl">
              {confusingForFamilies.map((p, i) => (
                <Reveal key={i} delay={i * 80}><p>{p}</p></Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden border border-[color:var(--color-line)] photo-shadow aspect-[4/5]">
                <Image
                  src="/images/portrait-1.jpg"
                  alt="Jason coaching a player"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* WHO THIS IS FOR */}
      <Section eyebrow="Who this is for" num="03" title={<>Built for families who want the truth.</>}>
        <CheckList items={whoThisIsFor} variant="check" cols={2} />
      </Section>

      {/* WHAT THIS ADVISORY PROVIDES — with animated JB watermark */}
      <section className="relative bg-black rule overflow-hidden">
        <AnimatedJB size={760} opacity={0.07} />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12 py-28 lg:py-40">
          <header className="max-w-5xl">
            <p className="eyebrow"><span className="mr-3 mono">04</span>What this advisory provides</p>
            <Reveal as="h2" className="section-h2 mt-5">
              Strategic guidance, end to end.
            </Reveal>
          </header>
          <div className="mt-16 lg:mt-20">
            <CheckList items={whatThisProvides} variant="check" cols={2} />
          </div>
        </div>
      </section>

      {/* WHO THIS IS NOT FOR — cream block */}
      <Section
        eyebrow="Who this is not for"
        num="05"
        title={<>Honest about who this isn't for.</>}
        tone="paper"
      >
        <ul className="grid md:grid-cols-2 gap-x-12">
          {whoThisIsNotFor.map((n, i) => (
            <Reveal key={n} delay={i * 50} as="li" className="border-t border-black/15 py-5 flex items-start gap-4">
              <span className="h-display text-[24px] leading-none text-black/35 w-10 shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="body text-[16px] leading-[1.65] text-black/80">{n}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* FIT CALL CTA */}
      <FitCallCta />
    </>
  );
}
