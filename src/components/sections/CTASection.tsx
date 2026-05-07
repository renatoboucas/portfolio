import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            Want to discuss AI, data, or Salesforce architecture?
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-200">
            I’m open to consulting, technical advisory, architecture reviews, and relevant professional opportunities.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100" size="lg">
            <Link href="/contact">
              Contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="border-white/70 text-white hover:bg-white/10" size="lg" variant="outline">
            <Link href="/projects">View Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
