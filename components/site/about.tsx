import { SectionHeader } from "@/components/site/section-header";
import { SectionReveal } from "@/components/site/section-reveal";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function About() {
  return (
    <SectionReveal delay={0.06}>
      <section id="about" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="About"
          title="Research depth, deployment discipline, and a systems mindset shaped before AI became mainstream."
          description="This section stays close to the CV and explains the through-line of the profile: applied AI for real settings, edge deployment, healthcare and imaging relevance, and an earlier foundation in enterprise integration."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <div className="rounded-[1.5rem] p-6">
              <div className="space-y-5 text-sm leading-8 text-[color:var(--muted-strong)] sm:text-base">
                {cvData.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <div className="rounded-[1.5rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">What stands out</p>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-[color:var(--muted-strong)]">
                <li>Current role directly tied to audio-based healthcare applications in Munich.</li>
                <li>Evidence of on-device AI, explainability, and packaging/deployment work.</li>
                <li>Computer vision and medical imaging experience beyond the current audio focus.</li>
                <li>Strategic advisor role adds product and innovation perspective in UAV systems.</li>
                <li>Earlier API and integration work adds enterprise delivery credibility.</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </SectionReveal>
  );
}

