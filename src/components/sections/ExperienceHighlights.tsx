import { CheckCircle2 } from "lucide-react";

const highlights = [
  "14+ years across IT, data, cloud, marketing technology, and platform architecture",
  "Salesforce Marketing Cloud architecture and implementation",
  "Adobe Campaign Standard to SFMC migration planning",
  "Preference center and publication list architecture",
  "Data engineering and CRM/CDP activation",
  "Campaign analytics automation and reporting",
  "Cloud architecture across AWS, GCP, Azure, and Oracle Cloud",
  "AI implementation strategy using LLMs, RAG, and workflow automation",
  "Technical leadership and cross-functional project delivery",
];

export function ExperienceHighlights() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">Experience highlights</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            Experience across the systems behind customer operations.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4" key={highlight}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
              <p className="text-sm leading-6 text-slate-200">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
