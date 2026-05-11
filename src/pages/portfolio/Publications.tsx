import { ExternalLink, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SourceNote } from "@/components/portfolio/SourceNote";
import {
  publicationDomains,
  publicationTypes,
  publicationVenues,
  publicationYears,
  publications
} from "@/data/publications";

const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function Publications() {
  const [year, setYear] = useState("all");
  const [type, setType] = useState("all");
  const [domain, setDomain] = useState("all");
  const [venue, setVenue] = useState("all");

  const filtered = useMemo(() => {
    return publications
      .filter((publication) => year === "all" || publication.year === Number(year))
      .filter((publication) => type === "all" || publication.type === type)
      .filter((publication) => domain === "all" || publication.domain === domain)
      .filter((publication) => venue === "all" || publication.venue === venue)
      .sort((a, b) => {
        if (a.year !== b.year) return b.year - a.year;
        return monthOrder.indexOf(b.month ?? "") - monthOrder.indexOf(a.month ?? "");
      });
  }, [domain, type, venue, year]);

  return (
    <>
      <PageIntro eyebrow="Publication archive" title="A filterable record of publications and source-listed outputs">
        <p>
          The archive is sorted from newest to oldest and uses only titles, venues, years, DOIs, and publisher references available in the uploaded data.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <div className="rounded-xl border border-hairline bg-surface p-4">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.2fr_1.4fr_auto]">
              <label className="filter-label">
                Year
                <select value={year} onChange={(event) => setYear(event.target.value)} className="filter-select">
                  <option value="all">All years</option>
                  {publicationYears.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-label">
                Type
                <select value={type} onChange={(event) => setType(event.target.value)} className="filter-select">
                  <option value="all">All types</option>
                  {publicationTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-label">
                Domain
                <select value={domain} onChange={(event) => setDomain(event.target.value)} className="filter-select">
                  <option value="all">All domains</option>
                  {publicationDomains.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-label">
                Publisher or journal
                <select value={venue} onChange={(event) => setVenue(event.target.value)} className="filter-select">
                  <option value="all">All venues</option>
                  {publicationVenues.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-hairline bg-white px-4 text-sm font-semibold text-blue-deep transition hover:bg-blue-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep xl:mt-auto"
                onClick={() => {
                  setYear("all");
                  setType("all");
                  setDomain("all");
                  setVenue("all");
                }}
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Reset
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <p className="font-mono text-sm uppercase tracking-[0.14em] text-text-faint">{filtered.length} entries shown</p>
        </Reveal>

        <div className="mt-5 divide-y divide-hairline rounded-xl border border-hairline bg-white">
          {filtered.map((publication) => (
            <Reveal key={`${publication.title}-${publication.year}`}>
              <article className="grid gap-4 p-5 transition hover:bg-surface md:grid-cols-[120px_1fr_180px]">
                <div>
                  <p className="font-mono text-lg text-blue-deep">{publication.year}</p>
                  {publication.month ? <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">{publication.month}</p> : null}
                </div>
                <div>
                  <h2 className="text-lg font-bold leading-7 text-text">{publication.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{publication.venue}</p>
                  {publication.note ? <p className="mt-2 text-sm leading-6 text-text-faint">{publication.note}</p> : null}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-tint px-3 py-1 text-xs font-semibold text-blue-deep">{publication.type}</span>
                    <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-text-muted">{publication.domain}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm md:text-right">
                  {publication.doi ? <p className="font-mono text-xs text-text-muted">DOI {publication.doi}</p> : null}
                  {publication.publisher ? <p className="text-text-muted">{publication.publisher}</p> : null}
                  {publication.link ? (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-blue-deep hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
                    >
                      Source
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <SourceNote>
            The archive includes 19 entries to match the ResearchGate metric. Titles marked as truncated or role-limited preserve the source uncertainty
            instead of expanding missing details.
          </SourceNote>
        </div>
      </section>
    </>
  );
}
