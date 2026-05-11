import { AlertTriangle, Calendar, Clock, FileText, Filter, Layers, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CriterionCard } from "@/components/cards/CriterionCard";
import { KPICard } from "@/components/charts/KPICard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { criteria } from "@/data/criteria";

export function CriteriaOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Criteria Overview"
        subtitle="Track completion, evidence readiness, and pending actions across all seven NBA criteria."
        actions={
          <>
            <Button variant="outline">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Select defaultValue="2024-25">
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-25">2024-25</SelectItem>
                <SelectItem value="2023-24">2023-24</SelectItem>
                <SelectItem value="2022-23">2022-23</SelectItem>
              </SelectContent>
            </Select>
          </>
        }
      />

      <section className="grid grid-cols-5 gap-6">
        <KPICard title="Overall Criterion" value="72%" status="Good Progress" icon={TrendingUp} variant="info" />
        <KPICard title="Completed Criteria" value="5/7" status="In Progress" icon={Layers} variant="success" />
        <KPICard title="Critical Gaps" value="5" status="Needs Attention" icon={AlertTriangle} variant="danger" />
        <KPICard title="Documents Uploaded" value="128" status="This Year" icon={FileText} variant="neutral" />
        <KPICard title="Last Updated" value="10 May 2025" status="by Dr. Admin" icon={Calendar} variant="neutral" />
      </section>

      <section className="grid grid-cols-4 gap-6">
        {criteria.map((criterion) => (
          <CriterionCard key={criterion.id} criterion={criterion} />
        ))}
      </section>

      <footer className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <span className="font-medium text-slate-900">Completion Status Legend:</span>
          {[
            ["bg-red-500", "0-25% Poor"],
            ["bg-orange-500", "26-50% Needs Improvement"],
            ["bg-violet-500", "51-75% Good"],
            ["bg-emerald-500", "76-100% Excellent"]
          ].map(([dot, label]) => (
            <span key={label} className="inline-flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
              {label}
            </span>
          ))}
        </div>
        <Button variant="outline">
          <Clock className="h-4 w-4" />
          View Overall Gap Analysis
        </Button>
      </footer>
    </div>
  );
}
