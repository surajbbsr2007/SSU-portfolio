import type { ReactNode } from "react";
import { Reveal } from "@/components/portfolio/Reveal";
import { SignatureDivider } from "@/components/portfolio/SignatureDivider";

export function PageIntro({
  eyebrow,
  title,
  children,
  aside
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="container-grid pb-12 pt-16 md:pb-16 md:pt-24">
      <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(280px,0.24fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-deep">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-text md:text-6xl">{title}</h1>
          <div className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">{children}</div>
          <SignatureDivider className="mt-8 max-w-xl" />
        </div>
        {aside ? <aside className="self-end">{aside}</aside> : null}
      </Reveal>
    </section>
  );
}
