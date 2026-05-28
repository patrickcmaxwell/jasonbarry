import Image from "next/image";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Counter from "@/components/Counter";
import FitCallCta from "@/components/FitCallCta";
import AnimatedJB from "@/components/AnimatedJB";
import { Section } from "@/components/Section";
import {
  aboutHero,
  aboutBio,
  whyAdvisory,
  familiesExpect,
  expectCloser,
  credentials,
} from "@/lib/content";
import { Check } from "lucide-react";

export const metadata = { title: "About · Jason Barry" };

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />

      {/* HERO — trophy + Best Young Teachers badge left, bio right */}
      <section className="relative bg-black pt-32 lg:pt-44">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-12 pb-28 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="rise rise-1 relative overflow-hidden border border-[color:var(--color-line)] photo-shadow">
              <Image
                src="/images/trophy.jpg"
                alt="Jason Barry with championship trophy"
                width={1400}
                height={937}
                priority
                className="w-full h-auto"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
            <div className="rise rise-3 mt-6 relative overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] max-w-[260px]">
              <Image
                src="/images/best-young-teacher.avif"
                alt="Golf Digest Best Young Teachers 2025-2026"
                width={800}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-6">
            <p className="rise rise-1 eyebrow">About</p>
            <h1 className="rise rise-2 h-display-tight mt-4 text-[72px] md:text-[120px] xl:text-[160px] leading-[0.86]">
              Jason Barry
            </h1>
            <p className="rise rise-3 subhead mt-8 text-[20px] md:text-[26px] leading-[1.25] text-[color:var(--color-fg)] max-w-2xl">
              {aboutHero.sub}
            </p>

            <div className="rise rise-4 mt-10 space-y-5 body text-[16px] lg:text-[17px] text-[color:var(--color-fg-dim)] leading-[1.7] max-w-2xl">
              {aboutBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY I STARTED THIS ADVISORY — with animated JB watermark */}
      <section className="relative bg-[color:var(--color-bg-deep)] rule overflow-hidden">
        <AnimatedJB size={780} opacity={0.06} />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12 py-28 lg:py-40">
          <header className="max-w-5xl">
            <p className="eyebrow"><span className="mr-3 mono">01</span>Why I started this advisory</p>
            <Reveal as="h2" className="section-h2 mt-5">
              Built from years inside the process.
            </Reveal>
          </header>
          <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 body text-[16px] lg:text-[17px] leading-[1.7] text-[color:var(--color-fg-dim)] max-w-2xl">
              {whyAdvisory.map((p, i) => (
                <Reveal key={i} delay={i * 80}><p>{p}</p></Reveal>
              ))}
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden border border-[color:var(--color-line)] photo-shadow aspect-[4/5]">
                  <Image
                    src="/images/iron-setup.jpg"
                    alt="Jason at iron setup"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT FAMILIES CAN EXPECT */}
      <Section eyebrow="What families can expect" num="02" title={<>What working with me looks like.</>}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <ul className="grid gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {familiesExpect.map((e, i) => (
                <Reveal key={e} delay={i * 60} as="li" className="bg-black flex items-baseline gap-6 px-6 py-6">
                  <span className="h-display text-[24px] text-[color:var(--color-fg-soft)] w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-display text-[24px] md:text-[34px] tracking-tight leading-[1]">{e}</span>
                  <Check size={18} className="ml-auto text-[color:var(--color-fg-soft)] shrink-0" />
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <p className="h-display text-[28px] md:text-[40px] leading-[1.05] max-w-xl text-[color:var(--color-fg)]">
                {expectCloser}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* CREDENTIALS */}
      <Section eyebrow="By the numbers" num="03" title={<>College and recruiting experience.</>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
          {credentials.map((c) => (
            <div key={c.label} className="bg-black p-7 lg:p-8">
              <p className="h-display text-[56px] md:text-[80px] lg:text-[96px] leading-none">
                {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
              </p>
              <p className="mt-4 eyebrow leading-snug">{c.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FIT CALL CTA */}
      <FitCallCta />
    </>
  );
}
