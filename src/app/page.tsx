import type { Metadata } from "next";

import { AIAssistantSection } from "@/components/sections/AIAssistantSection";
import { CoreExpertise } from "@/components/sections/CoreExpertise";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { Hero } from "@/components/sections/Hero";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Renato Boucas | AI Architect, Data Engineering & Salesforce Architecture",
  },
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
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Renato Boucas | AI Architect, Data Engineering & Salesforce Architecture",
    description:
      "AI Architect portfolio focused on LLM/RAG systems, data engineering, Salesforce architecture, CRM/CDP activation, and practical business automation.",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Renato Boucas - AI Architect portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renato Boucas | AI Architect",
    description:
      "AI Architect portfolio focused on LLM/RAG systems, data engineering, Salesforce architecture, CRM/CDP activation, and practical business automation.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CoreExpertise />
      <AIAssistantSection />
      <FeaturedInsights />
      <CTASection />
    </>
  );
}
