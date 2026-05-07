import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";

export function CapabilityOverview() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Reusable structure</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Services and skills are typed now, so future pages can be assembled quickly.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Sprint 1 keeps the build focused on foundations while preparing the content model for future AI,
            Salesforce, data engineering, LLM, and RAG case studies.
          </p>
        </div>
        <div className="grid gap-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Initial service areas</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <div className="rounded-md border bg-white p-4" key={service.title}>
                  <p className="font-semibold text-slate-950">{service.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Skill taxonomy</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-sm font-semibold text-slate-950">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
