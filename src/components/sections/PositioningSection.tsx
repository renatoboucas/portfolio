const bullets = [
  "AI and RAG grounded in trusted business context",
  "Data pipelines designed for activation and reporting",
  "Salesforce and MarTech architecture teams can maintain",
];

export function PositioningSection() {
  return (
    <section className="border-y bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Positioning</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            AI strategy is only useful when the systems can support it.
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-slate-600">
            I focus on the practical layer between AI ideas and operational reality: what data is
            trusted, what systems need to connect, how teams will use the output, and what can be
            maintained after launch.
          </p>
          <div className="mt-8 grid gap-3">
            {bullets.map((bullet) => (
              <p className="border-l border-slate-300 pl-4 text-sm font-medium leading-6 text-slate-700" key={bullet}>
                {bullet}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
