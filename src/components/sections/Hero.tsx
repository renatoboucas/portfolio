import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, DatabaseZap, Network } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  {
    icon: BrainCircuit,
    label: "LLM applications",
  },
  {
    icon: Network,
    label: "RAG architecture",
  },
  {
    icon: DatabaseZap,
    label: "CRM/CDP activation",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-[radial-gradient(circle_at_18%_18%,_rgba(14,165,233,0.16),_transparent_30%),radial-gradient(circle_at_85%_10%,_rgba(20,184,166,0.12),_transparent_28%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_54%,_#eef6fb_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <Badge className="mb-5 bg-cyan-50 text-cyan-800 hover:bg-cyan-50" variant="secondary">
            AI Implementation • LLM/RAG • Data Engineering • Salesforce Architecture
          </Badge>
          <h1 className="max-w-5xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            AI, Data Engineering, and Salesforce Architecture for Practical Business Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I help teams connect LLMs, trusted data, Salesforce ecosystems, and marketing technology
            into workflows that are useful, maintainable, and built for real business execution.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            My work sits at the intersection of LLM applications, RAG architecture, data integration,
            Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and marketing automation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                View Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/ask">
                Ask My AI Portfolio Assistant
                <Bot className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "LLM / RAG",
              "OpenAI / Anthropic / Gemini",
              "Salesforce Marketing Cloud",
              "Data Cloud / CRM/CDP",
              "Data Engineering",
              "AI Workflow Automation",
            ].map((badge) => (
              <Badge className="bg-white/80" key={badge} variant="outline">
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="overflow-hidden border-slate-200/80 bg-white/95 shadow-xl backdrop-blur">
            <CardContent className="p-6">
              <p className="text-sm font-semibold uppercase text-cyan-700">Operating model</p>
              <p className="mt-3 text-2xl font-bold leading-tight text-slate-950">
                Practical AI implementation built on context, data, and platform execution.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  ["01", "Trusted context", "Knowledge sources, policies, docs, CRM and campaign data."],
                  ["02", "System design", "Retrieval, integrations, guardrails, and workflow boundaries."],
                  ["03", "Execution", "Salesforce, data pipelines, automations, reporting, and adoption."],
                ].map(([step, title, text]) => (
                  <div className="rounded-lg border bg-slate-50 p-4" key={step}>
                    <div className="flex gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-slate-950 text-xs font-bold text-white">
                        {step}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-950">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t pt-5">
                {[
                  ["AI", "LLM/RAG"],
                  ["Data", "CRM/CDP"],
                  ["SFMC", "MarTech"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {focusAreas.map((area) => (
              <Card className="border-slate-200 bg-white/90" key={area.label}>
                <CardContent className="flex items-center gap-3 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-slate-950 text-white">
                    <area.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{area.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
