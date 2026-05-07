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
  // Add verified credentials here as they become available.
];
