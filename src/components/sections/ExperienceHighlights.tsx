const highlights = [
  "18+ years across software engineering, data, cloud, DevOps, AI, and Salesforce architecture",
  "Salesforce Marketing Cloud architecture and implementation",
  "Preference center and publication list architecture",
  "Data engineering and CRM/CDP activation",
  "Cloud architecture across AWS, GCP, Azure, and Oracle Cloud",
  "AI implementation strategy using LLMs, RAG, and workflow automation",
  "Technical leadership and cross-functional project delivery",
];

export function ExperienceHighlights() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">Experience highlights</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            Experience across the systems behind customer operations.
          </h2>
        </div>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div className="border-t border-white/15 pt-4" key={highlight}>
              <p className="text-sm leading-6 text-slate-200">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
