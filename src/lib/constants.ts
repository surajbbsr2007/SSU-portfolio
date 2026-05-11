export const CRITERION_COLORS = {
  blue: {
    hex: "#3B82F6",
    bg: "bg-blue-500",
    bgSoft: "bg-blue-50",
    bgTint: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    ring: "ring-blue-100"
  },
  orange: {
    hex: "#F97316",
    bg: "bg-orange-500",
    bgSoft: "bg-orange-50",
    bgTint: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
    ring: "ring-orange-100"
  },
  emerald: {
    hex: "#10B981",
    bg: "bg-emerald-500",
    bgSoft: "bg-emerald-50",
    bgTint: "bg-emerald-100",
    text: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-100"
  },
  violet: {
    hex: "#8B5CF6",
    bg: "bg-violet-500",
    bgSoft: "bg-violet-50",
    bgTint: "bg-violet-100",
    text: "text-violet-600",
    border: "border-violet-200",
    ring: "ring-violet-100"
  },
  rose: {
    hex: "#F43F5E",
    bg: "bg-rose-500",
    bgSoft: "bg-rose-50",
    bgTint: "bg-rose-100",
    text: "text-rose-600",
    border: "border-rose-200",
    ring: "ring-rose-100"
  },
  teal: {
    hex: "#14B8A6",
    bg: "bg-teal-500",
    bgSoft: "bg-teal-50",
    bgTint: "bg-teal-100",
    text: "text-teal-600",
    border: "border-teal-200",
    ring: "ring-teal-100"
  },
  amber: {
    hex: "#D97706",
    bg: "bg-amber-600",
    bgSoft: "bg-amber-50",
    bgTint: "bg-amber-100",
    text: "text-amber-700",
    border: "border-amber-200",
    ring: "ring-amber-100"
  }
} as const;

export const STATUS_STYLES = {
  Excellent: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Good: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
  "Needs Improvement": "bg-orange-50 text-orange-700 border-orange-200",
  Poor: "bg-red-50 text-red-700 border-red-200",
  Critical: "bg-red-50 text-red-700 border-red-200",
  High: "bg-orange-50 text-orange-700 border-orange-200",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  Low: "bg-blue-50 text-blue-700 border-blue-200",
  Open: "bg-red-50 text-red-700 border-red-200",
  Resolved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Verified: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  "Under Review": "bg-blue-50 text-blue-700 border-blue-200",
  Ready: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Generating: "bg-amber-50 text-amber-700 border-amber-200",
  Failed: "bg-red-50 text-red-700 border-red-200",
  Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Invited: "bg-blue-50 text-blue-700 border-blue-200",
  Suspended: "bg-red-50 text-red-700 border-red-200",
  neutral: "bg-slate-50 text-slate-700 border-slate-200"
} as const;

export const ROLE_STYLES = {
  Admin: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Coordinator: "bg-blue-50 text-blue-700 border-blue-200",
  Faculty: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Auditor: "bg-violet-50 text-violet-700 border-violet-200"
} as const;

export const CHART_COLORS = {
  primary: "#6366F1",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#3B82F6",
  slate: "#64748B",
  violet: "#8B5CF6",
  rose: "#F43F5E",
  teal: "#14B8A6"
};
