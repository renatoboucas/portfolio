export const siteConfig = {
  name: "Renato Boucas",
  title: "Renato Boucas | AI & Salesforce Architect, Data Engineering Manager",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://renatoboucas.com",
  description:
    "Portfolio of Renato Boucas, an AI & Salesforce Architect and Data Engineering Manager focused on LLM/RAG systems, Salesforce Marketing Cloud, Data Cloud/CDP, enterprise integrations, customer data activation, and marketing automation architecture.",
  author: "Renato Boucas",
  email: "renatoboucas@gmail.com",
  ogImage: "/og-image.png",
  profileImage: "/images/renato-profile.png",
  sameAs: ["https://www.linkedin.com/in/renatoboucas"],
  professionalTitle: "AI & Salesforce Architect | Data Engineering Manager | 3x Salesforce Certified",
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
