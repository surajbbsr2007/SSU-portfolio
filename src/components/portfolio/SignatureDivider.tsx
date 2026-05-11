import { cn } from "@/lib/utils";

export function SignatureDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-4 w-full", className)} aria-hidden="true">
      <div className="absolute left-0 right-3 top-1/2 h-px bg-blue-deep/70" />
      <div className="absolute right-0 top-[calc(50%-8px)] h-4 w-px bg-blue-deep/70" />
      <div className="absolute right-0 top-[calc(50%-8px)] h-px w-3 bg-blue-deep/70" />
    </div>
  );
}
