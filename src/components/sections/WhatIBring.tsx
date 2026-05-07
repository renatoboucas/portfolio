import { Blocks, BrainCircuit, BriefcaseBusiness, CloudCog, Hammer, Route } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const strengths = [
  {
    icon: Blocks,
    title: "Architecture Thinking",
    description:
      "I can step back from individual tasks and design how platforms, data flows, automations, and business processes should work together.",
  },
  {
    icon: Hammer,
    title: "Hands-On Technical Execution",
    description:
      "I bring practical implementation experience with SQL, Salesforce Marketing Cloud, CloudPages, AMPscript, SSJS, data extensions, integrations, reporting automations, and platform troubleshooting.",
  },
  {
    icon: BrainCircuit,
    title: "AI and Data Strategy",
    description:
      "I help connect AI use cases to the data, knowledge sources, workflows, and governance needed to make them useful beyond a demo.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business and Team Leadership",
    description:
      "I understand how to work across technical teams, marketing teams, stakeholders, vendors, and leaders to move initiatives from idea to execution.",
  },
  {
    icon: CloudCog,
    title: "Marketing Technology Depth",
    description:
      "I understand how customer data, campaign operations, preference management, deliverability, segmentation, and automation platforms work together.",
  },
  {
    icon: Route,
    title: "Practical Consulting Mindset",
    description:
      "I focus on clarity, implementation paths, risk reduction, and solutions that teams can realistically maintain.",
  },
];

export function WhatIBring() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">What I bring</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Senior technical judgment with practical implementation depth.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((strength) => (
            <Card className="border-slate-200 bg-white" key={strength.title}>
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-cyan-50 text-cyan-700">
                  <strength.icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-xl leading-tight">{strength.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
