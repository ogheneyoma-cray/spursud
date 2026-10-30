import Link from "next/link";
import type { ReactNode } from "react";
import { legalNav } from "@/lib/site";
import { PageHero } from "./PageHero";

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
      <PageHero eyebrow="Legal" title={title} lede={`Last updated: ${updated}`} />
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
