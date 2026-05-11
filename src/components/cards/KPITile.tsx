import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KPITile({
  title,
  value,
  caption,
  icon: Icon,
  tone = "slate"
}: {
  title: string;
  value: string;
  caption?: string;
  icon?: LucideIcon;
  tone?: "slate" | "emerald" | "violet" | "indigo" | "rose" | "teal" | "amber" | "blue";
}) {
  const toneClass = {
    slate: "bg-slate-50 text-slate-600",
    emerald: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
    indigo: "bg-indigo-50 text-indigo-600",
    rose: "bg-rose-50 text-rose-600",
    teal: "bg-teal-50 text-teal-600",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-600"
  }[tone];
  return (
    <Card className="p-4 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{title}</p>
          <div className="mt-2 text-xl font-semibold text-slate-950">{value}</div>
          {caption ? <p className="mt-1 text-xs text-slate-500">{caption}</p> : null}
        </div>
        {Icon ? (
          <div className={cn("rounded-lg p-2", toneClass)}>
            <Icon className="h-4 w-4" />
          </div>
        ) : null}
      </div>
    </Card>
  );
}
