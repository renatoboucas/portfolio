import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-t pt-5">
      <div className="mb-3 flex flex-wrap gap-2">
        <Badge variant="secondary">{project.category}</Badge>
      </div>
      <h3 className="text-xl font-semibold leading-tight text-slate-950">{project.title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-600">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.focusAreas.slice(0, 3).map((area) => (
          <Badge key={area} variant="outline">
            {area}
          </Badge>
        ))}
        {project.tools.slice(0, 3).map((tool) => (
          <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100" key={tool} variant="secondary">
            {tool}
          </Badge>
        ))}
      </div>
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-cyan-700"
        href={`/projects/${project.slug}`}
      >
            View case study
            <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
