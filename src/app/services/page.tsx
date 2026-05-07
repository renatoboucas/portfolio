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
            Services for AI architecture, data, and Salesforce execution
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I help teams clarify what to build, how the data should move, and how Salesforce,
            marketing platforms, and AI workflows should connect.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <CTASection />
    </>
  );
}
