import { CheckCircle2, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WorkflowSteps({ steps, currentStep = 4 }: { steps: { title: string; description: string }[]; currentStep?: number }) {
  return (
    <div className="flex items-stretch gap-3 overflow-x-auto pb-2">
      {steps.map((step, index) => (
        <div className="flex min-w-56 items-center gap-3" key={step.title}>
          <Card className="h-full min-h-32 flex-1 p-4 hover:shadow-md">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                {index + 1}
              </span>
              {index < currentStep ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : null}
            </div>
            <h3 className="text-sm font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">{step.description}</p>
          </Card>
          {index < steps.length - 1 ? <ChevronRight className="h-5 w-5 shrink-0 text-slate-300" /> : null}
        </div>
      ))}
      <div className="flex min-w-32 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4">
        <Badge className="border-emerald-200 bg-white text-emerald-700">NBA Ready</Badge>
      </div>
    </div>
  );
}
