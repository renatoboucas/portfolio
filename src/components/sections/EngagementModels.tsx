import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const models = [
  {
    title: "Architecture Review",
    description:
      "A focused review of your current AI, data, Salesforce, or marketing automation setup with recommendations, risks, and next steps.",
    bestFor: "Teams that need clarity before committing to a larger implementation.",
  },
  {
    title: "Implementation Planning",
    description:
      "A structured engagement to define requirements, architecture, roadmap, tools, data sources, and delivery phases.",
    bestFor:
      "Teams preparing to launch an AI, data integration, Salesforce, or marketing automation initiative.",
  },
  {
    title: "Hands-On Technical Support",
    description:
      "Practical implementation support for SFMC, SQL, CloudPages, data integrations, reporting automations, and AI workflow prototypes.",
    bestFor: "Teams that need experienced technical help to move work forward.",
  },
  {
    title: "Fractional Technical Advisor",
    description:
      "Ongoing advisory support for teams that need senior architecture guidance without a full-time hire.",
    bestFor:
      "Growing teams, marketing operations groups, nonprofits, and businesses modernizing their customer data systems.",
  },
];

export function EngagementModels() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Engagement models</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Flexible ways to get senior architecture and implementation help.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {models.map((model) => (
            <Card className="border-slate-200 bg-white" key={model.title}>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">{model.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{model.description}</p>
                <p className="mt-5 text-xs font-semibold uppercase text-slate-500">Best for</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{model.bestFor}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
