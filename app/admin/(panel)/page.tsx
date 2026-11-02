import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/pricing";

const labels = { awaiting_payment: "Awaiting payment", paid: "Paid", cancelled: "Cancelled" };
const filters = ["all", "awaiting_payment", "paid", "cancelled"] as const;

export default async function OrdersPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const active = filters.find((f) => f === status) ?? "all";
  const orders = await prisma.order.findMany({
    where: active === "all" ? {} : { status: active },
    orderBy: { createdAt: "desc" },
    take: 200,
    include: { _count: { select: { items: true } } },
  });

  return (
    <>
      <h1 className="shop-title">Orders</h1>
      <nav className="admin-filters" aria-label="Filter orders">
        {filters.map((f) => (
          <Link key={f} href={f === "all" ? "/admin" : `/admin?status=${f}`} aria-current={f === active ? "page" : undefined}>
            {f === "all" ? "All" : labels[f]}
          </Link>
        ))}
      </nav>
      {orders.length === 0 ? (
        <p className="muted">No orders yet.</p>
      ) : (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Placed</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>
                    <Link href={`/admin/orders/${o.id}`}>{o.reference}</Link>
                  </td>
                  <td>{o.createdAt.toLocaleString("en-KE", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Nairobi" })}</td>
                  <td>
                    {o.customerName}
                    <br />
                    <span className="muted">{o.customerEmail}</span>
                  </td>
                  <td>{o._count.items}</td>
                  <td>{formatMoney(o.total, o.currency)}</td>
                  <td>
                    <span className={`status-pill status-${o.status}`}>{labels[o.status]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
