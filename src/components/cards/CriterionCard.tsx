import { Clock, FileText, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ProgressRing } from "@/components/charts/ProgressRing";
import { type Criterion } from "@/data/criteria";
import { CRITERION_COLORS } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function CriterionCard({ criterion }: { criterion: Criterion }) {
  const colors = CRITERION_COLORS[criterion.color];
  const Icon = getIcon(criterion.icon);
  return (
    <Card className="flex min-h-[360px] flex-col p-6 hover:shadow-md">
      <div className="mb-6 flex items-start justify-between">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-md text-sm font-semibold text-white", colors.bg)}>
          {String(criterion.id).padStart(2, "0")}
        </div>
        <div className="text-center">
          <ProgressRing percentage={criterion.completion} size={80} color={colors.hex} />
          <p className="mt-1 text-xs font-medium text-slate-500">{criterion.status}</p>
        </div>
      </div>
      <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-full", colors.bgTint, colors.text)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="min-h-12 text-base font-semibold leading-6 text-slate-950">{criterion.name}</h3>
      <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">{criterion.description}</p>
      <Progress value={criterion.completion} indicatorClassName={colors.bg} className="mt-4" />
      <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5" />
          {criterion.subCriteria} sub
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5" />
          {criterion.documents} docs
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {criterion.pending} open
        </span>
      </div>
      <Button asChild variant="ghost" className={cn("mt-auto w-full justify-center", colors.text)}>
        <Link to={`/criteria/${criterion.id}`}>View Details</Link>
      </Button>
    </Card>
  );
}
