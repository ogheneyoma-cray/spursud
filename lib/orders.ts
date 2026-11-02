import { randomBytes } from "node:crypto";
import type { PrismaClient } from "@/generated/prisma/client";
import { findPackage, MAX_QUANTITY } from "./packages";
import type { Currency } from "./pricing";
import type { CheckoutInput } from "./validation";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** e.g. SPS-7K3M-Q9XA-2PHT. 60 random bits, so it also works as the order page's secret link. */
export function newReference(): string {
  const chars = Array.from(randomBytes(12), (b) => ALPHABET[b % ALPHABET.length]).join("");
  return `SPS-${chars.slice(0, 4)}-${chars.slice(4, 8)}-${chars.slice(8, 12)}`;
}

export type PricedLine = { packageId: string; name: string; unitPrice: number; quantity: number; lineTotal: number };

/** Prices cart items from the catalogue. Unknown ids are dropped; repeated ids are merged. */
export function priceItems(items: CheckoutInput["items"], currency: Currency) {
  const merged = new Map<string, number>();
  for (const i of items) merged.set(i.packageId, (merged.get(i.packageId) ?? 0) + i.quantity);

  const lines: PricedLine[] = [];
  for (const [id, qty] of merged) {
    const pkg = findPackage(id);
    if (!pkg) continue;
    const quantity = Math.min(qty, MAX_QUANTITY);
    const unitPrice = pkg.price[currency];
    lines.push({ packageId: pkg.id, name: pkg.title, unitPrice, quantity, lineTotal: unitPrice * quantity });
  }
  return { lines, total: lines.reduce((sum, l) => sum + l.lineTotal, 0) };
}

export async function createOrder(db: PrismaClient, input: CheckoutInput) {
  const { lines, total } = priceItems(input.items, input.currency);
  if (lines.length === 0) throw new Error("None of the services in your cart are available.");

  return db.order.create({
    data: {
      reference: newReference(),
      currency: input.currency,
      customerName: input.name,
      customerEmail: input.email,
      customerPhone: input.phone,
      companyName: input.company,
      notes: input.notes,
      total,
      items: { create: lines },
    },
    include: { items: true },
  });
}

/** Only flips awaiting_payment → paid, so a double click can't send the email twice. */
export async function markOrderPaid(db: PrismaClient, id: string, paymentReference?: string) {
  const res = await db.order.updateMany({
    where: { id, status: "awaiting_payment" },
    data: { status: "paid", paidAt: new Date(), paymentReference },
  });
  return res.count > 0;
}
