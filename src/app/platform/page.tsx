import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Bastard Software platform: a clinical trial matcher, the OncoKernel tumor genome interpretation pipeline, the Digital Twin GPU simulation engine, and AI-designed, wet-lab validated mRNA vaccines and CAR-T therapies.",
};

const oncoKernelSteps = [
  {
    label: "Block 1 — Ingestion",
    title: "Raw reads to a characterised genome",
    description:
      "Somatic variant calling, tumor purity/ploidy/TMB/MSI, and HLA typing — wrapping clinically-validated, open-source tools rather than re-deriving solved bioinformatics.",
  },
  {
    label: "Block 2 — Knowledge Graph",
    title: "Annotate and score every variant",
    description:
      "Known variants are resolved against a live graph of genes, drugs, and indications; variants of uncertain significance are scored with a genomic foundation model.",
  },
  {
    label: "Block 3 — Reasoning",
    title: "Match genotype to therapy",
    description:
      "A multi-agent retrieval system matches the patient's molecular profile against guidelines, literature, and live trial registries — every claim cites its source.",
  },
  {
    label: "Block 4 — Dashboard",
    title: "Present it to the physician",
    description:
      "A scannable dashboard with a grounded chat copilot and one-click PDF export — informational decision support, the oncologist decides.",
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Platform"
            title="One pipeline, growing set of tools"
            description="Each tool is built to stand on its own, and together they form a single continuous path — from the first search for a nearby trial, to a full molecular interpretation of the tumor, to simulating and designing the therapy itself. More tools join this pipeline over time."
          />
        </Container>
      </section>

      {/* 01 — TRIAL MATCHER */}
      <section id="trial-matcher" className="scroll-mt-20 bg-background py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge>In development — the front door</Badge>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Find the closest matching clinical trial in seconds
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A public-data panel built for oncologists. Enter an indication,
                a few biomarkers, and a location — get back the nearest
                recruiting clinical trials and the drug reimbursement
                programmes a patient would qualify for. Europe first: EU trial
                registries (CTIS, EUCTR) unioned with ClinicalTrials.gov, plus
                national drug reimbursement schemes.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Search, text: "Ranked by clinical fit and distance to the patient" },
                  { icon: Landmark, text: "Includes national drug reimbursement programmes, not just trials" },
                  { icon: ShieldCheck, text: "Public registries only — no patient sequence ever touched" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" strokeWidth={1.75} />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.25)]">
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-2 font-mono text-xs text-muted">trial-matcher.bastard-software.com</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
                  Indication — <span className="text-foreground">Osteosarcoma</span>
                </div>
                <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
                  Biomarkers — <span className="text-foreground">TP53 R248W, TMB-high</span>
                </div>
                <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
                  Location — <span className="text-foreground">Warsaw, PL · 200 km radius</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-accent/25 bg-accent-soft p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium uppercase tracking-wide text-accent-strong">Match · 94%</span>
                    <span className="text-xs text-muted">18 km away</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Phase II — Adavosertib in TP53-mutant sarcoma
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium uppercase tracking-wide text-muted">Match · 81%</span>
                    <span className="text-xs text-muted">NFZ programme</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    B.72 drug reimbursement pathway — bone sarcomas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — ONCOKERNEL */}
      <section id="oncokernel" className="scroll-mt-20 bg-surface py-24 sm:py-28">
        <Container>
          <Badge>Core platform — on-premise pipeline</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            OncoKernel: from raw tumor sequence to a citation-grounded treatment plan
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            OncoKernel runs entirely inside the hospital&apos;s own network. It
            takes a tumor sample through four decoupled blocks — each
            replaceable, each testable on its own — and ends with a
            physician-facing dashboard and a grounded chat copilot.
          </p>

          <div className="mt-12">
            <PipelineSteps steps={oncoKernelSteps} />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "GDPR by construction",
                description:
                  "Genomic data never leaves the hospital network — the same architectural choice that unlocks the sale unlocks the compliance story.",
              },
              {
                icon: Dna,
                title: "Genomic foundation models",
                description:
                  "Zero-shot variant-effect scoring for mutations no database has classified yet, with a plain-language rationale attached.",
              },
              {
                icon: Network,
                title: "Live knowledge graph",
                description:
                  "Genes, variants, drugs, pathways, and indications resolved against a continuously updated graph, not a static spreadsheet.",
              },
              {
                icon: MessagesSquare,
                title: "Grounded clinical copilot",
                description:
                  "Every answer cites the exact source paragraph. Informational decision support — the oncologist always decides.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 — DIGITAL TWIN */}
      <section id="digital-twin" className="relative isolate scroll-mt-20 overflow-hidden py-24 sm:py-28">
        <GlowHero />
        <Container className="relative">
          <Badge dark>Phase 2 — deep-tech vision</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-hero-foreground sm:text-4xl">
            A GPU-native digital twin of the tumor microenvironment
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-hero-muted">
            Digital Twin is our agent-based simulation engine, built compute-first
            on Vulkan: cancer and stromal cells as agents, oxygen and growth
            factors as continuous fields, running entirely on GPU compute
            shaders. It is deliberately portable across NVIDIA, AMD, Intel, and
            ARM hardware, with a built-in visual editor for constructing and
            inspecting simulations.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "Compute-first architecture",
                description:
                  "All heavy simulation work runs as GPU compute dispatches; rendering exists only for visual debugging, never in the critical path.",
              },
              {
                icon: Boxes,
                title: "Biologically grounded agents",
                description:
                  "Cell behaviours follow real mechanisms — hypoxia response, angiogenic signalling, immune infiltration — not gameplay heuristics.",
              },
              {
                icon: FlaskConical,
                title: "A white-box alternative to black-box AI",
                description:
                  "Physics-based, interpretable simulation for the step regulators and tumor boards trust least when it's opaque: predicting treatment response.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-hero-border bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-hero-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-hero-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 — AI + WET LAB */}
      <section id="ai-wetlab" className="scroll-mt-20 bg-surface py-24 sm:py-28">
        <Container>
          <Badge>Phase 2 — deep-tech vision</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI + Wet Lab: from prediction to a physical therapy
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            The same mutation mapping and HLA typing that power OncoKernel,
            combined with predictions from the digital twin, feed a
            longer-range goal: designing personalized mRNA neoantigen
            vaccines and CAR-T cell therapies, then preparing and validating
            them physically — in patient-derived organoids and tumor-on-a-chip
            models — before a therapy ever reaches a patient. This is the line
            from software that reads a genome to an engine that helps design
            the therapy itself.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Syringe,
                title: "AI-designed neoantigen vaccines",
                description:
                  "mRNA transcripts designed against a patient's tumor-specific mutations and HLA type, validated in-silico before synthesis.",
              },
              {
                icon: Dna,
                title: "CAR-T therapy design",
                description:
                  "Engineering chimeric antigen receptor constructs targeting the tumor-specific antigens the platform surfaces for that patient.",
              },
              {
                icon: FlaskConical,
                title: "Wet-lab validation",
                description:
                  "Patient-derived organoids and tumor-on-a-chip models give a physical check on every AI prediction before it reaches a patient.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-background py-24 sm:py-28">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-foreground">
            Interested in a pilot, a partnership, or the underlying technology?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
