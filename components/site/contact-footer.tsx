import { Download, Github, Linkedin, Mail } from "lucide-react";
import { SectionReveal } from "@/components/site/section-reveal";
import { CopyEmailButton } from "@/components/site/copy-email-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function ContactFooter() {
  return (
    <SectionReveal delay={0.18}>
      <section id="contact" className="anchor-offset section-shell p-6 sm:p-8 lg:p-10">
        <Card className="overflow-hidden">
          <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(18,24,37,0.95),rgba(32,38,54,0.92))] p-6 text-white sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl space-y-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/55">Contact</p>
                <h2 className="display-font text-4xl leading-[0.98] tracking-[-0.05em] text-balance sm:text-5xl">
                  Building AI that survives contact with real users, real devices, and real operating constraints.
                </h2>
                <p className="max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
                  {cvData.profile.availability}
                </p>
              </div>

              <div className="grid gap-3">
                <Button asChild>
                  <a href={`mailto:${cvData.profile.email}`}>
                    <Mail className="h-4 w-4" />
                    {cvData.profile.email}
                  </a>
                </Button>
                <CopyEmailButton email={cvData.profile.email} />
                <Button asChild variant="secondary">
                  <a href={cvData.profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href={cvData.profile.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="/cv/Budha_CV_LinkedIn.pdf" target="_blank" rel="noreferrer">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
              <p>{cvData.profile.fullName}</p>
              <p>Munich, Bavaria, Germany</p>
              <p>Applied AI · Edge AI · Healthcare AI</p>
            </div>
          </div>
        </Card>
      </section>
    </SectionReveal>
  );
}

