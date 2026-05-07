import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
      <CardHeader>
        <div className="mb-3 flex flex-wrap gap-2">
          {project.featured && <Badge>Featured</Badge>}
          <Badge variant="secondary">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-600">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.focusAreas.map((area) => (
            <Badge key={area} variant="outline">
              {area}
            </Badge>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span className="text-xs font-medium text-slate-500" key={tool}>
              {tool}
            </span>
          ))}
        </div>
        <Button asChild className="mt-6" variant="outline">
          <Link href={`/projects/${project.slug}`}>
            View case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
