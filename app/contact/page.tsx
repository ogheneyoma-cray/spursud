import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you&rsquo;re <em>building.</em>
          </>
        }
        lede="Fill in the form or reach us directly. We reply to every enquiry within one business day."
      />

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-card">
            <h2>Karibu.</h2>
            <ul className="contact-list">
              <li>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </li>
              <li>
                <h3>Office</h3>
                <address>
                  {company.address.building}, {company.address.street}
                  <br />
                  {company.address.locality}, {company.address.county}, {company.address.country}
                </address>
              </li>
              <li>
                <h3>Postal</h3>
                <p>{company.address.postal}</p>
              </li>
              <li>
                <h3>Hours</h3>
                <p>Monday – Friday, 8:30am – 5:30pm EAT</p>
              </li>
            </ul>
          </aside>

          <div className="form-card">
            <h2>Project enquiry</h2>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <iframe
            className="map-frame"
            title="Map showing Epic Business Park, Nyali, Mombasa"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
