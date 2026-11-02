import type { Metadata } from "next";
import { CartView } from "./CartView";

export const metadata: Metadata = {
  title: "Your cart",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Cart</p>
        <h1 className="shop-title">Your cart</h1>
        <CartView />
      </div>
    </section>
  );
}
