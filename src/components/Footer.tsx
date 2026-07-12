import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/Container";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/platform#trial-matcher", label: "Trial Matcher" },
      { href: "/platform#oncokernel", label: "OncoKernel" },
      { href: "/platform#digital-twin", label: "Digital Twin" },
      { href: "/platform#ai-wetlab", label: "AI + Wet Lab" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/technology", label: "Technology" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hero-border bg-hero-bg text-hero-muted">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <span className="font-display text-lg font-semibold text-hero-foreground">
                Bastard Software
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              An on-premise AI and GPU-simulation pipeline for personalized cancer
              treatment — from trial matching to tumor genome interpretation to
              in-silico therapy testing.
            </p>
            <p className="mt-3 text-xs font-mono text-hero-muted/80">
              Built on NVIDIA CUDA, BioNeMo &amp; Evo 2.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-hero-muted/70">
              Our tools provide informational, research-oriented decision support.
              They do not diagnose, prescribe, or replace the judgment of a
              qualified clinician.
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
          <p>© {new Date().getFullYear()} Bastard Software. All rights reserved.</p>
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
