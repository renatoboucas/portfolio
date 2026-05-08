export type ConsentCategoryKey =
  | "strictlyNecessary"
  | "performance"
  | "functional"
  | "targeting";

export type ConsentPreferences = {
  strictlyNecessary: true;
  performance: boolean;
  functional: boolean;
  targeting: boolean;
};

export type ConsentCategory = {
  key: ConsentCategoryKey;
  title: string;
  shortDescription: string;
  longDescription: string;
  alwaysActive?: boolean;
};

export const CONSENT_STORAGE_KEY = "renato_cookie_consent_v1";
export const CONSENT_VERSION = 1;

export const defaultConsentPreferences: ConsentPreferences = {
  strictlyNecessary: true,
  performance: false,
  functional: false,
  targeting: false,
};

export const consentCategories: ConsentCategory[] = [
  {
    key: "strictlyNecessary",
    title: "Strictly Necessary Cookies",
    shortDescription: "Required for the website to work and cannot be switched off.",
    longDescription:
      "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually set in response to actions such as setting privacy preferences or using essential site features. These cookies do not store information used for analytics or advertising.",
    alwaysActive: true,
  },
  {
    key: "performance",
    title: "Performance Cookies",
    shortDescription: "Help measure visits and improve site performance.",
    longDescription:
      "These cookies help understand how visitors interact with the website, including which pages are visited and how the site performs. The information is aggregated and used to improve the website experience.",
  },
  {
    key: "functional",
    title: "Functional Cookies",
    shortDescription: "Enable enhanced functionality and personalization.",
    longDescription:
      "These cookies allow the website to remember choices and provide enhanced functionality. If disabled, some optional features may not work as intended.",
  },
  {
    key: "targeting",
    title: "Targeting / Advertising Cookies",
    shortDescription: "Support advertising, retargeting, and personalized measurement.",
    longDescription:
      "These cookies may be used to support advertising, retargeting, and personalized measurement. If disabled, advertising and personalization features will be limited.",
  },
];
