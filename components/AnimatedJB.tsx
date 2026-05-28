"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";

/**
 * Decorative JB watermark — sits behind a section, drifts subtly,
 * parallaxes with scroll. Used to add depth without competing with content.
 */
export default function AnimatedJB({
  size = 520,
  opacity = 0.06,
  position = "right",
  className = "",
}: {
  size?: number;
  opacity?: number;
  position?: "left" | "right" | "center";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  // continuous gentle drift
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const dt = (t - start) / 1000;
      el.style.setProperty("--drift-x", `${Math.sin(dt * 0.22) * 10}px`);
      el.style.setProperty("--drift-y", `${Math.cos(dt * 0.18) * 8}px`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const posCls =
    position === "left" ? "left-[-6%] top-1/2 -translate-y-1/2"
    : position === "center" ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    : "right-[-6%] top-1/2 -translate-y-1/2";

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none absolute ${posCls} ${className}`}
      style={{
        width: size,
        height: size,
        transform: `${position === "center" ? "translate(-50%, -50%) " : position === "left" ? "translate(0, -50%) " : "translate(0, -50%) "}translate3d(var(--drift-x, 0), var(--drift-y, 0), 0)`,
      }}
      aria-hidden
    >
      <motion.div
        style={{
          y: reduced ? 0 : y,
          rotate: reduced ? 0 : rotate,
          opacity,
        }}
        className="relative w-full h-full"
      >
        <Image src="/images/jb-mark.png" alt="" fill sizes={`${size}px`} className="object-contain" />
      </motion.div>
    </div>
  );
}
