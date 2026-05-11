import {
  Award,
  BarChart3,
  Database,
  FileSpreadsheet,
  FileText,
  FlaskConical,
  FolderOpen,
  GraduationCap,
  TrendingUp,
  Users
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
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
import { KPITile } from "@/components/cards/KPITile";
import { InsightCard } from "@/components/cards/InsightCard";
import { ProgressRing } from "@/components/charts/ProgressRing";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { criteria, criterionTabs } from "@/data/criteria";
import {
  criterionMetrics,
  facultyInsights,
  fdpSummary,
  publicationBreakdown,
  publicationTrend,
  researchProjects,
  topFaculty
} from "@/data/facultyContributions";
import { documents } from "@/data/documents";
import { CHART_COLORS, CRITERION_COLORS } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

const metricIcons = {
  Users,
  GraduationCap,
  FileText,
  Database,
  FlaskConical,
  Award,
  BarChart3,
  FolderOpen
};

const pieColors = [CHART_COLORS.primary, CHART_COLORS.info, CHART_COLORS.warning, CHART_COLORS.rose];

export function CriterionPage() {
  const { id } = useParams();
  const criterion = criteria.find((item) => item.id === Number(id));
  if (!criterion) return <Navigate to="/criteria" replace />;
  const colors = CRITERION_COLORS[criterion.color];
  const Icon = getIcon(criterion.icon);
  const tabs = criterionTabs[criterion.id];
  const metricRows = criterionMetrics[criterion.id as keyof typeof criterionMetrics];

  return (
    <div className="space-y-8">
      <Card className={cn("overflow-hidden border-t-4", colors.border)}>
        <div className="grid grid-cols-[96px_1fr_320px] gap-6 p-6">
          <div className={cn("flex h-24 w-24 items-center justify-center rounded-full", colors.bgTint, colors.text)}>
            <Icon className="h-12 w-12" />
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <PageHeader
              title={`Criterion ${criterion.id}: ${criterion.name}`}
              subtitle={criterion.description}
            />
          </div>
          <Card className="p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Completion Status</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="text-[32px] font-bold text-slate-950">{criterion.completion}%</div>
              <StatusBadge label={criterion.status} />
            </div>
            <Progress value={criterion.completion} indicatorClassName={colors.bg} className="mt-4" />
            <p className="mt-3 text-xs text-slate-500">Last Updated: 10 May 2025 by Dr. Admin</p>
            <Button className="mt-4 w-full" onClick={() => toast.success(`Criterion ${criterion.id} report downloaded`)}>
              <FileText className="h-4 w-4" />
              Download Criteria {criterion.id} Report
            </Button>
          </Card>
        </div>
      </Card>

      <Tabs defaultValue="Overview">
        <TabsList className="overflow-x-auto bg-transparent">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} className="shrink-0">
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Overview">
          <OverviewContent criterionId={criterion.id} color={colors.hex} metricRows={metricRows} />
        </TabsContent>
        {tabs
          .filter((tab) => tab !== "Overview")
          .map((tab) => (
            <TabsContent key={tab} value={tab}>
              <EmptyState tab={tab} criterion={criterion.shortName} />
            </TabsContent>
          ))}
      </Tabs>
    </div>
  );
}

function OverviewContent({
  criterionId,
  color,
  metricRows
}: {
  criterionId: number;
  color: string;
  metricRows: readonly (readonly [string, string, string])[];
}) {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-6 gap-4">
        {metricRows.map(([title, value, iconName], index) => {
          const Icon = (metricIcons as Record<string, typeof Users>)[iconName] || getIcon(iconName);
          return (
            <KPITile
              key={title}
              title={title}
              value={value}
              caption={index === 1 ? "View Details" : index > 1 ? "This Year" : undefined}
              icon={Icon}
              tone={["slate", "emerald", "violet", "indigo", "rose", "teal"][index] as Parameters<typeof KPITile>[0]["tone"]}
            />
          );
        })}
      </section>

      <section className="grid grid-cols-3 gap-6">
        <DonutCard title={criterionId === 5 ? "Publications Overview (This Year)" : "Evidence Overview (This Year)"} data={publicationBreakdown} center="312 Total" />
        <Card className="p-6 hover:shadow-md">
          <CardTitle>{criterionId === 5 ? "Publications Trend (Last 5 Years)" : "Readiness Trend (Last 5 Years)"}</CardTitle>
          <div className="mt-5 h-72">
            <ResponsiveContainer>
              <LineChart data={publicationTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="year" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <RechartsTooltip />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="scopus" name="Scopus" stroke={CHART_COLORS.primary} strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="wos" name="Web of Science" stroke={CHART_COLORS.info} strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="ugc" name="UGC Care" stroke={CHART_COLORS.warning} strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="other" name="Other Indexed" stroke={CHART_COLORS.rose} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <Button variant="ghost" className="mt-2 px-0 text-primary">
            View Trend Analysis
          </Button>
        </Card>
        <DonutCard title={criterionId === 5 ? "Research Projects" : "Verification Breakdown"} data={researchProjects} center="18 Total Projects" />
      </section>

      <section className="grid grid-cols-[2fr_1fr_1fr] gap-6">
        <Card className="p-6 hover:shadow-md">
          <CardTitle>Top Faculty by Contributions (This Year)</CardTitle>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  {["#", "Faculty Name", "Department", "Publications", "Projects", "FDPs", "h-index"].map((header) => (
                    <th key={header} className="px-3 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topFaculty.map((faculty, index) => (
                  <tr key={faculty.name} className="hover:bg-slate-50">
                    <td className="px-3 py-3 text-slate-500">{index + 1}</td>
                    <td className="px-3 py-3 font-medium text-slate-900">{faculty.name}</td>
                    <td className="px-3 py-3 text-slate-600">{faculty.department}</td>
                    <td className="px-3 py-3 text-slate-600">{faculty.publications}</td>
                    <td className="px-3 py-3 text-slate-600">{faculty.projects}</td>
                    <td className="px-3 py-3 text-slate-600">{faculty.fdps}</td>
                    <td className="px-3 py-3 text-slate-600">{faculty.hIndex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button variant="ghost" className="mt-4 px-0 text-primary">
            View All Faculty Contributions
          </Button>
        </Card>
        <DonutCard title="FDPs / STTPs Summary (This Year)" data={fdpSummary} center="246 Total" compact />
        <Card className="p-6 hover:shadow-md">
          <CardTitle>Key Insights</CardTitle>
          <div className="mt-5 space-y-3">
            {[TrendingUp, Award, FlaskConical, Users].map((Icon, index) => (
              <InsightCard key={facultyInsights[index]} icon={Icon} text={facultyInsights[index]} />
            ))}
          </div>
          <Button variant="ghost" className="mt-4 px-0 text-primary">
            View Detailed Insights
          </Button>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {documents.slice(0, 4).map((document) => (
              <div key={document.id} className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
                <FileSpreadsheet className="h-6 w-6 text-primary" />
                <p className="mt-3 truncate text-sm font-semibold text-slate-900">{document.fileName}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {document.size} · {document.date}
                </p>
              </div>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-4 float-right text-primary">
            <Link to="/documents">View All Documents</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function DonutCard({
  title,
  data,
  center,
  compact = false
}: {
  title: string;
  data: { name: string; value: number; percent: string }[];
  center: string;
  compact?: boolean;
}) {
  return (
    <Card className="p-6 hover:shadow-md">
      <CardTitle>{title}</CardTitle>
      <div className={cn("mt-5 grid gap-4", compact ? "grid-cols-1" : "grid-cols-[1fr_150px]")}>
        <div className="relative h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={66} outerRadius={92} paddingAngle={3}>
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <RechartsTooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-lg font-semibold text-slate-950">{center.split(" ")[0]}</p>
              <p className="text-xs font-medium text-slate-500">{center.split(" ").slice(1).join(" ")}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-slate-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: pieColors[index % pieColors.length] }} />
                {item.name}
              </span>
              <span className="font-medium text-slate-900">
                {item.value} <span className="text-xs text-slate-400">{item.percent}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <Button variant="ghost" className="mt-2 px-0 text-primary">
        View Details
      </Button>
    </Card>
  );
}

function EmptyState({ tab, criterion }: { tab: string; criterion: string }) {
  return (
    <Card className="flex min-h-80 flex-col items-center justify-center border-dashed p-8 text-center">
      <ProgressRing percentage={18} size={72} color="#CBD5E1" label="Soon" />
      <h3 className="mt-4 text-base font-semibold text-slate-950">{tab}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        Coming soon — full module for {criterion}. The prototype keeps navigation and tab behavior available for review.
      </p>
      <Button variant="outline" className="mt-5">
        Request Module Access
      </Button>
    </Card>
  );
}
