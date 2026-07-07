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

const pillars = [
  {
    icon: MapPinned,
    tag: "01 — Trial Matcher",
    title: "Find the closest matching clinical trial in seconds",
    description:
      "A panel built for oncologists: enter an indication and biomarkers, get back recruiting trials and drug reimbursement programmes ranked by fit and location — no patient sequence required.",
    href: "/platform#trial-matcher",
  },
  {
    icon: Dna,
    tag: "02 — OncoKernel",
    title: "Full tumor genome interpretation, with a clinical copilot",
    description:
      "An on-premise pipeline that calls somatic variants, classifies mutations against a live knowledge graph, scores unknown variants with a genomic foundation model, and presents therapy options with citations.",
    href: "/platform#oncokernel",
  },
  {
    icon: Cpu,
    tag: "03 — Digital Twin",
    title: "A GPU-native digital twin for the tumor microenvironment",
    description:
      "A Vulkan-compute agent-based simulation engine for testing immunotherapies and drugs against a virtual tumor microenvironment before they ever reach a patient.",
    href: "/platform#digital-twin",
  },
  {
    icon: Syringe,
    tag: "04 — AI + Wet Lab",
    title: "Designing and testing mRNA vaccines and CAR-T therapies",
    description:
      "From the digital twin's predictions to the bench: AI-designed personalized mRNA neoantigen vaccines and CAR-T cell therapies, prepared and validated in patient-derived organoid models.",
    href: "/platform#ai-wetlab",
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "On-premise by design",
    description:
      "Every inference runs inside the hospital's own network. Patient sequences never egress — GDPR Art. 9 compliant by construction, not by policy.",
  },
  {
    icon: Cpu,
    title: "GPU-native, vendor-agnostic",
    description:
      "Our simulation core runs on Vulkan compute — portable across NVIDIA, AMD, Intel, and ARM — so it runs on whatever accelerator a hospital or lab already owns.",
  },
  {
    icon: BrainCircuit,
    title: "Explainable, not opaque",
    description:
      "Every recommendation is grounded and citable: knowledge-graph evidence, biomedical retrieval, and physics-based simulation instead of black-box guesses.",
  },
  {
    icon: Microscope,
    title: "Built by clinician and engineer",
    description:
      "Founded by a physician and a computer scientist, with a practicing oncologist as clinical design partner from day one.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <GlowHero />
        <Container className="relative py-28 sm:py-36">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Badge dark>Precision Oncology × GPU Computing</Badge>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-hero-foreground sm:text-6xl">
              The full pipeline from tumor genome to personalized therapy
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-hero-muted">
              Bastard Software builds the AI and GPU-simulation infrastructure that
              turns a raw tumor sequence into a matched clinical trial, an
              explainable treatment plan, and — eventually — a therapy designed
              and tested for that specific patient.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Explore the platform
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-hero-border px-6 py-3 text-sm font-medium text-hero-foreground transition-colors hover:bg-white/5"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* THESIS */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Sequencing a tumor is cheap. Interpreting it is not."
            description="Hospitals can now generate terabytes of tumor sequence data, but most lack the bioinformatics pipeline, the on-premise compute, and the cross-disciplinary expertise to turn it into a treatment decision. Actionable mutations go unseen, and patients go unmatched to the trials and therapies that could help them."
          />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">
            We are building the translation layer that closes that gap — end to
            end, from the first search for a nearby clinical trial, through full
            somatic genome interpretation with a physician copilot, to a
            GPU-accelerated digital twin that simulates how a specific tumor
            responds to therapy before it is ever administered.
          </p>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The pipeline"
            title="Tools, one continuous pipeline"
            description="Each tool ships independently and stands on its own — together, they form a single path from diagnosis to personalized therapy. More tools join this pipeline over time."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.href} {...pillar} />
            ))}
          </div>
        </Container>
      </section>

      {/* TECH HIGHLIGHTS */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why it's different"
            title="Engineered for hospitals, not just for demos"
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4">
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
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <GlowHero />
        <Container className="relative py-24 text-center sm:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-hero-foreground sm:text-4xl">
            Building the translation layer between a tumor&apos;s genome and the
            therapy that treats it.
          </h2>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
