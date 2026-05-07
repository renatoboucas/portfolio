export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  longSummary?: string;
  problem: string;
  context: string;
  role: string;
  solution: string;
  architecture?: string;
  deliverables: string[];
  impact: string[];
  focusAreas: string[];
  tools: string[];
  challenges?: string[];
  lessonsLearned?: string[];
  visualType?: "architecture" | "ai-workflow" | "data-pipeline" | "martech-ecosystem" | "none";
  image?: string;
  diagramLabel?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-marketing-operations-assistant",
    title: "AI Marketing Operations Assistant",
    category: "AI Implementation",
    summary:
      "Designed an AI assistant concept to help marketing operations teams troubleshoot automations, search documentation, and support campaign workflows.",
    longSummary:
      "A practical AI assistant architecture for marketing operations teams that need trusted support across Salesforce Marketing Cloud workflows, documentation, troubleshooting, and campaign execution.",
    context:
      "Marketing operations teams often rely on scattered documentation, manual troubleshooting, platform-specific knowledge, historical tickets, and decisions that live across people and systems.",
    problem:
      "Teams need faster access to trusted operational knowledge, but generic AI tools cannot answer accurately without context from internal systems, documentation, and platform-specific rules.",
    role:
      "AI solution strategist, data architecture advisor, and implementation planner.",
    solution:
      "Planned an AI assistant approach using LLMs, retrieval-augmented generation, structured documentation, and workflow-specific prompts to support platform troubleshooting and operational decision-making.",
    architecture:
      "The proposed architecture connects curated knowledge sources, documentation, SOPs, platform notes, and campaign logic into a retrieval layer that can ground LLM responses using trusted internal context.",
    deliverables: [
      "AI assistant use-case definition",
      "Knowledge source inventory",
      "RAG architecture outline",
      "Prompt and workflow design",
      "Implementation roadmap",
    ],
    impact: [
      "Reduced dependency on tribal knowledge",
      "Improved speed of troubleshooting",
      "Created a repeatable AI support model for marketing operations",
      "Positioned AI as an operational enablement tool instead of a generic chatbot",
    ],
    focusAreas: ["LLM", "RAG", "AI Assistants", "Marketing Operations"],
    tools: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Salesforce Marketing Cloud",
      "Documentation Sources",
      "Workflow Automation",
    ],
    challenges: [
      "Ensuring AI responses are grounded in trusted documentation",
      "Avoiding hallucinations in technical platform guidance",
      "Creating a practical implementation path for non-technical teams",
    ],
    lessonsLearned: [
      "AI works best when paired with structured data, clean documentation, and clear workflow boundaries.",
      "The hardest part of AI implementation is often knowledge architecture, not the model itself.",
    ],
    visualType: "ai-workflow",
    diagramLabel: "AI assistant workflow from business problem to reviewed output",
    featured: true,
  },
  {
    slug: "rag-knowledge-base-customer-support",
    title: "RAG Knowledge Base for Customer and Internal Support",
    category: "LLM / RAG Architecture",
    summary:
      "Planned a retrieval-augmented knowledge base strategy for trusted answers across customer support, internal enablement, and operational documentation.",
    longSummary:
      "A case study in designing RAG systems around trusted knowledge sources, document structure, retrieval quality, and support workflow fit.",
    context:
      "Support and operations teams need reliable answers from policies, product notes, support history, SOPs, and internal documentation, but those sources are often inconsistent and difficult to search.",
    problem:
      "LLMs can produce confident but incorrect answers when they are disconnected from governed content, source metadata, and the workflow context of the person asking the question.",
    role:
      "RAG architecture planner, knowledge model designer, and AI implementation advisor.",
    solution:
      "Designed a RAG approach that organizes source documents, metadata, embedding strategy, retrieval ranking, prompt grounding, and human review paths before exposing answers in support workflows.",
    architecture:
      "The architecture separates content ingestion, metadata tagging, embedding generation, vector retrieval, answer generation, source citation, and feedback capture so each layer can be evaluated independently.",
    deliverables: [
      "Knowledge source assessment",
      "Document readiness checklist",
      "Retrieval architecture model",
      "Answer quality evaluation plan",
      "Support workflow integration outline",
    ],
    impact: [
      "Improved trust in AI-generated answers",
      "Created a repeatable pattern for customer and internal support use cases",
      "Made knowledge gaps visible before AI rollout",
      "Reduced the risk of deploying a generic chatbot disconnected from business context",
    ],
    focusAreas: ["RAG", "Knowledge Base", "Trusted Answers", "Support Workflows"],
    tools: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Vector Search Concept",
      "Structured Documents",
      "Embeddings",
    ],
    challenges: [
      "Normalizing uneven source documents",
      "Balancing broad retrieval with answer precision",
      "Defining evaluation criteria that business teams can understand",
    ],
    lessonsLearned: [
      "RAG quality depends on content structure, metadata, and evaluation as much as model choice.",
      "Support use cases need clear escalation paths when retrieval confidence is low.",
    ],
    visualType: "architecture",
    diagramLabel: "RAG knowledge architecture layers",
    featured: true,
  },
  {
    slug: "data-engineering-crm-cdp-activation",
    title: "Data Engineering Pipeline for CRM/CDP Activation",
    category: "Data Engineering",
    summary:
      "Designed data flows, models, and activation patterns that prepare customer profile data for segmentation, campaigns, CRM use cases, and CDP activation.",
    longSummary:
      "A data engineering case study focused on turning fragmented customer data into campaign-ready and AI-ready activation layers.",
    context:
      "Marketing, CRM, and customer experience teams often depend on customer data distributed across warehouses, forms, transactions, CRM records, campaign engagement, and third-party systems.",
    problem:
      "Without clear data models, quality controls, identity logic, and activation rules, teams struggle to create reliable segments or use customer data in Salesforce, CDPs, and marketing platforms.",
    role:
      "Data engineering architect, CRM/CDP activation planner, and marketing technology integration advisor.",
    solution:
      "Defined a pipeline approach for ingesting, modeling, validating, and activating customer data across warehouse, CRM, CDP, and Salesforce Marketing Cloud destinations.",
    architecture:
      "The architecture uses staged ingestion, normalized customer profiles, consent-aware segmentation, activation tables, campaign audience outputs, and feedback loops from engagement and conversion data.",
    deliverables: [
      "Customer data model outline",
      "Pipeline and integration mapping",
      "Segmentation readiness model",
      "Activation data contract",
      "Data quality and governance recommendations",
    ],
    impact: [
      "Connected data engineering decisions to marketing and customer experience outcomes",
      "Improved campaign readiness and audience reliability",
      "Created a foundation for AI use cases that depend on clean customer data",
      "Reduced manual audience preparation and one-off data handling",
    ],
    focusAreas: ["Data Pipelines", "Segmentation", "CRM/CDP Activation", "Customer Profiles"],
    tools: [
      "SQL",
      "BigQuery",
      "Snowflake",
      "AWS S3",
      "Hightouch",
      "Salesforce",
      "Salesforce Marketing Cloud",
      "Data Cloud",
    ],
    challenges: [
      "Resolving inconsistent customer identifiers",
      "Preserving consent and suppression logic across systems",
      "Designing data outputs that business teams can inspect and trust",
    ],
    lessonsLearned: [
      "Activation succeeds when data contracts are explicit and owned.",
      "AI and personalization programs require the same foundation: trustworthy data pipelines.",
    ],
    visualType: "data-pipeline",
    diagramLabel: "CRM/CDP activation data flow",
    featured: true,
  },
  {
    slug: "sfmc-migration-architecture",
    title: "Salesforce Marketing Cloud Migration Architecture",
    category: "Salesforce / MarTech Architecture",
    summary:
      "Structured a migration architecture from Adobe Campaign Standard into Salesforce Marketing Cloud across data, journeys, preference management, and automation operations.",
    longSummary:
      "A Salesforce Marketing Cloud architecture case study covering data model design, journey migration, preference center planning, CloudPages, publication lists, and operational readiness.",
    context:
      "A migration from Adobe Campaign Standard to Salesforce Marketing Cloud requires more than rebuilding emails. It changes the data model, automation logic, preference management, reporting, and operating model.",
    problem:
      "Without a clear migration architecture, teams risk recreating legacy complexity, losing unsubscribe behavior, breaking campaign processes, and building SFMC assets without governance.",
    role:
      "Salesforce Marketing Cloud architect, migration planner, and marketing automation advisor.",
    solution:
      "Planned a structured SFMC migration approach covering Data Extensions, automations, journeys, CloudPages, publication lists, preference logic, SQL processes, and campaign operations.",
    architecture:
      "The architecture separates subscriber profile data, consent and publication preferences, campaign audiences, journey entry sources, reporting extracts, and operational automations to reduce coupling and improve maintainability.",
    deliverables: [
      "Migration architecture blueprint",
      "SFMC data model recommendations",
      "Journey and automation migration plan",
      "Preference center architecture",
      "Operational governance recommendations",
    ],
    impact: [
      "Reduced migration risk by defining system boundaries before rebuild work",
      "Improved maintainability of SFMC data and automation assets",
      "Protected subscriber preference and unsubscribe behavior",
      "Created a scalable platform foundation for future campaigns and AI-enabled workflows",
    ],
    focusAreas: ["SFMC Migration", "Data Extensions", "Journeys", "Preference Center"],
    tools: [
      "Salesforce Marketing Cloud",
      "Adobe Campaign Standard",
      "SQL",
      "AMPscript",
      "SSJS",
      "CloudPages",
      "Automation Studio",
    ],
    challenges: [
      "Mapping legacy campaign logic into SFMC-native patterns",
      "Designing unsubscribe and publication list behavior safely",
      "Separating migration decisions from one-off campaign requests",
    ],
    lessonsLearned: [
      "Migration quality depends on architecture decisions made before asset rebuild begins.",
      "Preference and consent architecture should be treated as core platform infrastructure.",
    ],
    visualType: "martech-ecosystem",
    diagramLabel: "Salesforce Marketing Cloud migration ecosystem",
    featured: true,
  },
  {
    slug: "preference-center-consent-architecture",
    title: "Preference Center and Consent Architecture",
    category: "Consent / Governance",
    summary:
      "Designed preference and consent architecture for publication lists, subscriber status, opt-in and opt-out logic, audit logging, and governance-minded activation.",
    longSummary:
      "A consent and marketing operations case study focused on subscriber choice, governance, unsubscribe behavior, and platform-safe preference management in Salesforce Marketing Cloud.",
    context:
      "Marketing teams need flexible subscription experiences while also preserving compliance, auditability, and consistent subscriber status across campaigns and business units.",
    problem:
      "Preference centers often become fragile when unsubscribe logic, publication lists, subscriber keys, forms, and data extensions are handled as disconnected implementation details.",
    role:
      "Consent architecture planner, Salesforce Marketing Cloud implementation advisor, and marketing operations strategist.",
    solution:
      "Designed a consent model that connects preference center forms, publication list unsubscribe behavior, subscriber status, audit logging, data extension updates, and downstream segmentation rules.",
    architecture:
      "The approach uses CloudPages for preference capture, AMPscript and SSJS for controlled updates, SQL for reconciliation, Data Extensions for audit and profile state, and publication lists for subscription-level control.",
    deliverables: [
      "Preference center data model",
      "Publication list strategy",
      "Opt-in and opt-out logic",
      "Audit logging model",
      "Governance and QA checklist",
    ],
    impact: [
      "Improved subscriber preference transparency",
      "Reduced risk of inconsistent unsubscribe handling",
      "Created a more governable marketing operations foundation",
      "Supported segmentation and activation while respecting consent state",
    ],
    focusAreas: ["Preference Center", "Consent", "Publication Lists", "Data Governance"],
    tools: [
      "Salesforce Marketing Cloud",
      "CloudPages",
      "AMPscript",
      "SSJS",
      "SQL",
      "Data Extensions",
      "Publication Lists",
    ],
    challenges: [
      "Coordinating subscriber status with publication-level preferences",
      "Maintaining auditability without overcomplicating the user experience",
      "Testing edge cases across email address, subscriber key, and preference updates",
    ],
    lessonsLearned: [
      "Consent architecture is both a customer experience and data governance problem.",
      "Preference logic should be documented and testable, not buried inside page scripts alone.",
    ],
    visualType: "martech-ecosystem",
    diagramLabel: "Preference and consent platform ecosystem",
    featured: true,
  },
  {
    slug: "vbtc-campaign-analytics-automation",
    title: "Campaign Analytics Automation for Victory Beyond the Cup",
    category: "Analytics",
    summary:
      "Designed campaign reporting automation that connects SFMC activity, form submissions, UTM capture, order tracking, segmentation, and dashboard-ready data.",
    longSummary:
      "An analytics and marketing automation case study showing how campaign activity can become structured reporting and decision support.",
    context:
      "Campaign teams need to understand how audiences, forms, journeys, UTM links, and downstream orders connect, but reporting data is often scattered across operational systems and spreadsheets.",
    problem:
      "Manual campaign reporting makes it difficult to evaluate performance quickly, compare segments, and turn campaign activity into decisions while the campaign is still active.",
    role:
      "Marketing analytics architect, automation planner, and Salesforce Marketing Cloud data advisor.",
    solution:
      "Planned an automation model that captures campaign engagement, form submissions, UTM parameters, order signals, and segmentation attributes into dashboard-ready data structures.",
    architecture:
      "The design uses Salesforce Marketing Cloud automations and SQL to normalize campaign data, Google Sheets for operational review where appropriate, and dashboard-ready tables for reporting and decision support.",
    deliverables: [
      "Campaign reporting data model",
      "Automation Studio process outline",
      "UTM and form capture logic",
      "Segmentation reporting structure",
      "Dashboard-ready data output plan",
    ],
    impact: [
      "Reduced manual reporting effort",
      "Improved campaign visibility across engagement and conversion signals",
      "Created cleaner feedback loops for segmentation and journey decisions",
      "Turned campaign data into operational decision support",
    ],
    focusAreas: ["Campaign Analytics", "SFMC Automation", "UTM Tracking", "Segmentation"],
    tools: [
      "Salesforce Marketing Cloud",
      "SQL",
      "Automation Studio",
      "Google Sheets",
      "Dashboards",
      "Campaign Data",
    ],
    challenges: [
      "Connecting campaign identifiers across forms, links, and order data",
      "Keeping reporting useful without making the data model too complex",
      "Supporting fast campaign decisions with reliable enough data",
    ],
    lessonsLearned: [
      "Campaign analytics should be designed before launch, not reconstructed afterward.",
      "Useful reporting connects audience, behavior, and outcome data in one operating view.",
    ],
    visualType: "data-pipeline",
    diagramLabel: "Campaign analytics reporting data flow",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
