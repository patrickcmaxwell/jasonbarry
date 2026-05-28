import Counter from "./Counter";

export function StatCard({
  value,
  label,
  size = "md",
}: {
  value: string;
  label: string;
  size?: "md" | "lg";
}) {
  const numCls = size === "lg" ? "text-[56px] md:text-[80px]" : "text-[44px] md:text-[60px]";
  return (
    <div className="bg-black p-6 lg:p-8">
      <p className={`h-display ${numCls} leading-none`}>
        {/^\d+/.test(value) ? <Counter value={parseInt(value)} suffix={value.replace(/^\d+/, "")} /> : value}
      </p>
      <p className="mt-3 eyebrow leading-snug">{label}</p>
    </div>
  );
}
