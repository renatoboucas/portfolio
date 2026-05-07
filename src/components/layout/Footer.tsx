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
    <footer className="border-t bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr_0.5fr]">
          <div>
            <p className="text-lg font-semibold text-slate-950">{siteConfig.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              AI Architect | Data Engineering | Salesforce & CRM/CDP Architecture
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link className="text-slate-600 hover:text-slate-950" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="grid gap-2 text-sm md:justify-self-end" aria-label="Profile links">
            {profileLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a className="text-slate-600 hover:text-slate-950" href={link.href} key={link.label} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ) : (
                <Link className="text-slate-600 hover:text-slate-950" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <Separator className="my-8 bg-slate-200" />
        <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for practical AI, data, and customer systems.</p>
        </div>
      </div>
    </footer>
  );
}
