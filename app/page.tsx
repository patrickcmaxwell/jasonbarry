import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import ScrollProgress from "@/components/ScrollProgress";
import { credentials, idealFor, notProvides, provides, values, contact } from "@/lib/content";
import { Check, X } from "lucide-react";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden mesh">
        <div className="mesh-anim absolute inset-0 mesh opacity-90" />
        <div className="grain absolute inset-0 pointer-events-none opacity-30" />
        <div className="absolute top-1/3 right-[8%] hidden lg:block">
          <div className="relative h-[420px] w-[420px]">
            <div className="absolute inset-0 conic-glow" />
            <div className="absolute inset-8 rounded-full border border-[color:var(--color-line-strong)]" />
            <div className="absolute inset-16 rounded-full border border-[color:var(--color-line)]" />
            <div className="absolute inset-24 rounded-full border border-[color:var(--color-line)]" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-40 pb-20 w-full">
          <div className="rise rise-1 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line-strong)] bg-[color:var(--color-bg-elev)]/40 backdrop-blur px-3 py-1.5 mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-amber)] animate-pulse" />
            Now booking 2026 cycle
          </div>

          <h1 className="rise rise-2 display mt-6 text-[44px] sm:text-[64px] lg:text-[84px] max-w-[14ch] leading-[0.92]">
            Former college coach.
            <br />
            <span className="text-[color:var(--color-fg-soft)]">
              <span className="italic-serif text-[color:var(--color-amber)]">Honest</span> recruiting strategy.
            </span>
          </h1>

          <p className="rise rise-3 mt-8 max-w-xl text-lg md:text-xl text-[color:var(--color-fg-dim)] leading-relaxed">
            Strategic college golf recruiting guidance for families seeking clarity, fit, and a realistic path forward — without hype, pressure, or unrealistic promises.
          </p>

          <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
            <Cta href="/advisory-options">Schedule a Recruiting Fit Call</Cta>
            <Link href="/about" className="ulink text-sm text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
              Meet Jason →
            </Link>
          </div>

          <div className="rise rise-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden max-w-3xl">
            {credentials.map((c) => (
              <div key={c.label} className="bg-[color:var(--color-bg)] p-5">
                <p className="display text-3xl md:text-4xl">
                  {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
                </p>
                <p className="mt-1.5 text-[11px] mono uppercase tracking-wider text-[color:var(--color-fg-soft)] leading-snug">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES MARQUEE */}
      <section className="bg-[color:var(--color-bg)]">
        <Marquee items={values} />
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">01 · The problem</p>
            <Reveal as="h2" className="display text-4xl md:text-6xl mt-4 leading-[0.95]">
              Recruiting has become <span className="italic-serif text-[color:var(--color-amber)]">increasingly confusing</span> for families.
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80} className="space-y-6 text-lg text-[color:var(--color-fg-dim)] leading-relaxed">
              <p>
                Families struggle to understand competitive fit, recruiting timing, and how to plan a junior's path toward college golf. Bad advice is loud. Honest perspective is rare.
              </p>
              <p>
                Jason offers honest evaluation, coach-level perspective, and clear guidance through the process — without hype, pressure, or unrealistic promises.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                {values.map((v) => (
                  <span key={v} className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg)] border border-[color:var(--color-line-strong)] rounded-full px-3 py-1.5">
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP — NCAA tee marker image */}
      <section className="relative">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)]">
            <div className="relative aspect-[21/10]">
              <Image
                src="/images/NCAA-tee-markers.jpg"
                alt="NCAA tee markers"
                fill
                priority={false}
                sizes="(min-width: 1024px) 1280px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)] via-[color:var(--color-bg)]/30 to-transparent" />
              <div className="absolute inset-0 grain opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
                <div className="grid md:grid-cols-3 gap-8 items-end">
                  <div className="md:col-span-2">
                    <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">Background</p>
                    <h3 className="display text-3xl md:text-5xl mt-3 max-w-2xl">
                      Eleven years inside college golf. Five Best Young Teacher recognitions.
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[color:var(--color-fg-dim)]">
                    <li>· Former Rider University Head Coach</li>
                    <li>· First conference title in program history</li>
                    <li>· Multiple NCAA Regional appearances</li>
                    <li>· Director of Instruction, Springdale GC</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT THIS PROVIDES */}
      <section className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">02 · What this is</p>
            <Reveal as="h2" className="display text-4xl md:text-6xl mt-4 leading-[0.95]">
              A coach's perspective — <span className="italic-serif text-[color:var(--color-amber)]">strategic, not</span> tactical.
            </Reveal>
            <p className="mt-6 text-[color:var(--color-fg-dim)]">
              Not technical instruction or placement. Strategic advisory grounded in how college coaches actually evaluate players.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {provides.map((p, i) => (
                <Reveal key={p} delay={i * 60}>
                  <Tilt className="h-full" max={3}>
                    <div className="h-full p-6 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] hover:border-[color:var(--color-amber)]/50 transition-colors">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-green-deep)] text-[color:var(--color-green-glow)]">
                        <Check size={16} />
                      </div>
                      <p className="mt-4 text-[15px] leading-snug">{p}</p>
                    </div>
                  </Tilt>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] grid sm:grid-cols-2 gap-x-8 gap-y-3">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)] sm:col-span-2">What this is not</p>
              {notProvides.map((n) => (
                <p key={n} className="inline-flex items-start gap-2 text-sm text-[color:var(--color-fg-dim)]">
                  <X size={14} className="mt-0.5 shrink-0 text-[color:var(--color-fg-soft)]" />
                  {n}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="relative bg-[color:var(--color-paper)] text-[color:var(--color-bg)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-32 relative">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-black/50">03 · Fit</p>
              <Reveal as="h2" className="display text-4xl md:text-6xl mt-4 leading-[0.95]">
                Built for families who <span className="italic-serif">want the truth.</span>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-px bg-black/12 border border-black/12 rounded-2xl overflow-hidden">
                {idealFor.map((line, i) => (
                  <Reveal key={line} delay={i * 50}>
                    <li className="bg-[color:var(--color-paper)] flex items-center gap-5 px-5 py-5">
                      <span className="display text-2xl text-black/35 tabular-nums w-10">0{i + 1}</span>
                      <span className="text-base md:text-lg">{line}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-32">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] p-10 md:p-16">
          <div className="absolute inset-0 mesh mesh-anim opacity-70" />
          <div className="absolute inset-0 grain opacity-20" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">Recruiting Fit Assessment</p>
              <h2 className="display text-4xl md:text-6xl mt-4 leading-[0.95] max-w-3xl">
                One call. <span className="italic-serif text-[color:var(--color-amber)]">Honest answer.</span> Realistic path forward.
              </h2>
              <p className="mt-5 max-w-xl text-[color:var(--color-fg-dim)]">
                An introductory conversation that evaluates current standing, recruiting goals, and whether advisory is the right next step.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Cta href={`mailto:${contact.email}?subject=Recruiting Fit Call`}>Book the Call</Cta>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
