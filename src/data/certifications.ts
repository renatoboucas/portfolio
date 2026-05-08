export type Certification = {
  title: string;
  issuer: string;
  category: "Salesforce" | "AI" | "Cloud" | "Data" | "Other";
  status: "Active" | "Planned" | "In Progress";
  logo?: string;
  credentialUrl?: string;
  issuedAt?: string;
  logoAlt?: string;
};

export const certifications: Certification[] = [
  {
    title: "Salesforce Certified Platform Integration Architect",
    issuer: "Salesforce",
    category: "Salesforce",
    status: "Active",
    logo: "/images/certifications/platform-integration-architect.png",
  },
  {
    title: "Salesforce Certified Marketing Cloud Engagement Administrator",
    issuer: "Salesforce",
    category: "Salesforce",
    status: "Active",
    logo: "/images/certifications/marketing-cloud-administrator.png",
  },
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    category: "Salesforce",
    status: "Active",
    logo: "/images/certifications/agentforce.png",
  },
  {
    title: "MBA in Information Technology Management",
    issuer: "UNIDERP",
    category: "Other",
    status: "Active",
  },
  {
    title: "Bachelor of Information Systems",
    issuer: "Centro Universitario UNA",
    category: "Other",
    status: "Active",
  },
  {
    title: "Multicloud & DevOps Bootcamp",
    issuer: "The Cloud Bootcamp",
    category: "Cloud",
    status: "Active",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    category: "Other",
    status: "Active",
    logo: "/images/certifications/scrum-master-1.png",
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    category: "Cloud",
    status: "Active",
    logo: "/images/certifications/gcp-essentials-badge.png",
  },
  {
    title: "AWS Solutions Architect Badge",
    issuer: "AWS",
    category: "Cloud",
    status: "Active",
    logo: "/images/certifications/aws-solutions-architect.png",
  },
  {
    title: "ISO 9001:2015 Lead Auditor - QMS",
    issuer: "ISO 9001",
    category: "Other",
    status: "Active",
    logo: "/images/certifications/iso-9001-lead-auditor.png",
  },
];
