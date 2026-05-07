import { CheckCircle2 } from "lucide-react";

const reasons = [
  "You want to explore AI implementation but need a practical roadmap.",
  "You are considering an LLM/RAG assistant for internal knowledge or customer support.",
  "Your Salesforce Marketing Cloud setup is hard to maintain.",
  "You need better data pipelines for CRM, CDP, marketing, or AI activation.",
  "You are migrating from Adobe Campaign Standard or another legacy marketing platform.",
  "You need help with preference centers, consent, publication lists, or subscriber governance.",
  "You need campaign analytics, reporting automation, or segmentation support.",
  "You are hiring for a role that needs AI, data, Salesforce, and architecture experience.",
];

export function ReasonsToReachOut() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Good reasons to reach out</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            The strongest conversations usually start with a real system problem.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div className="flex gap-3 rounded-lg border bg-slate-50 p-4" key={reason}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
              <p className="text-sm leading-6 text-slate-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
