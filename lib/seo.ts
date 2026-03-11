import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const title = "Budhaditya Mukhopadhyay | Senior AI Engineer in Munich";
const description =
  "Senior AI Engineer in Munich focused on applied AI, edge AI, healthcare AI, computer vision, and audio AI with production deployment credibility.";

export const siteMetadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title,
  description,
  keywords: [
    "Senior AI Engineer",
    "Munich",
    "Applied AI",
    "Edge AI",
    "Healthcare AI",
    "Computer Vision",
    "Audio AI",
    "Machine Learning Engineer",
  ],
  openGraph: {
    title,
    description,
    siteName: "Budhaditya Mukhopadhyay Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

