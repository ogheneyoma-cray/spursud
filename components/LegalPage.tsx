import Link from "next/link";
import type { ReactNode } from "react";
import { legalNav } from "@/lib/site";

export function LegalPage({
  title,
  updated,
  current,
  children,
}: {
  title: string;
  updated: string;
  current: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>{title}</h1>
          <p className="lede">Last updated: {updated}</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-layout">
          <aside className="legal-aside" aria-label="Legal documents">
            <ul>
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={item.href === current ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <article className="prose">{children}</article>
        </div>
      </section>
    </>
  );
}
