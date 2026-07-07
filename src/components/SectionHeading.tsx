export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`font-mono text-xs font-medium uppercase tracking-[0.18em] ${
            dark ? "text-accent" : "text-accent-strong"
          }`}
        >
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
        <p className={`text-base leading-relaxed sm:text-lg ${dark ? "text-hero-muted" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
