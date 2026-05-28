import Link from "next/link";
import { contact, nav } from "@/lib/content";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

function IgIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FbIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)] overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[1100px] rounded-full bg-[radial-gradient(closest-side,rgba(212,162,76,0.18),transparent)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase text-[color:var(--color-fg-soft)] tracking-[0.18em]">Get on the calendar</p>
            <h3 className="display text-4xl md:text-5xl mt-3">
              A 30-minute call <span className="italic-serif">that tells you the truth.</span>
            </h3>
            <p className="mt-5 max-w-md text-[color:var(--color-fg-dim)]">
              No pressure, no pitch. We discuss where the player stands, what's realistic, and whether advisory is the right next step.
            </p>
            <a
              href={`mailto:${contact.email}?subject=Recruiting Fit Call`}
              className="inline-flex items-center gap-2 mt-7 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] px-6 py-3 text-sm font-semibold hover:bg-[color:var(--color-amber)] transition-colors"
            >
              Schedule a Fit Call <span aria-hidden>→</span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="mono text-[11px] uppercase text-[color:var(--color-fg-soft)] tracking-[0.18em]">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="ulink inline-flex items-center gap-2 text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
                  <Mail size={14} /> {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="ulink inline-flex items-center gap-2 text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
                  <Phone size={14} /> {contact.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-[color:var(--color-fg-dim)]">
                <MapPin size={14} className="mt-1" />
                <span>
                  {contact.club}
                  <br />
                  {contact.address}
                </span>
              </li>
              <li>
                <a href={contact.clubLink} target="_blank" rel="noopener noreferrer" className="ulink inline-flex items-center gap-2 text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
                  Staff profile at Springdale <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mono text-[11px] uppercase text-[color:var(--color-fg-soft)] tracking-[0.18em]">Site</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="ulink text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mono text-[11px] uppercase text-[color:var(--color-fg-soft)] tracking-[0.18em]">Follow</p>
            <div className="mt-4 flex gap-3">
              <a href={contact.social.instagram} aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-amber)] hover:text-[color:var(--color-amber)] transition-colors">
                <IgIcon size={16} />
              </a>
              <a href={contact.social.facebook} aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-amber)] hover:text-[color:var(--color-amber)] transition-colors">
                <FbIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--color-line)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="display text-[64px] sm:text-[112px] leading-[0.85] tracking-tight">
              Jason<span className="text-[color:var(--color-amber)]">.</span>
            </p>
            <p className="display text-[64px] sm:text-[112px] leading-[0.85] tracking-tight -mt-1">
              Barry<span className="italic-serif text-[color:var(--color-fg-soft)] text-[28px] sm:text-[40px] ml-3">— golf</span>
            </p>
          </div>
          <div className="text-[11px] mono text-[color:var(--color-fg-soft)] sm:text-right">
            <p>© {new Date().getFullYear()} Jason Barry Golf. All rights reserved.</p>
            <p className="mt-1">Princeton, NJ · Director of Instruction, Springdale GC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
