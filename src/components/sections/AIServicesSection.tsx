const focusPoints = [
  "LLM workflow design and assistant planning",
  "RAG, knowledge retrieval, and trusted-answer patterns",
  "OpenAI, Anthropic, Google AI, and Salesforce-native AI fit",
  "Human review, governance basics, and rollout planning",
];

export function AIServicesSection() {
  return (
    <section className="border-y bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">AI services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            AI Implementation Beyond the Hype
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I help teams move from AI curiosity to practical implementation by connecting LLMs,
            trusted knowledge, data pipelines, and business workflows. The focus is not just choosing
            a model, but designing the data, context, evaluation, and process around it.
          </p>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {focusPoints.map((point) => (
            <p className="py-4 text-sm leading-6 text-slate-200" key={point}>
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
