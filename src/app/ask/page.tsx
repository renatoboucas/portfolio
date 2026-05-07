import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <section className="border-b bg-[radial-gradient(circle_at_18%_18%,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#e9f7fb_100%)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Interactive AI demo</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Ask Renato&apos;s AI Portfolio Assistant
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore Renato&apos;s background, projects, services, and technical focus through a
            small AI assistant powered by curated portfolio content and lightweight retrieval.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View case studies</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/contact">
                Contact Renato
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <PortfolioAssistant />
        </div>
      </section>
    </>
  );
}

