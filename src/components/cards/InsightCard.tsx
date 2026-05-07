import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Insight } from "@/data/insights";

type InsightCardProps = {
  insight: Insight;
};

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <Card className="h-full border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
      <CardHeader>
        <div className="mb-3 flex flex-wrap gap-2">
          {insight.featured && <Badge>Featured</Badge>}
          <Badge variant="secondary">{insight.category}</Badge>
        </div>
        <CardTitle className="text-xl leading-tight">{insight.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-600">{insight.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {insight.tags.slice(0, 5).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
          <span>{new Date(`${insight.publishedAt}T00:00:00`).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}</span>
          <span>{insight.readingTime}</span>
        </div>
        <Button asChild className="mt-6" variant="outline">
          <Link href={`/insights/${insight.slug}`}>
            Read article
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
