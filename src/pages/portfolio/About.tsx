import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

export function About() {
  return (
    <>
      <PageIntro eyebrow="Academic biography" title="An intellectual formation across clinical practice, HR, and management research">
        <p>
          {profile.name} is Assistant Professor in HR at the Faculty of Management Studies, Sri Sri University. Her profile is shaped by a clinical
          foundation in prosthetics and orthotics, industry HR practice, doctoral research in management, and teaching in management education.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
          <Reveal className="space-y-8">
            <article className="prose-block">
              <h2>From clinical foundations to human systems</h2>
              <p>
                Dr. Dhal's early academic formation was in Prosthetics and Orthotics at Utkal University / SVNIRTAR from 2003 to 2008, where the source
                data identifies her as batch topper. That foundation matters because it placed her first professional lens inside rehabilitation,
                patient support, fitment work, and health-related practice.
              </p>
            </article>
            <article className="prose-block">
              <h2>Transition into management and HR</h2>
              <p>
                After clinical work as a Jr. Prosthetist and Orthotist, she completed an MBA in HR and Marketing from 2010 to 2012 with first-grade
                performance noted in the source. Her HR Executive and HR Manager roles then built practical experience in recruitment, manpower
                planning, induction, training, employee records, attendance, and exit formalities.
              </p>
            </article>
            <article className="prose-block">
              <h2>Doctoral research and academic identity</h2>
              <p>
                Her Ph.D. in Management at Birla Global University, 2020-2024, anchors her current research identity. The verified research interests
                include competency mapping, training and development, sustainability, and issues and challenges in hospital and healthcare systems.
              </p>
            </article>
            <article className="prose-block">
              <h2>Scholar, educator, and science communicator</h2>
              <p>
                The source material presents her as research-oriented, observant, nature-loving, and active as an author and writer. Professionally,
                that public-facing dimension appears through Science Horizon articles on sleep paralysis, desertification, plastics, geotourism, and
                space science.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="sticky top-24 space-y-5">
              <div className="rounded-xl border border-hairline bg-surface p-6">
                <p className="font-serif text-3xl italic leading-10 text-blue-deep">
                  "Human performance, health systems, and sustainability are treated as connected management questions."
                </p>
              </div>
              <div className="rounded-xl border border-hairline bg-white p-6">
                <h3 className="text-lg font-bold text-text">Verified education</h3>
                <div className="mt-5 space-y-5">
                  {education.map((item) => (
                    <div key={item.degree} className="border-l border-blue-deep/30 pl-4">
                      <p className="font-mono text-xs text-text-faint">{item.period}</p>
                      <p className="mt-1 font-semibold text-text">{item.degree}</p>
                      <p className="mt-1 text-sm text-text-muted">{item.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-grid">
          <Reveal>
            <SectionHeading eyebrow="Milestones" title="Education as a bridge between disciplines">
              Each milestone explains a later research emphasis: clinical competence, HR systems, organizational performance, and public relevance.
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <Reveal key={item.degree}>
                <article className="rounded-xl border border-hairline bg-white p-6">
                  <p className="font-mono text-sm text-blue-deep">{item.period}</p>
                  <h3 className="mt-4 text-xl font-bold text-text">{item.degree}</h3>
                  <p className="mt-2 text-sm font-medium text-text-muted">{item.institution}</p>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{item.details}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <SourceNote>Degree wording follows the user-provided brief and the bio timeline: Ph.D. in Management, Birla Global University, 2020-2024.</SourceNote>
          </div>
        </div>
      </section>
    </>
  );
}
