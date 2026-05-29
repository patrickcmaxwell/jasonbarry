import Image from "next/image";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import FitCallCta from "@/components/FitCallCta";
import AnimatedJB from "@/components/AnimatedJB";
import ParallaxImage from "@/components/ParallaxImage";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";
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

      {/* HERO — split layout: left photo + badge, right copy */}
      <section className="relative bg-[color:var(--color-bg)] pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage
                src="/images/portrait-1.jpg"
                alt="Jason Barry coaching a player on the course"
                aspect="4/5"
                sizes="(min-width: 1024px) 560px, 100vw"
                amount={8}
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 flex items-center gap-5">
                <div className="relative overflow-hidden border border-[color:var(--color-line-strong)] bg-[color:var(--color-bg-elev)] max-w-[140px]">
                  <Image
                    src="/images/best-young-teacher.avif"
                    alt="Golf Digest Best Young Teachers 2025-2026"
                    width={800}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <p className="eyebrow-num">5×</p>
                  <p className="h-display text-[18px] leading-[1.1] mt-1">Golf Digest Best Young Teacher</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <p className="rise rise-1 eyebrow">About</p>
            <h1 className="rise rise-2 hero-headline mt-5">Jason Barry</h1>
            <p className="rise rise-3 subhead mt-7 max-w-xl">{aboutHero.sub}</p>
            <div className="rise rise-4 mt-9 space-y-5 body text-[16px] lg:text-[17px] leading-[1.7] max-w-2xl">
              {aboutBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 01 WHY I STARTED THIS ADVISORY */}
      <section className="relative bg-[color:var(--color-bg-deep)] rule overflow-hidden">
        <AnimatedJB size={680} opacity={0.05} position="right" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-24 lg:py-36">
          <header className="max-w-4xl">
            <p className="eyebrow"><span className="eyebrow-num">01</span>Why I started this advisory</p>
            <Reveal as="h2" className="section-h2 mt-5">Built from years inside the process.</Reveal>
          </header>
          <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              {whyAdvisory.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="body text-[16px] lg:text-[17px] leading-[1.7] max-w-2xl">{p}</p>
                </Reveal>
              ))}
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <ParallaxImage src="/images/iron-setup.jpg" alt="Jason at iron setup" aspect="4/5" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 WHAT FAMILIES CAN EXPECT */}
      <Section eyebrow="What families can expect" num="02" title={<>What working with me looks like.</>}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ul className="grid gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {familiesExpect.map((e, i) => (
                <Reveal key={e} delay={i * 60} as="li" className="bg-black flex items-center gap-6 px-6 py-5">
                  <span className="eyebrow-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-display text-[20px] md:text-[26px] tracking-tight leading-[1.05]">{e}</span>
                  <Check size={18} className="ml-auto text-[color:var(--color-fg-soft)] shrink-0" />
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="h-display text-[24px] md:text-[32px] leading-[1.1] max-w-md text-[color:var(--color-fg)]">{expectCloser}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 03 BY THE NUMBERS */}
      <Section eyebrow="By the numbers" num="03" title={<>College and recruiting experience.</>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
          {credentials.map((c) => (
            <StatCard key={c.label} value={c.value} label={c.label} size="lg" />
          ))}
        </div>
      </Section>

      {/* FIT CALL CTA */}
      <FitCallCta />
    </>
  );
}
