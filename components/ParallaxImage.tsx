"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  aspect = "4/5",
  className = "",
  sizes = "(min-width: 1024px) 600px, 100vw",
  amount = 12,
  zoom = 1.04,
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  sizes?: string;
  amount?: number;
  zoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${amount}%`, `-${amount}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, zoom, 1]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden photo-edge photo-shadow ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <motion.div
        style={{ y: reduced ? 0 : y, scale: reduced ? 1 : scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}
