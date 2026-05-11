import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function getIcon(name: string): LucideIcon {
  return ((Icons as unknown as Record<string, LucideIcon>)[name] || Icons.Circle) as LucideIcon;
}
