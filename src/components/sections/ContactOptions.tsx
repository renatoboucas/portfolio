import { Building2, Handshake, SearchCheck, UserRoundSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mailtoLink } from "@/data/contact";

const options = [
  {
    icon: Building2,
    title: "Consulting or Technical Advisory",
    description:
      "For teams that need help planning or improving AI workflows, Salesforce Marketing Cloud architecture, Data Cloud readiness, CRM/CDP activation, integrations, or marketing automation systems.",
    cta: "Discuss Consulting",
    subject: "AI / Salesforce Consulting Inquiry",
  },
  {
    icon: UserRoundSearch,
    title: "Professional Opportunities",
    description:
      "For recruiters, hiring managers, and teams looking for AI, data engineering, Salesforce Marketing Cloud, or solution architecture leadership.",
    cta: "Start a Conversation",
    subject: "Professional Opportunity",
  },
  {
    icon: SearchCheck,
    title: "Architecture Review",
    description:
      "For teams that need a senior technical review of their current AI, data, Salesforce, marketing automation, or customer data ecosystem.",
    cta: "Request Review",
    subject: "Architecture Review Request",
  },
  {
    icon: Handshake,
    title: "Collaboration or Partnership",
    description:
      "For agencies, consultants, vendors, or business partners interested in collaborating around AI, Salesforce, data engineering, CRM, or MarTech delivery.",
    cta: "Explore Partnership",
    subject: "Collaboration or Partnership",
  },
];

export function ContactOptions() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Ways to connect</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Choose the conversation that fits what you need.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {options.map((option) => (
            <Card className="border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg" key={option.title}>
              <CardHeader>
                <span className="grid h-11 w-11 place-items-center rounded-md bg-cyan-50 text-cyan-700">
                  <option.icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-xl leading-tight">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{option.description}</p>
                <Button asChild className="mt-6" variant="outline">
                  <a href={mailtoLink(option.subject)}>{option.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
