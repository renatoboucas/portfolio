export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / LLM",
    skills: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "LLM Applications",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "Embeddings",
      "Vector Search Concepts",
      "Workflow Automation",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "SQL",
      "BigQuery",
      "Snowflake",
      "AWS S3",
      "ETL / ELT",
      "Data Modeling",
      "Data Quality",
      "API Integration",
      "Source-to-Target Mapping",
    ],
  },
  {
    title: "Salesforce / MarTech",
    skills: [
      "Salesforce Marketing Cloud",
      "Salesforce Data Cloud",
      "Salesforce CRM",
      "AMPscript",
      "SSJS",
      "CloudPages",
      "Journey Builder",
      "Automation Studio",
      "Contact Builder",
      "Data Extensions",
      "Publication Lists",
      "CRM/CDP Activation",
      "Preference Centers",
    ],
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS", "GCP", "Azure", "Oracle Cloud", "Kubernetes", "Terraform", "Ansible", "GitHub", "Vercel"],
  },
  {
    title: "Analytics / Reporting",
    skills: [
      "Campaign Analytics",
      "Dashboard-Ready Data Models",
      "UTM Tracking",
      "KPI Design",
      "Data Validation",
      "Segmentation Reporting",
    ],
  },
  {
    title: "Leadership / Architecture",
    skills: [
      "Solution Architecture",
      "Technical Leadership",
      "Migration Planning",
      "Vendor Collaboration",
      "Data Governance",
      "Consulting Strategy",
      "Cross-functional Communication",
    ],
  },
];
