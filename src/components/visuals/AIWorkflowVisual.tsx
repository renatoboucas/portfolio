import { Bot } from "lucide-react";

const flow = [
  "Business Problem",
  "Trusted Data / Knowledge",
  "Retrieval / Context Layer",
  "LLM Model",
  "Workflow / Automation",
  "Human Review",
  "Business Outcome",
];

const models = ["OpenAI", "Anthropic Claude", "Google Gemini", "Agentforce where Salesforce-native"];

export function AIWorkflowVisual() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Conceptual AI workflow implementation flow">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-700 text-white">
          <Bot className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-950">AI implementation flow</p>
          <p className="text-xs text-slate-500">From workflow need to operational outcome</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-7">
        {flow.map((item, index) => (
          <div className="relative rounded-lg border bg-slate-50 p-3 text-center" key={item}>
            <p className="text-xs font-bold uppercase text-cyan-700">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-2 text-sm font-semibold leading-5 text-slate-800">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {models.map((model) => (
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600" key={model}>
            {model}
          </span>
        ))}
      </div>
    </div>
  );
}
