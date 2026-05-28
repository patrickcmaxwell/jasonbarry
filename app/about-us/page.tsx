import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Counter from "@/components/Counter";
import { aboutPara, credentials, contact } from "@/lib/content";

export const metadata = { title: "About · Jason Barry" };

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />

      {/* HERO — split: left photo (trophy) + Best Young Teachers badge, right copy */}
      <section className="relative bg-black pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-12 pb-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <div className="rise rise-1 relative overflow-hidden border border-[color:var(--color-line)] photo-shadow">
              <Image
                src="/images/trophy.jpg"
                alt="Jason Barry with championship trophy"
                width={1400}
                height={937}
                priority
                className="w-full h-auto"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="rise rise-3 mt-6 relative overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] p-4 max-w-xs">
              <Image
                src="/images/best-young-teacher.avif"
                alt="Golf Digest Best Young Teachers 2025-2026"
                width={800}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 xl:col-span-6">
            <p className="rise rise-1 eyebrow text-[color:var(--color-fg-soft)]">Golf Digest Best Young Teachers</p>
            <h1 className="rise rise-2 h-display-black mt-4 text-[60px] md:text-[100px] xl:text-[120px] leading-[0.86]">
              Meet Jason Barry
            </h1>

            <div className="rise rise-3 mt-8 space-y-5 body text-[18px] text-[color:var(--color-fg-dim)] leading-relaxed max-w-2xl">
              <p>
                Jason Barry is the <strong>Director of Instruction at Springdale Golf Club</strong> and a former Head Men's Golf Coach at Rider University. Over 11 years at the college level, Jason helped build Rider into a competitive program, leading the team to its <strong>first conference championship in program history</strong>, <strong>multiple NCAA Regional appearances</strong>, and teams that <strong>broke nearly every scoring record in the program's history.</strong>
              </p>
              <p>
                Jason has spent more than 20 years working with competitive golfers and has been named a <strong>five-time Golf Digest "Best Young Teacher."</strong> His coaching and instruction focus on developing players who perform under pressure, understand how to compete, and improve in ways that actually translate to scoring.
              </p>
              <p>
                Today, Jason brings that same coach-level perspective to college golf recruiting. He helps families understand how players are evaluated, how timing and performance intersect, and how to align a player's profile with the right collegiate opportunities.
              </p>
            </div>

            <Reveal delay={120}>
              <p className="h-display-black mt-12 text-[24px] md:text-[32px] leading-[1.05] max-w-2xl">
                Recruiting success starts with clarity — and Jason helps families find it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MY PHILOSOPHY — huge block header */}
      <section className="relative bg-black border-t border-[color:var(--color-fg)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <p className="eyebrow text-[color:var(--color-fg-soft)]">Coaching credo</p>
          <Reveal as="h2" className="h-display-black mt-4 text-[80px] md:text-[160px] xl:text-[200px] leading-[0.82]">
            My Philosophy
          </Reveal>

          <div className="mt-16 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal as="blockquote" className="h-display text-[36px] md:text-[60px] leading-[0.95] max-w-[18ch]">
                "College golf recruiting does not require pressure or promises. It requires perspective, planning, and honesty."
              </Reveal>
              <p className="mono mt-8 text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">— Jason Barry</p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 space-y-6 body text-[17px] text-[color:var(--color-fg-dim)] leading-relaxed">
              {aboutPara.slice(1).map((p, i) => (
                <Reveal key={i} delay={80 + i * 80}><p>{p}</p></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
            {credentials.map((c) => (
              <div key={c.label} className="bg-black p-7">
                <p className="h-display-black text-[56px] md:text-[80px] leading-none">
                  {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
                </p>
                <p className="mt-3 eyebrow text-[color:var(--color-fg-soft)] leading-snug">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-t border-[color:var(--color-fg)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h3 className="h-display-black text-[44px] md:text-[80px] leading-[0.86] max-w-2xl">
            Find out where the player actually stands.
          </h3>
          <Cta href={contact.bookingUrl}>Book the Fit Call</Cta>
        </div>
      </section>
    </>
  );
}
