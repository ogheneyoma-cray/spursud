import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/pricing";
import { cancelOrder } from "../../../actions";
import { MarkPaidForm } from "./MarkPaidForm";

const labels = { awaiting_payment: "Awaiting payment", paid: "Paid", cancelled: "Cancelled" };
const when = (d: Date) => d.toLocaleString("en-KE", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Nairobi" });

export default async function AdminOrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await prisma.order.findUnique({ where: { id }, include: { items: true } });
  if (!order) notFound();

  return (
    <div className="admin-order">
      <p>
        <Link href="/admin">← All orders</Link>
      </p>
      <h1 className="shop-title">{order.reference}</h1>
      <p className={`status-pill status-${order.status}`}>{labels[order.status]}</p>

      <div className="cart-grid">
        <div>
          <div className="summary">
            <h2 className="summary-title">Items</h2>
            <ul className="summary-lines">
              {order.items.map((i) => (
                <li key={i.id}>
                  <span>
                    {i.name} <span className="summary-qty">× {i.quantity} @ {formatMoney(i.unitPrice, order.currency)}</span>
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
            <div><dt>Placed</dt><dd>{when(order.createdAt)}</dd></div>
            <div><dt>Name</dt><dd>{order.customerName}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${order.customerEmail}`}>{order.customerEmail}</a></dd></div>
            <div><dt>Phone</dt><dd>{order.customerPhone ?? "–"}</dd></div>
            <div><dt>Company</dt><dd>{order.companyName ?? "–"}</dd></div>
            <div><dt>Notes</dt><dd className="pre">{order.notes ?? "–"}</dd></div>
            {order.paidAt && <div><dt>Paid</dt><dd>{when(order.paidAt)}</dd></div>}
            {order.paymentReference && <div><dt>Payment ref</dt><dd>{order.paymentReference}</dd></div>}
            <div><dt>Customer link</dt><dd><Link href={`/order/${order.reference}`}>/order/{order.reference}</Link></dd></div>
          </dl>
        </div>

        <aside className="form-card">
          {order.status === "awaiting_payment" ? (
            <>
              <h2>Payment</h2>
              <p className="muted">Send the invoice, then mark the order paid once the money arrives. The customer gets an email.</p>
              <MarkPaidForm orderId={order.id} />
              <form action={cancelOrder} className="admin-cancel">
                <input type="hidden" name="orderId" value={order.id} />
                <button type="submit" className="link-button">Cancel this order</button>
              </form>
            </>
          ) : (
            <p className="muted">This order is {labels[order.status].toLowerCase()}. No actions left.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
