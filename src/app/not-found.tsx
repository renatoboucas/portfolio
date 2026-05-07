import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-cyan-700">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          The page you’re looking for may have moved, or the link may no longer exist.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
