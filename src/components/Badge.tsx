import { ReactNode } from "react";

export default function Badge({
  children,
  dark = false,
  dot = false,
}: {
  children: ReactNode;
  dark?: boolean;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide ${
        dark
          ? "border-hero-border bg-white/5 text-hero-muted"
          : "border-border bg-surface text-muted"
      }`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
