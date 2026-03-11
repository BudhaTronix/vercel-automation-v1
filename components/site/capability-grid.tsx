import { SectionHeader } from "@/components/site/section-header";
import { SectionReveal } from "@/components/site/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function CapabilityGrid() {
  return (
    <SectionReveal delay={0.1}>
      <section id="capabilities" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Capability Blocks"
          title="Capability framing built for recruiters, founders, and product leaders who need to understand commercial relevance quickly."
          description="These blocks group the CV into themes that map well to senior applied AI hiring: what he worked on, what systems were involved, and why that matters outside research-only settings."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {cvData.capabilities.map((capability) => (
            <Card key={capability.title}>
              <div className="rounded-[1.5rem] p-6">
                <h3 className="display-font text-2xl tracking-[-0.03em] text-[color:var(--foreground)]">{capability.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted-strong)]">{capability.description}</p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{capability.recruiterValue}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {capability.evidenceRefs.map((item) => (
                    <Badge key={`${capability.title}-${item}`}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}

