import type { Metadata } from "next";
import TechnologyContent from "./TechnologyContent";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The architecture behind Bastard Software: on-premise GDPR-by-design infrastructure, GPU-accelerated genomic AI (NVIDIA BioNeMo, Evo 2), and a SYCL/CUDA simulation engine.",
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
