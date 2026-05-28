import Image from "next/image";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Counter from "@/components/Counter";
import FitCallCta from "@/components/FitCallCta";
import { credentials } from "@/lib/content";

export const metadata = { title: "About · Jason Barry" };

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />

      {/* HERO — trophy + Best Young Teachers badge left, bio right */}
      <section className="relative bg-black pt-28 lg:pt-36">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-12 pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16">
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

          {/* Right column */}
          <div className="lg:col-span-7 xl:col-span-6">
            <p className="rise rise-1 eyebrow text-[color:var(--color-fg-soft)]">Golf Digest Best Young Teachers</p>
            <h1 className="rise rise-2 h-display-black mt-4 text-[60px] md:text-[100px] xl:text-[128px] leading-[0.86]">
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

            <Reveal delay={150}>
              <p className="h-display-black mt-12 text-[28px] md:text-[40px] leading-[1.05] max-w-2xl">
                Recruiting success starts with clarity — and Jason helps families find it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MY PHILOSOPHY — body left + iron-setup photo right */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <p className="eyebrow text-[color:var(--color-fg-soft)]">Coaching credo</p>
          <Reveal as="h2" className="h-display-black mt-3 text-[72px] md:text-[160px] xl:text-[200px] leading-[0.82]">
            My Philosophy
          </Reveal>

          <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6 body text-[18px] text-[color:var(--color-fg-dim)] leading-relaxed">
              <Reveal>
                <p className="h-display text-[28px] md:text-[36px] leading-[1.1] text-[color:var(--color-fg)] max-w-[20ch] mb-8">
                  &ldquo;College golf recruiting does not require pressure or promises. It requires perspective, planning, and honesty.&rdquo;
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  Jason emphasizes three core principles: <strong>develop players who perform under competitive pressure</strong>, <strong>teach competitors to improve scoring practically</strong>, and <strong>provide coach-level perspective on college recruiting.</strong>
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  Rather than making promises or acting as an agent, Jason helps families by <strong>clarifying where players truly fit athletically</strong>, <strong>timing recruiting approaches appropriately</strong>, <strong>facilitating clear, professional communication</strong>, and <strong>supporting informed decision-making.</strong>
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  He specializes in Northeast recruiting, addressing region-specific challenges like shortened seasons, weather impacts, and academic emphasis across Division I, II, and III programs.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative overflow-hidden border border-[color:var(--color-line)] photo-shadow aspect-[4/5]">
                  <Image
                    src="/images/iron-setup.jpg"
                    alt="Jason at iron setup"
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BARRY COACHES PLAYERS — quick stats list */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24">
          <p className="eyebrow text-[color:var(--color-fg-soft)]">Why Barry coaches players</p>
          <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[80px] xl:text-[96px] leading-[0.86]">
            College and recruiting experience.
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
            {credentials.map((c) => (
              <div key={c.label} className="bg-black p-7">
                <p className="h-display-black text-[56px] md:text-[88px] leading-none">
                  {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
                </p>
                <p className="mt-3 eyebrow text-[color:var(--color-fg-soft)] leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIT CALL CTA */}
      <FitCallCta />
    </>
  );
}
