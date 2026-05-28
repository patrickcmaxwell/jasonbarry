import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import ScrollProgress from "@/components/ScrollProgress";
import { contact, juniorPara, juniorTracks } from "@/lib/content";

export const metadata = { title: "Junior Golf · Jason Barry" };

export default function JuniorGolfPage() {
  return (
    <>
      <ScrollProgress />
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-90" />
        <div className="absolute inset-0 grain opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="rise rise-1 mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">Junior Golf</p>
          <h1 className="rise rise-2 display mt-3 text-[44px] md:text-[84px] leading-[0.92] max-w-[16ch]">
            Build a junior <span className="italic-serif text-[color:var(--color-amber)]">who scores</span> under pressure.
          </h1>
          <p className="rise rise-3 mt-7 max-w-2xl text-lg text-[color:var(--color-fg-dim)] leading-relaxed">
            Junior development at Springdale Golf Club, taught by a five-time Best Young Teacher and former Division I head coach. Programs are structured, measured, and progress-tracked.
          </p>
        </div>
      </section>

      {/* Action photo */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)]">
          <Image
            src="/images/portrait-1.jpg"
            alt="Jason Barry working with a junior player"
            width={1400}
            height={1016}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)]/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">On the range · Springdale GC</p>
            <p className="display text-2xl md:text-4xl mt-2 max-w-2xl leading-[0.95]">
              Reps with intent. Feedback that sticks. <span className="italic-serif">Skills that travel.</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* Intro paragraphs */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">Approach</p>
            <Reveal as="h2" className="display text-3xl md:text-5xl mt-3 leading-[0.95]">
              The skills that <span className="italic-serif text-[color:var(--color-amber)]">actually</span> move scores.
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-[color:var(--color-fg-dim)] leading-relaxed">
            {juniorPara.map((p, i) => (
              <Reveal key={i} delay={i * 100}><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">Tracks</p>
            <h2 className="display text-3xl md:text-5xl mt-3 leading-[0.95]">Matched to the player.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {juniorTracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <Tilt max={3}>
                <div className="h-full p-7 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] hover:border-[color:var(--color-amber)]/40 transition-colors">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">{t.age}</p>
                  <h3 className="display text-2xl mt-2">{t.title}</h3>
                  <p className="mt-4 text-[15px] text-[color:var(--color-fg-dim)] leading-relaxed">{t.body}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Method strip */}
      <section className="relative bg-[color:var(--color-paper)] text-[color:var(--color-bg)] mt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-32">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-black/50">Method</p>
          <Reveal as="h2" className="display text-4xl md:text-7xl mt-4 leading-[0.95] max-w-[22ch]">
            We measure what we want to improve, then <span className="italic-serif">improve it.</span>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-4 gap-px bg-black/12 border border-black/12 rounded-2xl overflow-hidden">
            {[
              { k: "Putting", v: "Stroke-gained baseline, 6-week protocol" },
              { k: "Short game", v: "Distance control inside 50 yards" },
              { k: "Scoring", v: "Course management & tournament prep" },
              { k: "Mental", v: "Routines under pressure" },
            ].map((c) => (
              <div key={c.k} className="bg-[color:var(--color-paper)] p-6">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-black/50">{c.k}</p>
                <p className="mt-3 text-[15px]">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h3 className="display text-3xl md:text-5xl leading-[0.95] max-w-xl">
            Ready to put a real program around a junior?
          </h3>
          <Cta href={`mailto:${contact.email}?subject=Junior Golf — inquiry`}>Inquire — Junior Golf</Cta>
        </div>
      </section>
    </>
  );
}
