import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { RelatedInsights } from "@/components/insights/RelatedInsights";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Insight } from "@/data/insights";

type ArticleLayoutProps = {
  insight: Insight;
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ArticleLayout({ insight }: ArticleLayoutProps) {
  return (
    <>
      <article>
        <header className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Button asChild className="mb-8" variant="ghost">
              <Link href="/insights">
                <ArrowLeft className="h-4 w-4" />
                Back to insights
              </Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Badge>{insight.category}</Badge>
              {insight.featured && <Badge variant="secondary">Featured</Badge>}
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              {insight.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{insight.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-500">
              <span>{insight.author}</span>
              <span>{formatDate(insight.publishedAt)}</span>
              {insight.updatedAt && <span>Updated {formatDate(insight.updatedAt)}</span>}
              <span>{insight.readingTime}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xl leading-9 text-slate-700">{insight.content.intro}</p>
            <div className="mt-12 space-y-12">
              {insight.content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold tracking-normal text-slate-950">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.body.map((paragraph) => (
                      <p className="text-base leading-8 text-slate-600" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-6 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <li className="flex gap-3 text-sm leading-6 text-slate-700" key={bullet}>
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
            <div className="mt-12 rounded-lg border bg-slate-50 p-6">
              <h2 className="text-2xl font-bold tracking-normal text-slate-950">Conclusion</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{insight.content.conclusion}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-cyan-300">Next step</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal">
                Want help turning AI, data, or Salesforce ideas into practical systems?
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-white text-slate-950 hover:bg-slate-100" size="lg">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild className="border-white/70 text-white hover:bg-white/10" size="lg" variant="outline">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
      <RelatedInsights currentInsight={insight} />
    </>
  );
}
