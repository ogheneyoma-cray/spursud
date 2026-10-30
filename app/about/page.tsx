import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Spursud Trading Limited is a Kenyan computer programming company based in Nyali, Mombasa, building software for clients in Kenya and worldwide.",
};

const values = [
  {
    title: "Honesty over hype",
    text: "We tell you what something will really cost and how long it will really take, and we will say so when you do not need custom software at all.",
  },
  {
    title: "Build for real users",
    text: "We design for the people who will use the product every day, whether that is on a low-cost Android phone or on a busy shop floor.",
  },
  {
    title: "Quality you can maintain",
    text: "Clean, documented, tested code that another developer could pick up tomorrow. No lock-in, ever.",
  },
  {
    title: "Partners, not vendors",
    text: "Most of our work continues after launch. We measure success by whether the software keeps paying for itself.",
  },
];

const facts = [
  { value: String(company.registeredYear), label: "Year incorporated" },
  { value: "Mombasa", label: "Headquartered in Nyali" },
  { value: "USD · KES", label: "Billing currencies" },
  { value: "UTC+3", label: "East Africa Time" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A Kenyan software company, <em>building for the world.</em>
          </>
        }
        lede={`${company.shortName} helps businesses replace manual work with reliable software, from a first website to systems that run the whole operation.`}
        image="/images/team.png"
        imageAlt="Illustration of a software team collaborating in an office with arched Swahili-style windows"
      />

      <section className="section">
        <div className="container story">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>
              Started on the coast, <em>working everywhere.</em>
            </h2>
          </div>
          <div className="story-copy">
            <p>
              {company.name} was incorporated in Kenya on {company.registered} under the Companies
              Act, 2015. We are a privately owned company, based at {company.address.building} on{" "}
              {company.address.street} in {company.address.locality}, {company.address.county}.
            </p>
            <p>
              We started because we saw too many businesses stuck between expensive foreign
              agencies and unreliable freelancers. Our answer is a local team with international
              standards: clear contracts, fixed quotes, modern engineering practices and support
              that does not disappear after launch.
            </p>
            <p>
              Today we write software for clients across Kenya and abroad, including websites,
              business applications, mobile apps and the integrations that tie them together. Local
              clients are billed in Kenyan shillings and international clients in US dollars.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight section-sand">
        <div className="container facts">
          {facts.map((f) => (
            <div key={f.label}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">What we believe</p>
              <h2>The principles behind every project.</h2>
            </div>
          </div>
          <ol className="values">
            {values.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container story">
          <div>
            <p className="eyebrow">Company details</p>
            <h2>Registered and accountable.</h2>
            <p style={{ color: "var(--ink-2)" }}>
              You will always know exactly who you are contracting with.
            </p>
          </div>
          <div className="registry">
            <div className="registry-inner">
              <dl>
                <div>
                  <dt>Registered name</dt>
                  <dd>{company.name}</dd>
                </div>
                <div>
                  <dt>Company number</dt>
                  <dd>{company.number}</dd>
                </div>
                <div>
                  <dt>Incorporated</dt>
                  <dd>{company.registered}</dd>
                </div>
                <div>
                  <dt>Registered office</dt>
                  <dd>
                    {company.address.building}, {company.address.street}, {company.address.locality},{" "}
                    {company.address.county}
                  </dd>
                </div>
                <div>
                  <dt>Postal address</dt>
                  <dd>{company.address.postal}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
