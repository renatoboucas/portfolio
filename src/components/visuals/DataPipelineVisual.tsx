import { DatabaseZap } from "lucide-react";

const stages = [
  { title: "Source Systems", nodes: ["Salesforce CRM", "Web forms", "Events"] },
  { title: "Data Pipelines", nodes: ["APIs", "ETL / ELT", "Quality checks"] },
  { title: "Warehouse / CDP", nodes: ["BigQuery", "Snowflake", "Data Cloud"] },
  { title: "Segmentation", nodes: ["Profiles", "Consent", "Audiences"] },
  { title: "Activation", nodes: ["Hightouch", "SFMC", "Journeys"] },
  { title: "Reporting", nodes: ["Dashboards", "Campaign KPIs", "Feedback"] },
];

export function DataPipelineVisual() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Conceptual data pipeline and activation flow">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-white">
          <DatabaseZap className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-950">Data pipeline to activation</p>
          <p className="text-xs text-slate-500">Customer data moving toward usable business workflows</p>
        </div>
      </div>
      <div className="grid gap-3 lg:grid-cols-6">
        {stages.map((stage) => (
          <div className="rounded-lg border bg-slate-50 p-3" key={stage.title}>
            <p className="text-sm font-semibold text-slate-900">{stage.title}</p>
            <div className="mt-3 grid gap-2">
              {stage.nodes.map((node) => (
                <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200" key={node}>
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
