import Image from "next/image";
import Link from "next/link";
import type { Plan } from "@/lib/pricing";
import { Price } from "./CurrencyProvider";

export function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <article className={`plan ${plan.featured ? "plan-featured" : ""}`}>
      <div className="plan-media arch">
        <Image src={plan.image} alt="" width={400} height={300} sizes="(min-width: 1000px) 30vw, 90vw" />
        {plan.featured && <span className="plan-badge">Most chosen</span>}
      </div>
      <div className="plan-body">
        <p className="plan-index">Nº 0{index + 1}</p>
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
        <ul className="tick-list">
          {plan.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <Link
          href={`/contact?plan=${encodeURIComponent(plan.name)}`}
          className={`btn ${plan.featured ? "btn-coral" : "btn-line"} btn-block`}
        >
          Get a quote
        </Link>
      </div>
    </article>
  );
}
