import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/CurrencyProvider";
import { services } from "@/lib/services";
import { company } from "@/lib/site";

const tools = [
  "Next.js",
  "React Native",
  "M-Pesa Daraja",
  "Python",
  "PostgreSQL",
  "Flutter",
  "Node.js",
  "Docker",
  "Laravel",
  "AWS",
];

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
    text: "Two-week sprints with a working demo at the end of each one. You see progress, not status reports.",
  },
  {
    title: "Launch & care",
    text: "We deploy, monitor and hand over documentation, then stay on to fix, maintain and improve.",
  },
];

const reasons = [
  {
    title: "Fixed, written quotes",
    text: "Every project starts with a clear scope and price. No surprise invoices at the end.",
  },
  {
    title: "Shillings or dollars",
    text: "Kenyan clients pay in KES by M-Pesa or bank. International clients pay in USD.",
  },
  {
    title: "The code is yours",
    text: "Full source code, documentation and accounts are handed over once the project is paid for.",
  },
  {
    title: "East Africa Time",
    text: "Working hours that overlap with Europe, the Gulf and Asia, from our base in Mombasa.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Est. {company.registeredYear} · Nyali, Mombasa</p>
            <h1>
              Software, <em>crafted</em> on the coast.
            </h1>
            <p className="lede">
              {company.shortName} designs and builds websites, web apps, mobile apps and
              integrations for businesses in Kenya and around the world, with fixed quotes in US
              dollars or Kenyan shillings.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-coral">
                Start a project
              </Link>
              <Link href="/services" className="btn btn-line">
                Our services
              </Link>
            </div>
            <ul className="ledger">
              <li>
                <strong>Fixed</strong>written quotes
              </li>
              <li>
                <strong>USD · KES</strong>billing
              </li>
              <li>
                <strong>100%</strong>code ownership
              </li>
            </ul>
          </div>
          <div className="hero-media">
            <div className="arch">
              <Image
                src="/images/hero.png"
                alt="Illustration of a dhow whose sail is a code editor, sailing toward a coastal town"
                width={640}
                height={800}
                priority
                sizes="(min-width: 960px) 40vw, 90vw"
              />
            </div>
            <p className="seal">
              <span>
                Free
                <br />
                discovery
                <br />
                call
                <small>No obligation</small>
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...tools, ...tools].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">What we make</p>
              <h2>
                Six ways we put <em>software</em> to work for you.
              </h2>
            </div>
            <p>
              From a first website to systems that run the whole operation. Pick one service or let
              us handle the whole project.
            </p>
          </div>
          <ol className="service-index">
            {services.map((s, i) => (
              <li key={s.id} className="service-row">
                <Link href={`/services#${s.id}`}>
                  <span className="service-num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="service-from">
                    From
                    <strong>
                      <Price value={s.from} />
                    </strong>
                  </span>
                  <span className="service-thumb arch">
                    <Image src={s.image} alt={s.imageAlt} width={300} height={225} sizes="260px" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-teal">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">How we work</p>
              <h2>From first call to launch day, in four steps.</h2>
            </div>
            <p>No jargon and no disappearing acts. You always know what is happening and what it costs.</p>
          </div>
          <ol className="process">
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
        <div className="container why-grid">
          <div className="why-media arch">
            <Image
              src="/images/team.png"
              alt="Illustration of a software team working together in a bright coastal office"
              width={600}
              height={800}
              sizes="(min-width: 960px) 35vw, 90vw"
            />
          </div>
          <div>
            <p className="eyebrow">Why Spursud</p>
            <p className="pull-quote">
              A local team with international standards: clear contracts, honest estimates and
              support that <em>doesn&rsquo;t disappear</em> after launch.
            </p>
            <ul className="reasons">
              {reasons.map((r) => (
                <li key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
