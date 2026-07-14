"use client";

import Link from "next/link";
import {
  ArrowRight,
  Search,
  Landmark,
  ShieldCheck,
  Dna,
  Network,
  MessagesSquare,
  Cpu,
  Boxes,
  Syringe,
  FlaskConical,
} from "lucide-react";
import Container from "@/components/Container";
import GlowHero from "@/components/GlowHero";
import Badge from "@/components/Badge";
import SectionHeading from "@/components/SectionHeading";
import PipelineSteps from "@/components/PipelineSteps";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const trialMatcherBulletIcons = [Search, Landmark, ShieldCheck];
const oncokernelCardIcons = [ShieldCheck, Dna, Network, MessagesSquare];
const digitalTwinCardIcons = [Cpu, Boxes, FlaskConical];
const aiWetlabCardIcons = [Syringe, Dna, FlaskConical];

export default function PlatformContent() {
  const { t } = useLanguage();
  const p = t.platform;

  return (
    <>
      {/* INTRO */}
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={p.introEyebrow}
            title={
              <>
                {p.introTitlePre} <span className="text-gradient">{p.introTitleGradient}</span>
              </>
            }
            description={p.introDesc}
          />
        </Container>
      </section>

      {/* 01 — TRIAL MATCHER */}
      <section id="trial-matcher" className="scroll-mt-20 bg-background py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge>{p.trialMatcher.badge}</Badge>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.trialMatcher.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">{p.trialMatcher.desc}</p>
              <ul className="mt-8 space-y-4">
                {p.trialMatcher.bullets.map((text, i) => {
                  const Icon = trialMatcherBulletIcons[i];
                  return (
                    <li key={text} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" strokeWidth={1.75} />
                      <span className="text-sm text-foreground">{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.25)]">
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-2 font-mono text-xs text-muted">{p.trialMatcher.panelUrl}</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
                  {p.trialMatcher.indication} — <span className="text-foreground">{p.trialMatcher.indicationValue}</span>
                </div>
                <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
                  {p.trialMatcher.biomarkers} — <span className="text-foreground">{p.trialMatcher.biomarkersValue}</span>
                </div>
                <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
                  {p.trialMatcher.locationLabel} — <span className="text-foreground">{p.trialMatcher.locationValue}</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-accent/25 bg-accent-soft p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium uppercase tracking-wide text-accent-strong">
                      {p.trialMatcher.matchLabel} · 94%
                    </span>
                    <span className="text-xs text-muted">{p.trialMatcher.matchDistance}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">{p.trialMatcher.matchTitle}</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium uppercase tracking-wide text-muted">
                      {p.trialMatcher.matchLabel} · 81%
                    </span>
                    <span className="text-xs text-muted">{p.trialMatcher.matchProgramme}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">{p.trialMatcher.matchTitle2}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — ONCOKERNEL */}
      <section id="oncokernel" className="scroll-mt-20 bg-surface py-24 sm:py-28">
        <Container>
          <Badge>{p.oncokernel.badge}</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {p.oncokernel.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{p.oncokernel.desc}</p>

          <div className="mt-12">
            <PipelineSteps steps={p.oncokernel.steps} />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {p.oncokernel.cards.map((item, i) => {
              const Icon = oncokernelCardIcons[i];
              return (
                <div key={item.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 03 — DIGITAL TWIN */}
      <section id="digital-twin" className="relative isolate scroll-mt-20 overflow-hidden py-24 sm:py-28">
        <GlowHero />
        <Container className="relative">
          <Badge dark>{p.digitalTwin.badge}</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-hero-foreground sm:text-4xl">
            {p.digitalTwin.titlePre} <span className="text-gradient-light">{p.digitalTwin.titleGradient}</span> {p.digitalTwin.titlePost}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-hero-muted">
            {p.digitalTwin.descPre}{" "}
            <span className="text-sm text-hero-muted/70">{p.digitalTwin.descNote}</span>{" "}
            {p.digitalTwin.descPost}
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {p.digitalTwin.cards.map((item, i) => {
              const Icon = digitalTwinCardIcons[i];
              return (
                <div key={item.title} className="rounded-2xl border border-hero-border bg-white/[0.03] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-hero-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-hero-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 04 — AI + WET LAB */}
      <section id="ai-wetlab" className="scroll-mt-20 bg-surface py-24 sm:py-28">
        <Container>
          <Badge>{p.aiWetlab.badge}</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {p.aiWetlab.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{p.aiWetlab.desc}</p>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {p.aiWetlab.cards.map((item, i) => {
              const Icon = aiWetlabCardIcons[i];
              return (
                <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-background py-24 sm:py-28">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-foreground">
            {p.cta.title}
          </h2>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            {p.cta.button}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
