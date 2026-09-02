import { defaultLocale, locales, type Locale } from "./translations";

export const STORAGE_KEY = "bs-locale";

const listeners = new Set<() => void>();

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * localStorage is the store itself, so no module-level cache can go stale. Safe as a
 * `getSnapshot` because it returns a string, compared by value.
 */
export function getLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
    const browser = window.navigator.language.slice(0, 2);
    if (isLocale(browser)) return browser;
  } catch {
    // Blocked storage: fall back to the default.
  }
  return defaultLocale;
}

/** The prerendered HTML is English, so hydration has to start from the same value. */
export function getServerLocale(): Locale {
  return defaultLocale;
}

export function setLocale(next: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Choice applies for this page only.
  }
  for (const listener of listeners) listener();
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
