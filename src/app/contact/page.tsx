import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactOptions } from "@/components/sections/ContactOptions";
import { CTASection } from "@/components/sections/CTASection";
import { ReasonsToReachOut } from "@/components/sections/ReasonsToReachOut";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { SchedulingSection } from "@/components/sections/SchedulingSection";
import { SocialLinks } from "@/components/sections/SocialLinks";

export const metadata: Metadata = {
  title: "Contact | Renato Boucas",
  description:
    "Contact Renato Boucas for AI implementation, LLM/RAG strategy, data engineering, Salesforce Marketing Cloud architecture, Data Cloud readiness, CRM/CDP activation, marketing automation, consulting, or professional opportunities.",
  keywords: [
    "contact Renato Boucas",
    "AI implementation consultant",
    "LLM consultant",
    "RAG consultant",
    "data engineering consultant",
    "Salesforce Marketing Cloud architect",
    "Salesforce Data Cloud consultant",
    "CRM/CDP activation",
    "marketing automation consultant",
    "technical advisory",
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <ResumeSection />
      <SocialLinks />
      <ReasonsToReachOut />
      <SchedulingSection />
      <CTASection />
    </>
  );
}
