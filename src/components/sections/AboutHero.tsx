import { Badge } from "@/components/ui/badge";
import { ProfileVisual } from "@/components/visuals/ProfileVisual";

const badges = [
  "AI Architect",
  "LLM/RAG",
  "Data Engineering",
  "Salesforce Marketing Cloud",
  "Data Cloud",
  "CRM/CDP Activation",
];

export function AboutHero() {
  return (
    <section className="border-b bg-[radial-gradient(circle_at_18%_18%,_rgba(14,165,233,0.14),_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">About Renato Boucas</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            AI Architect focused on practical customer systems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I help teams connect systems, structure customer data, and turn AI ideas into workflows
            that are useful, maintainable, and grounded in real operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge className="bg-white text-slate-700" key={badge} variant="outline">
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <ProfileVisual />
      </div>
    </section>
  );
}
