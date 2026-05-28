import Image from "next/image";
import Cta from "./Cta";
import { contact } from "@/lib/content";

export default function FitCallCta() {
  return (
    <section className="relative border-t border-[color:var(--color-fg)]">
      <div className="relative min-h-[70svh] overflow-hidden flex items-center">
        <Image
          src="/images/NCAA-tee-markers.jpg"
          alt="NCAA tee markers"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="grain absolute inset-0 opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-10 items-end w-full">
          <div className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--color-accent)]">Recruiting fit assessment</p>
            <h2 className="h-display-black text-[60px] md:text-[120px] xl:text-[140px] mt-4 leading-[0.84] max-w-[14ch]">
              Start with a recruiting fit call.
            </h2>
            <p className="body mt-6 max-w-xl text-[18px] text-[color:var(--color-fg-dim)]">
              The first step is to discuss the recruiting fit call — an honest 30-minute conversation about where the player stands and what's realistic.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Cta href={contact.bookingUrl}>Schedule a Fit Call</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
