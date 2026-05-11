import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "@/components/portfolio/ChartCard";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { themeDistribution } from "@/data/impact";
import { researchThemes } from "@/data/researchThemes";

export function ResearchThemes() {
  return (
    <>
      <PageIntro eyebrow="Research themes" title="An interpretive map of the scholarship">
        <p>
          The themes below organize the verified research interests and publication clusters into four practical domains: HRM, healthcare systems,
          sustainability, and digital behavior.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <ChartCard
            title="Theme concentration"
            summary="A text alternative: the source-supported publication archive is distributed across sustainability, healthcare, digital behavior, and HRM."
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={themeDistribution}>
                  <XAxis dataKey="name" tickLine={false} axisLine={false} interval={0} tick={{ fontSize: 11 }} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: "#EEF2F7" }} />
                  <Bar dataKey="value" fill="#2563EB" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </Reveal>

        <div className="mt-14 space-y-8">
          {researchThemes.map((theme, index) => (
            <Reveal key={theme.title} delay={index * 0.04}>
              <section className="rounded-xl border border-hairline bg-white p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-deep">{theme.title}</p>
                <h2 className="mt-4 text-3xl font-bold text-text">{theme.shortTitle}</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  <article>
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-text-faint">Core problem</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">{theme.problem}</p>
                  </article>
                  <article>
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-text-faint">Research approach</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">{theme.approach}</p>
                  </article>
                  <article>
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-text-faint">Practical value</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">{theme.practice}</p>
                  </article>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
