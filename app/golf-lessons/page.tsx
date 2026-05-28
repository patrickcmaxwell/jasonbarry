import Image from "next/image";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { contact, lessonTracks } from "@/lib/content";
import { ExternalLink } from "lucide-react";

export const metadata = { title: "Golf Lessons · Jason Barry" };

export default function LessonsPage() {
  return (
    <>
      <ScrollProgress />

      {/* HERO with iron-setup photo */}
      <section className="relative min-h-[88svh] overflow-hidden">
        <Image
          src="/images/iron-setup.jpg"
          alt="Jason demonstrating setup"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent" />
        <div className="grain absolute inset-0 opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10 pt-36 lg:pt-44 pb-20 grid lg:grid-cols-12">
          <div className="lg:col-span-8 xl:col-span-7">
            <p className="rise rise-1 eyebrow text-[color:var(--color-fg-soft)]">Golf Lessons · Springdale GC · Princeton, NJ</p>
            <h1 className="rise rise-2 h-display-black mt-3 text-[64px] md:text-[120px] xl:text-[148px] leading-[0.84]">
              Instruction that simplifies the swing.
            </h1>
            <p className="rise rise-3 body mt-7 max-w-xl text-[18px] text-[color:var(--color-fg-dim)]">
              Lessons at Springdale Golf Club, taught by a five-time Golf Digest Best Young Teacher and former Division I head coach. Built for golfers who want measurable improvement, not one-off tips.
            </p>
            <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-6">
              <Cta href={contact.bookingUrl}>Book a Lesson</Cta>
              <a
                href={contact.clubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ulink h-display inline-flex items-center gap-2 text-[15px] tracking-[0.06em] text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]"
              >
                See Location <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LESSON TYPES — editorial block list */}
      <section className="bg-black border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
          <ul className="grid gap-px bg-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
            {lessonTracks.map((t, i) => (
              <Reveal key={t.title} delay={i * 60} as="li" className="bg-black p-8 lg:p-12 grid lg:grid-cols-12 gap-6 hover:bg-[color:var(--color-bg-elev)] transition-colors">
                <div className="lg:col-span-2">
                  <p className="h-display-black text-[64px] md:text-[88px] leading-none text-[color:var(--color-fg-soft)]">
                    0{i + 1}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="h-display-black text-[36px] md:text-[52px] leading-[0.95]">{t.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="body text-[17px] text-[color:var(--color-fg-dim)] leading-relaxed">{t.body}</p>
                </div>
                <div className="lg:col-span-1 flex items-start lg:justify-end">
                  <a
                    href={contact.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ulink h-display text-[14px] tracking-[0.06em] text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)] whitespace-nowrap"
                  >
                    Book →
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* LOCATION — split block: paper card + black photo */}
      <section className="bg-[color:var(--color-paper)] text-black">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-black/55">Location</p>
            <Reveal as="h2" className="h-display-black text-[44px] md:text-[100px] mt-3 leading-[0.86]">
              Springdale Golf Club
            </Reveal>
            <p className="h-display text-[24px] md:text-[36px] mt-3 text-black/65">Princeton, NJ</p>
            <p className="mt-8 body text-[18px] max-w-xl">
              Jason teaches as Director of Instruction at Springdale, working with members, juniors, and college-bound players on the practice grounds and the course.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-black/20 bg-white p-7">
              <p className="h-display text-[24px]">{contact.club}</p>
              <p className="mt-2 body text-[14px] text-black/65">{contact.address}</p>
              <hr className="my-5 border-black/15" />
              <p className="eyebrow text-black/55">Inquire directly</p>
              <p className="mt-2 body"><a href={`mailto:${contact.email}`} className="ulink">{contact.email}</a></p>
              <p className="body"><a href={contact.phoneHref} className="ulink">{contact.phone}</a></p>
              <a
                href={contact.clubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ulink h-display mt-5 inline-flex items-center gap-2 text-[14px] tracking-[0.06em]"
              >
                Staff profile · Springdale GC <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-t border-[color:var(--color-fg)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 lg:py-32 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Get started</p>
            <h2 className="h-display-black text-[60px] md:text-[120px] mt-3 leading-[0.84] max-w-2xl">
              A swing that travels.
            </h2>
          </div>
          <Cta href={contact.bookingUrl}>Book a Lesson</Cta>
        </div>
      </section>
    </>
  );
}
