import { Boxes } from "lucide-react";

const layers = [
  {
    title: "Business workflows",
    nodes: ["Support", "Campaign Ops", "Customer Experience"],
  },
  {
    title: "AI / LLM layer",
    nodes: ["OpenAI", "Anthropic", "Google Gemini"],
  },
  {
    title: "RAG / knowledge layer",
    nodes: ["Knowledge Base", "Policies", "SOPs"],
  },
  {
    title: "Data engineering layer",
    nodes: ["BigQuery", "Snowflake", "AWS S3"],
  },
  {
    title: "Salesforce / CRM / MarTech",
    nodes: ["Salesforce CRM", "Marketing Cloud", "Data Cloud"],
  },
  {
    title: "Analytics and activation",
    nodes: ["Hightouch", "Campaigns", "Dashboards"],
  },
];

export function ArchitectureVisual() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Conceptual AI, data, and Salesforce architecture map">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-white">
          <Boxes className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-950">AI + Data + Salesforce Architecture</p>
          <p className="text-xs text-slate-500">Conceptual system layers</p>
        </div>
      </div>
      <div className="grid gap-3">
        {layers.map((layer, index) => (
          <div className="grid gap-3 rounded-lg border bg-slate-50 p-3 md:grid-cols-[0.34fr_1fr]" key={layer.title}>
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-cyan-700 text-xs font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm font-semibold text-slate-800">{layer.title}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {layer.nodes.map((node) => (
                <span className="rounded-md border bg-white px-2.5 py-1 text-xs font-semibold text-slate-600" key={node}>
                  {node}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
