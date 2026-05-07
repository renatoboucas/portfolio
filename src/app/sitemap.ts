import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/projects", "/services", "/insights", "/about", "/ask", "/contact"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const insightRoutes = insights.map((insight) => `/insights/${insight.slug}`);

  return [...staticRoutes, ...projectRoutes, ...insightRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "monthly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/projects/") || route.startsWith("/insights/") ? 0.7 : 0.8,
  }));
}
