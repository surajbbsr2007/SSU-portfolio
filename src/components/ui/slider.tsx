import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100">
      <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-white shadow transition focus:outline-none focus:ring-2 focus:ring-primary/30" />
  </SliderPrimitive.Root>
));
Slider.displayName = "Slider";
