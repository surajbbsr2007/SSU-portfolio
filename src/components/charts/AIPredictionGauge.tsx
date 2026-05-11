import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { StatusBadge } from "@/components/charts/StatusBadge";

export function AIPredictionGauge({ score = 82, label = "Good" }: { score?: number; label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="h-44 w-full">
        <ResponsiveContainer>
          <RadialBarChart innerRadius="72%" outerRadius="100%" data={[{ score }]} startAngle={210} endAngle={-30}>
            <RadialBar dataKey="score" cornerRadius={14} fill="#14B8A6" background={{ fill: "#E2E8F0" }} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="-mt-28 mb-8 text-center">
        <div className="text-[32px] font-bold text-slate-950">{score}/100</div>
        <StatusBadge label={label} variant={score >= 85 ? "success" : score >= 70 ? "success" : "warning"} />
      </div>
    </div>
  );
}
