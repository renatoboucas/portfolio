import type { Metadata } from "next";
import Link from "next/link";

import { PortfolioAssistant } from "@/components/ai/PortfolioAssistant";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ask AI | Renato Boucas",
  description:
    "Ask Renato's AI Portfolio Assistant about his AI implementation, LLM/RAG, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and technical architecture work.",
};

export default function AskPage() {
  return (
    <>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">AI portfolio assistant</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Ask Renato&apos;s AI Portfolio Assistant
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore Renato&apos;s background, projects, services, and technical focus through a small
            assistant grounded in curated portfolio content.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <PortfolioAssistant />
        </div>
      </section>
    </>
  );
}
