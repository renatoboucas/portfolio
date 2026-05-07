import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AIWorkflowVisual } from "@/components/visuals/AIWorkflowVisual";
import { ArchitectureVisual } from "@/components/visuals/ArchitectureVisual";
import { DataPipelineVisual } from "@/components/visuals/DataPipelineVisual";
import { MarTechEcosystemVisual } from "@/components/visuals/MarTechEcosystemVisual";
import type { Project } from "@/data/projects";

type CaseStudyLayoutProps = {
  project: Project;
};

function ListCard({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="border-t pt-5">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li className="text-sm leading-6 text-slate-600" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function NarrativeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t pt-5">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600">{children}</p>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border bg-slate-100">
        <Image
          alt={project.diagramLabel ?? `${project.title} visual`}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 1120px, 100vw"
          src={project.image}
        />
      </div>
    );
  }

  if (project.visualType === "architecture") {
    return <ArchitectureVisual />;
  }

  if (project.visualType === "ai-workflow") {
    return <AIWorkflowVisual />;
  }

  if (project.visualType === "data-pipeline") {
    return <DataPipelineVisual />;
  }

  if (project.visualType === "martech-ecosystem") {
    return <MarTechEcosystemVisual />;
  }

  return null;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  const visual = <ProjectVisual project={project} />;
  const demonstrations = Array.from(new Set([
    ...project.focusAreas.slice(0, 4),
    ...project.tools.slice(0, 2),
  ]));

  return (
    <>
      <article>
        <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_56%,_#e6f7fb_100%)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Button asChild className="mb-8" variant="ghost">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to work
              </Link>
            </Button>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.36fr]">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{project.category}</Badge>
                  {project.featured && <Badge variant="secondary">Featured case study</Badge>}
                </div>
                <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.longSummary ?? project.summary}
                </p>
              </div>
              <aside className="h-fit border-y bg-white/70 py-5">
                <h2 className="text-sm font-semibold uppercase text-cyan-700">Quick facts</h2>
                <dl className="mt-4 grid gap-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-950">Role</dt>
                    <dd className="mt-1 leading-6 text-slate-600">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">Category</dt>
                    <dd className="mt-1 leading-6 text-slate-600">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">Stack</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <Badge key={tool} variant="outline">
                          {tool}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.35fr_1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">What this demonstrates</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {demonstrations.map((item) => (
                <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100" key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {(project.image || (project.visualType && project.visualType !== "none")) && (
          <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 max-w-3xl">
                <p className="text-sm font-semibold uppercase text-cyan-700">
                  {project.diagramLabel ?? "Architecture overview"}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
                  Conceptual visual overview
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  This is a conceptual representation of the architecture or workflow, not a full
                  production diagram.
                </p>
              </div>
              {visual}
            </div>
          </section>
        )}

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <NarrativeCard title="Problem">{project.problem}</NarrativeCard>
            <NarrativeCard title="Approach">{project.solution}</NarrativeCard>
            {project.architecture && (
              <section className="border-t pt-5 lg:col-span-2">
                <h2 className="text-xl font-semibold text-slate-950">Architecture</h2>
                <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600">
                  {project.architecture}
                </p>
              </section>
            )}
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <section className="border-t pt-5">
              <h2 className="text-xl font-semibold text-slate-950">Tools</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge className="bg-white" key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>
            <ListCard title="Outcome" items={project.impact} />
            <ListCard title="Lessons learned" items={project.lessonsLearned} />
          </div>
        </section>
      </article>
      <RelatedProjects currentProject={project} />
    </>
  );
}
