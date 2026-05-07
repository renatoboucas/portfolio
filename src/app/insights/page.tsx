import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { InsightCard } from "@/components/cards/InsightCard";
import { getSortedInsights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights | Renato Boucas",
  description:
    "Practical articles on AI implementation, LLM/RAG architecture, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and marketing automation.",
};

export default function InsightsPage() {
  const featuredInsights = getSortedInsights()
    .filter((insight) => insight.featured)
    .slice(0, 3);

  return (
    <>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Insights</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Insights on AI, Data, and Salesforce Architecture
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Practical notes, implementation lessons, and architecture thinking around AI, LLM/RAG,
            data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and marketing automation.
          </p>
        </div>
      </section>

      {featuredInsights.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-cyan-700">Featured articles</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
                Start with the articles most connected to practical implementation.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {featuredInsights.map((insight) => (
                <InsightCard insight={insight} key={insight.slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <InsightsGrid />
      <CTASection />
    </>
  );
}
