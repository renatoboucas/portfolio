import { CertificationCard } from "@/components/cards/CertificationCard";
import { certifications } from "@/data/certifications";

export function CertificationsStrip() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section className="border-b bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Certifications</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
              Verified credentials.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.slice(0, 6).map((certification) => (
              <CertificationCard
                certification={certification}
                key={`${certification.issuer}-${certification.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
