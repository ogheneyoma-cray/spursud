"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MAX_QUANTITY, findPackage } from "@/lib/packages";

const STORAGE_KEY = "spursud-cart";

export type CartLine = { packageId: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  ready: boolean;
  count: number;
  add: (packageId: string) => void;
  setQuantity: (packageId: string, quantity: number) => void;
  remove: (packageId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function clean(lines: unknown): CartLine[] {
  if (!Array.isArray(lines)) return [];
  return lines
    .filter((l): l is CartLine => typeof l?.packageId === "string" && Number.isInteger(l?.quantity))
    .filter((l) => findPackage(l.packageId))
    .map((l) => ({ packageId: l.packageId, quantity: Math.min(Math.max(l.quantity, 1), MAX_QUANTITY) }));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setLines(clean(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")));
    } catch {
      // Storage unavailable or corrupt; start with an empty cart.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Ignore storage failures.
    }
  }, [lines, ready]);

  const setQuantity = (packageId: string, quantity: number) =>
    setLines((ls) =>
      ls.map((l) => (l.packageId === packageId ? { ...l, quantity: Math.min(Math.max(quantity, 1), MAX_QUANTITY) } : l)),
    );

  const add = (packageId: string) =>
    setLines((ls) =>
      ls.some((l) => l.packageId === packageId)
        ? ls.map((l) => (l.packageId === packageId ? { ...l, quantity: Math.min(l.quantity + 1, MAX_QUANTITY) } : l))
        : [...ls, { packageId, quantity: 1 }],
    );

  const value: CartContextValue = {
    lines,
    ready,
    count: lines.reduce((n, l) => n + l.quantity, 0),
    add,
    setQuantity,
    remove: (packageId) => setLines((ls) => ls.filter((l) => l.packageId !== packageId)),
    clear: () => setLines([]),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
