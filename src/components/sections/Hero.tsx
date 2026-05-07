import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <Badge className="mb-6 border-slate-200 bg-white text-slate-700 hover:bg-white" variant="outline">
            AI Implementation • LLM/RAG • Data Engineering • Salesforce Architecture
          </Badge>
          <h1 className="text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Practical AI, data, and Salesforce architecture for customer systems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I help teams connect LLMs, trusted data, Salesforce ecosystems, and marketing
            technology into workflows that are useful, maintainable, and built for real execution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                View Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 grid gap-6 border-t pt-8 text-sm text-slate-600 sm:grid-cols-3">
          <p>
            <span className="block font-semibold text-slate-950">AI and RAG</span>
            LLM applications, trusted knowledge, assistant workflows, and guardrails.
          </p>
          <p>
            <span className="block font-semibold text-slate-950">Data engineering</span>
            Customer data flows, CRM/CDP activation, segmentation, and reporting foundations.
          </p>
          <p>
            <span className="block font-semibold text-slate-950">Salesforce architecture</span>
            Marketing Cloud, Data Cloud, journeys, consent, and marketing automation.
          </p>
        </div>
      </div>
    </section>
  );
}
