const expertise = [
  {
    title: "AI Architecture",
    items: ["LLM/RAG strategy", "AI assistants", "Workflow automation", "Provider selection", "Guardrails"],
  },
  {
    title: "Data Engineering",
    items: ["Data pipelines", "Warehouse/CDP integration", "Profile modeling", "Reverse ETL", "Reporting datasets"],
  },
  {
    title: "Salesforce & CRM/CDP",
    items: ["SFMC architecture", "Data Cloud readiness", "CRM/CDP activation", "Preference centers", "Journey audits"],
  },
  {
    title: "Marketing Technology",
    items: ["Campaign operations", "Consent architecture", "Analytics automation", "Migration planning", "Platform cleanup"],
  },
];

export function CoreExpertise() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Core expertise</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Architecture across AI, data, and customer platforms.
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
            {expertise.map((area) => (
              <section className="border-t pt-5" key={area.title}>
                <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
