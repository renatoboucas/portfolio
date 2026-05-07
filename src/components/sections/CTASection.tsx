import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-[linear-gradient(135deg,_#0f172a_0%,_#123047_52%,_#0f766e_100%)] py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-200">Next step</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
            Need help turning AI, data, and Salesforce into something that actually works?
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-200">
            I help teams design practical systems that connect customer data, marketing platforms,
            CRM processes, and AI capabilities into reliable business workflows.
          </p>
          <p className="mt-4 text-sm font-medium text-cyan-100">
            Available for consulting, technical advisory, architecture reviews, and AI implementation planning.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100" size="lg">
            <Link href="/projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="border-white/70 text-white hover:bg-white/10" size="lg" variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
