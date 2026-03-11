import { Download, Github, Linkedin, Mail } from "lucide-react";
import { cvData } from "@/content/cv";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Snapshot", href: "#snapshot" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[rgba(244,239,232,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="min-w-0">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Budhaditya Mukhopadhyay</p>
            <p className="display-font truncate text-lg text-[color:var(--foreground)]">Senior AI Engineer in Munich</p>
          </a>
          <a
            href="/cv/Budha_CV_LinkedIn.pdf"
            className="rounded-full border border-[color:var(--border)] p-2 text-[color:var(--muted-strong)] lg:hidden"
            aria-label="Download CV"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
          <nav className="flex flex-1 flex-wrap gap-1 text-sm text-[color:var(--muted)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="secondary" size="sm">
              <a href={`mailto:${cvData.profile.email}`}>
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href={cvData.profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href={cvData.profile.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

