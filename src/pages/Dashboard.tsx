import {
  AlertTriangle,
  BarChart3,
  Brain,
  ChevronRight,
  Download,
  Eye,
  FileText,
  RefreshCw,
  Save,
  Search,
  Sparkles,
  TrendingUp,
  Upload
} from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis
} from "recharts";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/PageHeader";
import { KPICard } from "@/components/charts/KPICard";
import { AIPredictionGauge } from "@/components/charts/AIPredictionGauge";
import { FeatureImpactBar } from "@/components/charts/FeatureImpactBar";
import { HeatmapGrid } from "@/components/charts/HeatmapGrid";
import { WorkflowSteps } from "@/components/charts/WorkflowSteps";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { criteria } from "@/data/criteria";
import { dashboardKPIs } from "@/data/dashboardKPIs";
import { studentPerformance } from "@/data/studentPerformance";
import { courseOutcomeRows, copoMatrix, programOutcomeCols } from "@/data/copoMatrix";
import { documents } from "@/data/documents";
import { gapEntries } from "@/data/gapAnalysis";
import { shapFeatures } from "@/data/aiInsights";
import { workflowSteps } from "@/data/workflow";
import { CHART_COLORS, CRITERION_COLORS } from "@/lib/constants";

const impactSummary = shapFeatures.slice(0, 5);

export function Dashboard() {
  const [placementTarget, setPlacementTarget] = useState(70);
  const predicted = Math.min(100, Math.round(82 + (placementTarget - 65) * 0.6));
  const chartData = criteria.map((criterion) => ({
    name: `C${criterion.id}`,
    completion: criterion.completion,
    fill: CRITERION_COLORS[criterion.color].hex
  }));

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        subtitle="Institution-wide NBA accreditation readiness across criteria, evidence, gaps, and AI prediction signals."
        actions={
          <Button onClick={() => toast.success("Dashboard snapshot exported")}>
            <Download className="h-4 w-4" />
            Export Snapshot
          </Button>
        }
      />

      <section className="grid grid-cols-4 gap-6">
        <KPICard {...dashboardKPIs[0]} variant="success" />
        <KPICard {...dashboardKPIs[1]} variant="warning" />
        <KPICard {...dashboardKPIs[2]} icon={AlertTriangle} variant="danger" />
        <KPICard {...dashboardKPIs[3]} icon={TrendingUp} variant="success" trend="+6 pts" />
      </section>

      <section className="grid grid-cols-2 gap-6">
        <Card className="p-6 hover:shadow-md">
          <CardTitle>Completion by Criteria</CardTitle>
          <div className="mt-6 h-80">
            <ResponsiveContainer>
              <BarChart data={chartData} layout="vertical" margin={{ left: 24, right: 24 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                <XAxis type="number" domain={[0, 100]} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} />
                <RechartsTooltip cursor={{ fill: "#F8FAFC" }} />
                <Bar dataKey="completion" radius={[0, 8, 8, 0]} barSize={18}>
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-md">
          <CardTitle>Student Performance Trend (Last 5 Years)</CardTitle>
          <div className="mt-6 h-80">
            <ResponsiveContainer>
              <LineChart data={studentPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="year" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} domain={[0, 100]} />
                <RechartsTooltip />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" name="Pass %" dataKey="pass" stroke={CHART_COLORS.primary} strokeWidth={2.5} dot={false} />
                <Line type="monotone" name="Placement %" dataKey="placement" stroke={CHART_COLORS.success} strokeWidth={2.5} dot={false} />
                <Line type="monotone" name="Higher Studies %" dataKey="higherStudies" stroke={CHART_COLORS.warning} strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-md">
          <CardTitle>AI Prediction Summary</CardTitle>
          <AIPredictionGauge score={82} label="Good" />
          <p className="text-center text-sm leading-6 text-slate-500">Your institution is likely to achieve a Good accreditation score.</p>
        </Card>
        <Card className="p-6 hover:shadow-md">
          <CardTitle>Top Factors (SHAP Analysis)</CardTitle>
          <div className="mt-6 space-y-4">
            {impactSummary.map((item) => (
              <FeatureImpactBar key={item.feature} feature={item.feature} impact={item.impact} compact />
            ))}
          </div>
        </Card>
        <Card className="p-6 hover:shadow-md">
          <CardTitle>Gap Analysis (Top 3)</CardTitle>
          <div className="mt-6 space-y-3">
            {gapEntries.slice(0, 3).map((gap) => (
              <div key={gap.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:bg-slate-50">
                <StatusBadge label={gap.severity} />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-500">{gap.criterion}</p>
                  <p className="truncate text-sm font-semibold text-slate-900">{gap.issue}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </div>
            ))}
          </div>
          <Button variant="ghost" className="mt-4 w-full justify-center">
            View All Gaps
          </Button>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>CO-PO Mapping</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="data">
            <TabsList>
              <TabsTrigger value="data">Data Entry</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="data" className="space-y-6">
              <HeatmapGrid rows={courseOutcomeRows} cols={programOutcomeCols} values={copoMatrix} />
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={() => toast.success("AI suggestions applied to weak CO-PO cells")}>
                  <Sparkles className="h-4 w-4" />
                  Auto-Suggest Mapping (AI)
                </Button>
                <div className="flex items-center gap-2">
                  <Button onClick={() => toast.success("CO-PO mapping saved")}>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => toast.info("CO-PO matrix reset")}>
                    <RefreshCw className="h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_180px] gap-6">
                <HeatmapGrid rows={courseOutcomeRows} cols={programOutcomeCols} values={copoMatrix} rounded />
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Legend</p>
                  <div className="mt-4 space-y-3 text-sm">
                    {[
                      ["bg-emerald-500", "3 = High"],
                      ["bg-amber-100", "2 = Moderate"],
                      ["bg-rose-100", "1 = Low"],
                      ["bg-slate-100", "0 = None"]
                    ].map(([color, label]) => (
                      <div key={label} className="flex items-center gap-2">
                        <span className={`h-3 w-3 rounded-sm ${color}`} />
                        <span className="text-slate-600">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <EmptyModule icon={FileText} title="CO-PO evidence module" />
            </TabsContent>
            <TabsContent value="analytics">
              <EmptyModule icon={BarChart3} title="CO-PO analytics module" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle>Documents / Evidence Repository</CardTitle>
            <Button onClick={() => toast.success("Upload dialog opened")}>
              <Upload className="h-4 w-4" />
              Upload Document
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input className="pl-9" placeholder="Search evidence documents" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-44">
                <SelectValue placeholder="All Criteria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Criteria</SelectItem>
                {criteria.map((criterion) => (
                  <SelectItem key={criterion.id} value={String(criterion.id)}>
                    Criterion {criterion.id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full min-w-[960px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  {["File Name", "Criterion", "Type", "Uploaded By", "Date", "Status", "Version", "Actions"].map((header) => (
                    <th key={header} className="px-4 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {documents.slice(0, 5).map((document) => (
                  <tr key={document.id} className="transition hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">{document.fileName}</td>
                    <td className="px-4 py-3">
                      <StatusBadge label={document.criterion} variant="info" />
                    </td>
                    <td className="px-4 py-3 text-slate-600">{document.type}</td>
                    <td className="px-4 py-3 text-slate-600">{document.uploadedBy}</td>
                    <td className="px-4 py-3 text-slate-600">{document.date}</td>
                    <td className="px-4 py-3">
                      <StatusBadge label={document.status} />
                    </td>
                    <td className="px-4 py-3 text-slate-600">{document.version}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
              <span>Showing 1 to 5 of 15 entries</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((page) => (
                  <Button key={page} variant={page === 1 ? "secondary" : "ghost"} size="sm" className="h-7 px-2">
                    {page}
                  </Button>
                ))}
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  ›
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="grid grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-md">
          <CardTitle>AI Insights Dashboard</CardTitle>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["Predicted Score", "82/100", "Good"],
              ["Risk Level", "Medium", "Medium"],
              ["Data Quality", "87%", "Good"],
              ["Confidence", "91%", "High"]
            ].map(([title, value, status]) => (
              <div key={title} className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{title}</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{status}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-3">
            {shapFeatures.slice(0, 5).map((item) => (
              <FeatureImpactBar key={item.feature} feature={item.feature} impact={item.impact} compact />
            ))}
          </div>
        </Card>
        <Card className="p-6 hover:shadow-md">
          <CardTitle>What-If Analysis</CardTitle>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">If Placement Percentage increases to</span>
              <span className="font-semibold text-primary">{placementTarget}%</span>
            </div>
            <Slider value={[placementTarget]} min={55} max={90} step={1} onValueChange={([value]) => setPlacementTarget(value)} />
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-sm text-slate-500">Predicted Score will be</p>
              <p className="mt-2 text-[32px] font-bold text-slate-950">{predicted}/100</p>
              <StatusBadge label={predicted >= 85 ? "Excellent" : "Good"} variant="success" />
            </div>
          </div>
        </Card>
        <Card className="p-6 hover:shadow-md">
          <CardTitle>Gap Analysis</CardTitle>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-3 py-2">Criterion</th>
                  <th className="px-3 py-2">Severity</th>
                  <th className="px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {gapEntries.slice(0, 4).map((gap) => (
                  <tr key={gap.id} className="hover:bg-slate-50">
                    <td className="px-3 py-3">
                      <p className="font-medium text-slate-900">{gap.criterion}</p>
                      <p className="mt-1 line-clamp-2 text-slate-500">{gap.issue}</p>
                    </td>
                    <td className="px-3 py-3">
                      <StatusBadge label={gap.severity} />
                    </td>
                    <td className="px-3 py-3">
                      <StatusBadge label={gap.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Accreditation Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <WorkflowSteps steps={workflowSteps} currentStep={4} />
        </CardContent>
      </Card>
    </div>
  );
}

function EmptyModule({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
      <Icon className="h-8 w-8 text-slate-400" />
      <p className="mt-3 text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-500">Full module shell is ready for the production workflow.</p>
    </div>
  );
}
