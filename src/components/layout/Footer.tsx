import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { contactInfo } from "@/data/contact";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const profileLinks = [
    contactInfo.linkedin ? { label: "LinkedIn", href: contactInfo.linkedin } : null,
    contactInfo.github ? { label: "GitHub", href: contactInfo.github } : null,
    { label: "Contact", href: "/contact" },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="border-t bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.6fr]">
          <div>
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              AI implementation, data engineering, and Salesforce architecture for practical business systems.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link className="text-slate-300 hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="grid gap-2 text-sm md:justify-self-end" aria-label="Profile links">
            {profileLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a className="text-slate-300 hover:text-white" href={link.href} key={link.label} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ) : (
                <Link className="text-slate-300 hover:text-white" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <Separator className="my-8 bg-slate-800" />
        <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>AI, Data Engineering & Salesforce Architecture.</p>
        </div>
      </div>
    </footer>
  );
}
