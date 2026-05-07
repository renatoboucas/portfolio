import type { Metadata } from "next";

import { AIAssistantSection } from "@/components/sections/AIAssistantSection";
import { CertificationsStrip } from "@/components/sections/CertificationsStrip";
import { CoreExpertise } from "@/components/sections/CoreExpertise";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Renato Boucas | AI Architect",
  description:
    "AI Architect portfolio focused on LLM/RAG systems, data engineering, Salesforce architecture, CRM/CDP activation, and practical business automation.",
  keywords: [
    "AI implementation consultant",
    "AI Architect",
    "LLM consultant",
    "RAG architecture",
    "data engineering consultant",
    "Salesforce Marketing Cloud architect",
    "Salesforce Data Cloud",
    "CRM activation",
    "CDP activation",
    "marketing automation architecture",
    "OpenAI consultant",
    "Anthropic Claude consultant",
    "Google Gemini consultant",
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <CertificationsStrip />
      <FeaturedProjects />
      <CoreExpertise />
      <AIAssistantSection />
      <FeaturedInsights />
      <CTASection />
    </>
  );
}
