const points = [
  "18+ years across software engineering, data, cloud, DevOps, AI, and Salesforce architecture",
  "Salesforce Marketing Cloud, Data Cloud, and CRM/CDP activation",
  "AI implementation, LLM/RAG strategy, and practical automation",
];

export function CredibilityStrip() {
  return (
    <section className="border-b bg-slate-50 py-6">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 text-sm text-slate-600 sm:px-6 md:grid-cols-3 lg:px-8">
        {points.map((point) => (
          <p className="border-l border-slate-300 pl-4 leading-6" key={point}>
            {point}
          </p>
        ))}
      </div>
    </section>
  );
}
