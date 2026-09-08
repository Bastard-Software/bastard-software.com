import { defaultLocale, locales, type Locale } from "./translations";

/** English is unprefixed so its URLs stay as indexed; every other locale gets a prefix. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1];
  const prefixed = (locales as readonly string[]).includes(first) && first !== defaultLocale;
  return prefixed ? (first as Locale) : defaultLocale;
}

/** The locale-free path, so a switcher can rebuild it for another locale. */
export function stripLocale(pathname: string): string {
  const locale = localeFromPathname(pathname);
  if (locale === defaultLocale) return pathname;
  return pathname.slice(locale.length + 1) || "/";
}
