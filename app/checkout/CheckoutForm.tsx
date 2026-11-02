"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/CartProvider";
import { CartSummary } from "@/components/CartSummary";
import { useCurrency } from "@/components/CurrencyProvider";

export function CheckoutForm() {
  const router = useRouter();
  const { lines, ready, clear } = useCart();
  const { currency } = useCurrency();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (!ready) return <p className="muted">Loading your cart…</p>;

  if (lines.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty.</p>
        <Link href="/services" className="btn btn-coral">
          Browse services
        </Link>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currency,
          items: lines,
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          notes: data.get("notes"),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not place your order.");
      clear();
      router.push(`/order/${json.reference}`);
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
    <div className="cart-grid">
      <form className="form form-card" onSubmit={handleSubmit}>
        <h2>Your details</h2>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Your name *</label>
            <input id="name" name="name" required minLength={2} autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="phone">Phone / WhatsApp</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+254…" />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" autoComplete="organization" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="notes">Anything we should know?</label>
          <textarea id="notes" name="notes" rows={4} placeholder="Your website address, deadlines, access details we'll need…" />
        </div>
        {error && (
          <p className="form-status form-error" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="btn btn-coral btn-block" disabled={busy}>
          {busy ? "Placing your order…" : "Place order"}
        </button>
        <p className="form-note">
          No payment is taken now. We&rsquo;ll email you an invoice with payment details within one business day,
          and work starts once payment is confirmed. See our <Link href="/terms">terms</Link> and{" "}
          <Link href="/refund-policy">refund policy</Link>.
        </p>
      </form>
      <aside>
        <CartSummary />
        <p className="form-note">
          Prices in {currency}. <Link href="/cart">Edit your cart</Link>
        </p>
      </aside>
    </div>
  );
}
