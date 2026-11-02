import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "@/components/AddToCart";
import { CurrencyToggle, Price } from "@/components/CurrencyProvider";
import { PageHero } from "@/components/PageHero";
import { packages } from "@/lib/packages";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fixed-price web, app, SEO and support services from $100 to $250 that you can order online, plus custom websites, apps and integrations from Spursud in Mombasa, Kenya.",
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
      <PageHero
        eyebrow="Services"
        title={
          <>
            Computer programming, <em>end to end.</em>
          </>
        }
        lede="Order a fixed-price service online, or let us run the whole project. Prices are in USD or KES, and no payment is taken until we've sent your invoice."
      />

      <section className="section" aria-labelledby="packages-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Order online</p>
              <h2 id="packages-heading">
                Fixed-price services, <em>ready to order.</em>
              </h2>
            </div>
            <div className="shop-head-side">
              <p>Add what you need to your cart and check out. We confirm by email and send an invoice within one business day.</p>
              <CurrencyToggle />
            </div>
          </div>
          <ul className="package-grid">
            {packages.map((p) => (
              <li key={p.id} id={p.id} className="package-card">
                <div className="package-media">
                  <Image src={p.image} alt={p.imageAlt} width={600} height={450} sizes="(min-width: 1100px) 30vw, (min-width: 700px) 45vw, 90vw" />
                  <span className="package-tag">{p.category}</span>
                </div>
                <div className="package-body">
                  <h3>{p.title}</h3>
                  <p className="package-summary">{p.summary}</p>
                  <ul className="tick-list">
                    {p.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="package-foot">
                    <div>
                      <p className="package-price">
                        <Price value={p.price} />
                      </p>
                      <p className="package-delivery">Delivered in {p.delivery}</p>
                    </div>
                    <AddToCart packageId={p.id} title={p.title} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-sand" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Bigger projects</p>
              <h2 id="projects-heading">
                Need something <em>made to measure?</em>
              </h2>
            </div>
            <p>
              For full websites, apps and integrations we scope the work with you first and send a fixed
              quote. See <Link href="/pricing">pricing</Link> for typical budgets.
            </p>
          </div>
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className="feature">
              <div className="feature-media">
                <div className="arch">
                  <Image src={s.image} alt={s.imageAlt} width={640} height={540} sizes="(min-width: 900px) 45vw, 90vw" />
                </div>
                <span className="feature-num" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <div className="feature-copy">
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <div className="feature-meta">
                  <div>
                    <h4>What you get</h4>
                    <ul className="tick-list">
                      {s.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Typical tools</h4>
                    <ul className="chips">
                      {s.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="feature-foot">
                  <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn btn-line btn-sm">
                    Get a quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Who we work with</p>
              <h2>
                Built for how business <em>really</em> runs.
              </h2>
            </div>
            <p>
              We understand local realities such as M-Pesa payments, KRA eTIMS compliance and users
              on mobile data, and we build to international standards for clients overseas.
            </p>
          </div>
          <ul className="chips chips-lg">
            {industries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
