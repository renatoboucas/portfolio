export const siteConfig = {
  name: "Renato Boucas",
  title: "Renato Boucas | AI Architect, Data Engineering & Salesforce Architecture",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  description:
    "Portfolio of Renato Boucas, an AI Architect focused on LLM/RAG systems, data engineering, Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and marketing automation architecture.",
  author: "Renato Boucas",
  ogImage: "/og-image.png",
  profileImage: "/images/renato-profile.jpg",
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Ask AI", href: "#ask-ai" },
    { label: "Contact", href: "/contact" },
  ],
  keywords: [
    "Renato Boucas",
    "AI Architect",
    "AI implementation consultant",
    "LLM consultant",
    "RAG architecture",
    "data engineering consultant",
    "Salesforce Marketing Cloud architect",
    "Salesforce Data Cloud",
    "CRM activation",
    "CDP activation",
    "marketing automation architecture",
    "OpenAI consultant",
    "Anthropic Claude consultant",
    "Google Gemini consultant",
    "Salesforce consultant",
    "marketing technology consultant",
    "solution architect",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
