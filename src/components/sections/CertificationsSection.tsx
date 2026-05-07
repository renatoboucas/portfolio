import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-700">Certifications and learning</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            A flexible record for current credentials and planned learning.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Certifications and ongoing learning are part of how I keep my technical foundation current
            across Salesforce, data platforms, cloud architecture, and AI implementation.
          </p>
        </div>

        {certifications.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <Card className="border-slate-200 bg-white" key={`${certification.issuer}-${certification.title}`}>
                <CardHeader>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge variant="secondary">{certification.category}</Badge>
                    {certification.status && <Badge variant="outline">{certification.status}</Badge>}
                  </div>
                  <CardTitle className="text-xl leading-tight">{certification.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{certification.issuer}</p>
                  {certification.year && (
                    <p className="mt-2 text-sm text-slate-500">{certification.year}</p>
                  )}
                  {certification.url && (
                    <a
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
                      href={certification.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View credential
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="mt-10 border-slate-200 bg-white">
            <CardContent className="p-6">
              <p className="text-sm leading-6 text-slate-600">
                Certification details can be added here as verified credentials become available.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
