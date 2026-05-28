export default function Marquee({ items, accent }: { items: string[]; accent?: string }) {
  const set = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[color:var(--color-line)] py-6">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {set.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-12 display text-3xl md:text-4xl">
            {w}
            <span className={`inline-block h-2 w-2 rounded-full ${accent ?? "bg-[color:var(--color-amber)]"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
