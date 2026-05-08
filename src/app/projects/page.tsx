import type { Metadata } from "next";

import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Technical case studies focused on AI implementation, LLM/RAG architecture, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, marketing automation, and customer data systems.",
  alternates: {
    canonical: absoluteUrl("/projects"),
  },
  openGraph: {
    title: "Projects",
    description:
      "Technical case studies focused on AI implementation, LLM/RAG architecture, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, marketing automation, and customer data systems.",
    url: absoluteUrl("/projects"),
    siteName: siteConfig.name,
    images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects",
    description:
      "Technical case studies focused on AI implementation, LLM/RAG architecture, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, marketing automation, and customer data systems.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Projects</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Projects and technical case studies
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Case studies focused on AI architecture, data engineering, Salesforce systems,
            CRM/CDP activation, and marketing technology execution.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectFilter projects={projects} />
        </div>
      </section>
    </>
  );
}
