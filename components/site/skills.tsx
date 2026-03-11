import { SectionHeader } from "@/components/site/section-header";
import { SectionReveal } from "@/components/site/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function Skills() {
  return (
    <SectionReveal delay={0.14}>
      <section id="skills" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Skills"
          title="Selective skill grouping based on explicit CV evidence rather than a generic keyword wall."
          description="The grouping is intentionally curated: enough detail for recruiters and hiring managers to scan quickly, without pretending every tool is equally central to the profile."
        />
        <div className="mt-8 grid gap-4 xl:grid-cols-2">
          {cvData.skillGroups.map((group) => (
            <Card key={group.title}>
              <div className="rounded-[1.5rem] p-6">
                <h3 className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={`${group.title}-${item}`} className="bg-[rgba(255,255,255,0.8)] text-[color:var(--muted-strong)]">
                      {item}
                    </Badge>
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

