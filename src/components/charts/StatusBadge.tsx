import { Badge } from "@/components/ui/badge";
import { STATUS_STYLES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Variant = "success" | "warning" | "danger" | "info" | "neutral";

const variantStyles: Record<Variant, string> = {
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  danger: "bg-red-50 text-red-700 border-red-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
  neutral: "bg-slate-50 text-slate-700 border-slate-200"
};

export function StatusBadge({
  label,
  variant,
  className
}: {
  label: string;
  variant?: Variant;
  className?: string;
}) {
  const style = variant ? variantStyles[variant] : STATUS_STYLES[label as keyof typeof STATUS_STYLES] || STATUS_STYLES.neutral;
  return <Badge className={cn(style, className)}>{label}</Badge>;
}
