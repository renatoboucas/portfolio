import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { getProjectBySlug, projects } from "@/data/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Renato Boucas",
    };
  }

  const description = project.longSummary ?? project.summary;

  return {
    title: `${project.title} | Renato Boucas`,
    description,
    alternates: {
      canonical: absoluteUrl(`/projects/${project.slug}`),
    },
    openGraph: {
      title: `${project.title} | Renato Boucas`,
      description,
      url: absoluteUrl(`/projects/${project.slug}`),
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${project.title} - Renato Boucas`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Renato Boucas`,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
