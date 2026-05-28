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
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-90" />
        <div className="absolute inset-0 grain opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="rise rise-1 mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">About</p>
          <h1 className="rise rise-2 display mt-3 text-[44px] md:text-[84px] leading-[0.92] max-w-[14ch]">
            Coach-level <span className="italic-serif text-[color:var(--color-amber)]">perspective.</span>
            <br />
            No agenda.
          </h1>
          <p className="rise rise-3 mt-7 max-w-xl text-lg text-[color:var(--color-fg-dim)] leading-relaxed">
            Director of Instruction at Springdale Golf Club. Former Head Coach, Rider University Men's Golf. Five-time Golf Digest Best Young Teacher.
          </p>
        </div>
      </section>

      {/* Portrait + bio */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[color:var(--color-amber)]/10 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)]">
                <Image
                  src="/images/portrait-2.jpg"
                  alt="Jason Barry"
                  width={1167}
                  height={780}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="relative mt-6 flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden border border-[color:var(--color-line-strong)] bg-[color:var(--color-bg-elev)]">
                  <Image src="/images/best-young-teacher.avif" alt="Golf Digest Best Young Teacher" fill className="object-cover" />
                </div>
                <div>
                  <p className="display text-2xl"><Counter value={5} suffix="×" /></p>
                  <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">Golf Digest Best Young Teacher</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">Bio</p>
              <h2 className="display text-3xl md:text-5xl mt-3 leading-[0.95]">
                Two decades coaching golfers. <span className="italic-serif text-[color:var(--color-amber)]">Eleven inside the college game.</span>
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6 text-lg text-[color:var(--color-fg-dim)] leading-relaxed max-w-xl">
              {aboutPara.map((p, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-12 grid sm:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden max-w-xl">
                {credentials.map((c) => (
                  <div key={c.label} className="bg-[color:var(--color-bg)] p-5">
                    <p className="display text-3xl">
                      {/^\d+/.test(c.value) ? <Counter value={parseInt(c.value)} suffix={c.value.replace(/^\d+/, "")} /> : c.value}
                    </p>
                    <p className="mt-1.5 text-[11px] mono uppercase tracking-wider text-[color:var(--color-fg-soft)] leading-snug">
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy block */}
      <section className="relative bg-[color:var(--color-paper)] text-[color:var(--color-bg)]">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-32">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-black/50">Philosophy</p>
          <Reveal as="blockquote" className="display text-4xl md:text-7xl mt-6 leading-[0.95] max-w-[18ch]">
            College golf recruiting does not require pressure or promises. It requires <span className="italic-serif">perspective, planning, and honesty.</span>
          </Reveal>
          <p className="mono mt-8 text-[11px] uppercase tracking-[0.18em] text-black/40">— Jason Barry</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h3 className="display text-3xl md:text-5xl leading-[0.95] max-w-xl">
            Find out where the player actually stands.
          </h3>
          <Cta href={`mailto:${contact.email}?subject=Recruiting Fit Call`}>Schedule a Fit Call</Cta>
        </div>
      </section>
    </>
  );
}
