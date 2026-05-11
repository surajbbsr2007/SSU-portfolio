import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "@/components/portfolio/ChartCard";
import { MetricCounter } from "@/components/portfolio/MetricCounter";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { collaborationClusters, engagementTrend, publicationMix, publicationsByYear, themeDistribution } from "@/data/impact";
import { heroMetrics } from "@/data/profile";

const chartColors = ["#1E3A8A", "#2563EB", "#059669", "#3B82F6", "#C9A24A"];

export function Impact() {
  return (
    <>
      <PageIntro eyebrow="Research impact" title="A scholarship dashboard built from verified source data">
        <p>
          This page summarizes publication volume, ResearchGate engagement, publication mix, thematic concentration, and documented collaboration
          contexts without introducing unverified citation or affiliation metrics.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {heroMetrics.map((metric) => (
            <Reveal key={metric.label}>
              <MetricCounter metric={metric} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ChartCard
              title="Publication timeline"
              summary="A text alternative: the archive rises visibly in 2025 and 2026, with earlier verified outputs in 2019, 2020, 2021, and 2024."
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={publicationsByYear}>
                    <XAxis dataKey="year" tickLine={false} axisLine={false} />
                    <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="publications" stroke="#2563EB" fill="#DBEAFE" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ChartCard
              title="Publication mix"
              summary="A text alternative: journal articles form the largest group, followed by book and volume work."
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={publicationMix} dataKey="value" nameKey="name" innerRadius={58} outerRadius={98} paddingAngle={3}>
                      {publicationMix.map((entry, index) => (
                        <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ChartCard
              title="Theme distribution"
              summary="A text alternative: sustainability, healthcare systems, digital behavior, and HRM form the major source-supported clusters."
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={themeDistribution} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" allowDecimals={false} hide />
                    <YAxis dataKey="name" type="category" width={150} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                    <Tooltip cursor={{ fill: "#EEF2F7" }} />
                    <Bar dataKey="value" fill="#1E3A8A" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ChartCard
              title="Scholarly engagement trend"
              summary="A text alternative: conference and workshop activity is concentrated in 2019 and 2020, with later documented activity in 2022 and 2025."
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={engagementTrend}>
                    <XAxis dataKey="year" tickLine={false} axisLine={false} />
                    <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ fill: "#EEF2F7" }} />
                    <Bar dataKey="engagements" fill="#059669" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <SectionHeading eyebrow="Collaboration contexts" title="Documented networks without invented counts">
            The source extract describes co-authoring and scholarly engagement through named institutional contexts, but it does not provide a verified
            co-author count.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {collaborationClusters.map((cluster) => (
            <Reveal key={cluster.name}>
              <article className="rounded-xl border border-hairline bg-white p-6">
                <h3 className="text-lg font-bold text-text">{cluster.name}</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{cluster.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <SourceNote>
            Publication and read metrics come from the ResearchGate extract. Engagement counts are derived from the listed conference, FDP, and workshop
            entries. Collaboration is shown qualitatively because the provided data does not contain verified co-author totals.
          </SourceNote>
        </div>
      </section>
    </>
  );
}
