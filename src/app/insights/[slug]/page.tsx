import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { getInsightBySlug, insights } from "@/data/insights";
import { absoluteUrl, siteConfig } from "@/lib/site";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight Not Found | Renato Boucas",
    };
  }

  return {
    title: `${insight.title} | Renato Boucas`,
    description: insight.description,
    alternates: {
      canonical: absoluteUrl(`/insights/${insight.slug}`),
    },
    openGraph: {
      title: `${insight.title} | Renato Boucas`,
      description: insight.description,
      url: absoluteUrl(`/insights/${insight.slug}`),
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${insight.title} - Renato Boucas`,
        },
      ],
      type: "article",
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt ?? insight.publishedAt,
      authors: [insight.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${insight.title} | Renato Boucas`,
      description: insight.description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return <ArticleLayout insight={insight} />;
}
