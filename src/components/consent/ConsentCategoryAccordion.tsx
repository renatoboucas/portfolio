"use client";

import { Minus, Plus } from "lucide-react";

import { ConsentToggle } from "@/components/consent/ConsentToggle";
import type {
  ConsentCategory,
  ConsentCategoryKey,
  ConsentPreferences,
} from "@/lib/consent/config";

type ConsentCategoryAccordionProps = {
  category: ConsentCategory;
  isOpen: boolean;
  onToggleOpen: () => void;
  preferences: ConsentPreferences;
  setPreferences: (preferences: ConsentPreferences) => void;
};

export function ConsentCategoryAccordion({
  category,
  isOpen,
  onToggleOpen,
  preferences,
  setPreferences,
}: ConsentCategoryAccordionProps) {
  const isAlwaysActive = Boolean(category.alwaysActive);
  const isChecked = preferences[category.key];

  function updateCategory(key: ConsentCategoryKey, checked: boolean) {
    if (key === "strictlyNecessary") {
      return;
    }

    setPreferences({
      ...preferences,
      [key]: checked,
      strictlyNecessary: true,
    });
  }

  return (
    <section className="border-t border-slate-200">
      <div className="flex items-start justify-between gap-4 py-4">
        <button
          aria-expanded={isOpen}
          className="flex flex-1 items-start gap-3 text-left"
          onClick={onToggleOpen}
          type="button"
        >
          <span className="mt-0.5 text-slate-500">
            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-950">{category.title}</span>
            <span className="mt-1 block text-xs leading-5 text-slate-600">
              {category.shortDescription}
            </span>
          </span>
        </button>
        {isAlwaysActive ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            Always Active
          </span>
        ) : (
          <ConsentToggle
            checked={Boolean(isChecked)}
            label={`Toggle ${category.title}`}
            onChange={(checked) => updateCategory(category.key, checked)}
          />
        )}
      </div>
      {isOpen && (
        <div className="pb-5 pl-7 text-sm leading-6 text-slate-600">
          {category.longDescription}
        </div>
      )}
    </section>
  );
}
