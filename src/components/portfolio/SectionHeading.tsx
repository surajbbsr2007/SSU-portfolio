import type { ReactNode } from "react";
import { SignatureDivider } from "@/components/portfolio/SignatureDivider";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  className
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", className)}>
      {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-deep">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-text md:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-8 text-text-muted md:text-lg">{children}</p> : null}
      <SignatureDivider className="mt-6 max-w-sm" />
    </div>
  );
}
