import Link from "next/link";
import Image from "next/image";
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
    <footer className="relative mt-32 border-t border-[color:var(--color-fg)] bg-[color:var(--color-bg)] overflow-hidden">
      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image src="/images/Asset-3.svg" alt="Jason Barry Golf" width={300} height={65} className="h-14 w-auto mb-8" />
            <p className="eyebrow text-[color:var(--color-fg-soft)]">Honest recruiting strategy</p>
            <h3 className="h-display-black text-[44px] md:text-[68px] mt-2 leading-[0.86]">
              Get on the calendar.
            </h3>
            <p className="body mt-5 max-w-md text-[color:var(--color-fg-dim)]">
              A 30-minute call to discuss where the player stands, what's realistic, and whether advisory is the right next step. No pressure, no pitch.
            </p>
            <a
              href={contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-display inline-flex items-center gap-2 mt-7 bg-[color:var(--color-fg)] text-[color:var(--color-bg)] px-6 py-3 text-[15px] hover:bg-[color:var(--color-accent)] hover:text-white transition-colors"
              style={{ letterSpacing: "0.04em" }}
            >
              Book Now <span aria-hidden>→</span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">Contact</p>
            <ul className="mt-4 space-y-3 body">
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
                  {contact.club}<br />
                  {contact.address}
                </span>
              </li>
              <li>
                <a href={contact.clubLink} target="_blank" rel="noopener noreferrer" className="ulink inline-flex items-center gap-2 text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
                  See Location <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">Site</p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="ulink h-display text-[15px] tracking-[0.04em] text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[color:var(--color-fg-soft)]">Follow</p>
            <div className="mt-4 flex gap-3">
              <a href={contact.social.instagram} aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-fg)] transition-colors">
                <IgIcon size={16} />
              </a>
              <a href={contact.social.facebook} aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-fg)] transition-colors">
                <FbIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--color-line)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] mono text-[color:var(--color-fg-soft)]">
          <p>© {new Date().getFullYear()} Jason Barry Golf. All rights reserved.</p>
          <p>Princeton, NJ · Director of Instruction, Springdale Golf Club</p>
        </div>
      </div>
    </footer>
  );
}
