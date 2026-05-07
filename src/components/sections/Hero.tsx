import Link from "next/link";
import { ArrowRight, BrainCircuit, DatabaseZap, Network } from "lucide-react";

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
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <Badge className="mb-5 bg-cyan-50 text-cyan-800 hover:bg-cyan-50" variant="secondary">
            AI Implementation • LLM/RAG • Data Engineering • Salesforce Architecture
          </Badge>
          <h1 className="max-w-5xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            AI, Data Engineering, and Salesforce Architecture for Smarter Customer Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I design and implement AI-enabled business systems that connect data, automate workflows,
            and help teams turn Salesforce, marketing platforms, and customer data into practical outcomes.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            My work sits at the intersection of LLM applications, RAG architecture, data integration,
            Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and marketing automation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="border-slate-200/80 bg-white/90 shadow-lg backdrop-blur">
            <CardContent className="p-6">
              <p className="text-sm font-semibold uppercase text-cyan-700">Positioning</p>
              <p className="mt-3 text-2xl font-bold leading-tight text-slate-950">
                Practical AI work grounded in real data, CRM workflows, and platform execution.
              </p>
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
