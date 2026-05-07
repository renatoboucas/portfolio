import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="grid gap-4 border-t pt-5 sm:grid-cols-[56px_1fr]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-slate-50 text-xs font-bold text-slate-700">
        {certification.logo ? (
          <Image
            alt={certification.logoAlt ?? `${certification.issuer} logo`}
            className="h-9 w-9 object-contain"
            height={36}
            src={certification.logo}
            width={36}
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
          <Badge variant="outline">{certification.status}</Badge>
        </div>
        <h3 className="text-base font-semibold leading-tight text-slate-950">{certification.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{certification.issuer}</p>
        {certification.issuedAt && (
          <p className="mt-1 text-xs text-slate-500">{certification.issuedAt}</p>
        )}
        {certification.credentialUrl && (
          <a
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
            href={certification.credentialUrl}
            rel="noreferrer"
            target="_blank"
          >
            View credential
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export function EmptyCertificationCard() {
  return (
    <div className="border-y py-5">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
        <p className="text-sm leading-6 text-slate-600">
          Verified certifications can be added here with official logo assets when they are ready
          to publish. No planned or unverified credentials are displayed.
        </p>
      </div>
    </div>
  );
}
