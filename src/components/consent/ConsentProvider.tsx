"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner";
import { PrivacyPreferencesDrawer } from "@/components/consent/PrivacyPreferencesDrawer";
import { defaultConsentPreferences, type ConsentPreferences } from "@/lib/consent/config";
import {
  dispatchConsentUpdated,
  pushConsentDataLayerEvent,
  readStoredConsent,
  saveStoredConsent,
} from "@/lib/consent/consentUtils";
import { setDefaultGoogleConsent, updateGoogleConsent } from "@/lib/consent/googleConsent";

type ConsentContextValue = {
  preferences: ConsentPreferences;
  isBannerVisible: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (preferences: ConsentPreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }

  return context;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultConsentPreferences);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    setDefaultGoogleConsent();

    window.setTimeout(() => {
      const storedConsent = readStoredConsent();

      if (storedConsent) {
        setPreferences(storedConsent.preferences);
        updateGoogleConsent(storedConsent.preferences);
        return;
      }

      setIsBannerVisible(true);
      pushConsentDataLayerEvent("consent_banner_view", defaultConsentPreferences);
    }, 0);
  }, []);

  function persistPreferences(nextPreferences: ConsentPreferences, eventName: string) {
    const normalized: ConsentPreferences = {
      ...nextPreferences,
      strictlyNecessary: true,
    };

    setPreferences(normalized);
    saveStoredConsent(normalized);
    updateGoogleConsent(normalized);
    dispatchConsentUpdated(normalized);
    pushConsentDataLayerEvent(eventName, normalized);
    setIsBannerVisible(false);
    setIsPreferencesOpen(false);
  }

  const value = useMemo<ConsentContextValue>(
    () => ({
      preferences,
      isBannerVisible,
      isPreferencesOpen,
      acceptAll() {
        persistPreferences(
          {
            strictlyNecessary: true,
            performance: true,
            functional: true,
            targeting: true,
          },
          "consent_accept_all",
        );
      },
      rejectOptional() {
        persistPreferences(defaultConsentPreferences, "consent_reject_optional");
      },
      savePreferences(nextPreferences) {
        persistPreferences(nextPreferences, "consent_confirm_choices");
      },
      openPreferences() {
        setIsPreferencesOpen(true);
        pushConsentDataLayerEvent("consent_preferences_open", preferences);
      },
      closePreferences() {
        setIsPreferencesOpen(false);
        pushConsentDataLayerEvent("consent_preferences_close", preferences);
      },
    }),
    [isBannerVisible, isPreferencesOpen, preferences],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <CookieConsentBanner />
      {isPreferencesOpen && <PrivacyPreferencesDrawer />}
    </ConsentContext.Provider>
  );
}
