import type { Metadata } from "next";

import { AboutHero } from "@/components/sections/AboutHero";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { PersonalNote } from "@/components/sections/PersonalNote";
import { ProfessionalStory } from "@/components/sections/ProfessionalStory";
import { TechStack } from "@/components/sections/TechStack";

export const metadata: Metadata = {
  title: "About | Renato Boucas",
  description:
    "Learn about Renato Boucas, an AI implementation, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and marketing automation architecture professional.",
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
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProfessionalStory />
      <ExperienceHighlights />
      <TechStack />
      <CertificationsSection />
      <PersonalNote />
      <CTASection />
    </>
  );
}
