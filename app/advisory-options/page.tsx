import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import FitCallCta from "@/components/FitCallCta";
import { packages, contact, provides, notProvides } from "@/lib/content";
import { Check } from "lucide-react";

export const metadata = { title: "Work with Me · Advisory Options · Jason Barry" };

export default function AdvisoryPage() {
  return (
    <>
      <ScrollProgress />

      {/* HERO — coaching action shot (portrait-1) full-bleed with WORK WITH ME */}
      <Hero
        src="/images/portrait-1.jpg"
        alt="Jason coaching a player"
        objectPosition="60% 35%"
        eyebrow="Advisory Options · 2026 cycle"
        headline={
          <>
            <span className="block">Work</span>
            <span className="block">with me.</span>
          </>
        }
        body={
          <>
            One strategic call, season-long support, or full-cycle high-touch advisory. Each engagement is honest, structured, and built around the player in front of us.
          </>
        }
        cta={<Cta href={contact.bookingUrl}>Schedule a Recruiting Fit Call</Cta>}
      />

      {/* HOW THE ADVISORY WORKS — body left + photo right */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">How the advisory works</p>
            <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[80px] xl:text-[100px] leading-[0.86]">
              Built around the player.
            </Reveal>
            <div className="mt-8 space-y-5 body text-[18px] text-[color:var(--color-fg-dim)] leading-relaxed max-w-2xl">
              <Reveal>
                <p>
                  College golf recruiting looks different depending on where a player is in the process. This advisory is structured to provide <strong>the right level of support at the right time.</strong>
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  Every family begins with a <strong>Recruiting Fit Call.</strong> From there, Jason recommends the level of support that best fits the player's current stage and goals — anywhere from a single strategic call to multi-year, full-cycle advisory.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  <strong>No agency. No placement promises.</strong> Just experienced perspective, a clear plan, and honest accountability through the cycle.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden border border-[color:var(--color-line)] photo-shadow aspect-[4/5]">
                <Image
                  src="/images/college-jb-golf.png"
                  alt="College golf"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ADVISORY OPTIONS — 3 white cards */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">Advisory options</p>
            <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[80px] xl:text-[96px] leading-[0.86]">
              Three engagements. One philosophy.
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-8">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <article
                  className={`h-full flex flex-col p-8 lg:p-10 border ${
                    p.featured
                      ? "bg-[color:var(--color-paper)] text-black border-[color:var(--color-paper)]"
                      : "bg-white text-black border-white"
                  }`}
                >
                  <p className="eyebrow" style={{ color: p.featured ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.55)" }}>
                    {String(i + 1).padStart(2, "0")} · Tier
                  </p>
                  <h3 className="h-display-black mt-3 text-[36px] md:text-[44px] leading-[0.9]">{p.name}</h3>
                  <p className="mt-3 body text-[14px]" style={{ color: "rgba(0,0,0,0.6)" }}>{p.cadence}</p>
                  <p className="mt-1 body text-[13px]" style={{ color: "rgba(0,0,0,0.5)" }}>Best for: {p.bestFor}</p>

                  <ul className="mt-7 space-y-3 body text-[14px] flex-1">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 border-t border-black/15 pt-3">
                        <Check size={14} className="mt-1 text-black shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-black/15">
                    <p className="eyebrow text-black/55">Investment</p>
                    <p className="h-display-black mt-2 text-[28px] md:text-[36px] leading-none">{p.price}</p>
                  </div>

                  <a
                    href={contact.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-display mt-7 inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-[14px] hover:bg-[color:var(--color-accent)] transition-colors"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    Book this tier <span aria-hidden>→</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS ADVISORY IS — AND IS NOT */}
      <section className="relative bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">What this advisory is — and is not</p>
            <Reveal as="h2" className="h-display-black mt-3 text-[44px] md:text-[80px] xl:text-[96px] leading-[0.86]">
              Honest expectations.
            </Reveal>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.08]">
              <Image src="/images/jb-mark.png" alt="" width={520} height={520} className="w-[320px] md:w-[480px] h-auto" />
            </div>

            <Reveal className="relative bg-black p-10 lg:p-14">
              <p className="eyebrow text-[color:var(--color-fg)]">This advisory IS:</p>
              <ul className="mt-7 space-y-4 body text-[17px]">
                {provides.map((p) => (
                  <li key={p} className="flex items-start gap-3 border-t border-[color:var(--color-line)] pt-4">
                    <Check size={16} className="mt-1 text-[color:var(--color-fg)] shrink-0" />
                    <span className="text-[color:var(--color-fg-dim)]">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="relative bg-black p-10 lg:p-14">
              <p className="eyebrow text-[color:var(--color-accent)]">This advisory IS NOT:</p>
              <ul className="mt-7 space-y-4 body text-[17px]">
                {notProvides.map((p) => (
                  <li key={p} className="flex items-start gap-3 border-t border-[color:var(--color-line)] pt-4">
                    <span className="mt-2 inline-block h-px w-3 bg-[color:var(--color-fg-soft)] shrink-0" />
                    <span className="text-[color:var(--color-fg-dim)]">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FIT CALL CTA */}
      <FitCallCta />
    </>
  );
}
