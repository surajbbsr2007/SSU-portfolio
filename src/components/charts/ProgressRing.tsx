export function ProgressRing({
  percentage,
  size = 80,
  color = "#6366F1",
  label
}: {
  percentage: number;
  size?: number;
  color?: string;
  label?: string;
}) {
  const stroke = Math.max(6, size * 0.1);
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ height: size, width: size }}>
      <svg height={size} width={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E2E8F0" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-sm font-semibold text-slate-950">{percentage}%</div>
        {label ? <div className="text-[10px] font-medium uppercase text-slate-400">{label}</div> : null}
      </div>
    </div>
  );
}
