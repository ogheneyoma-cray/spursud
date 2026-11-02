import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern the use of the Spursud website and our software development services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="30 October 2026" current="/terms">
      <h2>1. About these terms</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of this website and any
        computer programming, software development, design, hosting, maintenance or consulting
        services (&ldquo;Services&rdquo;) provided by {company.name}, a private limited company
        registered in Kenya under company number {company.number}, with its registered office at{" "}
        {company.address.building}, {company.address.street}, {company.address.locality},{" "}
        {company.address.county} (&ldquo;Spursud&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
        using our website, accepting a quotation or paying an invoice, you (&ldquo;the
        Client&rdquo;) agree to these Terms. Where a signed proposal, statement of work or service
        agreement conflicts with these Terms, the signed document takes priority.
      </p>

      <h2>2. Quotations and scope</h2>
      <p>
        Prices published on our website are starting prices for guidance only. Each engagement is
        defined by a written quotation or statement of work describing the deliverables, timeline,
        price and billing currency (&ldquo;Scope&rdquo;). Quotations are valid for thirty (30) days
        from the date of issue. Work outside the agreed Scope, including new features, additional
        pages or changes to approved designs, is a change request. We will estimate each change
        request in writing, and it will only proceed once you approve it.
      </p>

      <h2>3. Fees, currency and payment</h2>
      <p>
        We invoice in Kenyan shillings (KES) or United States dollars (USD), as stated in your
        quotation. The billing currency is fixed for the life of the engagement, and we do not
        adjust invoices for exchange-rate movements. Unless agreed otherwise:
      </p>
      <ul>
        <li>
          Fixed-price projects are billed 40% on acceptance, 40% at the agreed mid-point milestone
          and 20% on delivery;
        </li>
        <li>Monthly retainers and hosting are billed in advance at the start of each period;</li>
        <li>Hourly work is billed monthly in arrears, in 30-minute increments;</li>
        <li>Invoices are payable within seven (7) days of issue.</li>
      </ul>
      <p>
        Prices exclude Value Added Tax and other applicable taxes, which will be added where
        required by Kenyan law. You are responsible for any bank, card or mobile-money transfer
        charges, so that we receive the full invoiced amount. If an invoice is more than fourteen
        (14) days overdue, we may pause work, suspend hosted services and withhold deliverables
        until the account is settled.
      </p>

      <h2>4. Client responsibilities</h2>
      <p>
        You agree to provide timely feedback, content, approvals, access credentials and any other
        materials reasonably needed to deliver the Services. Delays in providing these may move
        delivery dates. You confirm that any text, images, logos, data or other materials you give
        us are owned by you or properly licensed, and that their use will not infringe the rights
        of any third party or break any law.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        Once we have received payment in full, ownership of the custom source code, designs and
        documentation created specifically for you transfers to you. Until then, all rights remain
        with Spursud. We keep ownership of our pre-existing tools, libraries, frameworks and
        know-how, and grant you a perpetual, non-exclusive, royalty-free licence to use them as
        part of your deliverables. Open-source components remain subject to their own licences.
        Unless you ask us not to in writing, we may describe the project in general terms in our
        portfolio, without disclosing confidential information.
      </p>

      <h2>6. Acceptance and warranty</h2>
      <p>
        You will have ten (10) business days from delivery to test each milestone and report any
        defects against the agreed Scope. A deliverable is accepted if no defects are reported in
        that period or when it is used in live production. We will fix defects reported within the
        warranty period stated in your quotation at no extra cost. This warranty does not cover
        problems caused by changes made by others, third-party services, hosting environments we
        do not manage, or misuse.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        Our solutions may rely on third-party platforms such as cloud hosts, payment gateways,
        mobile-money providers, app stores and APIs. We are not responsible for their availability,
        pricing changes or policies. Fees charged by these providers are payable by you unless they
        are expressly included in your quotation.
      </p>

      <h2>8. Confidentiality and data</h2>
      <p>
        Each party will keep the other&rsquo;s non-public business information confidential and
        use it only for the engagement. Where we process personal data on your behalf, we do so
        only on your documented instructions and in line with the Kenya Data Protection Act, 2019.
        Our handling of personal data collected through this website is described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any indirect or consequential loss,
        including loss of profit, revenue, data or goodwill. Our total liability arising from any
        engagement is limited to the fees you paid us for that engagement in the twelve (12) months
        before the claim arose. Nothing in these Terms limits liability that cannot be limited
        under Kenyan law.
      </p>

      <h2>10. Termination</h2>
      <p>
        Either party may end an engagement by giving fourteen (14) days&rsquo; written notice. If
        the engagement ends early, you will pay for all work completed up to the termination date
        and for any committed third-party costs. Refunds are handled under our{" "}
        <Link href="/refund-policy">Refund Policy</Link>.
      </p>

      <h2>11. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the Republic of Kenya. The parties will first try
        to resolve any dispute through good-faith negotiation. Disputes that are not resolved
        within thirty (30) days may be referred to mediation and, failing that, to the courts of
        Kenya, which will have exclusive jurisdiction.
      </p>

      <h2>12. Changes and contact</h2>
      <p>
        We may update these Terms from time to time. The version published on this page applies to
        new engagements from its &ldquo;last updated&rdquo; date. Questions about these Terms can be
        sent to <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPage>
  );
}
