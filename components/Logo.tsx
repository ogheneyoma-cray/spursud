export function Logo() {
  return (
    <span className="logo">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="var(--accent)" />
        <path
          d="M21.5 10.5c-1.2-1.3-3-2-5.2-2-3.2 0-5.5 1.7-5.5 4.2 0 5.3 10.6 3.4 10.6 7.5 0 1.5-1.6 2.6-4.1 2.6-2.2 0-4.1-.8-5.6-2.3"
          fill="none"
          stroke="var(--accent-ink)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo-word">Spursud</span>
    </span>
  );
}
