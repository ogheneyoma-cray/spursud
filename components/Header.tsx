"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { CurrencyToggle } from "./CurrencyProvider";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
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
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <CurrencyToggle />
          <Link href="/contact" className="btn btn-primary btn-sm">
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
