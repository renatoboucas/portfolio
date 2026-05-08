"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { ConsentCategoryAccordion } from "@/components/consent/ConsentCategoryAccordion";
import { useConsent } from "@/components/consent/ConsentProvider";
import { Button } from "@/components/ui/button";
import {
  consentCategories,
  type ConsentCategoryKey,
  type ConsentPreferences,
} from "@/lib/consent/config";

export function PrivacyPreferencesDrawer() {
  const { closePreferences, isPreferencesOpen, preferences, savePreferences } = useConsent();
  const [draftPreferences, setDraftPreferences] = useState<ConsentPreferences>(preferences);
  const [openCategory, setOpenCategory] = useState<ConsentCategoryKey>("strictlyNecessary");

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isPreferencesOpen) {
        closePreferences();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closePreferences, isPreferencesOpen]);

  if (!isPreferencesOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        aria-label="Close privacy preferences"
        className="absolute inset-0 bg-slate-950/30"
        onClick={closePreferences}
        type="button"
      />
      <aside
        aria-label="Privacy preferences"
        className="relative flex h-full w-full max-w-[480px] flex-col bg-white shadow-2xl"
        role="dialog"
      >
        <header className="flex items-start justify-between gap-4 border-b px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              RB
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-950">Renato Boucas</p>
              <p className="text-xs text-slate-500">Privacy Preferences</p>
            </div>
          </div>
          <Button aria-label="Close privacy preferences" onClick={closePreferences} size="icon" variant="ghost">
            <X className="h-4 w-4" />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
            Privacy Preferences
          </h2>
          <p className="mt-2 text-sm font-semibold text-slate-700">
            Do Not Sell or Share My Personal Data
          </p>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            When you visit this website, we may use cookies or similar technologies to understand
            site performance, improve the experience, and support optional functionality. You can
            choose which categories to allow below. Strictly necessary cookies are required for the
            site to work and cannot be disabled.
          </p>
          <Link className="mt-4 inline-flex text-sm font-semibold text-cyan-700" href="/cookie-policy">
            View our cookie policy
          </Link>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Manage Consent Preferences
          </h3>
          <div className="mt-3">
            {consentCategories.map((category) => (
              <ConsentCategoryAccordion
                category={category}
                isOpen={openCategory === category.key}
                key={category.key}
                onToggleOpen={() =>
                  setOpenCategory((current) =>
                    current === category.key ? "strictlyNecessary" : category.key,
                  )
                }
                preferences={draftPreferences}
                setPreferences={setDraftPreferences}
              />
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 border-t bg-white p-5">
          <Button
            className="w-full"
            onClick={() => savePreferences(draftPreferences)}
            type="button"
          >
            Confirm My Choices
          </Button>
        </div>
      </aside>
    </div>
  );
}
