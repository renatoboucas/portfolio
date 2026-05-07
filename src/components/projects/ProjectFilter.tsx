"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

const categories = [
  "All",
  "AI Implementation",
  "LLM / RAG",
  "Data Engineering",
  "Salesforce / MarTech",
  "Analytics",
  "Consent / Governance",
];

function matchesCategory(project: Project, category: string) {
  if (category === "All") {
    return true;
  }

  if (category === "LLM / RAG") {
    return project.category.includes("RAG") || project.focusAreas.some((area) => area.includes("RAG"));
  }

  if (category === "Salesforce / MarTech") {
    return project.category.includes("Salesforce") || project.category.includes("MarTech");
  }

  if (category === "Consent / Governance") {
    return project.category.includes("Consent") || project.focusAreas.some((area) => area.includes("Governance"));
  }

  return project.category.includes(category);
}

type ProjectFilterProps = {
  projects: Project[];
};

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesCategory(project, selectedCategory)),
    [projects, selectedCategory],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Project category filters">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border bg-white p-8 text-center">
          <p className="font-semibold text-slate-950">No projects found for this category.</p>
          <p className="mt-2 text-sm text-slate-600">Try another filter to view more case studies.</p>
        </div>
      )}
    </div>
  );
}
