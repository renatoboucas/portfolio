import { CalendarDays, Code2, Globe, Mail, Network, Phone } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo, mailtoLink } from "@/data/contact";

const linkConfig = [
  {
    label: "Email",
    value: contactInfo.email,
    href: mailtoLink("Portfolio Contact"),
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: contactInfo.linkedin,
    href: contactInfo.linkedin,
    icon: Network,
  },
  {
    label: "GitHub",
    value: contactInfo.github,
    href: contactInfo.github,
    icon: Code2,
  },
  {
    label: "Website",
    value: contactInfo.website,
    href: contactInfo.website,
    icon: Globe,
  },
  {
    label: "Calendly",
    value: contactInfo.calendly,
    href: contactInfo.calendly,
    icon: CalendarDays,
  },
  {
    label: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phone ? `tel:${contactInfo.phone}` : "",
    icon: Phone,
  },
];

export function SocialLinks() {
  const links = linkConfig.filter((link) => link.value && link.href);

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Profiles and links</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Connect through the channels currently configured.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}>
              <Card className="h-full border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-cyan-50 text-cyan-700">
                    <link.icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-xl">{link.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="break-words text-sm leading-6 text-slate-600">{link.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
