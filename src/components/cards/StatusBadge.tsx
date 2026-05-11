import { cn } from '../../lib/utils'

type StatusVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral'

interface StatusBadgeProps {
  variant?: StatusVariant
  label: string
  className?: string
}

const variantStyles: Record<StatusVariant, string> = {
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  neutral: 'bg-slate-100 text-slate-700',
}

export default function StatusBadge({ variant = 'info', label, className }: StatusBadgeProps) {
  return (
    <span className={cn('text-xs font-medium px-2.5 py-1 rounded-full inline-block', variantStyles[variant], className)}>
      {label}
    </span>
  )
}
