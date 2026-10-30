import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
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
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>A Kenyan software company building for the world.</h1>
          <p className="lede">
            {company.shortName} helps businesses replace manual work with reliable software, from
            the first website to complex systems that run the whole operation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Started on the coast, working everywhere.</h2>
          </div>
          <div style={{ color: "var(--ink-2)" }}>
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

      <section className="section section-alt">
        <div className="container">
          <div className="stat-row">
            {facts.map((f) => (
              <div key={f.label} className="stat">
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we believe</p>
            <h2>The principles behind every project.</h2>
          </div>
          <div className="grid grid-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Company details</p>
            <h2>Registered and accountable.</h2>
            <p style={{ color: "var(--ink-2)" }}>
              You will always know exactly who you are contracting with.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <tbody>
                <tr>
                  <th scope="row">Registered name</th>
                  <td>{company.name}</td>
                </tr>
                <tr>
                  <th scope="row">Company number</th>
                  <td>{company.number}</td>
                </tr>
                <tr>
                  <th scope="row">Incorporated</th>
                  <td>{company.registered}</td>
                </tr>
                <tr>
                  <th scope="row">Registered office</th>
                  <td>
                    {company.address.building}, {company.address.street}, {company.address.locality}
                    , {company.address.county}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Postal address</th>
                  <td>{company.address.postal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand title="Let's build something useful" />
    </>
  );
}
