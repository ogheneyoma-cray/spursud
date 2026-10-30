import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Spursud in Nyali, Mombasa for a free discovery call and a fixed quote on your website, app or software project.",
};

const mapQuery = encodeURIComponent("Epic Business Park, Links Road, Nyali, Mombasa, Kenya");

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Tell us about your project.</h1>
          <p className="lede">
            Fill in the form or reach us directly. We reply to every enquiry within one business
            day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>

          <aside>
            <ul className="contact-list">
              <li>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${company.email}`} style={{ overflowWrap: "anywhere" }}>
                    {company.email}
                  </a>
                </p>
              </li>
              <li>
                <h3>Phone & WhatsApp</h3>
                <p>
                  <a href={company.phoneHref}>{company.phone}</a> ·{" "}
                  <a href={company.whatsappHref} target="_blank" rel="noopener">
                    WhatsApp
                  </a>
                </p>
              </li>
              <li>
                <h3>Office</h3>
                <address>
                  {company.address.building}
                  <br />
                  {company.address.street}, {company.address.locality}
                  <br />
                  {company.address.county}, {company.address.country}
                </address>
              </li>
              <li>
                <h3>Postal address</h3>
                <p>{company.address.postal}</p>
              </li>
              <li>
                <h3>Hours</h3>
                <p>Monday – Friday, 8:30am – 5:30pm EAT</p>
              </li>
            </ul>
            <iframe
              className="map-frame"
              title="Map showing Epic Business Park, Nyali, Mombasa"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </section>
    </>
  );
}
