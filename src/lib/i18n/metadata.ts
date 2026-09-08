import type { Metadata } from "next";
import { localePath } from "./paths";
import { locales, translations, type Locale, type Translations } from "./translations";

export type PageKey = keyof Translations["meta"];

const paths: Record<PageKey, string> = {
  home: "/",
  platform: "/platform",
  technology: "/technology",
  about: "/about",
  contact: "/contact",
};

const ogLocales: Record<Locale, string> = { en: "en_US", pl: "pl_PL" };

/**
 * Canonical plus a full hreflang set on every page — without these, two URLs carrying the
 * same content in different languages read as duplicates rather than translations.
 */
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const meta = translations[locale].meta[page];
  const path = paths[page];
  const url = localePath(locale, path);

  return {
    title: page === "home" ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
        "x-default": path,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      locale: ogLocales[locale],
    },
  };
}
