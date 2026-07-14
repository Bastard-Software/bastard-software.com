import type { Metadata } from "next";
import PlatformContent from "./PlatformContent";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Bastard Software platform: a clinical trial matcher, the GPU-accelerated OncoKernel genome interpretation pipeline, the SYCL/CUDA Digital Twin simulation engine, and NVIDIA BioNeMo-designed, wet-lab validated mRNA vaccines and CAR-T therapies.",
};

export default function PlatformPage() {
  return <PlatformContent />;
}
