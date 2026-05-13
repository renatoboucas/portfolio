export type ContactInfo = {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  calendly?: string;
  resumeUrl?: string;
};

export const contactInfo: ContactInfo = {
  email: "renatoboucas@gmail.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/renatoboucas",
  github: "",
  website: "",
  calendly: "",
  resumeUrl: "",
};

export function mailtoLink(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });

  if (body) {
    params.set("body", body);
  }

  return `mailto:${contactInfo.email}?${params.toString()}`;
}
