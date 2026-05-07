import { CheckCircle2 } from "lucide-react";
import { ArchitectureVisual } from "@/components/visuals/ArchitectureVisual";

const bullets = [
  "Build LLM and RAG solutions on top of trusted business data",
  "Connect AI workflows to Salesforce, marketing automation, and CRM processes",
  "Design data pipelines that make AI outputs more accurate and useful",
  "Translate business needs into practical AI implementation roadmaps",
  "Support vendor selection and implementation across OpenAI, Anthropic, and Google AI ecosystems",
  "Help teams move from AI experiments to reliable production workflows",
];

export function PositioningSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">AI + Data + Salesforce</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            Where AI Strategy Meets Real Data and Salesforce Execution
          </h2>
          <div className="mt-8 hidden lg:block">
            <ArchitectureVisual />
          </div>
        </div>
        <div>
          <p className="text-base leading-8 text-slate-300">
            Many AI initiatives fail because the data is fragmented, the systems are disconnected,
            or the implementation is too theoretical. My focus is helping teams connect AI capabilities
            with the real operational systems they already use: Salesforce, Marketing Cloud, Data Cloud,
            CRMs, data warehouses, campaign platforms, and customer data pipelines.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div className="flex gap-3" key={bullet}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-200">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
