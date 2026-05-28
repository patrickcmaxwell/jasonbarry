import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import ScrollProgress from "@/components/ScrollProgress";
import { contact, lessonTracks } from "@/lib/content";
import { ExternalLink } from "lucide-react";

export const metadata = { title: "Golf Lessons · Jason Barry" };

export default function LessonsPage() {
  return (
    <>
      <ScrollProgress />
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-90" />
        <div className="absolute inset-0 grain opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="rise rise-1 mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-soft)]">Golf Lessons · Springdale GC</p>
          <h1 className="rise rise-2 display mt-3 text-[44px] md:text-[84px] leading-[0.92] max-w-[16ch]">
            Instruction that <span className="italic-serif text-[color:var(--color-amber)]">simplifies</span> the swing.
          </h1>
          <p className="rise rise-3 mt-7 max-w-2xl text-lg text-[color:var(--color-fg-dim)] leading-relaxed">
            Lessons at Springdale Golf Club in Princeton, NJ — taught by a five-time Golf Digest Best Young Teacher and former Division I head coach. Built for golfers who want measurable improvement, not one-off tips.
          </p>
          <div className="rise rise-4 mt-7 flex flex-wrap items-center gap-4">
            <Cta href={`mailto:${contact.email}?subject=Lesson inquiry`}>Inquire about Lessons</Cta>
            <a
              href={contact.clubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ulink inline-flex items-center gap-2 text-sm text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]"
            >
              Staff profile at Springdale <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-2 gap-5">
          {lessonTracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <Tilt max={3} className="h-full">
                <div className="h-full p-8 md:p-10 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] hover:border-[color:var(--color-amber)]/40 transition-colors">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">0{i + 1}</p>
                  <h3 className="display text-3xl md:text-4xl mt-2">{t.title}</h3>
                  <p className="mt-5 text-[15px] text-[color:var(--color-fg-dim)] leading-relaxed">{t.body}</p>
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(`${t.title} — inquiry`)}`}
                    className="ulink mt-7 inline-block text-sm text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]"
                  >
                    Inquire → {t.title}
                  </a>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location strip */}
      <section className="relative bg-[color:var(--color-paper)] text-[color:var(--color-bg)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-black/50">Location</p>
              <Reveal as="h2" className="display text-4xl md:text-7xl mt-4 leading-[0.95]">
                Springdale Golf Club
                <span className="block italic-serif text-3xl md:text-4xl mt-2 text-black/60">Princeton, NJ</span>
              </Reveal>
              <p className="mt-6 max-w-xl text-lg text-black/70 leading-relaxed">
                Jason teaches as Director of Instruction at Springdale, working with members, juniors, and college-bound players on the practice grounds and the course.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-black/15 bg-white p-7">
                <p className="display text-2xl">{contact.club}</p>
                <p className="mt-2 text-sm text-black/60">{contact.address}</p>
                <hr className="my-5 border-black/10" />
                <p className="mono text-[11px] uppercase tracking-[0.18em] text-black/50">Inquire directly</p>
                <p className="mt-2"><a href={`mailto:${contact.email}`} className="ulink">{contact.email}</a></p>
                <p><a href={contact.phoneHref} className="ulink">{contact.phone}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] p-10 md:p-16">
          <div className="absolute inset-0 mesh mesh-anim opacity-70" />
          <div className="absolute inset-0 grain opacity-20" />
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">Get started</p>
              <h2 className="display text-4xl md:text-6xl mt-3 leading-[0.95] max-w-2xl">
                A swing that travels. <span className="italic-serif text-[color:var(--color-amber)]">A plan that holds.</span>
              </h2>
            </div>
            <Cta href={`mailto:${contact.email}?subject=Lesson inquiry`}>Inquire about Lessons</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
