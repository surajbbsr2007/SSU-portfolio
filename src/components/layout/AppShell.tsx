import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";

export function AppShell() {
  const { sidebarCollapsed } = useSidebar();
  return (
    <TooltipProvider delayDuration={250}>
      <div className="min-h-screen bg-app text-slate-900 antialiased">
        <Sidebar />
        <div className={cn("min-h-screen transition-[padding] duration-200 ease-out", sidebarCollapsed ? "pl-16" : "pl-60")}>
          <Topbar />
          <main className="mx-auto w-full max-w-[1600px] px-8 py-8">
            <Outlet />
          </main>
        </div>
        <Toaster position="top-right" richColors closeButton />
      </div>
    </TooltipProvider>
  );
}
