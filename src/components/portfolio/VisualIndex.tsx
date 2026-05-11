import type { ResearchDomain } from "@/data/types";

const domainColors: Record<ResearchDomain, string> = {
  "Human Resource Management": "bg-blue-deep",
  "Healthcare Systems": "bg-blue",
  "Sustainability and Climate": "bg-green",
  "Digital Behavior and Technology": "bg-blue-bright",
  "Science Communication": "bg-gold"
};

export function VisualIndex({ title, domain }: { title: string; domain: ResearchDomain }) {
  const color = domainColors[domain];

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-surface" role="img" aria-label={`${title} visual index`}>
      <div className="absolute inset-x-5 top-5 flex items-end gap-2">
        {[42, 66, 34, 78, 58].map((height, index) => (
          <div key={index} className={`${color} w-full rounded-t-sm`} style={{ height: `${height}%`, opacity: index === 3 ? 1 : 0.7 }} />
        ))}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="mb-4 h-px bg-blue-deep/70" />
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">{domain}</p>
      </div>
    </div>
  );
}
