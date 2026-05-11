import {
  BarChart3,
  Brain,
  FileBarChart,
  Folder,
  GraduationCap,
  Home,
  Settings,
  Users
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ProgressRing } from "@/components/charts/ProgressRing";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { criteria } from "@/data/criteria";
import { CRITERION_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/useSidebar";

const intelligence = [
  { label: "AI Insights", href: "/ai-insights", icon: Brain },
  { label: "Gap Analysis", href: "/gap-analysis", icon: BarChart3 },
  { label: "Reports", href: "/reports", icon: FileBarChart }
];

const workspace = [
  { label: "Documents / Evidence", href: "/documents", icon: Folder },
  { label: "Users & Roles", href: "/users", icon: Users },
  { label: "Settings", href: "/settings", icon: Settings }
];

function NavSection({ label, children }: { label: string; children: React.ReactNode }) {
  const { sidebarCollapsed } = useSidebar();
  return (
    <div className="mt-6">
      {!sidebarCollapsed ? <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p> : null}
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function StandardLink({
  href,
  label,
  icon: Icon
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  const { pathname } = useLocation();
  const { sidebarCollapsed } = useSidebar();
  const active = pathname === href;
  return (
    <Link
      to={href}
      className={cn(
        "relative flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/60",
        active && "bg-slate-800 text-white before:absolute before:left-0 before:top-1 before:h-8 before:w-1 before:rounded-r before:bg-primary",
        sidebarCollapsed && "justify-center px-0"
      )}
      title={sidebarCollapsed ? label : undefined}
    >
      <Icon className="h-[18px] w-[18px] shrink-0" />
      {!sidebarCollapsed ? <span className="truncate">{label}</span> : null}
    </Link>
  );
}

export function Sidebar() {
  const { pathname } = useLocation();
  const { sidebarCollapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex bg-sidebar text-slate-300 transition-all duration-200 ease-out",
        sidebarCollapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex min-h-0 w-full flex-col">
        <div className={cn("flex h-16 items-center border-b border-slate-800 px-4", sidebarCollapsed ? "justify-center px-0" : "gap-3")}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          {!sidebarCollapsed ? (
            <div className="min-w-0">
              <p className="text-lg font-bold leading-none text-white">NBA</p>
              <p className="mt-1 line-clamp-2 text-xs leading-4 text-slate-400">AI-Driven Accreditation Decision Support System</p>
            </div>
          ) : null}
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
          <StandardLink href="/dashboard" label="Dashboard" icon={Home} />

          <NavSection label="Criteria">
            {criteria.map((criterion) => {
              const colors = CRITERION_COLORS[criterion.color];
              const active = pathname === `/criteria/${criterion.id}`;
              return (
                <Link
                  key={criterion.id}
                  to={`/criteria/${criterion.id}`}
                  className={cn(
                    "relative flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/60",
                    active && "bg-slate-800 text-white before:absolute before:left-0 before:top-1 before:h-9 before:w-1 before:rounded-r before:bg-primary",
                    sidebarCollapsed && "justify-center px-0"
                  )}
                  title={sidebarCollapsed ? criterion.name : undefined}
                >
                  <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold text-white", colors.bg)}>
                    {String(criterion.id).padStart(2, "0")}
                  </span>
                  {!sidebarCollapsed ? (
                    <>
                      <span className="min-w-0 flex-1 truncate">{criterion.name}</span>
                      <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold text-white", colors.bg)}>{criterion.completion}%</span>
                    </>
                  ) : null}
                </Link>
              );
            })}
          </NavSection>

          <NavSection label="Intelligence">
            {intelligence.map((item) => (
              <StandardLink key={item.href} {...item} />
            ))}
          </NavSection>

          <NavSection label="Workspace">
            {workspace.map((item) => (
              <StandardLink key={item.href} {...item} />
            ))}
          </NavSection>
        </nav>

        <div className="border-t border-slate-800 p-3">
          <div className={cn("rounded-xl bg-slate-800 p-4", sidebarCollapsed && "hidden")}>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Readiness Score</p>
            <div className="mt-3 flex items-center justify-between">
              <ProgressRing percentage={78} size={72} color="#14B8A6" />
              <div className="text-right">
                <div className="text-2xl font-bold text-white">78%</div>
                <StatusBadge label="Good" variant="success" />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">Last Updated: 10 May 2025</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
