import Image from "next/image";

/**
 * The mark is taller than it is wide (204:256), so callers set a height and let the
 * width follow. Forcing it square distorts it.
 */
export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/bs-logo.png"
      alt=""
      width={204}
      height={256}
      className={className}
      priority
      aria-hidden="true"
    />
  );
}
