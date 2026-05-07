import { Badge } from "@/components/ui/badge";
import { ProfileVisual } from "@/components/visuals/ProfileVisual";

const badges = [
  "AI Implementation",
  "LLM / RAG",
  "Data Engineering",
  "Salesforce Marketing Cloud",
  "Data Cloud",
  "CRM/CDP Activation",
  "Marketing Automation",
  "Technical Leadership",
];

export function AboutHero() {
  return (
    <section className="border-b bg-[radial-gradient(circle_at_18%_18%,_rgba(14,165,233,0.14),_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">About Renato Boucas</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            I help teams make AI, data, and Salesforce work together in the real world.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            My background combines IT leadership, data engineering, Salesforce Marketing Cloud architecture,
            CRM/CDP activation, marketing automation, and emerging AI implementation using LLMs, RAG,
            and workflow automation.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            I’m especially interested in the space where business teams need practical systems: not just
            dashboards, not just campaigns, and not just AI experiments, but connected workflows that help
            people make better decisions and execute with confidence.
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
