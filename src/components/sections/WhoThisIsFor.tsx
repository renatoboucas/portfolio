import { UsersRound } from "lucide-react";

const audiences = [
  "Marketing operations teams",
  "Salesforce and CRM teams",
  "Data and analytics teams",
  "Nonprofits and mission-driven organizations",
  "Small and mid-sized businesses adopting AI",
  "Teams migrating from legacy marketing platforms",
  "Leaders exploring AI but unsure how to implement it responsibly",
  "Teams with fragmented customer data",
  "Teams that need architecture before implementation",
];

export function WhoThisIsFor() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Who I help</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Best fit: teams with real business problems and systems that need to work together.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The best fit is a team that has real business problems, scattered systems, and a desire
            to make AI, data, and Salesforce work together in a practical way.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {audiences.map((audience) => (
            <div className="flex gap-3 rounded-lg border bg-white p-4" key={audience}>
              <UsersRound className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
              <p className="text-sm font-medium leading-6 text-slate-700">{audience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
