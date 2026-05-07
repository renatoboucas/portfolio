export type Certification = {
  title: string;
  issuer: string;
  category: string;
  status: "Active" | "Planned" | "In Progress";
  year?: string;
  url?: string;
  logoSrc?: string;
  logoAlt?: string;
};

export const certifications: Certification[] = [
  // Add verified credentials here as they become available.
];
