import { BriefcaseBusiness, Building2, Cpu, Languages, MapPin, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { SectionReveal } from "@/components/site/section-reveal";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

const snapshotCards = [
  {
    icon: MapPin,
    title: "Location",
    body: cvData.profile.location,
  },
  {
    icon: BriefcaseBusiness,
    title: "Current role",
    body: cvData.recruiterSnapshot.currentFocus,
  },
  {
    icon: Cpu,
    title: "Key domains",
    body: cvData.recruiterSnapshot.domains.join(" · "),
  },
  {
    icon: Building2,
    title: "Industries",
    body: cvData.recruiterSnapshot.industries.join(" · "),
  },
  {
    icon: Languages,
    title: "Languages",
    body: cvData.languages.map((item) => `${item.name} (${item.proficiency})`).join(" · "),
  },
  {
    icon: ShieldCheck,
    title: "Recruiter fit",
    body: cvData.recruiterSnapshot.quickFit,
  },
];

export function RecruiterSnapshot() {
  return (
    <SectionReveal delay={0.04}>
      <section id="snapshot" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Recruiter Snapshot"
          title="A one-minute read for hiring teams evaluating applied AI delivery, not AI hype."
          description="The snapshot pulls out the themes most likely to matter in Germany and Europe: production readiness, healthcare relevance, edge deployment, multimodal ML depth, and evidence of shipping across real operating environments."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {snapshotCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full">
                <div className="rounded-[1.5rem] p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted-strong)]">{item.body}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </SectionReveal>
  );
}

