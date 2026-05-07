import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3">
          {items.map((item) => (
            <li className="flex gap-3 text-sm leading-6 text-slate-600" key={item}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function NarrativeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-slate-600">{children}</p>
      </CardContent>
    </Card>
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

  return (
    <>
      <article>
        <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_56%,_#e6f7fb_100%)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Button asChild className="mb-8" variant="ghost">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Button>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr]">
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
              <Card className="h-fit bg-white/90">
                <CardHeader>
                  <CardTitle className="text-lg">Focus areas</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.focusAreas.map((area) => (
                    <Badge key={area} variant="outline">
                      {area}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
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
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <NarrativeCard title="Business context">{project.context}</NarrativeCard>
            <NarrativeCard title="Problem to solve">{project.problem}</NarrativeCard>
            <NarrativeCard title="Renato's role">{project.role}</NarrativeCard>
            <NarrativeCard title="Solution">{project.solution}</NarrativeCard>
            {project.architecture && (
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Architecture and approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="max-w-5xl text-sm leading-7 text-slate-600">
                    {project.architecture}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tools and platforms</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge className="bg-white" key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <ListCard title="Deliverables" items={project.deliverables} />
            <ListCard title="Business impact" items={project.impact} />
            <ListCard title="Challenges" items={project.challenges} />
            <ListCard title="Lessons learned" items={project.lessonsLearned} />
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-cyan-300">Architecture review</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal">
                Want to discuss similar AI, data, or Salesforce architecture work?
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Available for consulting, implementation planning, architecture reviews, and technical advisory.
              </p>
            </div>
            <Button asChild className="bg-white text-slate-950 hover:bg-slate-100" size="lg">
              <Link href="/contact">
                Contact Renato
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </article>
      <RelatedProjects currentProject={project} />
    </>
  );
}
