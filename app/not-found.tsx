import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p style={{ color: "var(--ink-2)" }}>The page you are looking for has moved or does not exist.</p>
      <Link href="/" className="btn btn-primary">
        Back to home
      </Link>
    </section>
  );
}
