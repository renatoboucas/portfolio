import Link from "next/link";
import { ArrowRight, Bot, Database, MessagesSquare, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AIWorkflowVisual } from "@/components/visuals/AIWorkflowVisual";

const points = [
  {
    icon: MessagesSquare,
    text: "Answers questions about public portfolio content.",
  },
  {
    icon: Database,
    text: "Retrieves curated knowledge before generating responses.",
  },
  {
    icon: ShieldCheck,
    text: "Uses guardrails to avoid unsupported private claims.",
  },
];

export function AIAssistantSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">Live AI/RAG demo</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            This portfolio includes a working AI assistant
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Instead of only describing AI and RAG work, I built a small portfolio assistant that
            answers questions using curated knowledge about my projects, skills, services, and
            technical positioning.
          </p>
          <div className="mt-6 grid gap-3">
            {points.map((point) => (
              <div className="flex gap-3 text-sm leading-6 text-slate-200" key={point.text}>
                <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-white text-slate-950 hover:bg-slate-100" size="lg">
              <Link href="/ask">
                Ask My AI Portfolio Assistant
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="border-white/70 text-white hover:bg-white/10" size="lg" variant="outline">
              <Link href="/projects/ai-portfolio-assistant-lightweight-rag">View the case study</Link>
            </Button>
          </div>
        </div>

        <Card className="border-white/10 bg-white/10 shadow-2xl backdrop-blur">
          <CardContent className="p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-cyan-100">
              <Bot className="h-5 w-5" />
              Renato&apos;s AI Portfolio Assistant
            </div>
            <AIWorkflowVisual />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

