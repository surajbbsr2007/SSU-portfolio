import {
  Bell,
  ChevronDown,
  HelpCircle,
  Home,
  Menu,
  Settings,
  UserCircle
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { criteria } from "@/data/criteria";
import { useNotifications } from "@/hooks/useNotifications";
import { usePersona } from "@/hooks/usePersona";
import { useSidebar } from "@/hooks/useSidebar";

function breadcrumbFor(pathname: string) {
  if (pathname === "/" || pathname === "/dashboard") return ["Home", "Dashboard"];
  if (pathname === "/criteria") return ["Home", "Criteria", "Overview"];
  const criterion = criteria.find((item) => pathname === `/criteria/${item.id}`);
  if (criterion) return ["Home", "Criteria", `Criterion ${criterion.id}`];
  const label = pathname
    .replace("/", "")
    .split("-")
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
  return ["Home", label];
}

export function Topbar() {
  const { toggleSidebar } = useSidebar();
  const { notifications, unreadCount } = useNotifications();
  const { persona, personaDetails, setPersona } = usePersona();
  const { pathname } = useLocation();
  const crumbs = breadcrumbFor(pathname);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <Menu className="h-5 w-5" />
        </Button>
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb}-${index}`} className="flex items-center gap-2">
              {index === 0 ? <Home className="h-4 w-4" /> : null}
              <span className={index === crumbs.length - 1 ? "font-medium text-slate-900" : ""}>{crumb}</span>
              {index < crumbs.length - 1 ? <span className="text-slate-300">›</span> : null}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-semibold text-white">
                {unreadCount}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="text-sm font-semibold text-slate-950">Notifications</p>
              <p className="text-xs text-slate-500">Latest accreditation activity</p>
            </div>
            <div className="max-h-96 divide-y divide-slate-100 overflow-auto">
              {notifications.map((notification) => (
                <div key={notification.id} className="px-4 py-3 hover:bg-slate-50">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{notification.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{notification.description}</p>
                    </div>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{notification.time}</p>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Button variant="ghost" size="icon" aria-label="Help">
          <HelpCircle className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-left transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/30">
              <Avatar>
                <AvatarFallback>{personaDetails.initials}</AvatarFallback>
              </Avatar>
              <div className="hidden min-w-0 lg:block">
                <p className="truncate text-sm font-medium text-slate-950">{personaDetails.name}</p>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <StatusBadge label={personaDetails.role} variant="neutral" className="py-0 text-[10px]" />
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <UserCircle className="h-4 w-4" />
              My Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={persona} onValueChange={(value) => setPersona(value as typeof persona)}>
              {(["Admin", "Coordinator", "Faculty", "Auditor"] as const).map((item) => (
                <DropdownMenuRadioItem key={item} value={item}>
                  {item}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/settings">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
