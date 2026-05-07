import { InsightCard } from "@/components/cards/InsightCard";
import type { Insight } from "@/data/insights";
import { insights } from "@/data/insights";

type RelatedInsightsProps = {
  currentInsight: Insight;
};

function scoreInsight(insight: Insight, currentInsight: Insight) {
  const sameCategory = insight.category === currentInsight.category ? 3 : 0;
  const overlappingTags = insight.tags.filter((tag) => currentInsight.tags.includes(tag)).length;

  return sameCategory + overlappingTags;
}

export function RelatedInsights({ currentInsight }: RelatedInsightsProps) {
  const related = insights
    .filter((insight) => insight.slug !== currentInsight.slug)
    .map((insight) => ({ insight, score: scoreInsight(insight, currentInsight) }))
    .sort((a, b) => b.score - a.score)
    .filter((entry) => entry.score > 0)
    .map((entry) => entry.insight);

  const fallback = insights.filter((insight) => insight.slug !== currentInsight.slug && insight.featured);
  const displayed = (related.length > 0 ? related : fallback).slice(0, 3);

  if (displayed.length === 0) {
    return null;
  }

  return (
    <section className="border-t bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Related insights</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
            More practical notes on similar implementation questions.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {displayed.map((insight) => (
            <InsightCard insight={insight} key={insight.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
