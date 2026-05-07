import { CheckCircle2 } from "lucide-react";
import { MarTechEcosystemVisual } from "@/components/visuals/MarTechEcosystemVisual";

const focusPoints = [
  "Salesforce Marketing Cloud architecture",
  "Data Cloud readiness",
  "CRM/CDP activation",
  "Journey and automation audits",
  "CloudPages, AMPscript, SSJS, and SQL support",
  "Preference center and publication list cleanup",
  "Campaign operations support",
  "Agentforce readiness as part of a broader AI strategy",
];

export function SalesforceServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Salesforce and MarTech</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Salesforce and Marketing Technology Architecture
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            I support teams working through the messy middle of Salesforce and marketing technology:
            disconnected data, abandoned automations, unclear ownership, inconsistent preference logic,
            and campaigns that depend on fragile manual processes.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {focusPoints.map((point) => (
            <div className="flex gap-3 rounded-lg border bg-slate-50 p-4" key={point}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
              <p className="text-sm leading-6 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2">
          <MarTechEcosystemVisual />
        </div>
      </div>
    </section>
  );
}
