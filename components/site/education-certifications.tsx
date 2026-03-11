import { BadgeCheck, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { SectionReveal } from "@/components/site/section-reveal";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function EducationCertifications() {
  return (
    <SectionReveal delay={0.16}>
      <section id="education" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Education & Certifications"
          title="Academic foundation in Germany, plus certifications that support mobile, tooling, and delivery breadth."
          description="This section stays intentionally compact. The degree path and listed certifications are presented in a clean, formal format suitable for recruiter review."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="rounded-[1.5rem] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="display-font text-2xl tracking-[-0.03em] text-[color:var(--foreground)]">Education</h3>
              </div>
              <div className="mt-6 space-y-5">
                {cvData.education.map((item) => (
                  <div key={item.institution} className="rounded-[1.2rem] border border-[color:var(--border)] bg-[rgba(255,255,255,0.62)] p-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.institution}</p>
                    <p className="mt-2 text-base font-medium text-[color:var(--foreground)]">
                      {item.degree}, {item.field}
                    </p>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <div className="rounded-[1.5rem] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="display-font text-2xl tracking-[-0.03em] text-[color:var(--foreground)]">Certifications</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {cvData.certifications.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.2rem] border border-[color:var(--border)] bg-[rgba(255,255,255,0.62)] px-4 py-3 text-sm leading-7 text-[color:var(--muted-strong)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </SectionReveal>
  );
}

