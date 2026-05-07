import Link from "next/link";

import { services } from "@/data/services";

const serviceGroups = [
  {
    title: "AI Architecture",
    summary:
      "LLM/RAG strategy, AI assistants, workflow automation, model/provider selection, and governance basics.",
    match: ["AI", "AI / LLM", "AI Automation"],
  },
  {
    title: "Data Engineering",
    summary:
      "Data pipelines, warehouse/CDP integration, customer profile modeling, reverse ETL, and reporting-ready datasets.",
    match: ["Data Engineering"],
  },
  {
    title: "Salesforce & CRM/CDP",
    summary:
      "SFMC architecture, Data Cloud readiness, CRM/CDP activation, preference centers, and journey audits.",
    match: ["Salesforce / MarTech", "Salesforce / Data Cloud"],
  },
  {
    title: "Marketing Technology",
    summary:
      "Campaign operations, consent architecture, analytics automation, migration planning, and platform cleanup.",
    match: ["Consent / Governance", "Analytics"],
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">What I do</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Four clear service pillars.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Concise architecture and implementation support for teams that need less noise and a
              clearer path from idea to execution.
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y">
            {serviceGroups.map((group) => {
              const relatedServices = services.filter((service) => group.match.includes(service.category));

              return (
                <section className="py-6" key={group.title}>
                  <div className="grid gap-4 md:grid-cols-[0.35fr_1fr]">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                    </div>
                    <div>
                      <p className="leading-7 text-slate-600">{group.summary}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {relatedServices.map((service) => (
                          <li key={service.slug}>
                            <Link
                              className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-cyan-300 hover:text-cyan-700"
                              href={`/services/${service.slug}`}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
