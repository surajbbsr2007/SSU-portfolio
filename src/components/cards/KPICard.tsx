import { ReactNode } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '../../lib/utils'

interface KPICardProps {
  title: string
  value: string | number
  unit?: string
  status?: string
  statusColor?: 'success' | 'warning' | 'danger' | 'info'
  icon?: ReactNode
  trend?: number
  trendIcon?: ReactNode
}

const statusColorMap = {
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700',
  danger: 'bg-red-50 text-red-700',
  info: 'bg-blue-50 text-blue-700',
}

export default function KPICard({
  title,
  value,
  unit,
  status,
  statusColor = 'info',
  icon,
  trend,
  trendIcon,
}: KPICardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm font-medium text-slate-600">{title}</p>
        {icon && <div className="text-slate-400">{icon}</div>}
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-slate-900">{value}</span>
          {unit && <span className="text-sm text-slate-600">{unit}</span>}
        </div>
      </div>

      <div className="flex items-center justify-between">
        {status && (
          <span className={cn('text-xs font-medium px-2 py-1 rounded-full', statusColorMap[statusColor])}>
            {status}
          </span>
        )}
        {trend !== undefined && (
          <div className={cn('flex items-center gap-1 text-sm font-medium', trend > 0 ? 'text-emerald-600' : 'text-red-600')}>
            {trendIcon || (trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />)}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
    </div>
  )
}
