import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/projects",
    "/services",
    "/insights",
    "/about",
    "/ask",
    "/contact",
  ];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const insightRoutes = insights.map((insight) => `/insights/${insight.slug}`);
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...insightRoutes].map((route) => {
    const isDetailRoute =
      route.startsWith("/projects/") ||
      route.startsWith("/services/") ||
      route.startsWith("/insights/");

    return {
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : isDetailRoute ? "monthly" : "weekly",
      priority: route === "/" ? 1 : isDetailRoute ? 0.75 : 0.9,
    };
  });
}
