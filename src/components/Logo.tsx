export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0891a8" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="8" fill="url(#logo-grad)" />
      <path
        d="M9 8c0 5.5 14 5.5 14 11s-14 5.5-14 11"
        stroke="white"
        strokeOpacity="0.95"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M23 8c0 5.5-14 5.5-14 11s14 5.5 14 11"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="9" cy="8" r="1.4" fill="white" />
      <circle cx="23" cy="8" r="1.4" fill="white" fillOpacity="0.55" />
      <circle cx="16" cy="19" r="1.4" fill="white" />
      <circle cx="9" cy="30" r="1.4" fill="white" />
      <circle cx="23" cy="30" r="1.4" fill="white" fillOpacity="0.55" />
    </svg>
  );
}
