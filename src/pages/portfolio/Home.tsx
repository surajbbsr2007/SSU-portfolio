import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "@/components/portfolio/ChartCard";
import { MetricCounter } from "@/components/portfolio/MetricCounter";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SignatureDivider } from "@/components/portfolio/SignatureDivider";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { books } from "@/data/books";
import { publicationsByYear, themeDistribution } from "@/data/impact";
import { heroMetrics, profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { researchThemes } from "@/data/researchThemes";

const chartColors = ["#1E3A8A", "#2563EB", "#059669", "#3B82F6"];

export function Home() {
  const recentTrajectory = publications.filter((publication) => publication.year >= 2025).length;

  return (
    <>
      <section className="container-grid grid gap-12 pb-14 pt-12 md:pb-20 md:pt-20 lg:grid-cols-[minmax(0,0.58fr)_minmax(360px,0.42fr)] lg:items-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-blue-deep">{profile.designation}</p>
          <h1 className="mt-5 text-5xl font-bold tracking-normal text-text md:text-7xl">{profile.name}</h1>
          <p className="mt-5 text-xl font-semibold leading-8 text-blue-deep">
            {profile.faculty}, {profile.institution}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">{profile.heroStatement}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-deep px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
            >
              View Research Impact
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-5 py-3 text-sm font-semibold text-blue-deep transition hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
            >
              Explore Biography
            </Link>
          </div>
          <SignatureDivider className="mt-10 max-w-xl" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-hairline bg-surface p-3 shadow-[0_24px_70px_rgba(10,14,26,0.08)] sm:p-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-blue-deep/15 bg-white">
              <div className="relative aspect-[4/5] min-h-[390px] overflow-hidden">
                <img
                  src="/images/profile/sharanika-dhal.jpg"
                  alt="Portrait of Dr. Sharanika Dhal"
                  className="h-full w-full object-cover object-[50%_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-text/80 via-text/25 to-transparent px-6 pb-7 pt-20 text-white sm:px-8">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/80">{profile.designation}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-normal">{profile.name}</h2>
                </div>
              </div>
              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <p className="text-base leading-7 text-text-muted sm:text-lg sm:leading-8">{profile.positioning}</p>
                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-[1.25rem] bg-surface px-4 py-4">
                    <p className="font-mono text-2xl text-blue-deep">HRM</p>
                    <p className="mt-2 text-sm text-text-muted sm:text-base">Subject expertise</p>
                  </div>
                  <div className="rounded-[1.25rem] bg-surface px-4 py-4">
                    <p className="font-mono text-2xl text-green">SPSS</p>
                    <p className="mt-2 text-sm text-text-muted sm:text-base">Tool listed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-hairline bg-surface py-8 md:py-10">
        <div className="container-grid grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.04}>
              <MetricCounter metric={metric} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-grid section-space">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {researchThemes.map((theme, index) => (
            <Reveal key={theme.title} delay={index * 0.05}>
              <article className="h-full rounded-xl border border-hairline bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(10,14,26,0.08)]">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-blue-deep">{theme.title}</p>
                <h3 className="mt-4 text-xl font-bold text-text">{theme.shortTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{theme.approach}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-grid">
          <Reveal>
            <SectionHeading eyebrow="Featured work" title="Recent scholarly trajectory">
              The strongest source-supported trajectory appears in book and volume work, 2025-2026 publications, and public science writing.
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal>
              <article className="rounded-xl border border-hairline bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-faint">Books</p>
                <h3 className="mt-4 text-2xl font-bold text-text">{books.length} verified contributions</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  Includes authored, co-authored, and chapter contribution work with Inkscribe, PnP Academy, Emerald Publishing, IGI Global, and CRC Press.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="rounded-xl border border-hairline bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-faint">2025-2026</p>
                <h3 className="mt-4 text-2xl font-bold text-text">{recentTrajectory} listed outputs</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  The recent list includes sustainability, healthcare attitudes, e-pharmacy, consumer behavior, and management conference work.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="rounded-xl border border-hairline bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-faint">Public communication</p>
                <h3 className="mt-4 text-2xl font-bold text-text">Science Horizon writing</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  Five listed pieces translate health, environment, geoscience, and space science topics for a general audience.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-grid section-space">
        <Reveal>
          <SectionHeading eyebrow="Research impact" title="A dashboard view of output and concentration">
            These charts use only the publication years and domains encoded from the provided source extracts.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ChartCard
              title="Publications by year"
              summary="A text alternative: the extracted archive is concentrated in 2025 and 2026, with earlier healthcare and technology work from 2019-2024."
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={publicationsByYear}>
                    <XAxis dataKey="year" tickLine={false} axisLine={false} />
                    <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ fill: "#EEF2F7" }} />
                    <Bar dataKey="publications" fill="#2563EB" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ChartCard
              title="Theme distribution"
              summary="A text alternative: sustainability and climate, healthcare systems, and digital behavior are the largest visible clusters."
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={themeDistribution} dataKey="value" nameKey="name" innerRadius={62} outerRadius={100} paddingAngle={3}>
                      {themeDistribution.map((entry, index) => (
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
        <SourceNote>
          Metrics and charts are derived from the uploaded bio, SSU data, LinkedIn-style extract, and ResearchGate extract. No citation count,
          h-index, email, or unverified profile link is displayed.
        </SourceNote>
      </section>

      <section className="border-t border-hairline bg-blue-deep py-16 text-white md:py-20">
        <div className="container-grid">
          <Reveal>
            <p className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{profile.closingStatement}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
