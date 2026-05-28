import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { packages, contact } from "@/lib/content";
import { Check } from "lucide-react";

export const metadata = { title: "Advisory Options · Jason Barry" };

export default function AdvisoryPage() {
  return (
    <>
      <ScrollProgress />

      {/* HERO */}
      <section className="relative bg-black pt-28 lg:pt-36">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-12 pb-16">
          <p className="rise rise-1 eyebrow text-[color:var(--color-fg-soft)]">Advisory Options · 2026 cycle</p>
          <h1 className="rise rise-2 h-display-black mt-3 text-[64px] md:text-[120px] xl:text-[160px] leading-[0.84] max-w-[16ch]">
            Three ways to work together.
          </h1>
          <p className="rise rise-3 body mt-7 max-w-2xl text-[18px] text-[color:var(--color-fg-dim)]">
            One strategic call, season-long support, or full-cycle high-touch advisory. Each engagement is honest, structured, and built around the player.
          </p>
        </div>
      </section>

      {/* College photo break — full bleed */}
      <section className="relative">
        <div className="relative">
          <Image
            src="/images/college-jb-golf.png"
            alt="College golf"
            width={2048}
            height={1493}
            className="w-full h-[50svh] md:h-[60svh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="grain absolute inset-0 opacity-25 pointer-events-none" />
        </div>
      </section>

      {/* PACKAGES — three stacked editorial blocks */}
      <section className="bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
          <ul className="grid gap-px bg-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} as="li" className={`bg-black p-8 md:p-14 grid lg:grid-cols-12 gap-8 ${p.featured ? "lg:bg-[color:var(--color-bg-elev)]" : ""}`}>
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <p className="h-display-black text-[80px] md:text-[120px] leading-none text-[color:var(--color-fg-soft)]">
                      0{i + 1}
                    </p>
                    {p.featured && (
                      <span className="tag self-end mb-3" style={{ marginBottom: 10 }}>Most chosen</span>
                    )}
                  </div>
                  <h2 className="h-display-black text-[44px] md:text-[64px] leading-[0.86]">{p.name}</h2>
                  <p className="eyebrow mt-3 text-[color:var(--color-fg-soft)]">{p.cadence}</p>
                  <p className="body mt-3 text-[15px] text-[color:var(--color-fg-dim)] max-w-md">Best for: {p.bestFor}</p>
                  <p className="h-display-black mt-8 text-[44px] md:text-[64px] leading-none">{p.price}</p>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <ul className="space-y-3 body text-[16px]">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 border-t border-[color:var(--color-line)] pt-3">
                        <Check size={16} className="mt-1 shrink-0 text-[color:var(--color-fg)]" />
                        <span className="text-[color:var(--color-fg-dim)]">{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Cta href={contact.bookingUrl} tone={p.featured ? "fg" : "outline"}>
                      Book — {p.name.split(" ")[0]}
                    </Cta>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What's IN vs what's OUT */}
      <section className="bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
          <Reveal className="bg-black p-10">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">What advisory includes</p>
            <ul className="mt-6 space-y-4 body text-[17px]">
              {[
                "Honest competitive evaluation by a former college coach",
                "Division and program-fit guidance grounded in real exposure",
                "Recruiting timeline, schedule, and communication strategy",
                "Tournament schedule perspective and review of player letters",
                "Long-term structure and accountability through the cycle",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 border-t border-[color:var(--color-line)] pt-4">
                  <Check size={16} className="mt-1 text-[color:var(--color-fg)]" />
                  <span className="text-[color:var(--color-fg-dim)]">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="bg-[color:var(--color-paper)] text-black p-10">
            <p className="eyebrow text-black/55">What it is NOT</p>
            <ul className="mt-6 space-y-4 body text-[17px]">
              {[
                "Swing instruction (separate from advisory)",
                "Guaranteed placement or roster commitments",
                "Recruiting agency or representation services",
                "Advocacy or back-channeling with coaches",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 border-t border-black/20 pt-4">
                  <span className="mt-2 inline-block h-px w-3 bg-black/60 shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-t border-[color:var(--color-fg)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 lg:py-32 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Not sure which tier?</p>
            <h2 className="h-display-black text-[60px] md:text-[120px] mt-3 leading-[0.84] max-w-2xl">
              Start with a fit call.
            </h2>
          </div>
          <Cta href={contact.bookingUrl}>Book the Fit Call</Cta>
        </div>
      </section>
    </>
  );
}
