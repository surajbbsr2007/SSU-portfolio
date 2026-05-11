import { Download, Eye, FileArchive, FileSpreadsheet, FileText, Image, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { type EvidenceDocument } from "@/data/documents";
import { cn } from "@/lib/utils";

const typeStyles = {
  PDF: "bg-red-50 text-red-600",
  XLSX: "bg-emerald-50 text-emerald-600",
  DOCX: "bg-blue-50 text-blue-600",
  ZIP: "bg-slate-100 text-slate-600",
  PNG: "bg-violet-50 text-violet-600"
};

const typeIcons = {
  PDF: FileText,
  XLSX: FileSpreadsheet,
  DOCX: FileText,
  ZIP: FileArchive,
  PNG: Image
};

export function DocumentCard({ document }: { document: EvidenceDocument }) {
  const Icon = typeIcons[document.type];
  return (
    <Card className="group relative min-h-52 overflow-hidden p-5 hover:shadow-md">
      <div className={cn("mb-4 flex h-11 w-11 items-center justify-center rounded-lg", typeStyles[document.type])}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="truncate text-sm font-semibold text-slate-950" title={document.fileName}>
        {document.fileName}
      </h3>
      <p className="mt-2 text-xs text-slate-500">
        {document.size} · {document.uploadedBy}
      </p>
      <p className="mt-1 text-xs text-slate-500">{document.date}</p>
      <div className="mt-5">
        <StatusBadge label={document.status} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-white/85 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
        {[Eye, Download, Trash2].map((ActionIcon, index) => (
          <Button key={index} variant="outline" size="icon">
            <ActionIcon className="h-4 w-4" />
          </Button>
        ))}
      </div>
    </Card>
  );
}
