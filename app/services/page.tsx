import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/CurrencyProvider";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        eyebrow="Services"
        title={
          <>
            Computer programming, <em>end to end.</em>
          </>
        }
        lede="Pick a single service or let us run the whole project. Every engagement starts with a written scope and a fixed quote in USD or KES."
      />

      <section className="section">
        <div className="container">
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
                  <span className="feature-price">
                    From
                    <strong>
                      <Price value={s.from} />
                    </strong>
                  </span>
                  <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn btn-line btn-sm">
                    Enquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-sand">
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
