import Link from "next/link";
import {
  ArrowRight,
  Dna,
  Cpu,
  ShieldCheck,
  Microscope,
  MapPinned,
  BrainCircuit,
  Syringe,
} from "lucide-react";
import Container from "@/components/Container";
import GlowHero from "@/components/GlowHero";
import Badge from "@/components/Badge";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    icon: MapPinned,
    tag: "01 — Trial Matcher",
    title: "Instant clinical trial matching for oncologists",
    description:
      "Our live clinician-facing portal. Enter patient biomarkers and location to instantly retrieve recruiting trials and drug reimbursement programmes using our LLM-powered RAG architecture.",
    href: "/platform#trial-matcher",
  },
  {
    icon: Dna,
    tag: "02 — OncoKernel",
    title: "GPU-accelerated tumor genome interpretation",
    description:
      "Our on-premise pipeline processing FASTQ to actionable insights. We leverage GPU-accelerated foundation models to score variants of unknown significance and match genotypes to therapies.",
    href: "/platform#oncokernel",
  },
  {
    icon: Cpu,
    tag: "03 — Digital Twin",
    title: "GPU-accelerated spatial tumor simulation",
    description:
      "An Agent-Based Modeling (ABM) engine written in SYCL, compiling to native CUDA on NVIDIA hardware. We simulate the tumor microenvironment and immune infiltration on GPU to test therapy efficacy in-silico.",
    href: "/platform#digital-twin",
  },
  {
    icon: Syringe,
    tag: "04 — AI & Wet Lab (Future)",
    title: "Designing mRNA & CAR-T therapies",
    description:
      "Our future horizon: taking BioNeMo-generated protein structures and validating AI-designed neoantigen vaccines physically in patient-derived organoids.",
    href: "/platform#ai-wetlab",
  },
];

const highlights = [
  {
    icon: Cpu,
    title: "GPU-native & AI-first",
    description:
      "From accelerated bioinformatics pipelines to spatial SYCL-compute simulations, our stack is engineered for GPU acceleration — compiling to CUDA and integrating NVIDIA BioNeMo where they matter most.",
  },
  {
    icon: ShieldCheck,
    title: "On-premise & GDPR-compliant",
    description:
      "Patient data never egresses to public clouds. Our containerized pipeline runs securely inside the hospital's network, ensuring full compliance by construction.",
  },
  {
    icon: BrainCircuit,
    title: "Grounded LLM Reasoning",
    description:
      "Every clinical recommendation is backed by Semantic RAG, served locally on GPU, linking molecular profiles directly to cited biomedical literature and real-time trial registries.",
  },
  {
    icon: Microscope,
    title: "Built by a clinician and an engineer",
    description:
      "Founded by a physician and a GPU systems engineer, bridging the gap between clinical reality and high-performance computing.",
  },
];

const pipelineChips = ["Trial Matcher", "OncoKernel", "Digital Twin", "NVIDIA BioNeMo"];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <GlowHero />
        <Container className="relative py-28 sm:py-36">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Badge dark dot>
              Precision Oncology × Accelerated Computing
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-hero-foreground sm:text-6xl">
              The AI-accelerated pipeline for{" "}
              <span className="text-gradient-light">personalized oncology</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-hero-muted">
              Bastard Software builds the compute infrastructure that translates raw tumor sequences into matched clinical trials, explainable treatment plans, and spatial GPU simulations of the tumor microenvironment.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/platform"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Explore the platform
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Talk to us
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {pipelineChips.map((chip) => (
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
              eyebrow="The problem"
              title={
                <>
                  Sequencing is cheap.{" "}
                  <span className="text-gradient">Compute-driven interpretation is the bottleneck.</span>
                </>
              }
              description="Hospitals generate terabytes of sequence data, but lack the HPC pipelines and AI reasoning to make it actionable. Actionable mutations are missed, and patients fail to match with life-saving trials."
            />
          </Reveal>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="relative overflow-hidden bg-surface py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="The Platform"
              title="A unified ecosystem for clinical decision support"
              description="From instant trial matching for clinicians to deep GPU-accelerated tumor simulation."
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
              eyebrow="Why it's different"
              title="Engineered for high-performance computing"
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