import { cn } from "@/lib/utils";

const cellStyles = [
  "bg-slate-100 text-slate-500",
  "bg-rose-100 text-rose-700",
  "bg-amber-100 text-amber-700",
  "bg-emerald-500 text-white"
];

export function HeatmapGrid({
  rows,
  cols,
  values,
  rounded = false,
  showLabels = true
}: {
  rows: string[];
  cols: string[];
  values: number[][];
  rounded?: boolean;
  showLabels?: boolean;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[760px]">
        {showLabels ? (
          <div className="grid gap-1" style={{ gridTemplateColumns: `56px repeat(${cols.length}, minmax(40px, 1fr))` }}>
            <div />
            {cols.map((col) => (
              <div key={col} className="py-1 text-center text-xs font-semibold text-slate-500">
                {col}
              </div>
            ))}
          </div>
        ) : null}
        <div className="grid gap-1" style={{ gridTemplateColumns: `56px repeat(${cols.length}, minmax(40px, 1fr))` }}>
          {rows.map((row, rowIndex) => (
            <>
              <div key={`${row}-label`} className="flex h-10 items-center text-xs font-semibold text-slate-500">
                {row}
              </div>
              {cols.map((col, colIndex) => (
                <div
                  key={`${row}-${col}`}
                  className={cn(
                    "flex h-10 items-center justify-center text-xs font-semibold transition hover:ring-2 hover:ring-primary/20",
                    rounded ? "rounded-sm" : "rounded-md",
                    cellStyles[values[rowIndex][colIndex]]
                  )}
                >
                  {values[rowIndex][colIndex]}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
