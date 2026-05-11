import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "@/components/portfolio/ChartCard";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { conferences, publicTalks } from "@/data/conferences";
import { engagementTrend } from "@/data/impact";
import { workshops } from "@/data/workshops";
import type { Engagement } from "@/data/types";

function EngagementList({ items }: { items: Engagement[] }) {
  return (
    <div className="divide-y divide-hairline rounded-xl border border-hairline bg-white">
      {items.map((item) => (
        <article key={`${item.title}-${item.date}`} className="grid gap-4 p-5 md:grid-cols-[150px_1fr]">
          <div>
            <p className="font-mono text-sm text-blue-deep">{item.date}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-text-faint">{item.category}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold leading-7 text-text">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold text-text-muted">{item.organizer}</p>
            <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-blue-deep hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
              >
                Source reference
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function Conferences() {
  return (
    <>
      <PageIntro eyebrow="Scholarly engagement" title="Conference presentations, FDPs, workshops, and public academic forums">
        <p>
          This page documents the presentation and professional development activity listed in the SSU and portfolio research extracts.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <ChartCard
            title="Engagement timeline"
            summary="A text alternative: the listed scholarly engagement is concentrated in 2019 and 2020, with documented entries in 2022 and 2025."
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementTrend}>
                  <XAxis dataKey="year" tickLine={false} axisLine={false} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: "#EEF2F7" }} />
                  <Bar dataKey="engagements" fill="#1E3A8A" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </Reveal>

        <Reveal className="mt-14">
          <SectionHeading eyebrow="Conference presentations" title="Paper presentations">
            Presentations include healthcare competencies, AI in healthcare organizations, sustainability in Odisha, industrial relations, and CSR.
          </SectionHeading>
        </Reveal>
        <EngagementList items={conferences} />

        <Reveal className="mt-14">
          <SectionHeading eyebrow="FDPs and workshops" title="Methodological and teaching development">
            The source data lists training in research analysis, case writing, literature synthesis, and Stata.
          </SectionHeading>
        </Reveal>
        <EngagementList items={workshops} />

        <Reveal className="mt-14">
          <SectionHeading eyebrow="Public academic forums" title="Talks and institutional engagements">
            These items are included only where the portfolio research extract gives a named forum or documented streamed reference.
          </SectionHeading>
        </Reveal>
        <EngagementList items={publicTalks} />

        <div className="mt-8">
          <SourceNote>
            The conference count shown on the home page uses the eight conference presentations from the SSU data. Public forum items are presented
            separately and are not added to that metric.
          </SourceNote>
        </div>
      </section>
    </>
  );
}
