import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "@/components/portfolio/ChartCard";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { scienceWriting } from "@/data/scienceWriting";

const writingByYear = Array.from(
  scienceWriting.reduce((map, item) => {
    map.set(item.year, (map.get(item.year) ?? 0) + 1);
    return map;
  }, new Map<number, number>())
)
  .map(([year, count]) => ({ year: String(year), articles: count }))
  .sort((a, b) => Number(a.year) - Number(b.year));

export function ScienceWriting() {
  return (
    <>
      <PageIntro eyebrow="Science writing" title="Public communication as part of scholarly identity">
        <p>
          Dr. Dhal's Science Horizon pieces show public-facing intellectual work across health, environmental science, geoscience, and space education.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <ChartCard
            title="Science Horizon pieces by year"
            summary="A text alternative: the provided source lists two pieces from 2016 and three pieces from 2017."
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={writingByYear}>
                  <XAxis dataKey="year" tickLine={false} axisLine={false} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="articles" stroke="#2563EB" fill="#DBEAFE" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </Reveal>

        <Reveal className="mt-14">
          <SectionHeading eyebrow="Editorial record" title="Science Horizon articles">
            Each item notes the public science topic and how it translates specialized knowledge for a broader audience.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {scienceWriting.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.04}>
              <article className="flex h-full flex-col rounded-xl border border-hairline bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(10,14,26,0.08)]">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-blue-deep">{article.issueDate}</p>
                <h2 className="mt-4 text-2xl font-bold text-text">{article.title}</h2>
                <p className="mt-4 text-sm leading-7 text-text-muted">{article.topic}</p>
                <div className="mt-6 flex-1 rounded-lg bg-surface p-4">
                  <p className="text-sm font-semibold text-text">Public value</p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">{article.publicValue}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <SourceNote>Issue dates and article topics are taken from the portfolio research extract's Science Horizon table.</SourceNote>
        </div>
      </section>
    </>
  );
}
