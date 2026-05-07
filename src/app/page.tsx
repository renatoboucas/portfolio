import type { Metadata } from "next";

import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { CTASection } from "@/components/sections/CTASection";
import { AIAssistantSection } from "@/components/sections/AIAssistantSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { Hero } from "@/components/sections/Hero";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { TechStack } from "@/components/sections/TechStack";
import { WhatIDo } from "@/components/sections/WhatIDo";

export const metadata: Metadata = {
  title: "Renato Boucas | AI, Data Engineering & Salesforce Architecture",
  description:
    "AI implementation, LLM/RAG, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and marketing automation architecture portfolio.",
  keywords: [
    "AI implementation consultant",
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
      <CredibilityStrip />
      <WhatIDo />
      <AIAssistantSection />
      <FeaturedProjects />
      <FeaturedInsights />
      <PositioningSection />
      <TechStack />
      <CTASection />
    </>
  );
}
