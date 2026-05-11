import { AlertCircle, Brain, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis
} from "recharts";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/PageHeader";
import { KPICard } from "@/components/charts/KPICard";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { aiRecommendations, limeExplanation, shapFeatures, whatIfCoefficients } from "@/data/aiInsights";
import { clamp, statusFromScore } from "@/lib/utils";

const baseline = {
  placement: 65,
  publications: 68,
  infrastructure: 74,
  performance: 82
};

export function AIInsights() {
  const [running, setRunning] = useState(false);
  const [values, setValues] = useState(baseline);
  const predicted = useMemo(() => {
    const score =
      82 +
      whatIfCoefficients.placement * (values.placement - baseline.placement) +
      whatIfCoefficients.publications * (values.publications - baseline.publications) +
      whatIfCoefficients.infrastructure * (values.infrastructure - baseline.infrastructure) +
      whatIfCoefficients.performance * (values.performance - baseline.performance);
    return Math.round(clamp(score));
  }, [values]);

  function runAnalysis() {
    setRunning(true);
    window.setTimeout(() => {
      setRunning(false);
      toast.success("Analysis complete");
    }, 1500);
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Insights"
        subtitle="Last AI run: 10 May 2025 · 14:32 IST"
        actions={
          <Button onClick={runAnalysis} disabled={running}>
            <Sparkles className="h-4 w-4" />
            {running ? "Running Analysis" : "Run AI Analysis"}
          </Button>
        }
      />

      <section className="grid grid-cols-4 gap-6">
        <KPICard title="Predicted Score" value="82/100" status="Good" icon={TrendingUp} variant="success" />
        <KPICard title="Risk Level" value="Medium" status="Medium" icon={AlertCircle} variant="warning" />
        <KPICard title="Data Quality" value="87%" status="Good" icon={CheckCircle2} variant="success" />
        <KPICard title="Model Confidence" value="91%" status="High" icon={Brain} variant="success" />
      </section>

      {running ? (
        <Card className="p-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="mt-6 h-96 w-full" />
        </Card>
      ) : (
        <>
          <section className="grid grid-cols-[3fr_2fr] gap-6">
            <Card className="p-6 hover:shadow-md">
              <CardTitle>SHAP Feature Importance</CardTitle>
              <div className="mt-6 h-[420px]">
                <ResponsiveContainer>
                  <BarChart data={shapFeatures} layout="vertical" margin={{ left: 120, right: 32 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                    <XAxis type="number" tickLine={false} axisLine={false} />
                    <YAxis dataKey="feature" type="category" tickLine={false} axisLine={false} width={130} />
                    <RechartsTooltip cursor={{ fill: "#F8FAFC" }} />
                    <Bar dataKey="impact" radius={[6, 6, 6, 6]} barSize={18}>
                      {shapFeatures.map((entry) => (
                        <Cell key={entry.feature} fill={entry.impact >= 0 ? "#10B981" : "#EF4444"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-md">
              <CardTitle>Why this score?</CardTitle>
              <div className="mt-5 space-y-4">
                {limeExplanation.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>What-If Simulator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[1fr_280px] gap-8">
                <div className="space-y-6">
                  {[
                    ["placement", "Placement %"],
                    ["publications", "Faculty Publications"],
                    ["infrastructure", "Infrastructure Quality"],
                    ["performance", "Student Performance"]
                  ].map(([key, label]) => {
                    const typedKey = key as keyof typeof values;
                    const delta = values[typedKey] - baseline[typedKey];
                    return (
                      <div key={key} className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-700">{label}</span>
                          <span className="font-semibold text-slate-950">
                            {values[typedKey]}%{" "}
                            <span className={delta >= 0 ? "text-emerald-600" : "text-red-600"}>
                              ({delta >= 0 ? "+" : ""}
                              {delta})
                            </span>
                          </span>
                        </div>
                        <Slider
                          value={[values[typedKey]]}
                          min={40}
                          max={100}
                          step={1}
                          onValueChange={([value]) => setValues((current) => ({ ...current, [typedKey]: value }))}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <p className="text-sm font-medium text-slate-500">Predicted Score</p>
                  <p className="mt-3 text-[48px] font-bold leading-none text-slate-950">{predicted}</p>
                  <p className="mt-1 text-sm text-slate-500">out of 100</p>
                  <StatusBadge label={statusFromScore(predicted)} className="mt-4" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {aiRecommendations.map((recommendation) => (
                <div key={recommendation.title} className="grid grid-cols-[64px_1fr_140px_220px] items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
                  <StatusBadge label={recommendation.priority} variant={recommendation.priority === "P1" ? "danger" : recommendation.priority === "P2" ? "warning" : "info"} />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{recommendation.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{recommendation.description}</p>
                  </div>
                  <p className="text-sm font-semibold text-emerald-600">{recommendation.impact}</p>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => toast.success("Recommendation marked in progress")}>
                      Mark as in progress
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => toast.info("Recommendation dismissed")}>
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
