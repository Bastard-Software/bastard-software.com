"use client";

import {
  Server,
  Lock,
  Network,
  Dna,
  Cpu,
  Microscope,
  Boxes,
  Sparkles,
  Workflow,
} from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import GlowHero from "@/components/GlowHero";
import Badge from "@/components/Badge";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const stack = [
  { name: "NVIDIA BioNeMo", nvidia: true },
  { name: "SYCL / CUDA", nvidia: true },
  { name: "Evo 2", nvidia: false },
  { name: "Nextflow", nvidia: false },
  { name: "Docker", nvidia: false },
  { name: "SAGE & PURPLE", nvidia: false },
  { name: "LangGraph", nvidia: false },
  { name: "Qdrant", nvidia: false },
  { name: "Python", nvidia: false },
];

const privacyRowIcons = [Dna, Boxes, Network];
const aiStackCardIcons = [Dna, Cpu, Workflow, Network];
const simulationCardIcons = [Cpu, Microscope, Sparkles];

export default function TechnologyContent() {
  const { t } = useLanguage();
  const tech = t.technology;

  return (
    <>
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={tech.eyebrow}
            title={
              <>
                {tech.titlePre} <span className="text-gradient">{tech.titleGradient}</span>
              </>
            }
            description={tech.desc}
          />
        </Container>
      </section>

      {/* PRIVACY ARCHITECTURE */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge>{tech.privacy.badge}</Badge>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground">
                {tech.privacy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">{tech.privacy.p1}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">{tech.privacy.p2}</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-accent-strong">
                <Server className="h-4 w-4" /> {tech.privacy.boundaryLabel}
              </div>
              <div className="mt-5 space-y-3">
                {tech.privacy.rows.map((row, i) => {
                  const Icon = privacyRowIcons[i];
                  return (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-accent-strong" />
                        <span className="text-sm text-foreground">{row.label}</span>
                      </div>
                      <span className="font-mono text-xs text-muted">{row.note}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Lock className="h-3.5 w-3.5" />
                  {tech.privacy.note1}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Cpu className="h-3.5 w-3.5" />
                  {tech.privacy.note2}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI STACK */}
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow={tech.aiStack.eyebrow} title={tech.aiStack.title} />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {tech.aiStack.cards.map((item, i) => {
              const Icon = aiStackCardIcons[i];
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

      {/* GPU WORKLOAD JUSTIFICATION */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={tech.gpuJustification.eyebrow}
            title={
              <>
                {tech.gpuJustification.titlePre}{" "}
                <span className="text-gradient">{tech.gpuJustification.titleGradient}</span>
              </>
            }
            description={tech.gpuJustification.desc}
          />
          <div className="mt-12 space-y-4">
            {tech.gpuJustification.workloads.map((row) => (
              <div
                key={row.workload}
                className="grid grid-cols-1 gap-3 rounded-2xl border border-border bg-white p-6 sm:grid-cols-[1fr_1.2fr_1.6fr] sm:items-center sm:gap-6"
              >
                <span className="font-display text-base font-semibold text-foreground">
                  {row.workload}
                </span>
                <span className="inline-flex w-fit items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-foreground">
                  {row.tech}
                </span>
                <p className="text-sm leading-relaxed text-muted">{row.why}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs text-muted">
            <span className="text-accent-strong">{tech.gpuJustification.roadmapPre}</span>{" "}
            {tech.gpuJustification.roadmapText}
          </p>
        </Container>
      </section>

      {/* GPU / SIMULATION */}
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <GlowHero />
        <Container className="relative">
          <Badge dark>{tech.simulation.badge}</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-hero-foreground">
            {tech.simulation.titlePre} <span className="text-gradient-light">{tech.simulation.titleGradient}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-hero-muted">
            {tech.simulation.descPre}{" "}
            <span className="text-sm text-hero-muted/70">{tech.simulation.descNote}</span>{" "}
            {tech.simulation.descPost}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {tech.simulation.cards.map((item, i) => {
              const Icon = simulationCardIcons[i];
              return (
                <div key={item.title} className="rounded-2xl border border-hero-border bg-white/[0.03] p-6">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-base font-semibold text-hero-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-hero-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* STACK BADGES */}
      <section className="bg-surface py-20">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted">
            {tech.builtWith}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item.name}
                className={`rounded-full border px-4 py-2 font-mono text-xs text-foreground ${
                  item.nvidia ? "border-nvidia/40 bg-nvidia/5" : "border-border bg-white"
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
