"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const links = [
    { href: "/platform", label: t.nav.platform },
    { href: "/technology", label: t.nav.technology },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "bg-background/85 shadow-[0_1px_20px_-8px_rgba(11,18,32,0.25)] backdrop-blur-md"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Bastard Software
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium"
          >
            {t.nav.talkToUs}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.toggleMenu}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-2 inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {t.nav.talkToUs}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
