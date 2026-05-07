import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

import { Button } from "@/components/ui/button";

const points = [
  "Answers questions about my public work and services",
  "Demonstrates LLM/RAG implementation principles",
  "Uses guardrails to avoid unsupported claims",
];

export function AIAssistantSection() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.55fr_1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">AI assistant</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            Ask the AI Portfolio Assistant
          </h2>
        </div>
        <div>
          <p className="max-w-3xl text-base leading-7 text-slate-300">
            Explore my work through a small AI assistant built with curated portfolio knowledge
            and lightweight retrieval.
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-200 md:grid-cols-3">
            {points.map((point) => (
              <li className="border-t border-white/15 pt-3" key={point}>
                {point}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-7 bg-white text-slate-950 hover:bg-slate-100" size="lg">
            <Link href="/ask">
              <Bot className="h-4 w-4" />
              Ask AI Assistant
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
