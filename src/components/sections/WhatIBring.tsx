const strengths = [
  {
    title: "Architecture Thinking",
    description:
      "I design how platforms, data flows, automations, and business processes should work together.",
  },
  {
    title: "Hands-On Technical Execution",
    description:
      "I bring implementation depth across SQL, SFMC, CloudPages, integrations, reporting, and troubleshooting.",
  },
  {
    title: "AI and Data Strategy",
    description:
      "I connect AI use cases to the data, knowledge sources, workflows, and guardrails needed beyond a demo.",
  },
  {
    title: "Business and Team Leadership",
    description:
      "I work across technical teams, marketing teams, vendors, and leaders to move work from idea to execution.",
  },
];

export function WhatIBring() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">What I bring</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Senior technical judgment with implementation depth.
            </h2>
          </div>
          <div className="divide-y divide-slate-200 border-y">
            {strengths.map((strength) => (
              <div className="grid gap-3 py-5 sm:grid-cols-[0.4fr_1fr]" key={strength.title}>
                <h3 className="font-semibold text-slate-950">{strength.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
