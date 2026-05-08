import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  defaultConsentPreferences,
  type ConsentPreferences,
} from "@/lib/consent/config";

export type StoredConsent = {
  version: 1;
  preferences: ConsentPreferences;
  updatedAt: string;
};

export type GoogleConsentValue = "granted" | "denied";

export type GoogleConsentState = {
  ad_storage: GoogleConsentValue;
  analytics_storage: GoogleConsentValue;
  ad_user_data: GoogleConsentValue;
  ad_personalization: GoogleConsentValue;
  functionality_storage: GoogleConsentValue;
  personalization_storage: GoogleConsentValue;
  security_storage: "granted";
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function createStoredConsent(preferences: ConsentPreferences): StoredConsent {
  return {
    version: CONSENT_VERSION,
    preferences: {
      ...preferences,
      strictlyNecessary: true,
    },
    updatedAt: new Date().toISOString(),
  };
}

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  if (!stored) {
    return null;
  }

  try {
    const parsed = JSON.parse(stored) as StoredConsent;

    if (parsed.version !== CONSENT_VERSION || !parsed.preferences) {
      return null;
    }

    return {
      version: CONSENT_VERSION,
      updatedAt: parsed.updatedAt,
      preferences: {
        ...defaultConsentPreferences,
        ...parsed.preferences,
        strictlyNecessary: true,
      },
    };
  } catch {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    return null;
  }
}

export function saveStoredConsent(preferences: ConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify(createStoredConsent(preferences)),
  );
}

export function clearStoredConsent() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
}

export function preferencesToGoogleConsent(
  preferences: ConsentPreferences,
): GoogleConsentState {
  return {
    ad_storage: preferences.targeting ? "granted" : "denied",
    analytics_storage: preferences.performance ? "granted" : "denied",
    ad_user_data: preferences.targeting ? "granted" : "denied",
    ad_personalization: preferences.targeting ? "granted" : "denied",
    functionality_storage: preferences.functional ? "granted" : "denied",
    personalization_storage: preferences.functional ? "granted" : "denied",
    security_storage: "granted",
  };
}

export function pushConsentDataLayerEvent(
  event: string,
  preferences?: ConsentPreferences,
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...(preferences
      ? {
          consent_preferences: {
            performance: preferences.performance,
            functional: preferences.functional,
            targeting: preferences.targeting,
          },
        }
      : {}),
  });
}

export function dispatchConsentUpdated(preferences: ConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("renatoConsentUpdated", {
      detail: preferences,
    }),
  );
}
