import { Building2, CalendarDays, Cloud, Cpu, Palette, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const sections = [
  { id: "profile", label: "Institution Profile", icon: Building2 },
  { id: "year", label: "Academic Year", icon: CalendarDays },
  { id: "notifications", label: "Notifications", icon: Cloud },
  { id: "ai", label: "AI Preferences", icon: Cpu },
  { id: "integrations", label: "Integrations", icon: Cloud },
  { id: "theme", label: "Theme & Display", icon: Palette }
];

const connectors = ["ERP", "LMS", "Scopus", "Web of Science", "Google Scholar", "NBA Portal"];

export function Settings() {
  const [active, setActive] = useState("profile");

  return (
    <div className="space-y-8">
      <PageHeader title="Settings" subtitle="Configure institution profile, AI preferences, integrations, and workspace display." />

      <div className="grid grid-cols-[240px_1fr] gap-8">
        <Card className="self-start p-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActive(section.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950",
                active === section.id && "bg-primary-soft text-primary"
              )}
            >
              <section.icon className="h-4 w-4" />
              {section.label}
            </button>
          ))}
        </Card>

        <Card className="p-6">
          {active === "profile" ? <InstitutionProfile /> : null}
          {active === "year" ? <AcademicYear /> : null}
          {active === "notifications" ? <Notifications /> : null}
          {active === "ai" ? <AIPreferences /> : null}
          {active === "integrations" ? <Integrations /> : null}
          {active === "theme" ? <ThemeDisplay /> : null}
        </Card>
      </div>
    </div>
  );
}

function SectionTitle({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{caption}</p>
    </div>
  );
}

function InstitutionProfile() {
  return (
    <div>
      <SectionTitle title="Institution Profile" caption="Core institutional details used across NBA reports." />
      <div className="grid grid-cols-2 gap-4">
        <Input defaultValue="Dronacharya College of Engineering" placeholder="Institution Name" />
        <Input defaultValue="DCE-NBA-2024" placeholder="Institution Code" />
        <Select defaultValue="engineering">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="management">Management</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="pre-qualifier">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pre-qualifier">Pre-qualifier Review</SelectItem>
            <SelectItem value="sar">SAR Preparation</SelectItem>
            <SelectItem value="submitted">Submitted</SelectItem>
          </SelectContent>
        </Select>
        <Textarea className="col-span-2" defaultValue="Greater Noida, Uttar Pradesh, India" />
        <div className="col-span-2 flex min-h-32 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50">
          <Upload className="h-7 w-7 text-slate-400" />
          <p className="mt-2 text-sm font-medium text-slate-900">Upload institution logo</p>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button onClick={() => toast.success("Institution profile saved")}>Save Changes</Button>
      </div>
    </div>
  );
}

function AcademicYear() {
  return (
    <div>
      <SectionTitle title="Academic Year" caption="Switch, archive, and review accreditation years." />
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm text-slate-500">Current AY</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[32px] font-bold text-slate-950">2024-25</p>
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
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {["2023-24", "2022-23", "2021-22"].map((year) => (
          <div key={year} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
            <span className="font-medium text-slate-900">{year}</span>
            <StatusBadge label="Archived" variant="neutral" />
          </div>
        ))}
      </div>
      <Button variant="outline" className="mt-6" onClick={() => toast.success("Current year archived")}>
        Archive Current Year
      </Button>
    </div>
  );
}

function Notifications() {
  const items = [
    "Daily readiness digest",
    "Critical gap alerts",
    "New document uploaded",
    "Report generation complete",
    "Weekly faculty leaderboard",
    "AI model retrained"
  ];
  return (
    <div>
      <SectionTitle title="Notifications" caption="Select operational updates for accreditation owners." />
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
            <span className="text-sm font-medium text-slate-900">{item}</span>
            <Switch defaultChecked={index < 4} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AIPreferences() {
  const [threshold, setThreshold] = useState(80);
  return (
    <div>
      <SectionTitle title="AI Preferences" caption="Tune prediction threshold, cadence, and explainability level." />
      <div className="space-y-6">
        <div>
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">Confidence threshold for predictions</span>
            <span className="font-semibold text-primary">{threshold}%</span>
          </div>
          <Slider value={[threshold]} min={0} max={100} step={1} onValueChange={([value]) => setThreshold(value)} />
        </div>
        <Select defaultValue="weekly">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
        <div className="grid grid-cols-3 gap-3">
          {["Brief", "Standard", "Detailed"].map((level) => (
            <button key={level} className={cn("rounded-xl border p-4 text-sm font-medium", level === "Standard" ? "border-primary bg-primary-soft text-primary" : "border-slate-200 text-slate-600")}>
              {level}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
          <span className="text-sm font-medium text-slate-900">Include negative factors in summary</span>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
}

function Integrations() {
  return (
    <div>
      <SectionTitle title="Integrations" caption="Connect institutional systems and publication indexes." />
      <div className="grid grid-cols-3 gap-4">
        {connectors.map((connector, index) => {
          const connected = index % 2 === 0;
          return (
            <Card key={connector} className="p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 font-semibold text-slate-700">{connector.slice(0, 2)}</div>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">{connector}</h3>
              <div className="mt-2">
                <StatusBadge label={connected ? "Connected" : "Disconnected"} variant={connected ? "success" : "neutral"} />
              </div>
              <Button variant={connected ? "outline" : "default"} className="mt-5 w-full" onClick={() => toast.success(`${connector} ${connected ? "disconnected" : "connected"}`)}>
                {connected ? "Disconnect" : "Connect"}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function ThemeDisplay() {
  return (
    <div>
      <SectionTitle title="Theme & Display" caption="Control density, language, and display preferences." />
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-3">
          {["Light", "Dark", "System"].map((theme) => (
            <button key={theme} className={cn("rounded-xl border p-4 text-sm font-medium", theme === "Light" ? "border-primary bg-primary-soft text-primary" : "border-slate-200 text-slate-600")}>
              {theme}
            </button>
          ))}
        </div>
        <Select defaultValue="comfortable">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="comfortable">Comfortable</SelectItem>
            <SelectItem value="compact">Compact</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="english">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="asia-kolkata">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asia-kolkata">Asia/Kolkata</SelectItem>
            <SelectItem value="utc">UTC</SelectItem>
          </SelectContent>
        </Select>
        <Progress value={72} />
      </div>
    </div>
  );
}
