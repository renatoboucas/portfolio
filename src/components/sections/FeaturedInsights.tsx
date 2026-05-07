import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { InsightCard } from "@/components/cards/InsightCard";
import { Button } from "@/components/ui/button";
import { getSortedInsights } from "@/data/insights";

export function FeaturedInsights() {
  const featuredInsights = getSortedInsights()
    .filter((insight) => insight.featured)
    .slice(0, 3);

  if (featuredInsights.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Latest insights</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Practical Notes on AI, Data, and Salesforce
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Short articles and implementation notes on making AI, data engineering, and Salesforce
              architecture useful in real business workflows.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/insights">
              View All Insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredInsights.map((insight) => (
            <InsightCard insight={insight} key={insight.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
