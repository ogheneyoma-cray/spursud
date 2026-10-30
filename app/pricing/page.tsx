import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { CurrencyToggle, Price } from "@/components/CurrencyProvider";
import { PlanCard } from "@/components/PlanCard";
import { hourlyRate, projectPlans, retainerPlans } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent software development pricing from Spursud in US dollars (USD) and Kenyan shillings (KES): project packages, monthly retainers and hourly rates.",
};

const faqs = [
  {
    q: "Which currency will I be invoiced in?",
    a: "Clients in Kenya are normally invoiced in Kenyan shillings (KES) and clients outside Kenya in US dollars (USD). The currency is fixed on your quote, and you pay in that currency for the whole project.",
  },
  {
    q: "How do I pay?",
    a: "KES invoices can be paid by M-Pesa or bank transfer. USD invoices can be paid by international bank transfer or card. Payment details are printed on every invoice.",
  },
  {
    q: "What is the payment schedule?",
    a: "Projects are usually billed 40% on signing, 40% at the agreed mid-point milestone and 20% on launch. Retainers are billed monthly in advance.",
  },
  {
    q: "Are taxes included?",
    a: "Prices shown exclude VAT and any other applicable taxes, which are added to invoices where required by Kenyan law.",
  },
  {
    q: "Why are these 'from' prices?",
    a: "Every project is different. After a free discovery call we send a fixed quote based on your actual scope. It will not change unless you ask for new features.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Clear prices in US dollars or Kenyan shillings.</h1>
          <p className="lede">
            Starting prices for our most common engagements. Your final quote is fixed in writing
            before any work begins.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-controls">
            <span>Show prices in</span>
            <CurrencyToggle className="currency-toggle-lg" />
          </div>

          <div className="section-head">
            <h2>Project packages</h2>
            <p>One-off builds with a defined scope, timeline and handover.</p>
          </div>
          <div className="grid grid-3">
            {projectPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Monthly retainers</h2>
            <p>Ongoing development, maintenance and support from a team that knows your system.</p>
          </div>
          <div className="grid grid-3">
            {retainerPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rate-strip">
            <div>
              <h2 style={{ fontSize: "1.4rem" }}>Hourly and ad-hoc work</h2>
              <p>
                For small fixes, consulting, code reviews or technical advice, we bill by the hour
                in 30-minute increments, with an estimate agreed up front.
              </p>
            </div>
            <p className="rate-figure">
              <Price value={hourlyRate} /> <small>/ hour</small>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Payments and billing</h2>
            <p style={{ color: "var(--ink-2)" }}>
              See our <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/refund-policy">Refund Policy</Link> for full details.
            </p>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Get a fixed quote"
        text="Share your requirements and we will send a written scope and price in your preferred currency."
      />
    </>
  );
}
