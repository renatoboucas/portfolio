import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";

const focusAreas = [
  "LLM/RAG Architecture",
  "AI Workflow Automation",
  "Salesforce Marketing Cloud",
  "Data Cloud & CRM/CDP",
  "Data Engineering",
  "Marketing Automation",
];

const heroCertifications = certifications.filter((certification) => certification.logo).slice(0, 8);

export function Hero() {
  return (
    <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#edf8fb_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            AI & Salesforce Architect | Data Engineering Manager | 3x Salesforce Certified
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            AI Architect for data, Salesforce, and practical business automation.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I design AI-enabled systems that connect LLMs, trusted data, Salesforce ecosystems,
            and business workflows into practical solutions teams can use and maintain.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#ask-ai">Ask AI Assistant</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-sm text-slate-600">
          <p>18+ years across software engineering, data, cloud, DevOps, AI, and Salesforce architecture.</p>
          {heroCertifications.length > 0 && (
            <div className="mt-6 flex items-center gap-4 overflow-x-auto pb-2">
              {heroCertifications.map((certification) => (
                <div
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-sm"
                  key={certification.title}
                  title={certification.title}
                >
                  <Image
                    alt={certification.logoAlt ?? certification.title}
                    className="h-full w-full object-contain"
                    height={84}
                    src={certification.logo as string}
                    width={84}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
