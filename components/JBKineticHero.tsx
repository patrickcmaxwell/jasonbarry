"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

/**
 * A small, sharp JB monogram lockup that lives in heroes — animates on
 * mount with a kinetic letter-reveal feel: scale-up + rotate + counter-mark
 * trail.
 */
export default function JBKineticHero({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const r = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const s = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <div ref={ref} className={`relative ${className}`} aria-hidden>
      {/* phantom trail */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -16 }}
        animate={{ opacity: 0.12, scale: 1.18, rotate: -4 }}
        transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
        className="absolute inset-0"
        style={{ rotate: r }}
      >
        <Image src="/images/jb-mark.png" alt="" fill sizes="240px" className="object-contain" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: 12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1], delay: 0.05 }}
        style={{ scale: s }}
        className="relative"
      >
        <Image src="/images/jb-mark.png" alt="Jason Barry monogram" width={240} height={240} className="w-full h-auto" priority />
      </motion.div>
    </div>
  );
}
