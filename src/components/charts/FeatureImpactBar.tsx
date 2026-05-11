import { cn } from "@/lib/utils";

export function FeatureImpactBar({ feature, impact, compact = false }: { feature: string; impact: number; compact?: boolean }) {
  const positive = impact >= 0;
  const width = `${Math.min(Math.abs(impact) * (compact ? 4 : 3.2), 100)}%`;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-slate-700">{feature}</span>
        <span className={cn("font-semibold", positive ? "text-emerald-600" : "text-red-600")}>
          {positive ? "+" : ""}
          {impact}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div className={cn("h-full rounded-full", positive ? "bg-emerald-500" : "bg-red-500")} style={{ width }} />
      </div>
    </div>
  );
}
