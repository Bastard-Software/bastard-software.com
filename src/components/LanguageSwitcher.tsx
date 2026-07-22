"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales } from "@/lib/i18n/translations";

const labels: Record<string, string> = {
  en: "EN",
  pl: "PL",
};

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-surface p-0.5 font-mono text-xs font-medium ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === l
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
