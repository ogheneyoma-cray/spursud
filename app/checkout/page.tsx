import type { Metadata } from "next";
import { CheckoutForm } from "./CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Checkout</p>
        <h1 className="shop-title">Place your order</h1>
        <CheckoutForm />
      </div>
    </section>
  );
}
