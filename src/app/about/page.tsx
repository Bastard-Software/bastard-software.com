import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bastard Software is building the on-premise AI and GPU-simulation pipeline for personalized cancer treatment — founded by a physician and a computer scientist, with a practicing oncologist as clinical design partner.",
};

export default function AboutPage() {
  return <AboutContent />;
}
