import { siteConfig } from "@/lib/site";

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = siteConfig.nav;
