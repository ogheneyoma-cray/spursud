// Small stroke icons, inherit color from the parent.
const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconWeb = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </svg>
);
export const IconApp = () => (
  <svg {...base}>
    <rect x="7" y="2.5" width="10" height="19" rx="2" />
    <path d="M11 18h2" />
  </svg>
);
export const IconCode = () => (
  <svg {...base}>
    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
  </svg>
);
export const IconPlug = () => (
  <svg {...base}>
    <path d="M9 7V3M15 7V3M6 7h12v4a6 6 0 01-12 0V7zM12 17v4" />
  </svg>
);
export const IconCloud = () => (
  <svg {...base}>
    <path d="M7 18a4.5 4.5 0 01-.5-8.97A6 6 0 0118 10a4 4 0 01-1 8H7z" />
  </svg>
);
export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
