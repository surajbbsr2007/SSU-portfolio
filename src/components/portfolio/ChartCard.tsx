import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ChartCard({
  title,
  summary,
  children,
  className
}: {
  title: string;
  summary: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-xl border border-hairline bg-white p-5 shadow-[0_16px_42px_rgba(10,14,26,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(10,14,26,0.08)]",
        className
      )}
      aria-label={title}
    >
      <div className="mb-5 flex items-start justify-between gap-6 border-b border-hairline pb-4">
        <div>
          <h3 className="text-lg font-semibold text-text">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-text-muted">{summary}</p>
        </div>
        <div className="mt-2 h-5 w-16 shrink-0 border-t border-blue-deep/70 border-r border-blue-deep/70" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}
