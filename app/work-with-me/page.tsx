import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import FitCallCta from "@/components/FitCallCta";
import AnimatedJB from "@/components/AnimatedJB";
import ParallaxImage from "@/components/ParallaxImage";
import { Section } from "@/components/Section";
import { CheckList } from "@/components/CheckList";
import {
  contact,
  workHero,
  differentApproach,
  fitAssessment,
  ongoingAdvisory,
  familiesIWorkWith,
  whoThisIsNotFor,
} from "@/lib/content";

export const metadata = { title: "Work With Me · Jason Barry" };

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />

      <Hero
        src="/images/portrait-1.jpg"
        alt="Jason coaching a player"
        objectPosition="60% 40%"
        eyebrow="Recruiting Advisory · 2026 cycle"
        headline={
          <>
            <span className="block">Work With Me.</span>
          </>
        }
        body={<>{workHero.sub}</>}
        cta={<Cta href={contact.bookingUrl}>Schedule a Recruiting Fit Call</Cta>}
      />

      {/* 01 A DIFFERENT APPROACH */}
      <Section
        eyebrow="A different approach"
        num="01"
        title={<>A different approach to recruiting guidance.</>}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            {differentApproach.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="body text-[16px] lg:text-[17px] leading-[1.7] max-w-2xl">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage src="/images/college-jb-golf.png" alt="College golf" aspect="5/6" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 02 RECRUITING FIT ASSESSMENT — with subtle JB watermark */}
      <section className="relative bg-[color:var(--color-bg-deep)] rule overflow-hidden">
        <AnimatedJB size={680} opacity={0.05} position="right" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-24 lg:py-36">
          <header className="max-w-4xl">
            <p className="eyebrow"><span className="eyebrow-num">02</span>Recruiting Fit Assessment</p>
            <Reveal as="h2" className="section-h2 mt-5">Start with a structured conversation.</Reveal>
            <Reveal delay={100} className="body mt-6 max-w-2xl text-[15px] leading-[1.75]">
              <p>{fitAssessment.intro[0]}</p>
              <p className="mt-4">{fitAssessment.intro[1]}</p>
            </Reveal>
          </header>

          <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">Topics may include</p>
              <div className="mt-5">
                <CheckList items={fitAssessment.topics} variant="check" cols={1} />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow">Assessment includes</p>
              <div className="mt-5">
                <CheckList items={fitAssessment.includes} variant="check" cols={1} />
              </div>
              <div className="mt-10">
                <Cta href={contact.bookingUrl}>Schedule a Recruiting Fit Call</Cta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 ONGOING ADVISORY SUPPORT */}
      <Section
        eyebrow="Ongoing advisory support"
        num="03"
        title={<>Tailored, not packaged.</>}
        intro={<>{ongoingAdvisory.intro}</>}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <CheckList items={ongoingAdvisory.items} variant="check" cols={1} />
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="h-display text-[22px] md:text-[28px] leading-[1.15] max-w-md">{ongoingAdvisory.closer}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 04 FAMILIES I TYPICALLY WORK WITH — cream */}
      <Section
        eyebrow="Families I typically work with"
        num="04"
        title={<>The right fit, both ways.</>}
        tone="paper"
      >
        <ul className="grid md:grid-cols-2 gap-x-12">
          {familiesIWorkWith.map((n, i) => (
            <Reveal key={n} delay={i * 50} as="li" className="border-t border-black/15 py-5 flex items-start gap-4">
              <span className="eyebrow-num text-black/40">{String(i + 1).padStart(2, "0")}</span>
              <span className="body text-[16px] leading-[1.65] text-black/80">{n}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 05 WHO THIS IS NOT FOR */}
      <Section
        eyebrow="Who this is not for"
        num="05"
        title={<>Honest about who this isn't for.</>}
      >
        <ul className="grid md:grid-cols-2 gap-x-12">
          {whoThisIsNotFor.map((n, i) => (
            <Reveal key={n} delay={i * 50} as="li" className="border-t border-[color:var(--color-line)] py-5 flex items-start gap-4">
              <span className="eyebrow-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="body text-[16px] leading-[1.65]">{n}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* FINAL CTA */}
      <FitCallCta
        eyebrow="Start with a recruiting fit assessment"
        title="The best first step."
        body="The best first step is a structured conversation to better understand a player's current position, goals, and potential recruiting path."
      />
    </>
  );
}
