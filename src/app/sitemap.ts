import type { MetadataRoute } from "next";
import { localePath } from "@/lib/i18n/paths";
import { locales } from "@/lib/i18n/translations";

const BASE = "https://bastard-software.com";

const pages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.9 },
  { path: "/technology", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
] as const;

// Each page is listed once per locale, and every entry carries the full alternate set —
// Google needs the annotation on both sides to treat the two as translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = {
      ...Object.fromEntries(locales.map((l) => [l, `${BASE}${localePath(l, path)}`])),
      "x-default": `${BASE}${path}`,
    };

    return locales.map((locale) => ({
      url: `${BASE}${localePath(locale, path)}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
