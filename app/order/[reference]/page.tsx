import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/pricing";
import { company } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your order",
  robots: { index: false, follow: false },
};

const statusText = {
  awaiting_payment: {
    label: "Awaiting payment",
    body: "Thank you, your order is in. We'll email an invoice with payment details within one business day. Work starts once payment is confirmed.",
  },
  paid: {
    label: "Paid",
    body: "We've received your payment and work on your order is under way. We'll be in touch about the details and timeline.",
  },
  cancelled: {
    label: "Cancelled",
    body: "This order has been cancelled. If you think this is a mistake, please email us.",
  },
};

export default async function OrderPage({ params }: { params: Promise<{ reference: string }> }) {
  const { reference } = await params;
  if (!/^SPS-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(reference)) notFound();
  const order = await prisma.order.findUnique({ where: { reference }, include: { items: true } });
  if (!order) notFound();
  const status = statusText[order.status];

  return (
    <section className="section">
      <div className="container order-page">
        <p className="eyebrow">Order {order.reference}</p>
        <h1 className="shop-title">
          {order.status === "awaiting_payment" ? "Order received." : status.label}
        </h1>
        <p className={`status-pill status-${order.status}`}>{status.label}</p>
        <p className="lede">{status.body}</p>

        <div className="summary">
          <h2 className="summary-title">Order summary</h2>
          <ul className="summary-lines">
            {order.items.map((i) => (
              <li key={i.id}>
                <span>
                  {i.name} <span className="summary-qty">× {i.quantity}</span>
                </span>
                <span>{formatMoney(i.lineTotal, order.currency)}</span>
              </li>
            ))}
          </ul>
          <p className="summary-total">
            <span>Total</span>
            <strong>{formatMoney(order.total, order.currency)}</strong>
          </p>
        </div>

        <dl className="order-meta">
          <div>
            <dt>Placed</dt>
            <dd>{order.createdAt.toLocaleDateString("en-KE", { dateStyle: "long", timeZone: "Africa/Nairobi" })}</dd>
          </div>
          <div>
            <dt>Name</dt>
            <dd>{order.customerName}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{order.customerEmail}</dd>
          </div>
          {order.companyName && (
            <div>
              <dt>Company</dt>
              <dd>{order.companyName}</dd>
            </div>
          )}
        </dl>

        <p className="form-note">
          Keep this page&rsquo;s link to check your order. Questions? Email{" "}
          <a href={`mailto:${company.email}?subject=${encodeURIComponent(`Order ${order.reference}`)}`}>{company.email}</a>{" "}
          and quote <strong>{order.reference}</strong>.
        </p>
        <Link href="/services" className="btn btn-line">
          Back to services
        </Link>
      </div>
    </section>
  );
}
