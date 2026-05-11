import * as ProgressPrimitive from "@radix-ui/react-progress";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Progress = forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { indicatorClassName?: string }
>(({ className, indicatorClassName, value = 0, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-slate-100", className)} {...props}>
    <ProgressPrimitive.Indicator
      className={cn("h-full rounded-full bg-primary transition-all", indicatorClassName)}
      style={{ transform: `translateX(-${100 - Number(value)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = "Progress";
