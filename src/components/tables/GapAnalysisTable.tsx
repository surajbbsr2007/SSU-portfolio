import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { DataTable, type Column } from "@/components/tables/DataTable";
import type { GapEntry } from "@/data/gapAnalysis";

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => !["Dr.", "Prof.", "Mr.", "Ms."].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

const columns: Column<GapEntry>[] = [
  { key: "criterion", header: "Criterion", accessor: (row) => row.criterion, sortable: true },
  { key: "subCriterion", header: "Sub-criterion", accessor: (row) => row.subCriterion, sortable: true },
  { key: "issue", header: "Issue / Gap", accessor: (row) => <span className="block max-w-[320px] leading-5">{row.issue}</span> },
  { key: "severity", header: "Severity", accessor: (row) => <StatusBadge label={row.severity} />, sortable: true },
  { key: "suggestedAction", header: "Suggested Action", accessor: (row) => <span className="block max-w-[320px] leading-5">{row.suggestedAction}</span> },
  {
    key: "owner",
    header: "Owner",
    accessor: (row) => (
      <span className="inline-flex items-center gap-2">
        <Avatar className="h-7 w-7">
          <AvatarFallback>{initials(row.owner)}</AvatarFallback>
        </Avatar>
        {row.owner}
      </span>
    ),
    sortable: true
  },
  { key: "dueDate", header: "Due Date", accessor: (row) => row.dueDate, sortable: true },
  { key: "status", header: "Status", accessor: (row) => <StatusBadge label={row.status} />, sortable: true }
];

export function GapAnalysisTable({ data }: { data: GapEntry[] }) {
  return <DataTable columns={columns} data={data} pageSize={12} />;
}
