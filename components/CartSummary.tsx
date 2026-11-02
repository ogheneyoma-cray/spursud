"use client";

import { findPackage } from "@/lib/packages";
import { formatMoney } from "@/lib/pricing";
import { useCart } from "./CartProvider";
import { useCurrency } from "./CurrencyProvider";

/** Display-only totals. The server reprices every order from lib/packages.ts. */
export function useCartTotals() {
  const { lines } = useCart();
  const { currency } = useCurrency();
  const rows = lines.flatMap((l) => {
    const pkg = findPackage(l.packageId);
    return pkg ? [{ pkg, quantity: l.quantity, lineTotal: pkg.price[currency] * l.quantity }] : [];
  });
  return { rows, currency, total: rows.reduce((s, r) => s + r.lineTotal, 0) };
}

export function CartSummary() {
  const { rows, currency, total } = useCartTotals();
  return (
    <div className="summary">
      <h2 className="summary-title">Order summary</h2>
      <ul className="summary-lines">
        {rows.map((r) => (
          <li key={r.pkg.id}>
            <span>
              {r.pkg.title} <span className="summary-qty">× {r.quantity}</span>
            </span>
            <span>{formatMoney(r.lineTotal, currency)}</span>
          </li>
        ))}
      </ul>
      <p className="summary-total">
        <span>Total</span>
        <strong>{formatMoney(total, currency)}</strong>
      </p>
    </div>
  );
}
