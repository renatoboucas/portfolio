import { Badge } from "@/components/ui/badge";

const badges = [
  "AI Implementation",
  "LLM / RAG",
  "Data Engineering",
  "Salesforce Marketing Cloud",
  "Data Cloud",
  "CRM/CDP Activation",
  "Technical Advisory",
];

export function ContactHero() {
  return (
    <section className="border-b bg-[radial-gradient(circle_at_18%_18%,_rgba(14,165,233,0.14),_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-cyan-700">Contact</p>
        <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
          Let’s talk about AI, data, Salesforce, or your next technical challenge.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I’m open to conversations around consulting, technical advisory, AI implementation planning,
          Salesforce Marketing Cloud architecture, data integration, CRM/CDP activation, and relevant
          professional opportunities.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Whether you want to discuss AI implementation, LLM/RAG strategy, Salesforce Marketing Cloud
          architecture, data engineering, CRM/CDP activation, or a potential role, I’d be glad to connect.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge className="bg-white text-slate-700" key={badge} variant="outline">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
