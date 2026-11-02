import Link from "next/link";
import { company, legalNav, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="kanga-strip" aria-hidden="true" />
      <div className="container">
        <div className="footer-cta">
          <p className="footer-cta-line">
            Got an idea? <em>Let&rsquo;s build it.</em>
          </p>
          <div className="footer-cta-actions">
            <Link href="/contact" className="btn btn-coral">
              Start a project
            </Link>
            <a href={`mailto:${company.email}`} className="footer-mail">
              {company.email}
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h2 className="footer-heading">Visit</h2>
            <address>
              {company.address.building}
              <br />
              {company.address.street}, {company.address.locality}
              <br />
              {company.address.county}, {company.address.country}
            </address>
          </div>
          <div>
            <h2 className="footer-heading">Talk</h2>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <br />
              <Link href="/contact">Send an enquiry</Link>
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Explore</h2>
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
        </div>

        <p className="footer-wordmark" aria-hidden="true">
          Spursud
        </p>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {company.name} · Company no. {company.number}
          </p>
          <p>Prices in USD and KES</p>
        </div>
      </div>
    </footer>
  );
}
