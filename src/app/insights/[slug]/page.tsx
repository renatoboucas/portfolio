import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { getInsightBySlug, insights } from "@/data/insights";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
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
      title: "Insight Not Found",
    };
  }

  return {
    title: insight.title,
    description: insight.description,
    alternates: {
      canonical: absoluteUrl(`/insights/${insight.slug}`),
    },
    openGraph: {
      title: insight.title,
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
      title: insight.title,
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

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(insight),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Insights", href: "/insights" },
            { name: insight.title, href: `/insights/${insight.slug}` },
          ]),
        ]}
      />
      <ArticleLayout insight={insight} />
    </>
  );
}
