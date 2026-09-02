import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export default function PillarCard({
  icon: Icon,
  tag,
  title,
  description,
  href,
  learnMore,
}: {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  href: string;
  learnMore: string;
}) {
  const [num, ...rest] = tag.split("—");
  const label = rest.join("—").trim();

  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_30px_60px_-30px_rgba(8,145,168,0.4)]"
    >
      <div className="pointer-events-none absolute -right-2 top-3 select-none font-display text-7xl font-bold text-border/50 transition-colors duration-300 group-hover:text-accent/15">
        {num.trim()}
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-signal text-white shadow-[0_10px_24px_-10px_rgba(124,92,255,0.7)]">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <div className="relative">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent-strong">
          {label}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <span className="relative mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong">
        {learnMore}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
