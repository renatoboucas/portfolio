export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Architecture",
    skills: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "LLM Apps",
      "RAG",
      "Prompt & Context",
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
    ],
  },
  {
    title: "Salesforce & CRM/CDP",
    skills: [
      "Salesforce Marketing Cloud",
      "Salesforce Data Cloud",
      "Salesforce CRM",
      "CRM/CDP Activation",
      "Journey Builder",
      "Automation Studio",
      "Preference Centers",
    ],
  },
  {
    title: "Marketing Automation",
    skills: [
      "CloudPages",
      "AMPscript",
      "SSJS",
      "Data Extensions",
      "Publication Lists",
      "Campaign Operations",
      "Consent Logic",
    ],
  },
  {
    title: "Cloud & Integration",
    skills: ["AWS", "GCP", "Azure", "Oracle Cloud", "APIs", "Hightouch", "Celigo", "Vercel"],
  },
  {
    title: "Analytics & Governance",
    skills: [
      "Campaign Analytics",
      "Reporting Models",
      "UTM Tracking",
      "KPI Design",
      "Data Validation",
      "Data Governance",
      "Segmentation",
    ],
  },
];
