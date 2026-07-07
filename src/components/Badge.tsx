import { ReactNode } from "react";

export default function Badge({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide ${
        dark
          ? "border-hero-border bg-white/5 text-hero-muted"
          : "border-border bg-surface text-muted"
      }`}
    >
      {children}
    </span>
  );
}
