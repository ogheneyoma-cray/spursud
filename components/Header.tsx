"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/site";
import { CurrencyToggle } from "./CurrencyProvider";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            {company.address.locality}, {company.address.county} · Mon–Fri 8:30–17:30 EAT
          </span>
          <a href={company.phoneHref}>{company.phone}</a>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Spursud home">
          <Logo />
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden="true" className={`burger ${open ? "open" : ""}`} />
        </button>

        <nav id="primary-nav" className={`primary-nav ${open ? "open" : ""}`} aria-label="Primary">
          <ul>
            {nav.map((item, i) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    <span className="nav-num">0{i + 1}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-actions">
            <CurrencyToggle />
            <Link href="/contact" className="btn btn-coral btn-sm">
              Start a project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
