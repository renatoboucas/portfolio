import { Bot, Database, Network, Send } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workAreas = [
  {
    icon: Bot,
    title: "AI Implementation and LLM Applications",
    description:
      "Designing practical AI solutions using OpenAI, Anthropic, Google Gemini, and related tools to support business workflows, knowledge retrieval, automation, and customer experience improvements.",
  },
  {
    icon: Network,
    title: "RAG and Knowledge Architecture",
    description:
      "Planning and building retrieval-augmented generation systems that connect LLMs to trusted business data, documents, policies, support content, and operational knowledge.",
  },
  {
    icon: Database,
    title: "Data Engineering and Integration",
    description:
      "Designing data flows, data models, pipelines, and activation layers across systems such as Salesforce, Snowflake, BigQuery, AWS S3, Hightouch, Celigo, and marketing platforms.",
  },
  {
    icon: Send,
    title: "Salesforce and Marketing Automation",
    description:
      "Architecting Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, journeys, preference centers, publication lists, audience segmentation, and campaign operations.",
  },
];

export function WhatIDo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">What I do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            AI implementation with the data and platform architecture to make it useful.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            The work combines strategy, hands-on technical design, and delivery patterns across AI,
            data engineering, Salesforce, and marketing operations.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {workAreas.map((area) => (
            <Card className="border-slate-200 bg-white" key={area.title}>
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-cyan-50 text-cyan-700">
                  <area.icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-xl leading-tight">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
