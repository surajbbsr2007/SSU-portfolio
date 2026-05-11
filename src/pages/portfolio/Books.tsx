import { ExternalLink } from "lucide-react";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { books } from "@/data/books";

export function Books() {
  return (
    <>
      <PageIntro eyebrow="Books and volumes" title="Authorial and edited-volume contribution work">
        <p>
          This page focuses on the five book, chapter, and volume contributions with verified roles or source-supported contribution context.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <SectionHeading eyebrow="Verified contributions" title="Book and chapter trajectory">
            ISBNs appear only where the provided source extract includes them.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book, index) => (
            <Reveal key={book.title} delay={index * 0.04}>
              <article className="flex h-full flex-col rounded-xl border border-hairline bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(10,14,26,0.08)]">
                <div className="mb-6 aspect-[4/3] rounded-xl border border-hairline bg-surface p-5">
                  <div className="flex h-full flex-col justify-between">
                    <span className="h-5 w-20 border-r border-t border-blue-deep/70" aria-hidden="true" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-faint">{book.year}</p>
                      <h2 className="mt-3 text-xl font-bold leading-7 text-text">{book.title}</h2>
                    </div>
                  </div>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-blue-deep">{book.role}</p>
                <p className="mt-3 text-sm font-semibold text-text-muted">{book.publisher}</p>
                {book.chapterTitle ? <p className="mt-4 text-sm leading-7 text-text">Chapter: {book.chapterTitle}</p> : null}
                <p className="mt-4 flex-1 text-sm leading-7 text-text-muted">{book.description}</p>
                {book.isbn ? <p className="mt-5 font-mono text-xs text-text-faint">ISBN {book.isbn}</p> : null}
                {book.link ? (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-deep hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
                  >
                    Publisher reference
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <SourceNote>
            Healing with Nature in India and Innovating Sustainability are listed in the bio extract. The CRC Press, Emerald, and IGI Global entries are
            described in the portfolio research extract.
          </SourceNote>
        </div>
      </section>
    </>
  );
}
