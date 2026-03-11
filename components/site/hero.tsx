import { Download, Github, Linkedin, Mail } from "lucide-react";
import { AssistantShell } from "@/components/assistant/assistant-shell";
import { SectionReveal } from "@/components/site/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cvData } from "@/content/cv";

export function Hero() {
  return (
    <SectionReveal>
      <section id="top" className="anchor-offset grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
        <Card className="overflow-hidden">
          <div className="relative rounded-[1.6rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(250,244,236,0.65))] p-6 sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(182,122,75,0.18)] blur-3xl" />
            <div className="relative space-y-8">
              <div className="space-y-4">
                <Badge>Munich · Applied AI · Production-ready systems</Badge>
                <div className="space-y-4">
                  <h1 className="display-font max-w-4xl text-4xl leading-[0.95] tracking-[-0.05em] text-balance text-[color:var(--foreground)] sm:text-5xl lg:text-7xl">
                    {cvData.profile.fullName}
                  </h1>
                  <p className="max-w-2xl text-lg font-medium text-[color:var(--muted-strong)] sm:text-xl">
                    {cvData.profile.headline}
                  </p>
                  <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                    {cvData.profile.positioning}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[rgba(255,255,255,0.55)] p-5 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">Current focus</p>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                    Audio-based healthcare ML, edge deployment, and production-grade model delivery.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">Best-fit roles</p>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                    Senior AI Engineer, Applied AI, Edge AI, Healthcare AI, Computer Vision, ML Engineer.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">Why recruiters scan fast</p>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                    Deployed systems, Germany-based experience, research credibility, and prior enterprise integration depth.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`mailto:${cvData.profile.email}`}>
                    <Mail className="h-4 w-4" />
                    Contact
                  </a>
                </Button>
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
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(18,24,37,0.06),rgba(255,255,255,0.84))] p-4 sm:p-6 lg:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">Interactive recruiter view</p>
                <h2 className="display-font mt-2 text-2xl tracking-[-0.03em] text-[color:var(--foreground)] sm:text-3xl">
                  Ask the portfolio like an LLM
                </h2>
              </div>
              <Badge className="bg-[rgba(18,24,37,0.06)]">Grounded to CV</Badge>
            </div>
            <p className="mb-6 max-w-xl text-sm leading-7 text-[color:var(--muted)]">
              The assistant is designed for recruiter questions. It only uses structured resume data, highlights source sections, and makes no claims that are not present in the CV.
            </p>
            <AssistantShell />
          </div>
        </Card>
      </section>
    </SectionReveal>
  );
}

