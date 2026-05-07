import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Skills and technology stack</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            A practical stack for AI implementation, data activation, and Salesforce architecture.
          </h2>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div className="border-t pt-5" key={group.title}>
              <h3 className="text-base font-semibold text-slate-950">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100" key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
