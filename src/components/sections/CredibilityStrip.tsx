import { BadgeCheck, CloudCog, Database, GitBranch, Megaphone, Sparkles } from "lucide-react";

const points = [
  { icon: BadgeCheck, label: "14+ years in IT, data, and marketing technology" },
  { icon: CloudCog, label: "Salesforce Marketing Cloud architecture" },
  { icon: Sparkles, label: "AI, LLM, and RAG implementation strategy" },
  { icon: Database, label: "Data engineering and integration" },
  { icon: GitBranch, label: "CRM/CDP activation" },
  { icon: Megaphone, label: "Marketing automation and journey architecture" },
];

export function CredibilityStrip() {
  return (
    <section className="border-b bg-slate-950 py-6 text-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-6">
        {points.map((point) => (
          <div className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-4" key={point.label}>
            <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <p className="text-sm font-medium leading-5 text-slate-100">{point.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
