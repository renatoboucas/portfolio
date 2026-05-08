import type { Metadata } from "next";

import { AboutHero } from "@/components/sections/AboutHero";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { PersonalNote } from "@/components/sections/PersonalNote";
import { ProfessionalStory } from "@/components/sections/ProfessionalStory";
import { TechStack } from "@/components/sections/TechStack";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Renato Boucas, an AI Architect and data/Salesforce architecture professional focused on LLM/RAG, CRM/CDP activation, and marketing technology systems.",
  keywords: [
    "Renato Boucas",
    "AI implementation architect",
    "LLM consultant",
    "RAG architecture",
    "data engineering",
    "Salesforce Marketing Cloud architect",
    "Salesforce Data Cloud",
    "CRM/CDP activation",
    "marketing automation",
    "technical leadership",
    "solution architecture",
  ],
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "About",
    description:
      "Learn about Renato Boucas, an AI Architect and data/Salesforce architecture professional focused on LLM/RAG, CRM/CDP activation, and marketing technology systems.",
    url: absoluteUrl("/about"),
    siteName: siteConfig.name,
    images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630 }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Learn about Renato Boucas, an AI Architect and data/Salesforce architecture professional focused on LLM/RAG, CRM/CDP activation, and marketing technology systems.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProfessionalStory />
      <WhatIBring />
      <ExperienceHighlights />
      <CertificationsSection />
      <TechStack />
      <PersonalNote />
      <CTASection />
    </>
  );
}
