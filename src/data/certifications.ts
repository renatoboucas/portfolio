export type Certification = {
  title: string;
  issuer: string;
  category: string;
  status: "Active" | "Planned" | "In Progress";
  year?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: "Salesforce Marketing Cloud Administrator",
    issuer: "Salesforce",
    category: "Salesforce",
    status: "Planned",
  },
  {
    title: "Salesforce Marketing Cloud Consultant",
    issuer: "Salesforce",
    category: "Salesforce",
    status: "Planned",
  },
  {
    title: "AI Engineering Credential",
    issuer: "Future Provider",
    category: "AI",
    status: "Planned",
  },
  {
    title: "Cloud Architecture Credential",
    issuer: "Future Provider",
    category: "Cloud",
    status: "Planned",
  },
  {
    title: "Data Engineering Credential",
    issuer: "Future Provider",
    category: "Data",
    status: "Planned",
  },
];
