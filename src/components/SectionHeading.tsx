import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignClass =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] ${
            dark ? "text-accent" : "text-accent-strong"
          }`}
        >
          <span
            className={`h-px w-6 ${dark ? "bg-accent/60" : "bg-accent-strong/50"}`}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          dark ? "text-hero-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            dark ? "text-hero-muted" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
