"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { projectPlans, retainerPlans } from "@/lib/pricing";
import { services } from "@/lib/services";
import { company } from "@/lib/site";
import { useCurrency } from "./CurrencyProvider";

const budgets = {
  USD: ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"],
  KES: [
    "Under KES 130,000",
    "KES 130,000 – 650,000",
    "KES 650,000 – 2,000,000",
    "KES 2,000,000+",
    "Not sure yet",
  ],
};

export function ContactForm() {
  const params = useSearchParams();
  const { currency, setCurrency } = useCurrency();
  const [sent, setSent] = useState(false);
  const plan = params.get("plan") ?? "";
  const service = params.get("service") ?? "";

  const interests = [
    ...services.map((s) => s.title),
    ...[...projectPlans, ...retainerPlans].map((p) => `${p.name} plan`),
    "Something else",
  ];
  const defaultInterest = plan ? `${plan} plan` : service;

  // No backend: compose the enquiry as an email in the visitor's mail client.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project enquiry: ${data.get("interest") || "General"} – ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "-"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Interested in: ${data.get("interest") || "-"}`,
      `Budget (${currency}): ${data.get("budget") || "-"}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name *</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+254…" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="interest">I&rsquo;m interested in</label>
          <select id="interest" name="interest" defaultValue={defaultInterest}>
            <option value="">Choose one…</option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Budget</label>
          <select id="budget" name="budget" key={currency} defaultValue="">
            <option value="">Choose a range…</option>
            {budgets[currency].map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <p className="field-hint">
            Showing {currency}.{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => setCurrency(currency === "USD" ? "KES" : "USD")}
            >
              Switch to {currency === "USD" ? "KES" : "USD"}
            </button>
          </p>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about the project *</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What are you building, who is it for, and is there a deadline?"
        />
      </div>
      <p className="form-note">
        By sending this form you agree to us using your details to respond to your enquiry, as
        described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div>
        <button type="submit" className="btn btn-primary">
          Send enquiry
        </button>
      </div>
      {sent && (
        <p className="form-status" role="status">
          Your email app should now open with your message ready to send. If it doesn&rsquo;t,
          email us directly at <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      )}
    </form>
  );
}
