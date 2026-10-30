import Link from "next/link";
import { company, legalNav, nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Computer programming and software development for businesses in Kenya and around the
            world. Based in Nyali, Mombasa.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Company</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Legal</h2>
          <ul>
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <address>
            {company.address.building}, {company.address.street}
            <br />
            {company.address.locality}, {company.address.county}, {company.address.country}
            <br />
            <a href={company.phoneHref}>{company.phone}</a>
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.name}. Registered in Kenya, company no.{" "}
          {company.number}.
        </p>
        <p>Prices shown in USD and KES.</p>
      </div>
    </footer>
  );
}
