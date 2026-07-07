import type { Metadata } from "next";
import {
  Server,
  Lock,
  Network,
  Dna,
  MessagesSquare,
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

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The architecture behind Bastard Software: on-premise GDPR-by-design infrastructure, a genomic AI stack, and a Vulkan-native GPU simulation engine.",
};

const stack = [
  "SAGE", "PURPLE", "LILAC", "Neo4j", "Evo 2", "LangGraph", "MedCPT",
  "Streamlit", "Vulkan 1.3", "C++20", "Dear ImGui", "Python", "Docker", "CMake",
];

export default function TechnologyPage() {
  return (
    <>
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Technology"
            title="The architecture beneath the pipeline"
            description="Three engineering decisions run through everything we build: patient data never leaves the hospital, every recommendation must be explainable, and the heavy compute belongs on a GPU."
          />
        </Container>
      </section>

      {/* PRIVACY ARCHITECTURE */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge>The privacy architecture</Badge>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground">
                On-premise by construction, not by policy
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Under EU GDPR Article 9, genetic data is a special category —
                processing it is tightly restricted, and hospital directors
                carry the liability for any breach. Our answer is
                architectural: the ingestion and reasoning services run as
                containers on the hospital&apos;s own network. No patient
                sequence is ever sent to a cloud API. Only de-identified,
                abstracted queries leave — to a public trial registry or a
                literature index.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Every recommendation is also framed as informational decision
                support. A clinician is in the loop at every step; the system
                answers questions and cites sources, it does not issue
                directives.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-accent-strong">
                <Server className="h-4 w-4" /> Hospital network boundary
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { icon: Dna, label: "Tumor FASTQ / sequencing data", note: "never leaves" },
                  { icon: Boxes, label: "Variant calling & knowledge graph", note: "runs on-site" },
                  { icon: Network, label: "De-identified queries only", note: "leaves boundary" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <row.icon className="h-4 w-4 text-accent-strong" />
                      <span className="text-sm text-foreground">{row.label}</span>
                    </div>
                    <span className="font-mono text-xs text-muted">{row.note}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                <Lock className="h-3.5 w-3.5" />
                GDPR Art. 9-aligned by design, not by policy
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI STACK */}
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="The reasoning stack" title="Explainable AI, end to end" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                icon: Network,
                title: "Knowledge-graph annotation",
                description:
                  "Genes, variants, drugs, pathways, and indications are resolved against a live Neo4j graph — deterministic, auditable matches for everything already known.",
              },
              {
                icon: Dna,
                title: "Genomic foundation models",
                description:
                  "For variants no database has classified, a genomic foundation model (Evo 2) scores pathogenicity zero-shot, with an explicit uncertainty band rather than false precision.",
              },
              {
                icon: Workflow,
                title: "Multi-agent retrieval",
                description:
                  "A LangGraph network of extractor, retriever, and critic agents matches genotypes to guidelines and trials using MedCPT biomedical embeddings — every claim traces to a source paragraph.",
              },
              {
                icon: MessagesSquare,
                title: "Grounded clinical copilot",
                description:
                  "The physician-facing dashboard exposes a citation-grounded chat interface and one-click reporting — built to be interrogated, not just read.",
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

      {/* GPU / SIMULATION */}
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <GlowHero />
        <Container className="relative">
          <Badge dark>GPU & simulation</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-hero-foreground">
            A compute-first simulation engine, built to run anywhere
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-hero-muted">
            Digital Twin, our agent-based modeling engine, is written in C++20
            against Vulkan 1.3 compute pipelines. All heavy simulation work —
            agent updates, field diffusion, spatial queries — runs as GPU
            compute dispatches; rendering exists only for visual debugging.
            The engine is deliberately vendor-agnostic, so a hospital or lab
            can run it on whatever accelerator they already own.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "Compute / AI-driven solutions",
                description: "Every simulation runs as GPU-accelerated compute — built for scale and speed, so the science isn't limited by hardware.",
              },
              {
                icon: Microscope,
                title: "Built for scientists, not engineers",
                description: "A visual editor lets researchers design and run simulations directly — no GPU programming or coding required.",
              },
              {
                icon: Sparkles,
                title: "Cross-vendor by design",
                description: "Vulkan compute runs on NVIDIA, AMD, Intel, and ARM — deployment flexibility, not vendor lock-in.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-hero-border bg-white/[0.03] p-6">
                <item.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-semibold text-hero-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-hero-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* STACK BADGES */}
      <section className="bg-surface py-20">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted">
            Built with
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-white px-4 py-2 font-mono text-xs text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
