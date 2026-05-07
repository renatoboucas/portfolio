import { DatabaseZap } from "lucide-react";
import { DataPipelineVisual } from "@/components/visuals/DataPipelineVisual";

const focusPoints = [
  "Customer data pipelines",
  "Source-to-target mapping",
  "Data quality and deduplication",
  "BigQuery, Snowflake, AWS S3",
  "Hightouch and reverse ETL",
  "Celigo and Salesforce integrations",
  "Reporting-ready data models",
  "Activation-ready segmentation",
];

export function DataEngineeringServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Data engineering</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Data Engineering for AI, CRM, and Marketing Activation
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            AI and personalization only work when the data foundation is strong. I help design data flows,
            customer profile structures, integrations, and reporting models that make downstream activation
            more accurate and reliable.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {focusPoints.map((point) => (
            <div className="flex gap-3 rounded-lg border bg-white p-4" key={point}>
              <DatabaseZap className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
              <p className="text-sm leading-6 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2">
          <DataPipelineVisual />
        </div>
      </div>
    </section>
  );
}
