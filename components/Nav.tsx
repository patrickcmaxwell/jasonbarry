"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--color-bg)]/72 border-b border-[color:var(--color-line)]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="group flex items-center gap-3" aria-label="Jason Barry — Home">
          <span className="relative inline-flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[color:var(--color-amber)] opacity-0 blur-md group-hover:opacity-40 transition-opacity duration-500" />
            <svg viewBox="0 0 36 36" className="relative h-9 w-9">
              <circle cx="18" cy="18" r="17" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[color:var(--color-line-strong)]" />
              <text x="18" y="22" textAnchor="middle" className="display fill-[color:var(--color-fg)]" style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.04em" }}>
                JB
              </text>
            </svg>
          </span>
          <span className="hidden sm:block">
            <span className="block text-[13px] leading-none font-semibold tracking-tight">Jason Barry</span>
            <span className="block text-[10px] mono uppercase text-[color:var(--color-fg-soft)] mt-0.5">Golf · Recruiting · Instruction</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = n.href === pathname;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`relative px-4 py-2 text-[13px] tracking-tight transition-colors ${
                    active ? "text-[color:var(--color-fg)]" : "text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[color:var(--color-amber)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/advisory-options"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] px-5 py-2.5 text-[13px] font-semibold tracking-tight hover:bg-[color:var(--color-amber)] hover:text-[color:var(--color-bg)] transition-colors"
          >
            Schedule a Fit Call
            <span aria-hidden>→</span>
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line-strong)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)]">
          <ul className="px-6 py-5 grid gap-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="block py-2 text-base tracking-tight text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/advisory-options"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] px-5 py-2.5 text-[13px] font-semibold"
              >
                Schedule a Fit Call →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
