import Script from "next/script";
import { About } from "@/components/site/about";
import { CapabilityGrid } from "@/components/site/capability-grid";
import { ContactFooter } from "@/components/site/contact-footer";
import { EducationCertifications } from "@/components/site/education-certifications";
import { ExperienceTimeline } from "@/components/site/experience-timeline";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Publications } from "@/components/site/publications";
import { RecruiterSnapshot } from "@/components/site/recruiter-snapshot";
import { Skills } from "@/components/site/skills";
import { getPersonSchema } from "@/lib/schema";

export default function Home() {
  const personSchema = getPersonSchema();

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="relative min-h-screen overflow-x-clip">
        <Navbar />
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <Hero />
          <RecruiterSnapshot />
          <About />
          <ExperienceTimeline />
          <CapabilityGrid />
          <Publications />
          <Skills />
          <EducationCertifications />
          <ContactFooter />
        </main>
      </div>
    </>
  );
}

