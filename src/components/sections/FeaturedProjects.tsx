import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Case studies that show architecture in practice.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            A focused preview of work across AI assistants, RAG architecture, and CRM/CDP activation.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
