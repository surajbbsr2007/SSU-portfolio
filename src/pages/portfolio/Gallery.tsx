import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { VisualIndex } from "@/components/portfolio/VisualIndex";
import { gallery } from "@/data/gallery";

export function Gallery() {
  return (
    <>
      <PageIntro eyebrow="Visual research gallery" title="A source-referenced index of figures, maps, models, and covers">
        <p>
          No reusable verified image files were present in the current repo or PDF extraction. The gallery therefore renders a scholarly visual index
          with captions and source context instead of inventing imagery.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <SectionHeading eyebrow="Gallery index" title="Visual materials identified in the source extracts">
            Each item represents a figure, map, model, statistical visual, or cover reference named in the provided data.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-xl border border-hairline bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(10,14,26,0.08)]">
                <VisualIndex title={item.title} domain={item.domain} />
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-blue-deep">{item.domain}</p>
                <h2 className="mt-3 text-xl font-bold leading-7 text-text">{item.title}</h2>
                <p className="mt-3 text-sm font-semibold text-text-muted">{item.caption}</p>
                <p className="mt-4 text-sm leading-7 text-text-muted">{item.context}</p>
                <p className="mt-5 border-t border-hairline pt-4 text-xs leading-6 text-text-faint">Reference: {item.reference}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <SourceNote>
            The gallery intentionally avoids external image scraping and invented figures. When verified image assets are provided, they can be added to
            the existing gallery data records.
          </SourceNote>
        </div>
      </section>
    </>
  );
}
