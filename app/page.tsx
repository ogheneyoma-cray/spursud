import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Price } from "@/components/CurrencyProvider";
import { company } from "@/lib/site";
import { services } from "@/lib/services";

const process = [
  {
    title: "Discover",
    text: "A free call to understand your goals, users and budget. You get a written scope and a fixed quote in USD or KES.",
  },
  {
    title: "Design",
    text: "Wireframes and a clickable prototype so you can see and test the product before any code is written.",
  },
  {
    title: "Build",
    text: "Short two-week sprints with a working demo at the end of each one. You see progress, not status reports.",
  },
  {
    title: "Launch & support",
    text: "We deploy, monitor and hand over documentation, then stay on to fix, maintain and improve.",
  },
];

const reasons = [
  {
    title: "Fixed, transparent quotes",
    text: "Every project starts with a written scope and a fixed price. No surprise invoices at the end.",
  },
  {
    title: "Priced in USD or KES",
    text: "Local clients pay in shillings by M-Pesa or bank transfer. International clients pay in dollars.",
  },
  {
    title: "You own the code",
    text: "Full source code, documentation and accounts are handed over to you once the project is paid for.",
  },
  {
    title: "East Africa time zone",
    text: "Based in Mombasa (EAT, UTC+3), with working hours that overlap with Europe, the Middle East and Asia.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Software development · Mombasa, Kenya</p>
            <h1>
              Software that does the <em>work</em>, so your team doesn&rsquo;t have to.
            </h1>
            <p className="lede">
              {company.shortName} designs and builds websites, web applications, mobile apps and
              integrations for businesses in Kenya and around the world, with clear fixed quotes in
              US dollars or Kenyan shillings.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <Link href="/pricing" className="btn btn-ghost">
                See pricing
              </Link>
            </div>
            <ul className="hero-meta">
              <li>Free discovery call</li>
              <li>Fixed-price quotes</li>
              <li>Source code is yours</li>
            </ul>
          </div>

          <div className="code-window" aria-hidden="true">
            <div className="code-window-bar">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <span className="tok-c">{"// checkout.ts"}</span>
              {"\n"}
              <span className="tok-k">export async function</span>{" "}
              <span className="tok-f">checkout</span>
              {"(order) {\n  "}
              <span className="tok-k">const</span>
              {" payment = "}
              <span className="tok-k">await</span>{" "}
              <span className="tok-f">mpesa.stkPush</span>
              {"({\n    phone: order.phone,\n    amount: order.total,\n    currency: "}
              <span className="tok-s">&quot;KES&quot;</span>
              {",\n  });\n\n  "}
              <span className="tok-k">await</span>{" "}
              <span className="tok-f">invoices.issue</span>
              {"(order, payment);\n  "}
              <span className="tok-k">await</span>{" "}
              <span className="tok-f">notify.whatsapp</span>
              {"(order.phone, "}
              <span className="tok-s">&quot;Paid ✓&quot;</span>
              {");\n\n  "}
              <span className="tok-k">return</span>
              {" { status: "}
              <span className="tok-s">&quot;complete&quot;</span>
              {" };\n}"}
            </pre>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>One team for everything from your first website to custom software.</h2>
            <p>
              We are a computer programming company. Bring us an idea, a process that has outgrown
              spreadsheets or a system that needs rescuing.
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => (
              <Link key={s.id} href={`/services#${s.id}`} className="card card-link">
                <div className="icon-badge">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <p className="card-from">
                  From{" "}
                  <strong>
                    <Price value={s.from} />
                  </strong>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2>A clear process from first call to launch day.</h2>
          </div>
          <ol className="steps grid grid-4">
            {process.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Why Spursud</p>
            <h2>Straightforward to work with, from quote to handover.</h2>
            <p style={{ color: "var(--ink-2)" }}>
              {company.name} is a Kenyan company, registered in {company.registeredYear} and based
              at {company.address.building} in {company.address.locality}, {company.address.county}.
              We work with start-ups, SMEs, NGOs and established businesses, locally and abroad.
            </p>
            <Link href="/about" className="btn btn-outline" style={{ marginTop: 12 }}>
              More about us
            </Link>
          </div>
          <div className="grid grid-2">
            {reasons.map((r) => (
              <div key={r.title} className="card">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
