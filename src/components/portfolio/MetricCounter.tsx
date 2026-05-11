import CountUp from "react-countup";
import type { Metric } from "@/data/types";

export function MetricCounter({ metric }: { metric: Metric }) {
  return (
    <article className="flex h-full min-h-52 flex-col rounded-xl border border-hairline bg-white p-6 shadow-[0_12px_30px_rgba(10,14,26,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(10,14,26,0.08)]">
      <p className="min-h-10 font-mono text-xs uppercase tracking-[0.16em] text-text-faint">{metric.label}</p>
      <div className="mt-4 flex items-end gap-2">
        <span className="font-mono text-3xl font-medium text-text md:text-4xl">
          <CountUp end={metric.value} duration={2} separator="," suffix={metric.suffix ?? ""} enableScrollSpy scrollSpyOnce />
        </span>
      </div>
      {metric.display ? <p className="mt-1 text-sm font-medium text-blue-deep">{metric.display}</p> : null}
      <p className="mt-auto pt-4 text-sm leading-6 text-text-muted">{metric.description}</p>
    </article>
  );
}
