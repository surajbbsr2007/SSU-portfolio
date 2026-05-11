import { useAppContext } from "@/context/AppContext";

export function useSidebar() {
  const { sidebarCollapsed, toggleSidebar, setSidebarCollapsed } = useAppContext();
  return { sidebarCollapsed, toggleSidebar, setSidebarCollapsed };
}
