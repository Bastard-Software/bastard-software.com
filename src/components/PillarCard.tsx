import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export default function PillarCard({
  icon: Icon,
  tag,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-5 rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_-25px_rgba(8,145,168,0.35)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <div>
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent-strong">
          {tag}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
