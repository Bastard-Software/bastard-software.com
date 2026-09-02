"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Dna,
  Cpu,
  ShieldCheck,
  Microscope,
  MapPinned,
  BrainCircuit,
  Syringe,
  Layers,
  Users,
} from "lucide-react";
import Container from "@/components/Container";
import GlowHero from "@/components/GlowHero";
import Badge from "@/components/Badge";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const pillarIcons = [MapPinned, Dna, Cpu, Syringe];
const pillarHrefs = ["/platform#trial-matcher", "/platform#oncokernel", "/platform#digital-twin", "/platform#ai-wetlab"];
const highlightIcons = [Cpu, ShieldCheck, BrainCircuit, Microscope, Layers, Users];

export default function Home() {
  const { t } = useLanguage();
  const pillars = t.home.pillars.map((p, i) => ({
    ...p,
    icon: pillarIcons[i],
    href: pillarHrefs[i],
    learnMore: t.home.learnMore,
  }));
  const highlights = t.home.highlights.map((h, i) => ({ ...h, icon: highlightIcons[i] }));

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <GlowHero />
        <Container className="relative py-28 sm:py-36">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Badge dark dot>
              {t.home.badge}
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-hero-foreground sm:text-6xl">
              {t.home.h1Pre}{" "}
              <span className="text-gradient-light">{t.home.h1Gradient}</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-hero-muted">
              {t.home.sub}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/platform"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                {t.home.exploreBtn}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                {t.home.talkBtn}
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {t.home.pipelineChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-hero-border bg-white/5 px-3 py-1 font-mono text-xs text-hero-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* THESIS */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t.home.problemEyebrow}
              title={
                <>
                  {t.home.problemTitlePre}{" "}
                  <span className="text-gradient">{t.home.problemTitleGradient}</span>
                </>
              }
              description={t.home.problemDesc}
            />
          </Reveal>
        </Container>
      </section>

      {/* LIVE NOW — the one product that already ships, and the only proof of traction
          on the page. Kept above the roadmap pillars on purpose. */}
      <section className="relative overflow-hidden border-y border-border bg-background py-24 sm:py-28">
        <Container className="relative">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-accent-strong">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {t.home.liveEyebrow}
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {t.home.liveTitle}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{t.home.liveDesc}</p>
                <ul className="mt-6 space-y-3">
                  {t.home.liveBullets.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" strokeWidth={2.5} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://oncokernel.com"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-signal px-6 py-3 text-sm font-medium text-white shadow-[0_16px_40px_-16px_rgba(8,145,168,0.8)] transition-transform hover:-translate-y-0.5"
                >
                  {t.home.liveCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {t.home.liveStats.map((stat) => (
                  <div key={stat.label} className="bg-white p-6">
                    <dt className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-xs leading-relaxed text-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="relative overflow-hidden bg-surface py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.platformEyebrow}
              title={t.home.platformTitle}
              description={t.home.platformDesc}
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.href} delay={i * 0.08}>
                <PillarCard {...pillar} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TECH HIGHLIGHTS */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t.home.whyEyebrow}
              title={t.home.whyTitle}
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
