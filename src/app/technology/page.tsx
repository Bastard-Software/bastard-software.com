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
    "The architecture behind Bastard Software: on-premise GDPR-by-design infrastructure, GPU-accelerated genomic AI (NVIDIA BioNeMo, Evo 2), and a SYCL/CUDA simulation engine.",
};

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

const workloads = [
  {
    workload: "Novel variant (VUS) scoring",
    tech: "Evo 2 (7B, quantized), GPU-accelerated",
    why: "Deterministic calling (SAGE/PURPLE/LILAC) already runs on CPU — but scoring the variants no database has classified needs a foundation model in the loop, and that doesn't fit a real-time CPU budget.",
  },
  {
    workload: "Neoantigen & protein design",
    tech: "NVIDIA BioNeMo",
    why: "Structure prediction and docking (AlphaFold2/ESMFold-class models) to design and rank personalized vaccine candidates.",
  },
  {
    workload: "Clinical copilot inference",
    tech: "Local LLM, GPU-accelerated",
    why: "Low-latency, quantized on-premise serving — the copilot answers in seconds without a single call to a cloud API.",
  },
  {
    workload: "Tumor microenvironment simulation",
    tech: "SYCL compute",
    why: "Thousands of interacting agents updated every frame — a CPU-bound simulator cannot run this at a clinically useful scale. Compiles to native CUDA on NVIDIA hardware.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Technology"
            title={
              <>
                The architecture <span className="text-gradient">beneath the pipeline</span>
              </>
            }
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
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Lock className="h-3.5 w-3.5" />
                  GDPR Art. 9-aligned by design, not by policy
                </div>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Cpu className="h-3.5 w-3.5" />
                  Target deployment: purpose-built edge hardware for regulated, on-premise medical AI
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI STACK */}
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="The reasoning stack" title="Accelerated AI Inference & RAG" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                icon: Dna,
                title: "NVIDIA BioNeMo Integration",
                description:
                  "Leveraging NVIDIA BioNeMo to predict 3D protein structures (AlphaFold2/ESMFold) and design highly affine neoantigens for personalized mRNA vaccines.",
              },
              {
                icon: Cpu,
                title: "Genomic Foundation Models",
                description:
                  "Utilizing models like Evo 2, accelerated by GPUs, to score variants of unknown significance (VUS) and perform deep sequence-level reasoning.",
              },
              {
                icon: Workflow,
                title: "Multi-agent Semantic RAG",
                description:
                  "A LangGraph architecture using local vector stores (e.g., Qdrant) and MedCPT embeddings to match patient genotypes with real-time clinical trials and literature without hallucinations.",
              },
              {
                icon: Network,
                title: "Nextflow Bio-Pipelines",
                description:
                  "Highly parallelized, containerized execution of genomics workflows (WiGiTS, SAGE, LILAC) capable of running on local HPC clusters or bursting to cloud GPUs.",
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

      {/* GPU WORKLOAD JUSTIFICATION */}
      <section className="bg-background py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Compute justification"
            title={
              <>
                Every GPU workload, <span className="text-gradient">justified</span>
              </>
            }
            description="We don't reach for a GPU by default — each workload below is GPU-bound because the alternative is either too slow to be clinically useful or physically impossible on CPU. Where CPU is the right tool, we use CPU."
          />
          <div className="mt-12 space-y-4">
            {workloads.map((row) => (
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
            <span className="text-accent-strong">Roadmap —</span> evaluating GPU-accelerated
            retrieval and graph-traversal engines to scale the knowledge graph further.
          </p>
        </Container>
      </section>

      {/* GPU / SIMULATION */}
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <GlowHero />
        <Container className="relative">
          <Badge dark>GPU-Accelerated Computing</Badge>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-hero-foreground">
            A compute-first simulation engine, built to{" "}
            <span className="text-gradient-light">run anywhere</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-hero-muted">
            Our Agent-Based Modeling engine is written in C++20 with SYCL — a
            vendor-neutral compute standard that runs across GPU
            architectures.{" "}
            <span className="text-sm text-hero-muted/70">
              On NVIDIA hardware, it compiles to native CUDA for maximum
              throughput.
            </span>{" "}
            By offloading massive spatial hashing and cell-to-cell collision
            detection entirely to GPU compute shaders, we eliminate CPU
            bottlenecks typical of legacy simulators — letting us model the
            tumor microenvironment at a clinically useful scale.
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
                title: "Portable core, CUDA-tuned",
                description: "SYCL keeps the codebase portable in principle — but every build defaults to NVIDIA's CUDA backend, where our own development, BioNeMo integration, and Evo 2 inference already live.",
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
                key={tech.name}
                className={`rounded-full border px-4 py-2 font-mono text-xs text-foreground ${
                  tech.nvidia ? "border-nvidia/40 bg-nvidia/5" : "border-border bg-white"
                }`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
