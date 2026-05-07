import { ProjectCard } from "@/components/cards/ProjectCard";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

type RelatedProjectsProps = {
  currentProject: Project;
};

function scoreProject(project: Project, currentProject: Project) {
  const sameCategory = project.category === currentProject.category ? 3 : 0;
  const overlappingFocus = project.focusAreas.filter((area) =>
    currentProject.focusAreas.includes(area),
  ).length;

  return sameCategory + overlappingFocus;
}

export function RelatedProjects({ currentProject }: RelatedProjectsProps) {
  const relatedProjects = projects
    .filter((project) => project.slug !== currentProject.slug)
    .map((project) => ({
      project,
      score: scoreProject(project, currentProject),
    }))
    .sort((a, b) => b.score - a.score)
    .filter((entry) => entry.score > 0)
    .map((entry) => entry.project);

  const fallbackProjects = projects.filter(
    (project) => project.slug !== currentProject.slug && project.featured,
  );

  const displayedProjects = (relatedProjects.length > 0 ? relatedProjects : fallbackProjects).slice(0, 3);

  if (displayedProjects.length === 0) {
    return null;
  }

  return (
    <section className="border-t bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Related work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
            More case studies with similar architecture patterns.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
