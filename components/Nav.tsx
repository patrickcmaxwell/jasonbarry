"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, contact } from "@/lib/content";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-[color:var(--color-line)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center" aria-label="Jason Barry Golf — Home">
          <Image
            src="/images/Asset-3.svg"
            alt="Jason Barry Golf"
            width={200}
            height={43}
            priority
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {nav.map((n) => {
            const active = n.href === pathname;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`h-display text-[14px] tracking-[0.04em] transition-colors ${
                    active ? "text-[color:var(--color-fg)]" : "text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]"
                  }`}
                  style={{ letterSpacing: "0.04em" }}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-display inline-flex items-center gap-2 border border-[color:var(--color-fg)] text-[color:var(--color-fg)] px-5 py-2.5 text-[14px] hover:bg-[color:var(--color-fg)] hover:text-[color:var(--color-bg)] transition-colors"
            style={{ letterSpacing: "0.06em" }}
          >
            Book Now <span aria-hidden>→</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-[color:var(--color-line-strong)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)]">
          <ul className="px-6 py-5 grid gap-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="h-display block py-1.5 text-[18px] tracking-[0.04em] text-[color:var(--color-fg-dim)]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
