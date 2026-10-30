import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "When and how Spursud issues refunds for software development projects, retainers and hourly work in USD and KES.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" updated="30 October 2026" current="/refund-policy">
      <h2>1. Overview</h2>
      <p>
        This Refund Policy explains when and how {company.name} (&ldquo;Spursud&rdquo;,
        &ldquo;we&rdquo; or &ldquo;us&rdquo;) issues refunds for its computer programming, software
        development, design, hosting and support services. It forms part of our{" "}
        <Link href="/terms">Terms of Service</Link>. Because our Services are custom professional
        work carried out to your specification, refunds depend on how much work has been done when
        a request is made. Where a signed agreement contains different refund terms, the signed
        agreement applies.
      </p>

      <h2>2. Free consultation and quotations</h2>
      <p>
        Discovery calls and quotations are free, and you are under no obligation until you accept a
        quotation and pay the first invoice. We encourage you to review the Scope, timeline and
        deliverables carefully and to ask questions before you commit.
      </p>

      <h2>3. Fixed-price projects</h2>
      <p>Fixed-price projects are billed in milestones. If you cancel a project:</p>
      <ul>
        <li>
          <strong>Within 3 business days of paying the deposit, before any work has started:</strong>{" "}
          we will refund the deposit in full, less any non-refundable third-party costs already
          incurred on your behalf.
        </li>
        <li>
          <strong>After work has started:</strong> we will calculate the value of the work
          completed to date, based on hours logged at our standard hourly rate or the percentage of
          milestones completed, whichever is lower. If the amount you have paid is more than that
          value, we will refund the difference.
        </li>
        <li>
          <strong>After a milestone has been delivered and accepted:</strong> payments for that
          milestone are non-refundable, as the work has been completed and approved.
        </li>
      </ul>
      <p>
        On cancellation, we will hand over all completed work that you have paid for, in its
        current state.
      </p>

      <h2>4. Failure to deliver</h2>
      <p>
        If we materially fail to deliver what was agreed in the Scope and do not put it right
        within fifteen (15) business days of receiving your written notice describing the problem,
        you may end the engagement and are entitled to a refund of fees paid for the affected,
        undelivered milestone. Delays caused by late feedback, missing content or materials, or
        changes requested by you do not count as failure to deliver.
      </p>

      <h2>5. Monthly retainers and support plans</h2>
      <p>
        Retainers are billed monthly in advance and may be cancelled with fourteen (14) days&rsquo;
        written notice, subject to any minimum term stated in your plan. We do not refund the
        current billing period once it has started. Unused retainer hours do not roll over and are
        not refundable unless your agreement says otherwise. If you pay for several months in
        advance and later cancel, we will refund any whole months that have not yet started, after
        the minimum term.
      </p>

      <h2>6. Hourly and ad-hoc work</h2>
      <p>
        Hourly work is billed for time actually spent and is not refundable once performed. If you
        prepaid a block of hours, any unused hours can be refunded on request within six (6) months
        of purchase.
      </p>

      <h2>7. Non-refundable items</h2>
      <p>The following cannot be refunded once purchased or committed on your behalf:</p>
      <ul>
        <li>domain name registrations and renewals;</li>
        <li>SSL certificates, software licences, themes, plugins and stock assets;</li>
        <li>app store developer accounts and listing fees;</li>
        <li>cloud hosting, SMS, payment-gateway and other third-party usage charges;</li>
        <li>completed discovery, audit or consulting reports.</li>
      </ul>

      <h2>8. Currency and exchange rates</h2>
      <p>
        Refunds are made in the same currency as the original payment: Kenyan shillings (KES) for
        KES invoices and United States dollars (USD) for USD invoices. We refund the amount we
        received in that currency, and we do not adjust it for exchange-rate changes between the
        payment date and the refund date. Charges deducted by banks, card networks or mobile-money
        operators, such as M-Pesa transaction fees or international wire fees, are not refundable
        by us.
      </p>

      <h2>9. How refunds are paid</h2>
      <p>
        Where possible, we refund to the original payment method. M-Pesa payments are refunded to
        the paying number, bank transfers to the paying account, and card payments to the original
        card. If that is not possible, we will agree an alternative method with you in writing. We
        aim to process approved refunds within ten (10) business days. Your bank or provider may
        take longer to credit the funds.
      </p>

      <h2>10. Chargebacks</h2>
      <p>
        If you are unhappy, please contact us before raising a dispute with your bank or card
        issuer, so that we can try to resolve the issue quickly. We may suspend Services on an
        account while a chargeback is under investigation.
      </p>

      <h2>11. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${company.email}`}>{company.email}</a> with your name, company,
        invoice number, the amount and currency paid, and the reason for your request. We will
        acknowledge your request within two (2) business days and give a written decision,
        including any calculation of work completed, within ten (10) business days.
      </p>

      <h2>12. Your statutory rights</h2>
      <p>
        Nothing in this policy affects any rights you may have under the Consumer Protection Act,
        2012 or other applicable Kenyan law. If you have questions about this policy, call us on{" "}
        {company.phone} or write to {company.name}, {company.address.postal}, Kenya.
      </p>
    </LegalPage>
  );
}
