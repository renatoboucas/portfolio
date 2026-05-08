"use client";

import { useConsent } from "@/components/consent/ConsentProvider";

export function ManageCookiesButton() {
  const { openPreferences } = useConsent();

  return (
    <button
      className="text-slate-600 hover:text-slate-950"
      onClick={openPreferences}
      type="button"
    >
      Manage Cookies
    </button>
  );
}
