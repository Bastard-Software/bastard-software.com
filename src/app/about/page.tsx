import type { Metadata } from "next";
import { Stethoscope, Cpu, Users, Target } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bastard Software is building the on-premise AI and GPU-simulation pipeline for personalized cancer treatment — founded by a physician and a computer scientist, with a practicing oncologist as clinical design partner.",
};

const team = [
  {
    initials: "MB",
    name: "Mateusz Bahyrycz",
    role: "Founder & CEO",
    badges: ["MD", "GPU / CUDA Systems Engineer"],
    bio: "Mateusz founded Bastard Software to close the gap between clinical medicine and the low-level compute infrastructure precision oncology actually needs — from SYCL/CUDA compute kernels to on-premise AI inference. He leads the company's technical architecture and the Digital Twin simulation engine.",
  },
  {
    initials: "RN",
    name: "Rafał Nojek",
    role: "Co-Founder",
    badges: ["MD", "AI / ML Engineer"],
    bio: "Rafał pairs a physician's perspective with deep expertise in machine learning, large language models, and data science. He is the core implementer of Bastard Software's AI stack, particularly OncoKernel's knowledge-graph reasoning and clinical copilot.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Founded by a physician and{" "}
                <span className="text-gradient">a computer scientist</span>
              </>
            }
            description="Bastard Software exists because the hardest parts of precision oncology — clinical judgment and AI/GPU systems engineering — are almost never found in the same room. We put both in the founding team."
          />
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col items-center gap-6 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-signal font-display text-2xl font-semibold text-white">
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted">{person.role}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {person.badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted">{person.bio}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-6 text-base leading-relaxed text-muted">
            <p>
              That pairing is not incidental to the product — it is the
              thesis. Precision oncology software fails when it is built by
              one discipline in isolation: engineers who don&apos;t
              understand what a tumor board actually needs, or clinicians
              without the systems background to build AI infrastructure that
              runs safely inside a hospital network.
            </p>
            <p>
              We work alongside a practicing oncologist as clinical design
              partner and first pilot site — supplying the oncology domain
              validation, and the hospital relationship that turns a demo
              into a deployment.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Our thesis",
                description:
                  "Sequencing a tumor is cheap. Interpreting it — safely, explainably, and without the data leaving the hospital — is the hard, valuable problem.",
              },
              {
                icon: Stethoscope,
                title: "Clinician-led design",
                description:
                  "Every tool is designed around what a physician actually does with the output, with a practicing oncologist validating the workflow.",
              },
              {
                icon: Cpu,
                title: "Systems-engineering rigor",
                description:
                  "GPU compute, data contracts, and on-premise deployment are treated as first-class engineering problems, not afterthoughts.",
              },
              {
                icon: Users,
                title: "Built for hospitals",
                description:
                  "Every architectural decision is made to be deployable inside a real hospital network under real regulatory constraints.",
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
    </>
  );
}
