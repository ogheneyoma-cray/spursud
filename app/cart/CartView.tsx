"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { useCartTotals } from "@/components/CartSummary";
import { CurrencyToggle } from "@/components/CurrencyProvider";
import { MAX_QUANTITY } from "@/lib/packages";
import { formatMoney } from "@/lib/pricing";

export function CartView() {
  const { ready, setQuantity, remove } = useCart();
  const { rows, currency, total } = useCartTotals();

  if (!ready) return <p className="muted">Loading your cart…</p>;

  if (rows.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty.</p>
        <Link href="/services" className="btn btn-coral">
          Browse services
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-grid">
      <ul className="cart-lines">
        {rows.map(({ pkg, quantity, lineTotal }) => (
          <li key={pkg.id} className="cart-line">
            <div className="cart-thumb">
              <Image src={pkg.image} alt="" width={160} height={120} sizes="96px" />
            </div>
            <div className="cart-line-body">
              <h2>{pkg.title}</h2>
              <p className="muted">
                {formatMoney(pkg.price[currency], currency)} each · {pkg.delivery}
              </p>
              <div className="cart-line-actions">
                <label className="sr-only" htmlFor={`qty-${pkg.id}`}>
                  Quantity of {pkg.title}
                </label>
                <select
                  id={`qty-${pkg.id}`}
                  className="qty"
                  value={quantity}
                  onChange={(e) => setQuantity(pkg.id, Number(e.target.value))}
                >
                  {Array.from({ length: MAX_QUANTITY }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <button type="button" className="link-button" onClick={() => remove(pkg.id)}>
                  Remove
                </button>
              </div>
            </div>
            <p className="cart-line-total">{formatMoney(lineTotal, currency)}</p>
          </li>
        ))}
      </ul>

      <aside className="summary">
        <h2 className="summary-title">Total</h2>
        <div className="summary-currency">
          <span className="muted">Pay in</span>
          <CurrencyToggle />
        </div>
        <p className="summary-total">
          <span>Total</span>
          <strong>{formatMoney(total, currency)}</strong>
        </p>
        <Link href="/checkout" className="btn btn-coral btn-block">
          Go to checkout
        </Link>
        <Link href="/services" className="btn btn-line btn-block">
          Keep browsing
        </Link>
        <p className="form-note">No payment is taken online. We email an invoice after you place your order.</p>
      </aside>
    </div>
  );
}
