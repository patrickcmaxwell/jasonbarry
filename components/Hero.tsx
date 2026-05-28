"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

export default function Hero({
  src,
  alt,
  eyebrow,
  headline,
  body,
  cta,
  objectPosition = "center",
  align = "left",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  headline: React.ReactNode;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  objectPosition?: string;
  align?: "left" | "right";
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] max-h-[1000px] overflow-hidden">
      {/* Parallax photo */}
      <motion.div
        style={{ y: reduced ? 0 : photoY, scale: reduced ? 1 : photoScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </motion.div>

      {/* Gradient scrim — only in bottom-left quadrant, doesn't cover the face */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className={`absolute inset-0 ${align === "left" ? "bg-gradient-to-r from-black/85 via-black/30 to-transparent" : "bg-gradient-to-l from-black/85 via-black/30 to-transparent"}`} style={{ backgroundSize: "60% 100%", backgroundRepeat: "no-repeat" }} />
      <div className="grain absolute inset-0 opacity-20 pointer-events-none" />

      {/* Copy block — anchored bottom-left */}
      <motion.div
        style={{ y: reduced ? 0 : copyY, opacity: reduced ? 1 : copyOpacity }}
        className="absolute inset-0 flex items-end"
      >
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <div className={`max-w-2xl ${align === "right" ? "ml-auto text-right" : ""}`}>
            {eyebrow && <div className="rise rise-1 mb-7"><span className="tag"><span className="mono text-[11px]">{eyebrow}</span></span></div>}
            <h1 className="rise rise-2 hero-headline">{headline}</h1>
            {body && (
              <p className="rise rise-3 mt-7 body text-[16px] lg:text-[17px] max-w-xl text-[color:var(--color-fg-dim)]">
                {body}
              </p>
            )}
            {cta && <div className="rise rise-4 mt-9">{cta}</div>}
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[color:var(--color-fg-soft)]">
        <span className="mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="scroll-cue inline-block w-px h-8 bg-[color:var(--color-fg-soft)]" />
      </div>
    </section>
  );
}
