import { CertificationCard, EmptyCertificationCard } from "@/components/cards/CertificationCard";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Certifications</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Verified credentials only.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              This section is intentionally conservative. It should list only credentials that are
              verified and ready to share publicly.
            </p>
          </div>

          {certifications.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((certification) => (
                <CertificationCard
                  certification={certification}
                  key={`${certification.issuer}-${certification.title}`}
                />
              ))}
            </div>
          ) : (
            <EmptyCertificationCard />
          )}
        </div>
      </div>
    </section>
  );
}
