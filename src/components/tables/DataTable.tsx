import { ArrowUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  accessor: (row: T) => ReactNode;
  sortable?: boolean;
  className?: string;
}

export function DataTable<T extends object>({
  columns,
  data,
  pageSize = 10,
  onRowClick
}: {
  columns: Column<T>[];
  data: T[];
  pageSize?: number;
  onRowClick?: (row: T) => void;
}) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const sorted = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) =>
      String((a as Record<string, unknown>)[sortKey] ?? "").localeCompare(String((b as Record<string, unknown>)[sortKey] ?? ""))
    );
  }, [data, sortKey]);
  const visible = sorted.slice(0, pageSize);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={cn("px-4 py-3", column.className)}>
                  {column.sortable ? (
                    <button className="inline-flex items-center gap-1.5 hover:text-slate-900" onClick={() => setSortKey(column.key)}>
                      {column.header}
                      <ArrowUpDown className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visible.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn("transition hover:bg-slate-50", onRowClick ? "cursor-pointer" : "")}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td key={column.key} className={cn("px-4 py-3 align-middle text-slate-700", column.className)}>
                    {column.accessor(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
        <span>
          Showing 1 to {visible.length} of {data.length} entries
        </span>
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((page) => (
            <Button key={page} variant={page === 1 ? "secondary" : "ghost"} size="sm" className="h-7 px-2">
              {page}
            </Button>
          ))}
          <Button variant="ghost" size="sm" className="h-7 px-2">
            ›
          </Button>
        </div>
      </div>
    </div>
  );
}
