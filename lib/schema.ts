import { cvData } from "@/content/cv";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: cvData.profile.fullName,
    jobTitle: "Senior AI Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Munich",
      addressRegion: "Bavaria",
      addressCountry: "Germany",
    },
    email: cvData.profile.email,
    sameAs: [cvData.profile.linkedin, cvData.profile.github],
    alumniOf: cvData.education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution,
    })),
    knowsAbout: [
      "Applied AI",
      "Edge AI",
      "Audio processing",
      "Healthcare AI",
      "Computer vision",
      "Medical imaging",
      "Machine learning",
    ],
  };
}

