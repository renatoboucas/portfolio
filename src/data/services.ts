export type Service = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  tools: string[];
  bestFor: string[];
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "ai-implementation-consulting",
    title: "AI Implementation Consulting",
    category: "AI",
    summary:
      "Helping teams move from AI ideas to practical workflows using LLMs, automation, data, and platform integration.",
    description:
      "I help teams identify realistic AI use cases, design implementation roadmaps, evaluate tools, and connect AI capabilities to existing systems such as Salesforce, marketing platforms, data warehouses, and internal documentation.",
    outcomes: [
      "Clear AI use-case prioritization",
      "Practical implementation roadmap",
      "Reduced risk of generic or disconnected AI experiments",
      "Better alignment between AI capabilities and business workflows",
    ],
    deliverables: [
      "AI opportunity assessment",
      "Use-case roadmap",
      "Implementation plan",
      "Tooling recommendation",
      "Pilot architecture",
    ],
    tools: ["OpenAI", "Anthropic Claude", "Google Gemini", "Salesforce", "Data Cloud"],
    bestFor: [
      "Teams exploring AI but unsure where to start",
      "Organizations with scattered AI experiments",
      "Business teams needing practical AI workflow design",
    ],
    featured: true,
  },
  {
    slug: "llm-rag-application-strategy",
    title: "LLM and RAG Application Strategy",
    category: "AI / LLM",
    summary:
      "Designing AI systems that use retrieval-augmented generation to answer questions from trusted business knowledge and operational data.",
    description:
      "I help teams plan RAG systems around knowledge source quality, document ingestion, metadata, retrieval design, prompt strategy, and evaluation so LLM responses are grounded in trusted business context.",
    outcomes: [
      "Better answers from trusted internal knowledge",
      "Reduced hallucination risk through retrieval design",
      "Clearer knowledge architecture before implementation",
      "Support workflows that fit how teams actually work",
    ],
    deliverables: [
      "RAG architecture plan",
      "Knowledge source inventory",
      "Retrieval strategy",
      "Prompt framework",
      "Evaluation checklist",
    ],
    tools: ["OpenAI", "Anthropic Claude", "Google Gemini", "Embeddings", "Vector Search"],
    bestFor: [
      "Teams building internal support assistants",
      "Organizations with scattered documentation",
      "Support teams that need trusted-answer workflows",
    ],
    featured: true,
  },
  {
    slug: "ai-agents-workflow-automation",
    title: "AI Agents and Workflow Automation",
    category: "AI Automation",
    summary:
      "Planning AI-enabled workflows that help teams automate repetitive tasks, support decisions, and connect business processes across tools.",
    description:
      "I design agent and assistant workflows with clear process boundaries, API integration points, human review checkpoints, escalation paths, and practical pilot scopes.",
    outcomes: [
      "Clear agent workflow boundaries",
      "Reduced manual process friction",
      "Better human-in-the-loop control",
      "A practical path from prototype to operational workflow",
    ],
    deliverables: [
      "Agent workflow map",
      "Automation opportunity assessment",
      "Process redesign recommendations",
      "Integration plan",
      "Pilot scope",
    ],
    tools: ["AI Agents", "Workflow Automation", "APIs", "OpenAI", "Salesforce", "Marketing Platforms"],
    bestFor: [
      "Teams with repetitive operational tasks",
      "Marketing operations teams exploring copilots",
      "Support teams that need connected knowledge workflows",
    ],
    featured: true,
  },
  {
    slug: "salesforce-marketing-cloud-architecture",
    title: "Salesforce Marketing Cloud Architecture",
    category: "Salesforce / MarTech",
    summary:
      "Designing and improving Salesforce Marketing Cloud systems for journeys, automations, data extensions, CloudPages, personalization, and campaign execution.",
    description:
      "I support Salesforce Marketing Cloud architecture across data model design, Journey Builder, Automation Studio, SQL, AMPscript, SSJS, CloudPages, sender configuration, publication lists, and campaign operations.",
    outcomes: [
      "More maintainable SFMC architecture",
      "Cleaner journey and automation operations",
      "Improved data extension and contact model design",
      "Reduced campaign execution risk",
    ],
    deliverables: [
      "SFMC architecture review",
      "Data model recommendations",
      "Journey audit",
      "Automation cleanup plan",
      "Technical implementation support",
    ],
    tools: [
      "Salesforce Marketing Cloud",
      "Journey Builder",
      "Automation Studio",
      "Contact Builder",
      "SQL",
      "AMPscript",
      "SSJS",
      "CloudPages",
      "Publication Lists",
    ],
    bestFor: [
      "Teams with complex SFMC environments",
      "Organizations migrating or rebuilding marketing automation",
      "Marketing teams that need senior technical architecture support",
    ],
    featured: true,
  },
  {
    slug: "salesforce-data-cloud-crm-cdp-activation",
    title: "Salesforce Data Cloud and CRM/CDP Activation",
    category: "Salesforce / Data Cloud",
    summary:
      "Helping teams prepare customer data for segmentation, identity resolution, consent alignment, and activation across Salesforce and marketing platforms.",
    description:
      "I help teams assess Data Cloud readiness, map customer data sources, design profile and segmentation logic, align consent, and plan activation across Salesforce, CRM, CDP, and campaign systems.",
    outcomes: [
      "Clearer Data Cloud and activation readiness",
      "Better customer profile and segmentation strategy",
      "More reliable CRM/CDP activation paths",
      "Consent-aware customer data usage",
    ],
    deliverables: [
      "Data Cloud readiness assessment",
      "Activation strategy",
      "Data source inventory",
      "Segmentation plan",
      "CRM/CDP architecture recommendations",
    ],
    tools: ["Salesforce Data Cloud", "Salesforce CRM", "CRM/CDP Activation", "SQL", "Data Warehouses"],
    bestFor: [
      "Teams preparing for Salesforce Data Cloud",
      "Organizations with fragmented customer data",
      "Marketing and CRM teams planning better segmentation",
    ],
    featured: true,
  },
  {
    slug: "data-engineering-integration-architecture",
    title: "Data Engineering and Integration Architecture",
    category: "Data Engineering",
    summary:
      "Designing data pipelines, data models, and integration patterns that connect marketing, CRM, analytics, and AI systems.",
    description:
      "I design source-to-target mappings, data quality checks, pipeline patterns, activation models, and integration architecture across warehouses, APIs, reverse ETL, Salesforce, and marketing platforms.",
    outcomes: [
      "Cleaner data flows across business systems",
      "Activation-ready customer data models",
      "Reduced manual data preparation",
      "Stronger foundation for AI and personalization",
    ],
    deliverables: [
      "Integration architecture",
      "Data pipeline design",
      "Source-to-target mapping",
      "Data quality recommendations",
      "Activation-ready data model",
    ],
    tools: ["SQL", "BigQuery", "Snowflake", "AWS S3", "APIs", "Hightouch", "Celigo", "Salesforce"],
    bestFor: [
      "Teams connecting CRM, warehouse, and marketing platforms",
      "Organizations preparing customer data for activation",
      "Analytics teams supporting AI or personalization initiatives",
    ],
    featured: true,
  },
  {
    slug: "preference-center-consent-architecture",
    title: "Preference Center and Consent Architecture",
    category: "Consent / Governance",
    summary:
      "Designing subscriber preference, opt-in, opt-out, publication list, and consent-management workflows for marketing technology ecosystems.",
    description:
      "I help teams design preference centers, unsubscribe workflows, subscriber status logic, audit logging, publication list behavior, and consent data models for Salesforce Marketing Cloud and broader marketing systems.",
    outcomes: [
      "More reliable preference and consent operations",
      "Clear unsubscribe and publication-list logic",
      "Better auditability and governance",
      "Safer segmentation and activation decisions",
    ],
    deliverables: [
      "Preference center design",
      "Consent data model",
      "Unsubscribe workflow plan",
      "Audit logging strategy",
      "SFMC implementation support",
    ],
    tools: ["Salesforce Marketing Cloud", "CloudPages", "AMPscript", "SSJS", "SQL", "Data Extensions"],
    bestFor: [
      "Teams rebuilding preference centers",
      "Organizations with unclear unsubscribe behavior",
      "Marketing teams that need compliance-minded architecture",
    ],
    featured: false,
  },
  {
    slug: "campaign-analytics-reporting-automation",
    title: "Campaign Analytics and Reporting Automation",
    category: "Analytics",
    summary:
      "Creating reporting-ready data structures and automations that help teams monitor campaign performance, audience behavior, and operational results.",
    description:
      "I help teams model campaign data, capture UTM and form submission context, build SQL automation plans, prepare dashboard-ready tables, and define KPI frameworks that support decisions.",
    outcomes: [
      "Less manual campaign reporting",
      "Clearer visibility into audience and campaign behavior",
      "Dashboard-ready reporting outputs",
      "Better campaign optimization decisions",
    ],
    deliverables: [
      "Reporting data model",
      "SQL automation plan",
      "Campaign KPI framework",
      "Dashboard-ready output tables",
      "Data validation approach",
    ],
    tools: ["Salesforce Marketing Cloud", "SQL", "Automation Studio", "UTM Tracking", "Dashboards"],
    bestFor: [
      "Marketing teams with manual reporting workflows",
      "Campaign teams that need faster performance visibility",
      "Organizations connecting campaign activity to operational outcomes",
    ],
    featured: false,
  },
];
