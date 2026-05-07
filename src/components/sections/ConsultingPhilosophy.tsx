import { Compass } from "lucide-react";

const principles = [
  "Start with the business problem, not the tool",
  "Design around data quality and system ownership",
  "Keep AI grounded in trusted knowledge and workflow context",
  "Build solutions teams can maintain",
  "Document decisions and reduce hidden complexity",
  "Balance strategy with hands-on execution",
  "Make technical systems easier for non-technical teams to use",
];

export function ConsultingPhilosophy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Consulting philosophy</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            How I Approach Technical Work
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            I believe the best technical solutions are the ones teams can understand, operate, and improve
            after launch. Whether the work involves AI, Salesforce, data engineering, or marketing automation,
            I focus on clarity first: what problem are we solving, what data do we trust, what systems are
            involved, what risks exist, and what does success look like?
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {principles.map((principle) => (
            <div className="flex gap-3 rounded-lg border bg-slate-50 p-4" key={principle}>
              <Compass className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
              <p className="text-sm leading-6 text-slate-700">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
