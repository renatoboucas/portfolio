import Link from "next/link";
import { ArrowRight, Database, Network, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const proofPoints = [
  {
    icon: Sparkles,
    title: "AI implementation",
    text: "LLM workflows, agentic process design, and practical automation patterns.",
  },
  {
    icon: Network,
    title: "RAG architecture",
    text: "Retrieval-backed knowledge systems with ingestion, ranking, and evaluation.",
  },
  {
    icon: Database,
    title: "CRM/CDP data",
    text: "Data engineering foundations for Salesforce, activation, and reporting.",
  },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_34%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_52%,_#eef6fb_100%)]">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <Badge className="mb-5 bg-cyan-50 text-cyan-800 hover:bg-cyan-50" variant="secondary">
            AI + Data Engineering + Salesforce Architecture
          </Badge>
          <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Senior technical portfolio for practical AI, CRM, and data architecture.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Renato Boucas helps translate LLM, RAG, data engineering, and Salesforce
            platform strategy into systems that improve operations, activation, and decision making.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                View project foundation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {proofPoints.map((item) => (
            <Card className="border-slate-200/80 bg-white/90 backdrop-blur" key={item.title}>
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-slate-950 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
