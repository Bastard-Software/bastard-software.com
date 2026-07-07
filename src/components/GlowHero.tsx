export default function GlowHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-hero-bg">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-signal/25 blur-[120px] animate-pulse-slow [animation-delay:1.5s]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hero-bg" />
    </div>
  );
}
