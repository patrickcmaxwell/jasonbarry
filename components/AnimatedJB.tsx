"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";

/**
 * Kinetic JB monogram — sits behind a section as a watermark and reacts
 * to scroll: slow rotation drift, scale breath, parallax up/down, slight
 * tilt on hover. Respects prefers-reduced-motion.
 */
export default function AnimatedJB({
  size = 720,
  opacity = 0.08,
  className = "",
  variant = "mark",
}: {
  size?: number;
  opacity?: number;
  className?: string;
  variant?: "mark" | "wordmark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  // subtle continuous drift on top of scroll-driven motion
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const dt = (t - start) / 1000;
      el.style.setProperty("--drift-x", `${Math.sin(dt * 0.25) * 8}px`);
      el.style.setProperty("--drift-y", `${Math.cos(dt * 0.18) * 6}px`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const src = variant === "wordmark" ? "/images/Asset-3.svg" : "/images/jb-mark.png";
  const aspect = variant === "wordmark" ? 153.56 / 33.07 : 1;

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        style={{
          y: reduced ? 0 : y,
          rotate: reduced ? 0 : rotate,
          scale: reduced ? 1 : scale,
          opacity,
          width: size,
          height: variant === "wordmark" ? size / aspect : size,
          transform: "translate3d(var(--drift-x, 0), var(--drift-y, 0), 0)",
        }}
        className="relative"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes={`${size}px`}
          className="object-contain"
          priority={false}
        />
      </motion.div>
    </div>
  );
}
