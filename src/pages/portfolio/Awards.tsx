import { Award as AwardIcon } from "lucide-react";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { awards } from "@/data/awards";

export function Awards() {
  return (
    <>
      <PageIntro eyebrow="Awards and recognitions" title="Recognition grounded in academic and authorial activity">
        <p>
          Awards are presented with restrained emphasis and only where the uploaded source data verifies the award name, context, or recognition.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <SectionHeading eyebrow="Chronology" title="Verified honors">
            Gold is used only as a quiet signal for awards and recognitions.
          </SectionHeading>
        </Reveal>
        <div className="space-y-5">
          {[...awards]
            .sort((a, b) => Number(a.year) - Number(b.year))
            .map((award, index) => (
              <Reveal key={award.name} delay={index * 0.04}>
                <article className="grid gap-5 rounded-xl border border-hairline bg-white p-6 md:grid-cols-[110px_1fr]">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                      <AwardIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="font-mono text-lg text-gold">{award.year}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text">{award.name}</h2>
                    <p className="mt-2 text-sm font-semibold text-text-muted">{award.context}</p>
                    <p className="mt-4 text-sm leading-7 text-text-muted">{award.significance}</p>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
        <div className="mt-8">
          <SourceNote>No additional awards are inferred beyond the uploaded bio and SSU data extracts.</SourceNote>
        </div>
      </section>
    </>
  );
}
