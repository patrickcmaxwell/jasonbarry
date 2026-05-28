import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { contact, juniorPara, juniorTracks } from "@/lib/content";

export const metadata = { title: "Junior Golf · Jason Barry" };

export default function JuniorGolfPage() {
  return (
    <>
      <ScrollProgress />

      {/* HERO */}
      <section className="relative min-h-[80svh] overflow-hidden">
        <Image
          src="/images/portrait-1.jpg"
          alt="Jason coaching a junior player"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent" />
        <div className="grain absolute inset-0 opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10 pt-36 lg:pt-44 pb-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 xl:col-span-7">
            <p className="rise rise-1 eyebrow text-[color:var(--color-fg-soft)]">Junior Golf · Springdale GC</p>
            <h1 className="rise rise-2 h-display-black mt-3 text-[64px] md:text-[120px] xl:text-[148px] leading-[0.84]">
              Build a junior who scores under pressure.
            </h1>
            <p className="rise rise-3 body mt-7 max-w-xl text-[18px] text-[color:var(--color-fg-dim)]">
              Junior development at Springdale Golf Club, taught by a five-time Best Young Teacher and former Division I head coach. Programs are structured, measured, and progress-tracked.
            </p>
            <div className="rise rise-4 mt-9 flex flex-wrap gap-4">
              <Cta href={contact.bookingUrl}>Book a Junior Consultation</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">Approach</p>
            <Reveal as="h2" className="h-display-black text-[44px] md:text-[72px] mt-3 leading-[0.86]">
              The skills that actually move scores.
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 body text-[17px] text-[color:var(--color-fg-dim)] leading-relaxed">
            {juniorPara.map((p, i) => (
              <Reveal key={i} delay={i * 100}><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKS — three editorial blocks */}
      <section className="bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
          <p className="eyebrow text-[color:var(--color-fg-soft)]">Tracks</p>
          <Reveal as="h2" className="h-display-black text-[44px] md:text-[72px] mt-3 leading-[0.86]">Matched to the player.</Reveal>

          <ul className="mt-12 grid gap-px bg-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
            {juniorTracks.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} as="li" className="bg-black p-8 lg:p-12 grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-2">
                  <p className="h-display-black text-[64px] md:text-[88px] leading-none text-[color:var(--color-fg-soft)]">
                    0{i + 1}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <p className="eyebrow text-[color:var(--color-fg-soft)]">{t.age}</p>
                  <h3 className="h-display-black mt-2 text-[36px] md:text-[52px] leading-[0.95]">{t.title}</h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="body text-[17px] text-[color:var(--color-fg-dim)] leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* METHOD STRIP — cream block */}
      <section className="bg-[color:var(--color-paper)] text-black">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <p className="eyebrow text-black/55">Method</p>
          <Reveal as="h2" className="h-display-black text-[44px] md:text-[88px] mt-3 max-w-[22ch] leading-[0.86]">
            We measure what we want to improve, then improve it.
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-px bg-black/15 border border-black/15">
            {[
              { k: "Putting", v: "Stroke-gained baseline, 6-week protocol" },
              { k: "Short game", v: "Distance control inside 50 yards" },
              { k: "Scoring", v: "Course management & tournament prep" },
              { k: "Mental", v: "Routines under pressure" },
            ].map((c) => (
              <div key={c.k} className="bg-[color:var(--color-paper)] p-7">
                <p className="eyebrow text-black/55">{c.k}</p>
                <p className="mt-3 body text-[16px]">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-t border-[color:var(--color-fg)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h3 className="h-display-black text-[44px] md:text-[80px] leading-[0.86] max-w-2xl">
            Ready to put a real program around a junior?
          </h3>
          <Cta href={contact.bookingUrl}>Book a Junior Consultation</Cta>
        </div>
      </section>
    </>
  );
}
