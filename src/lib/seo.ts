import type { Insight } from "@/data/insights";
import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

const knowsAbout = [
  "AI implementation",
  "AI architecture",
  "LLM applications",
  "Retrieval-augmented generation",
  "RAG architecture",
  "Data engineering",
  "Salesforce Marketing Cloud",
  "Salesforce Data Cloud",
  "CRM activation",
  "CDP activation",
  "Marketing automation",
  "OpenAI",
  "Anthropic Claude",
  "Google Gemini",
  "Agentforce",
  "Technical leadership",
  "Solution architecture",
];

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.author,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.profileImage),
    email: `mailto:${siteConfig.email}`,
    jobTitle: "AI Architect",
    description: siteConfig.description,
    sameAs: siteConfig.sameAs,
    knowsAbout,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Centro Universitario UNA",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "UNIDERP",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@id": absoluteUrl("/#person"),
    },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#professional-service"),
    name: `${siteConfig.name} - AI Architecture, Data Engineering, and Salesforce Consulting`,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    founder: {
      "@id": absoluteUrl("/#person"),
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "AI Architecture",
      "LLM/RAG Strategy",
      "Data Engineering",
      "Salesforce Marketing Cloud Architecture",
      "Salesforce Data Cloud Readiness",
      "CRM/CDP Activation",
      "Marketing Automation Architecture",
    ],
    knowsAbout,
    sameAs: siteConfig.sameAs,
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": absoluteUrl(`/projects/${project.slug}#case-study`),
    name: project.title,
    headline: project.title,
    description: project.longSummary ?? project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(siteConfig.ogImage),
    author: {
      "@id": absoluteUrl("/#person"),
    },
    creator: {
      "@id": absoluteUrl("/#person"),
    },
    about: [...project.focusAreas, ...project.tools].slice(0, 12),
    keywords: [...project.focusAreas, ...project.tools].join(", "),
    inLanguage: "en-US",
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@id": absoluteUrl("/#professional-service"),
    },
    serviceType: service.category,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    audience: service.bestFor.map((item) => ({
      "@type": "Audience",
      audienceType: item,
    })),
  };
}

export function articleJsonLd(insight: Insight) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/insights/${insight.slug}#article`),
    headline: insight.title,
    description: insight.description,
    url: absoluteUrl(`/insights/${insight.slug}`),
    image: absoluteUrl(siteConfig.ogImage),
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt ?? insight.publishedAt,
    author: {
      "@id": absoluteUrl("/#person"),
    },
    publisher: {
      "@id": absoluteUrl("/#person"),
    },
    keywords: insight.tags.join(", "),
    articleSection: insight.category,
    inLanguage: "en-US",
  };
}
