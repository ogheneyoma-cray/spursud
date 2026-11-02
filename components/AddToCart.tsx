"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export function AddToCart({ packageId, title }: { packageId: string; title: string }) {
  const { add, lines } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = lines.some((l) => l.packageId === packageId);

  return (
    <div className="add-to-cart">
      <button
        type="button"
        className="btn btn-coral btn-sm"
        onClick={() => {
          add(packageId);
          setAdded(true);
        }}
        aria-label={`Add ${title} to cart`}
      >
        {inCart ? "Add another" : "Add to cart"}
      </button>
      {inCart && (
        <Link href="/cart" className="add-to-cart-view">
          {added ? "Added. View cart" : "In your cart"}
        </Link>
      )}
      <span className="sr-only" aria-live="polite">
        {added ? `${title} added to your cart.` : ""}
      </span>
    </div>
  );
}

export function CartLink() {
  const { count, ready } = useCart();
  return (
    <Link href="/cart" className="cart-link" aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" />
        <circle cx="9.5" cy="20" r="1.2" />
        <circle cx="17.5" cy="20" r="1.2" />
      </svg>
      {ready && count > 0 && <span className="cart-count">{count}</span>}
    </Link>
  );
}
