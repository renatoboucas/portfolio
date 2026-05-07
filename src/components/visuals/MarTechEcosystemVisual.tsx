import { Network } from "lucide-react";

const nodes = [
  "Customer profile",
  "Preferences and consent",
  "Segmentation",
  "Journeys and campaigns",
  "Analytics and reporting",
  "AI enablement",
];

const platforms = [
  "Salesforce CRM",
  "Data Cloud",
  "Marketing Cloud",
  "Preference Center",
  "Journey Builder",
  "Automation Studio",
  "CloudPages",
  "Data Extensions",
  "Analytics",
  "AI Assistants",
];

export function MarTechEcosystemVisual() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Conceptual Salesforce and marketing technology ecosystem">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-700 text-white">
          <Network className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-950">Salesforce and MarTech ecosystem</p>
          <p className="text-xs text-slate-500">Profiles, consent, activation, analytics, and AI enablement</p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-3">
          {nodes.map((node) => (
            <div className="rounded-lg border bg-slate-50 p-3 text-sm font-semibold text-slate-800" key={node}>
              {node}
            </div>
          ))}
        </div>
        <div className="flex content-start flex-wrap gap-2 rounded-lg border bg-slate-50 p-4">
          {platforms.map((platform) => (
            <span className="rounded-md border bg-white px-2.5 py-1 text-xs font-semibold text-slate-600" key={platform}>
              {platform}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
