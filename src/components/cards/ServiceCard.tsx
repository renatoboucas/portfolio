import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card
      className="h-full scroll-mt-24 border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
      id={service.slug}
    >
      <CardHeader>
        <div className="mb-3 flex flex-wrap gap-2">
          {service.featured && <Badge>Featured</Badge>}
          <Badge variant="secondary">{service.category}</Badge>
        </div>
        <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-600">{service.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tools.slice(0, 5).map((tool) => (
            <Badge key={tool} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>
        <Button asChild className="mt-6" variant="outline">
          <Link href={`/services#${service.slug}`}>
            View service focus
            <ArrowDownRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
