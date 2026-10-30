import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Spursud collects, uses and protects personal data under the Kenya Data Protection Act, 2019.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="30 October 2026" current="/privacy">
      <h2>1. Who we are</h2>
      <p>
        This Privacy Policy explains how {company.name} (company number {company.number}),
        &ldquo;Spursud&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;, collects, uses, shares and
        protects personal data when you visit this website, contact us or use our software
        development services. We are the data controller for the personal data described here. Our
        registered office is at {company.address.building}, {company.address.street},{" "}
        {company.address.locality}, {company.address.county}, Kenya. We process personal data in
        line with the Data Protection Act, 2019 of Kenya and its regulations, and we apply the same
        standards to clients located outside Kenya.
      </p>

      <h2>2. The data we collect</h2>
      <p>We collect only the information we need, which may include:</p>
      <ul>
        <li>
          <strong>Contact details</strong> such as your name, company, job title, email address and
          phone or WhatsApp number when you submit an enquiry, call or email us;
        </li>
        <li>
          <strong>Project information</strong> you choose to share, such as requirements, budgets,
          documents and feedback;
        </li>
        <li>
          <strong>Billing information</strong> such as billing address, KRA PIN or tax number, and
          payment references for M-Pesa, bank or card transactions. We do not store full card
          numbers;
        </li>
        <li>
          <strong>Technical data</strong> such as IP address, browser type, device, pages visited
          and referring site, collected through server logs and analytics;
        </li>
        <li>
          <strong>Preferences</strong> such as your chosen display currency (USD or KES), which is
          stored in your own browser.
        </li>
      </ul>

      <h2>3. How and why we use your data</h2>
      <p>We use personal data on the following lawful bases:</p>
      <ul>
        <li>
          <strong>To respond to enquiries and prepare quotations</strong>, which are steps taken at
          your request before entering a contract;
        </li>
        <li>
          <strong>To deliver, invoice and support our Services</strong>, which is necessary to
          perform our contract with you;
        </li>
        <li>
          <strong>To meet legal obligations</strong>, such as tax, accounting and record-keeping
          requirements in Kenya;
        </li>
        <li>
          <strong>To improve and secure our website</strong>, which is in our legitimate interest;
        </li>
        <li>
          <strong>To send occasional updates or marketing</strong>, only with your consent, which
          you can withdraw at any time.
        </li>
      </ul>
      <p>We do not sell your personal data, and we do not use it for automated decision-making.</p>

      <h2>4. Client data in the software we build</h2>
      <p>
        When we build, host or maintain software for you, we may have access to personal data
        belonging to your own customers or staff. In that case you are the data controller and we
        act as your data processor. We process that data only on your documented instructions,
        keep it confidential, apply appropriate security measures and delete or return it at the
        end of the engagement, unless the law requires us to keep it.
      </p>

      <h2>5. Sharing your data</h2>
      <p>We share personal data only with trusted parties who help us run our business, such as:</p>
      <ul>
        <li>cloud hosting, email and file-storage providers;</li>
        <li>payment processors, banks and mobile-money operators;</li>
        <li>accountants, auditors and legal advisers;</li>
        <li>government authorities, including the Kenya Revenue Authority, where required by law.</li>
      </ul>
      <p>
        These parties may only use your data to provide services to us and must protect it. Some
        providers may store data outside Kenya. Where this happens, we make sure that appropriate
        safeguards are in place, as required by the Data Protection Act, 2019.
      </p>

      <h2>6. Cookies and analytics</h2>
      <p>
        Our website uses a small amount of browser storage to remember your currency preference. We
        may use privacy-friendly analytics to understand how the site is used in aggregate.
        Embedded content, such as maps, may set its own cookies under the provider&rsquo;s
        policies. You can block or delete cookies in your browser settings, although some features
        may then stop working.
      </p>

      <h2>7. How long we keep data</h2>
      <p>
        Enquiries that do not lead to a project are deleted within twenty-four (24) months.
        Contract and billing records are kept for at least seven (7) years to meet tax and
        accounting requirements. Server logs are normally kept for no longer than ninety (90) days.
      </p>

      <h2>8. Security</h2>
      <p>
        We protect personal data with encryption in transit, access controls, multi-factor
        authentication, regular updates and backups. No system is completely secure, but if we
        become aware of a data breach that affects you, we will notify you and the Office of the
        Data Protection Commissioner as required by law.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Under the Data Protection Act, 2019, you have the right to be informed about how your data
        is used, to access it, to have inaccurate data corrected, to have data deleted, to object
        to or restrict processing, to withdraw consent and to data portability. To make a request,
        email us using the details below. We will respond within the time required by law. If you
        are unhappy with our response, you can complain to the Office of the Data Protection
        Commissioner (ODPC) of Kenya.
      </p>

      <h2>10. Children</h2>
      <p>
        Our website and Services are intended for businesses and adults. We do not knowingly
        collect personal data from children.
      </p>

      <h2>11. Changes and contact</h2>
      <p>
        We may update this policy from time to time, and the latest version will always be
        published here. For privacy questions or requests, contact us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>, call {company.phone}, or write to{" "}
        {company.name}, {company.address.postal}, Kenya.
      </p>
    </LegalPage>
  );
}
