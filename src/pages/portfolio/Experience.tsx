import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  const chronological = [...experience].sort((a, b) => a.sortYear - b.sortYear);

  return (
    <>
      <PageIntro eyebrow="Professional journey" title="A chronological path from clinical practice to HR and academia">
        <p>
          The timeline shows a deliberate movement from rehabilitation-focused clinical work into HR operations, doctoral research, and management
          education.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <Reveal>
          <SectionHeading eyebrow="Timeline" title="Roles and transitions">
            Each role is summarized from the provided bio data without adding responsibilities beyond the source material.
          </SectionHeading>
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-hairline md:block" aria-hidden="true" />
          <div className="space-y-5">
            {chronological.map((role, index) => (
              <Reveal key={`${role.title}-${role.institution}`} delay={index * 0.03}>
                <article className="relative grid gap-5 rounded-xl border border-hairline bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(10,14,26,0.08)] md:ml-12 md:grid-cols-[220px_1fr]">
                  <span className="absolute -left-[39px] top-7 hidden h-4 w-4 rounded-full border-4 border-white bg-blue-deep shadow md:block" />
                  <div>
                    <p className="font-mono text-sm text-blue-deep">{role.period}</p>
                    <p className="mt-2 text-sm text-text-muted">{role.location}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text">{role.title}</h2>
                    <p className="mt-1 font-semibold text-text-muted">{role.institution}</p>
                    <p className="mt-4 text-sm leading-7 text-text-muted">{role.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-grid">
          <Reveal>
            <SectionHeading eyebrow="Pattern" title="The career arc is coherent">
              Clinical exposure informed healthcare questions; HR practice informed organizational questions; doctoral work turned both into research.
            </SectionHeading>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {["Clinical foundation", "HR practice", "Academic research"].map((phase, index) => (
              <Reveal key={phase} delay={index * 0.05}>
                <div className="rounded-xl border border-hairline bg-white p-6">
                  <p className="font-mono text-4xl text-blue-deep">0{index + 1}</p>
                  <h3 className="mt-5 text-xl font-bold text-text">{phase}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
