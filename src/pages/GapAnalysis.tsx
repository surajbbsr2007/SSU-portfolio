import { Download, Lightbulb } from "lucide-react";
import { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/PageHeader";
import { KPICard } from "@/components/charts/KPICard";
import { GapAnalysisTable } from "@/components/tables/GapAnalysisTable";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gapEntries, type GapSeverity } from "@/data/gapAnalysis";
import { CHART_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const filters: ("All" | GapSeverity)[] = ["All", "Critical", "High", "Medium", "Low"];
const pieColors = [CHART_COLORS.primary, CHART_COLORS.warning, CHART_COLORS.success, CHART_COLORS.violet, CHART_COLORS.rose, CHART_COLORS.teal, CHART_COLORS.info];

export function GapAnalysis() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = filter === "All" ? gapEntries : gapEntries.filter((gap) => gap.severity === filter);
  const distribution = useMemo(() => {
    return Object.values(
      gapEntries.reduce<Record<string, { name: string; value: number }>>((acc, gap) => {
        acc[gap.criterion] ||= { name: gap.criterion, value: 0 };
        acc[gap.criterion].value += 1;
        return acc;
      }, {})
    );
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Gap Analysis"
        subtitle="Prioritized accreditation gaps with owners, due dates, and AI-recommended actions."
        actions={
          <>
            <div className="flex rounded-lg border border-slate-200 bg-white p-1">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-900",
                    filter === item && "bg-primary-soft text-primary"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button variant="outline" onClick={() => toast.success("Gap analysis CSV exported")}>
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </>
        }
      />

      <section className="grid grid-cols-4 gap-6">
        <KPICard title="Total Gaps" value="16" status="Open Items" variant="neutral" />
        <KPICard title="Critical" value="4" status="Requires Attention" variant="danger" />
        <KPICard title="High" value="6" status="Owner Assigned" variant="warning" />
        <KPICard title="Medium" value="6" status="In Review" variant="info" />
      </section>

      <section className="grid grid-cols-[7fr_3fr] gap-6">
        <GapAnalysisTable data={filtered} />
        <aside className="sticky top-24 self-start space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gap Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={distribution} dataKey="value" nameKey="name" innerRadius={62} outerRadius={98} paddingAngle={3}>
                      {distribution.map((entry, index) => (
                        <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                {distribution.map((item, index) => (
                  <span key={item.name} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: pieColors[index % pieColors.length] }} />
                    {item.name}: {item.value}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardTitle>Top 3 Recommendations</CardTitle>
            <div className="mt-5 space-y-3">
              {gapEntries.slice(0, 3).map((gap) => (
                <div key={gap.id} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <StatusBadge label={gap.severity} />
                  </div>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-900">{gap.suggestedAction}</p>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </section>
    </div>
  );
}
