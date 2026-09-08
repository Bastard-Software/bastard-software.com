"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localePath, stripLocale } from "@/lib/i18n/paths";
import { locales } from "@/lib/i18n/translations";

const labels: Record<string, string> = {
  en: "EN",
  pl: "PL",
};

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const path = stripLocale(usePathname());

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-surface p-0.5 font-mono text-xs font-medium ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={localePath(l, path)}
          hrefLang={l}
          aria-current={locale === l ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === l
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {labels[l]}
        </Link>
      ))}
    </div>
  );
}
