import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="scroll-mt-24 border-t pt-5"
      id={service.slug}
    >
      <div className="mb-3">
        <Badge variant="secondary">{service.category}</Badge>
      </div>
      <h3 className="text-xl font-semibold leading-tight text-slate-950">{service.title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-600">{service.summary}</p>
      <Link
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-cyan-700"
        href={`/services#${service.slug}`}
      >
        View focus
        <ArrowDownRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
