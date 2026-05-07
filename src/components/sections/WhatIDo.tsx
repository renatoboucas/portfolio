const workAreas = [
  {
    title: "AI and LLM implementation",
    description:
      "Practical assistants, RAG workflows, prompt strategy, and automation patterns grounded in business context.",
  },
  {
    title: "Knowledge and data architecture",
    description:
      "Trusted sources, customer data models, integrations, retrieval strategy, and activation-ready pipelines.",
  },
  {
    title: "Salesforce and MarTech execution",
    description:
      "Marketing Cloud, Data Cloud, journeys, preference architecture, campaign operations, and analytics.",
  },
];

export function WhatIDo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">What I do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Focused work across AI, data, and customer platforms.
          </h2>
          </div>
          <div className="divide-y divide-slate-200 border-y">
          {workAreas.map((area) => (
            <div className="grid gap-3 py-6 sm:grid-cols-[0.42fr_1fr]" key={area.title}>
              <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{area.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
