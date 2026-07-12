import MeshBackground from "@/components/MeshBackground";

export default function GlowHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-hero-bg">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <MeshBackground className="absolute inset-0 h-full w-full opacity-70" />
      <div className="absolute -top-40 left-1/4 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px] animate-pulse-slow" />
      <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-signal/25 blur-[100px] animate-pulse-slow [animation-delay:2s]" />
      <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/50 via-transparent to-hero-bg" />
    </div>
  );
}
