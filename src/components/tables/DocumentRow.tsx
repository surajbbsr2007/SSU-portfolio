import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/charts/StatusBadge";
import type { EvidenceDocument } from "@/data/documents";

export function DocumentRow({ document }: { document: EvidenceDocument }) {
  return (
    <tr className="transition hover:bg-slate-50">
      <td className="px-4 py-3 font-medium text-slate-900">{document.fileName}</td>
      <td className="px-4 py-3">
        <StatusBadge label={document.criterion} variant="info" />
      </td>
      <td className="px-4 py-3 text-slate-600">{document.type}</td>
      <td className="px-4 py-3 text-slate-600">{document.uploadedBy}</td>
      <td className="px-4 py-3 text-slate-600">{document.date}</td>
      <td className="px-4 py-3">
        <StatusBadge label={document.status} />
      </td>
      <td className="px-4 py-3 text-slate-600">{document.version}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
}
