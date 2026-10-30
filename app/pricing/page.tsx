import type { Metadata } from "next";
import Link from "next/link";
import { CurrencyToggle, Price } from "@/components/CurrencyProvider";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Honest prices, in <em>dollars or shillings.</em>
          </>
        }
        lede="Starting prices for our most common engagements. Your final quote is fixed in writing before any work begins."
      />

      <section className="section">
        <div className="container">
          <div className="pricing-switch">
            <p>
              Show me prices in
              <small>Your choice is remembered across the site.</small>
            </p>
            <CurrencyToggle size="lg" />
          </div>

          <div className="section-head">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>One-off builds</h2>
            </div>
            <p>A defined scope, a timeline and a full handover at the end.</p>
          </div>
          <div className="plans">
            {projectPlans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Retainers</p>
              <h2>Ongoing care &amp; development</h2>
            </div>
            <p>A team that already knows your system, on call every month.</p>
          </div>
          <div className="plans">
            {retainerPlans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="receipt">
            <div>
              <h2>Hourly &amp; ad-hoc work</h2>
              <p>
                Small fixes, consulting, code reviews or technical advice, billed in 30-minute
                increments with an estimate agreed up front.
              </p>
            </div>
            <p className="receipt-figure">
              <Price value={hourlyRate} /> <small>/ hour</small>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Payments &amp; billing</h2>
            <p style={{ color: "var(--ink-2)" }}>
              Full details are in our <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/refund-policy">Refund Policy</Link>.
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
    </>
  );
}
