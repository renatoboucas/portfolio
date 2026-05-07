import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | Renato Boucas",
  description:
    "AI implementation, LLM/RAG strategy, data engineering, Salesforce Marketing Cloud architecture, Data Cloud readiness, CRM/CDP activation, and marketing automation consulting services.",
  keywords: [
    "AI implementation consultant",
    "LLM consultant",
    "RAG strategy",
    "AI workflow automation",
    "OpenAI consultant",
    "Anthropic Claude consultant",
    "Google Gemini consultant",
    "data engineering consultant",
    "Salesforce Marketing Cloud consultant",
    "Salesforce Data Cloud consultant",
    "CRM activation",
    "CDP activation",
    "marketing automation consultant",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Services</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Services for AI, Data, and Salesforce Execution
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I help teams turn AI ideas, customer data, and Salesforce ecosystems into practical systems
            that support marketing, operations, customer experience, and business decision-making.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            The work spans broader AI implementation, LLM/RAG design, data engineering, Salesforce
            Marketing Cloud, Data Cloud, CRM/CDP activation, consent architecture, and marketing automation.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <CTASection />
    </>
  );
}
