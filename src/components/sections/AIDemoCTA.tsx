import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AIDemoCTA() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-[linear-gradient(135deg,_#f8fafc_0%,_#eef8fb_100%)] p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase text-cyan-700">
                <Bot className="h-5 w-5" />
                AI implementation in action
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
                See the portfolio assistant use trusted context and guardrails
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                This portfolio includes a small AI assistant that uses curated knowledge about my
                work to answer questions. It demonstrates the same principles I use in AI projects:
                trusted context, retrieval, clear boundaries, and practical workflow design.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/ask">
                Ask the Portfolio Assistant
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

