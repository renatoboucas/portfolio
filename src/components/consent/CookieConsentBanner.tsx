"use client";

import Link from "next/link";
import { X } from "lucide-react";

import { useConsent } from "@/components/consent/ConsentProvider";
import { Button } from "@/components/ui/button";

export function CookieConsentBanner() {
  const { acceptAll, isBannerVisible, openPreferences, rejectOptional } = useConsent();

  if (!isBannerVisible) {
    return null;
  }

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 shadow-2xl backdrop-blur"
      role="dialog"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex flex-1 gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-white">
            RB
          </span>
          <div>
            <h2 className="text-base font-semibold text-slate-950">Your privacy choices</h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
              We use cookies and similar technologies to measure site performance, improve the
              experience, and understand how visitors interact with this portfolio. You can accept
              optional cookies or manage your privacy preferences.
            </p>
            <Link className="mt-2 inline-flex text-sm font-semibold text-cyan-700" href="/cookie-policy">
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:items-center">
          <Button onClick={openPreferences} type="button" variant="outline">
            Your Privacy Rights
          </Button>
          <Button onClick={acceptAll} type="button">
            Accept Cookies
          </Button>
          <Button
            aria-label="Close cookie banner and reject optional cookies"
            className="self-start sm:self-auto"
            onClick={rejectOptional}
            size="icon"
            type="button"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
