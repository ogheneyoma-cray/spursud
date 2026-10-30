import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Price } from "@/components/CurrencyProvider";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web applications, mobile apps, API integrations, cloud and DevOps, and software maintenance from Spursud in Mombasa, Kenya.",
};

const industries = [
  "Retail & e-commerce",
  "Logistics & shipping",
  "Hospitality & tourism",
  "Real estate",
  "Healthcare",
  "Education",
  "NGOs & non-profits",
  "Professional services",
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Computer programming services, end to end.</h1>
          <p className="lede">
            Pick a single service or let us run the whole project. Every engagement starts with a
            written scope and a fixed quote in USD or KES.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="service-block" style={{ scrollMarginTop: 96 }}>
              <div className="service-intro">
                <div className="icon-badge">{s.icon}</div>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <p className="service-price">
                  From <strong><Price value={s.from} /></strong>
                </p>
              </div>
              <div className="service-cols">
                <div>
                  <h4>What you get</h4>
                  <ul className="check-list">
                    {s.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Typical tools</h4>
                  <ul className="tag-list">
                    {s.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we work with</p>
            <h2>Built for the way business runs in Kenya and beyond.</h2>
            <p style={{ color: "var(--ink-2)" }}>
              We understand local realities such as M-Pesa payments, KRA eTIMS compliance and users
              on mobile data, and we build to international standards for clients overseas.
            </p>
          </div>
          <ul className="tag-list" style={{ alignContent: "center" }}>
            {industries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Describe the problem and we will recommend the simplest solution, even if that means less work for us."
      />
    </>
  );
}
