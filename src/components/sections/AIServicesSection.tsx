import { Bot, BrainCircuit, Network } from "lucide-react";
import { AIWorkflowVisual } from "@/components/visuals/AIWorkflowVisual";

const focusPoints = [
  "LLM workflow design",
  "RAG and knowledge retrieval",
  "OpenAI, Anthropic, and Google AI ecosystems",
  "AI assistants and internal copilots",
  "AI agent workflow planning",
  "Human-in-the-loop review",
  "AI governance and responsible rollout",
  "Integration with Salesforce, CRM, marketing, and data systems",
];

export function AIServicesSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
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
        <div className="grid gap-4 sm:grid-cols-2">
          {focusPoints.map((point, index) => {
            const Icon = index % 3 === 0 ? BrainCircuit : index % 3 === 1 ? Network : Bot;

            return (
              <div className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4" key={point}>
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-200">{point}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-2">
          <AIWorkflowVisual />
        </div>
      </div>
    </section>
  );
}
