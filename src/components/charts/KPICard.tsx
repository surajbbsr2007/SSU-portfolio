import { Area, AreaChart, ResponsiveContainer } from "recharts";
import type { LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { cn } from "@/lib/utils";

export function KPICard({
  title,
  value,
  status,
  trend,
  icon: Icon,
  sparkline,
  variant = "success",
  className
}: {
  title: string;
  value: string;
  status?: string;
  trend?: string;
  icon?: LucideIcon;
  sparkline?: number[];
  variant?: "success" | "warning" | "danger" | "info" | "neutral";
  className?: string;
}) {
  const data = (sparkline || [12, 18, 16, 24, 28, 32]).map((amount, index) => ({ index, amount }));
  return (
    <Card className={cn("p-6 hover:shadow-md", className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <div className="text-[32px] font-bold leading-none tracking-normal text-slate-950">{value}</div>
          <div className="flex items-center gap-2">
            {status ? <StatusBadge label={status} variant={variant} /> : null}
            {trend ? (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                {trend}
              </span>
            ) : null}
          </div>
        </div>
        {Icon ? (
          <div className="rounded-lg bg-primary-soft p-2 text-primary">
            <Icon className="h-5 w-5" />
          </div>
        ) : (
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <Area type="monotone" dataKey="amount" stroke="#6366F1" fill="#EEF2FF" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </Card>
  );
}
