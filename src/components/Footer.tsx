"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localePath } from "@/lib/i18n/paths";

export default function Footer() {
  const { locale, t } = useLanguage();

  const columns = [
    {
      title: t.footer.platformCol,
      links: [
        { href: localePath(locale, "/platform#programy-lekowe"), label: t.footer.programyLekowe },
        { href: localePath(locale, "/platform#trial-matcher"), label: t.footer.trialMatcher },
        { href: localePath(locale, "/platform#oncokernel"), label: t.footer.oncokernel },
        { href: localePath(locale, "/platform#digital-twin"), label: t.footer.digitalTwin },
        { href: localePath(locale, "/platform#ai-wetlab"), label: t.footer.aiWetlab },
      ],
    },
    {
      title: t.footer.companyCol,
      links: [
        { href: localePath(locale, "/technology"), label: t.nav.technology },
        { href: localePath(locale, "/about"), label: t.nav.about },
        { href: localePath(locale, "/contact"), label: t.nav.contact },
      ],
    },
  ];

  return (
    <footer className="border-t border-hero-border bg-hero-bg text-hero-muted">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-auto" />
              <span className="font-display text-lg font-semibold text-hero-foreground">
                Bastard Software
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{t.footer.tagline}</p>
            <p className="mt-3 text-xs font-mono text-hero-muted/80">{t.footer.builtOn}</p>
            <p className="mt-4 text-xs leading-relaxed text-hero-muted/70">
              {t.footer.disclaimer}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-hero-foreground/80">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-hero-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hero-border pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bastard Software. {t.footer.rightsReserved}</p>
          <a
            href="mailto:mateusz.bahyrycz@bastard-software.com"
            className="transition-colors hover:text-hero-foreground"
          >
            mateusz.bahyrycz@bastard-software.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
