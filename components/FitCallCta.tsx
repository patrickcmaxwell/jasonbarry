"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
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
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const s = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section ref={ref} className="relative rule">
      <div className="relative min-h-[70svh] overflow-hidden flex items-center">
        <motion.div
          style={{ y: reduced ? 0 : y, scale: reduced ? 1 : s }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/NCAA-tee-markers.jpg"
            alt="NCAA tee markers"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="grain absolute inset-0 opacity-20 pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-end w-full">
          <div className="lg:col-span-8">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-h2-statement mt-5 max-w-[16ch]">{title}</h2>
            <p className="body mt-8 max-w-xl text-[16px] leading-[1.75]">{body}</p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Cta href={contact.bookingUrl}>{cta}</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
