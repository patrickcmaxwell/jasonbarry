import Image from "next/image";
import Cta from "./Cta";
import { contact } from "@/lib/content";

export default function FitCallCta({
  eyebrow = "Recruiting Fit Assessment",
  title = "Start with a recruiting fit call.",
  body = "A structured introductory conversation designed to evaluate where a player currently stands, discuss recruiting goals, and determine whether ongoing advisory support would provide meaningful value.",
  cta = "Schedule a Recruiting Fit Call",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="relative rule">
      <div className="relative min-h-[80svh] overflow-hidden flex items-center">
        <Image
          src="/images/NCAA-tee-markers.jpg"
          alt="NCAA tee markers"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="grain absolute inset-0 opacity-20 pointer-events-none" />

        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12 py-28 lg:py-40 grid lg:grid-cols-12 gap-12 items-end w-full">
          <div className="lg:col-span-8">
            <p className="eyebrow-accent">{eyebrow}</p>
            <h2 className="section-h2-xl mt-5 max-w-[14ch]">
              {title}
            </h2>
            <p className="body mt-8 max-w-xl text-[17px] text-[color:var(--color-fg-dim)] leading-[1.7]">
              {body}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Cta href={contact.bookingUrl}>{cta}</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
