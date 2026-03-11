import { BookOpenText } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { SectionReveal } from "@/components/site/section-reveal";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function Publications() {
  return (
    <SectionReveal delay={0.12}>
      <section id="publications" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Publications"
          title="Research signals that reinforce interpretability, clinical relevance, and technical credibility."
          description="The CV lists two publications. The site keeps them clean and factual instead of inflating them into unsupported project pages."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {cvData.publications.map((publication) => (
            <Card key={publication.title}>
              <div className="rounded-[1.5rem] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                  <BookOpenText className="h-5 w-5" />
                </div>
                <h3 className="mt-5 display-font text-2xl tracking-[-0.03em] text-[color:var(--foreground)]">{publication.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted-strong)]">{publication.note}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}

