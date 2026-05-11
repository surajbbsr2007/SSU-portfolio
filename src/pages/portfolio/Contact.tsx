import { ExternalLink, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SourceNote } from "@/components/portfolio/SourceNote";
import { contact } from "@/data/contact";

export function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete name, email, and message fields.");
      return;
    }

    if (!contact.email) {
      setStatus("A verified email address was not included in the provided data, so the form is not submitting yet.");
      return;
    }

    const subject = encodeURIComponent(`Academic collaboration inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageIntro eyebrow="Contact" title="Academic collaboration and institutional inquiry">
        <p>
          Contact details are limited to verified institutional identity and profile references from the uploaded data. Unverified email, phone, and
          personal social links are omitted.
        </p>
      </PageIntro>

      <section className="container-grid pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <Reveal>
            <aside className="rounded-xl border border-hairline bg-surface p-6">
              <SectionHeading eyebrow="Institutional identity" title={contact.name} className="mb-6">
                {contact.designation}, {contact.institution}
              </SectionHeading>
              <div className="space-y-5 text-sm leading-7 text-text-muted">
                <p>
                  <span className="font-semibold text-text">Location:</span> {contact.location}
                </p>
                <p>
                  <span className="font-semibold text-text">Address:</span> {contact.address}
                </p>
                <p>
                  <span className="font-semibold text-text">Email:</span> Not available in verified provided data.
                </p>
                <p>
                  <span className="font-semibold text-text">Mobile:</span> Not available in verified provided data.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {contact.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-hairline bg-white px-4 py-3 text-sm font-semibold text-blue-deep hover:bg-blue-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.05}>
            <form className="rounded-xl border border-hairline bg-white p-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-label">
                  Name
                  <input name="name" className="form-input" autoComplete="name" />
                </label>
                <label className="form-label">
                  Email
                  <input name="email" type="email" className="form-input" autoComplete="email" />
                </label>
              </div>
              <label className="form-label mt-5">
                Inquiry topic
                <input name="topic" className="form-input" placeholder="Academic collaboration, lecture, research discussion" />
              </label>
              <label className="form-label mt-5">
                Message
                <textarea name="message" className="form-input min-h-40 resize-y" />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-deep px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Prepare inquiry
              </button>
              {status ? <p className="mt-4 text-sm leading-6 text-text-muted" role="status">{status}</p> : null}
              <p className="mt-5 text-sm leading-7 text-text-muted">
                This form is configured to create a mail draft only after a verified email address is added to the contact data file.
              </p>
            </form>
          </Reveal>
        </div>
        <div className="mt-8">
          <SourceNote>{contact.note}</SourceNote>
        </div>
      </section>
    </>
  );
}
