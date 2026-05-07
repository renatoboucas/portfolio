import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
            <div className="divide-y divide-slate-200 border-y">
              {certifications.map((certification) => (
                <div
                  className="grid gap-4 py-5 sm:grid-cols-[64px_1fr]"
                  key={`${certification.issuer}-${certification.title}`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-slate-50 text-sm font-bold text-slate-700">
                    {certification.logoSrc ? (
                      <Image
                        alt={certification.logoAlt ?? `${certification.issuer} logo`}
                        className="h-10 w-10 object-contain"
                        height={40}
                        src={certification.logoSrc}
                        width={40}
                      />
                    ) : (
                      certification.issuer
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                    )}
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">{certification.category}</Badge>
                      {certification.status && <Badge variant="outline">{certification.status}</Badge>}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{certification.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{certification.issuer}</p>
                    {certification.url && (
                      <a
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
                        href={certification.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View credential
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border-y py-6">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                <p className="text-sm leading-6 text-slate-600">
                  Verified certification details can be added here when Renato is ready to publish
                  them. No planned or unverified credentials are shown.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
