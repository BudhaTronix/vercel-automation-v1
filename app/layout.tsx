import type { Metadata } from "next";
import "./globals.css";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
