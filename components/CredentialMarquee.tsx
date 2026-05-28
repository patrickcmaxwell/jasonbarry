import Image from "next/image";

const ITEMS = [
  "Former Rider University Head Coach",
  "11 Years College Coaching",
  "Conference Championship",
  "Multiple NCAA Regional Appearances",
  "5× Golf Digest Best Young Teacher",
  "Director of Instruction · Springdale GC",
  "20+ Years Coaching Competitive Golfers",
];

export default function CredentialMarquee() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden rule">
      <div className="marquee-track flex gap-12 whitespace-nowrap py-7 will-change-transform">
        {items.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-12 h-display text-[28px] md:text-[36px] text-[color:var(--color-fg-dim)]">
            {it}
            <Image src="/images/jb-mark.png" alt="" width={26} height={26} className="opacity-40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
