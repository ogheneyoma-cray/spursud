"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { formatMoney, type Currency, type Money } from "@/lib/pricing";

const STORAGE_KEY = "spursud-currency";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("USD");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "USD" || saved === "KES") setCurrencyState(saved);
    } catch {
      // Storage unavailable (private mode); keep the default.
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      // Ignore storage failures.
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}

const labels = { USD: { symbol: "$", name: "USD" }, KES: { symbol: "KSh", name: "KES" } };

export function CurrencyToggle({ size = "sm" }: { size?: "sm" | "lg" }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <div
      className={`currency-toggle currency-toggle-${size}`}
      data-active={currency}
      role="group"
      aria-label="Display prices in"
    >
      <span className="currency-thumb" aria-hidden="true" />
      {(["USD", "KES"] as const).map((c) => (
        <button key={c} type="button" aria-pressed={currency === c} onClick={() => setCurrency(c)}>
          <span className="currency-symbol">{labels[c].symbol}</span> {labels[c].name}
        </button>
      ))}
    </div>
  );
}

export function Price({ value }: { value: Money }) {
  const { currency } = useCurrency();
  return <>{formatMoney(value[currency], currency)}</>;
}
