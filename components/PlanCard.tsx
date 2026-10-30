import Link from "next/link";
import type { Plan } from "@/lib/pricing";
import { Price } from "./CurrencyProvider";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`plan-card ${plan.featured ? "featured" : ""}`}>
      {plan.featured && <span className="plan-badge">Most chosen</span>}
      <h3>{plan.name}</h3>
      <p className="plan-tagline">{plan.tagline}</p>
      <p className="plan-price">
        {plan.prefix && <span className="plan-prefix">{plan.prefix}</span>}
        <span className="plan-amount">
          <Price value={plan.price} />
        </span>
        {plan.suffix && <span className="plan-suffix">{plan.suffix}</span>}
      </p>
      <p className="plan-timeline">{plan.timeline}</p>
      <ul className="check-list">
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <Link
        href={`/contact?plan=${encodeURIComponent(plan.name)}`}
        className={`btn ${plan.featured ? "btn-primary" : "btn-outline"} btn-block`}
      >
        Get a quote
      </Link>
    </article>
  );
}
