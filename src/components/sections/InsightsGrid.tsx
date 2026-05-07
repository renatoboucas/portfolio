import { InsightCard } from "@/components/cards/InsightCard";
import { getSortedInsights } from "@/data/insights";

export function InsightsGrid() {
  const insights = getSortedInsights();
  const categories = Array.from(new Set(insights.map((insight) => insight.category)));

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">All insights</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Articles grouped around practical implementation themes.
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700" key={category}>
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard insight={insight} key={insight.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
