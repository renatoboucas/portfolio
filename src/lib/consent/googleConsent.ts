import { defaultConsentPreferences, type ConsentPreferences } from "@/lib/consent/config";
import {
  preferencesToGoogleConsent,
  pushConsentDataLayerEvent,
  type GoogleConsentState,
} from "@/lib/consent/consentUtils";

type GtagCommand = "consent" | "js" | "config" | "event" | "set";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, action: string | Date, params?: Record<string, unknown>) => void;
  }
}

export function ensureDataLayer() {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

export function setDefaultGoogleConsent() {
  if (typeof window === "undefined") {
    return;
  }

  ensureDataLayer();
  window.gtag?.("consent", "default", preferencesToGoogleConsent(defaultConsentPreferences));
}

export function updateGoogleConsent(preferences: ConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  ensureDataLayer();
  window.gtag?.("consent", "update", preferencesToGoogleConsent(preferences));
  pushConsentDataLayerEvent("consent_update", preferences);
}

export function getDefaultGoogleConsentScript() {
  const consent: GoogleConsentState = preferencesToGoogleConsent(defaultConsentPreferences);

  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', ${JSON.stringify(consent)});
  `;
}
