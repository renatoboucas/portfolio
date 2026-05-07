import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Renato Boucas",
  description:
    "Technical case studies focused on AI implementation, LLM/RAG architecture, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, marketing automation, and customer data systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Projects</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Selected Work and Technical Case Studies
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A collection of projects focused on AI implementation, LLM/RAG architecture,
            data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation,
            marketing automation, and customer data systems.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            These are not only things built. They show architecture thinking, problem-solving,
            integration strategy, implementation planning, and business impact across practical systems.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectFilter projects={projects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
