import { SectionHeader } from "@/components/site/section-header";
import { SectionReveal } from "@/components/site/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function ExperienceTimeline() {
  return (
    <SectionReveal delay={0.08}>
      <section id="experience" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Experience"
          title="Chronological experience with business context, technical depth, and deployment relevance separated for fast recruiter scanning."
          description="Each role is rewritten from the CV for web readability. The intent is not to embellish, but to make it easier to see what problem space he worked in, what he actually built, and why it matters commercially."
        />
        <div className="mt-10 space-y-5">
          {cvData.experience.map((entry, index) => (
            <Card key={`${entry.company}-${entry.role}-${entry.start}`}>
              <article className="rounded-[1.5rem] p-5 sm:p-6">
                <div className="grid gap-6 lg:grid-cols-[112px_1fr]">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted)]">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <div className="hidden h-full w-px bg-[linear-gradient(180deg,rgba(182,122,75,0.45),rgba(18,24,37,0.08))] lg:block" />
                  </div>
                  <div className="space-y-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">{entry.company}</p>
                        <h3 className="display-font mt-2 text-2xl tracking-[-0.03em] text-[color:var(--foreground)]">{entry.role}</h3>
                        <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                          {entry.start} - {entry.end} · {entry.durationLabel}
                          {entry.location ? ` · ${entry.location}` : ""}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                        {entry.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </div>

                    <p className="max-w-3xl text-base leading-8 text-[color:var(--muted-strong)]">{entry.summary}</p>

                    <div className="grid gap-3 md:grid-cols-3">
                      {entry.highlights.map((item) => (
                        <div
                          key={`${entry.role}-${item.label}`}
                          className="rounded-[1.2rem] border border-[color:var(--border)] bg-[rgba(255,255,255,0.62)] p-4"
                        >
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">{item.label}</p>
                          <p className="mt-3 text-sm leading-7 text-[color:var(--muted-strong)]">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}

