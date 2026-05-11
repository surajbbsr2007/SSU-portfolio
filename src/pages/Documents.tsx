import { Search, Upload } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/PageHeader";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { documents } from "@/data/documents";
import { criteria } from "@/data/criteria";

export function Documents() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Documents / Evidence Repository"
        subtitle="Centralized evidence library mapped to NBA criteria and verification status."
        actions={<UploadDialog />}
      />

      <Card className="p-4">
        <div className="grid grid-cols-[180px_160px_160px_1fr] gap-3">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Criterion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Criteria</SelectItem>
              {criteria.map((criterion) => (
                <SelectItem key={criterion.id} value={String(criterion.id)}>
                  Criterion {criterion.id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="xlsx">XLSX</SelectItem>
              <SelectItem value="docx">DOCX</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="review">Under Review</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input className="pl-9" placeholder="Search by file name, uploader, or criterion" />
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-950">128 of 500 documents · 1.2 GB used</p>
            <p className="mt-1 text-xs text-slate-500">Institution storage allocation for academic year 2024-25</p>
          </div>
          <span className="text-sm font-semibold text-primary">25.6%</span>
        </div>
        <Progress value={25.6} className="mt-4" />
      </Card>

      <section className="grid grid-cols-4 gap-6">
        {documents.map((document) => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </section>
    </div>
  );
}

function UploadDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Upload className="h-4 w-4" />
          Upload Document
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Evidence Document</DialogTitle>
          <DialogDescription>Map the file to a criterion before sending it for coordinator review.</DialogDescription>
        </DialogHeader>
        <div className="mt-5 space-y-4">
          <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <Upload className="h-8 w-8 text-slate-400" />
            <p className="mt-3 text-sm font-medium text-slate-900">Drag and drop file here</p>
            <p className="mt-1 text-xs text-slate-500">PDF, DOCX, XLSX, ZIP, or PNG up to 100 MB</p>
          </div>
          <Select defaultValue="5">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {criteria.map((criterion) => (
                <SelectItem key={criterion.id} value={String(criterion.id)}>
                  Criterion {criterion.id}: {criterion.shortName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input placeholder="Document title" />
          <Button className="w-full" onClick={() => toast.success("Document uploaded for review")}>
            Upload Document
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
