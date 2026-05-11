import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export function InsightCard({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <Card className="flex items-start gap-3 p-4">
      <div className="rounded-lg bg-primary-soft p-2 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-sm leading-6 text-slate-600">{text}</p>
    </Card>
  );
}
