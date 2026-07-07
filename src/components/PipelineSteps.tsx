import { ArrowRight } from "lucide-react";

export default function PipelineSteps({
  steps,
  dark = false,
}: {
  steps: { label: string; title: string; description: string }[];
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] lg:items-stretch">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-stretch gap-3">
          <div
            className={`flex flex-1 flex-col gap-2 rounded-2xl border p-6 ${
              dark
                ? "border-hero-border bg-white/[0.03]"
                : "border-border bg-white"
            }`}
          >
            <span
              className={`font-mono text-xs font-medium uppercase tracking-widest ${
                dark ? "text-accent" : "text-accent-strong"
              }`}
            >
              {step.label}
            </span>
            <h4
              className={`font-display text-base font-semibold ${
                dark ? "text-hero-foreground" : "text-foreground"
              }`}
            >
              {step.title}
            </h4>
            <p className={`text-sm leading-relaxed ${dark ? "text-hero-muted" : "text-muted"}`}>
              {step.description}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden shrink-0 items-center justify-center lg:flex">
              <ArrowRight
                className={`h-5 w-5 ${dark ? "text-hero-muted" : "text-border"}`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
