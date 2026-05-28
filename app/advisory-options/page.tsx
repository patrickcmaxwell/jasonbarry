import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import ScrollProgress from "@/components/ScrollProgress";
import { packages, contact, values } from "@/lib/content";
import { Check } from "lucide-react";

export const metadata = { title: "Advisory Options · Jason Barry" };

export default function AdvisoryPage() {
  return (
    <>
      <ScrollProgress />
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-90" />
        <div className="absolute inset-0 grain opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="rise rise-1 mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">Advisory Options</p>
          <h1 className="rise rise-2 display mt-3 text-[44px] md:text-[84px] leading-[0.92] max-w-[16ch]">
            Three ways to work <span className="italic-serif text-[color:var(--color-amber)]">together.</span>
          </h1>
          <p className="rise rise-3 mt-7 max-w-xl text-lg text-[color:var(--color-fg-dim)] leading-relaxed">
            One strategic call, season-long support, or full-cycle high-touch advisory. Each engagement is honest, structured, and built around the player.
          </p>
          <div className="rise rise-4 mt-7 flex flex-wrap gap-2">
            {values.map((v) => (
              <span key={v} className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)] border border-[color:var(--color-line-strong)] rounded-full px-3 py-1.5">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-12">
        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Tilt max={4} className="h-full">
                <div
                  className={`relative h-full p-7 md:p-8 rounded-3xl border bg-[color:var(--color-bg-elev)] flex flex-col ${
                    p.featured
                      ? "border-[color:var(--color-amber)]/60 shadow-[0_0_0_1px_rgba(212,162,76,0.18),0_30px_80px_-30px_rgba(212,162,76,0.35)]"
                      : "border-[color:var(--color-line)]"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute top-5 right-5 mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-bg)] bg-[color:var(--color-amber)] rounded-full px-2.5 py-1">
                      Most chosen
                    </span>
                  )}
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">{`0${i + 1}`} · Tier</p>
                  <h3 className="display text-3xl md:text-4xl mt-3 leading-[0.95]">{p.name}</h3>
                  <p className="mt-3 text-sm text-[color:var(--color-fg-dim)]">{p.cadence}</p>
                  <p className="mt-1 text-[13px] text-[color:var(--color-fg-soft)]">Best for: {p.bestFor}</p>

                  <div className="mt-7 mb-7 flex items-baseline gap-2">
                    <span className="display text-4xl md:text-5xl">{p.price}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[14px] text-[color:var(--color-fg-dim)] leading-snug">
                        <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full shrink-0 ${p.featured ? "bg-[color:var(--color-amber)]/15 text-[color:var(--color-amber)]" : "bg-[color:var(--color-green-deep)] text-[color:var(--color-green-glow)]"}`}>
                          <Check size={11} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(`${p.name} — inquiry`)}`}
                    className={`mt-auto inline-flex justify-center items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold tracking-tight transition-colors ${
                      p.featured
                        ? "bg-[color:var(--color-amber)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-amber-hot)]"
                        : "bg-[color:var(--color-fg)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-amber)]"
                    }`}
                  >
                    Inquire — {p.name.split(" ")[0]}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image break */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <Reveal className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)]">
          <Image
            src="/images/college-jb-golf.png"
            alt="College golf"
            width={1400}
            height={1021}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)] via-transparent to-transparent" />
        </Reveal>
      </section>

      {/* What advisory does and doesn't */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="p-8 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)]">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-green-glow)]">What advisory includes</p>
              <ul className="mt-5 space-y-3 text-[15px] text-[color:var(--color-fg-dim)]">
                {[
                  "Honest competitive evaluation by a former college coach",
                  "Division and program-fit guidance grounded in real exposure",
                  "Recruiting timeline, schedule, and communication strategy",
                  "Tournament schedule perspective and review of player letters",
                  "Long-term structure and accountability through the cycle",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3"><Check size={14} className="mt-1 text-[color:var(--color-green-glow)]" />{l}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="p-8 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">What it does not include</p>
              <ul className="mt-5 space-y-3 text-[15px] text-[color:var(--color-fg-dim)]">
                {[
                  "Swing instruction (separate from advisory)",
                  "Guaranteed placement or roster commitments",
                  "Recruiting agency or representation services",
                  "Advocacy or back-channeling with coaches",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3"><span className="mt-1.5 inline-block h-1 w-3 bg-[color:var(--color-fg-soft)]" />{l}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] p-10 md:p-16">
          <div className="absolute inset-0 mesh mesh-anim opacity-70" />
          <div className="absolute inset-0 grain opacity-20" />
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">Not sure which tier?</p>
              <h2 className="display text-4xl md:text-6xl mt-3 leading-[0.95] max-w-2xl">
                Start with a <span className="italic-serif text-[color:var(--color-amber)]">fit call.</span>
              </h2>
              <p className="mt-4 text-[color:var(--color-fg-dim)] max-w-xl">
                An honest 30-minute conversation about where the player stands and what's realistic.
              </p>
            </div>
            <Cta href={`mailto:${contact.email}?subject=Recruiting Fit Call`}>Book the Call</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
