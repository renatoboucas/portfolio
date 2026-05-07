import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Renato Boucas",
    };
  }

  return {
    title: `${service.title} | Renato Boucas`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-700"
            href="/services"
          >
            <ArrowLeft className="h-4 w-4" />
            Services
          </Link>
          <div className="mt-8">
            <Badge variant="secondary">{service.category}</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{service.summary}</p>
          </div>
        </div>
      </section>

      <main className="bg-white py-16">
        <div className="mx-auto grid max-w-4xl gap-12 px-4 sm:px-6 lg:px-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">How I help</h2>
            <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
          </section>

          <section className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Outcomes</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {service.outcomes.map((outcome) => (
                  <li className="border-t pt-3" key={outcome}>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Deliverables</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {service.deliverables.map((deliverable) => (
                  <li className="border-t pt-3" key={deliverable}>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Tools and platforms</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <li className="rounded-full border px-3 py-1 text-xs font-medium text-slate-600" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Best fit</h2>
            <ul className="mt-4 divide-y divide-slate-200 border-y text-sm leading-6 text-slate-600">
              {service.bestFor.map((item) => (
                <li className="py-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <CTASection />
    </>
  );
}
