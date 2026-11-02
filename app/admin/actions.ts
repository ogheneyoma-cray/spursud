"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { ADMIN_COOKIE, createSessionValue, passwordMatches, requireAdmin, sessionCookieOptions } from "@/lib/admin-auth";
import { sendPaymentReceivedEmail } from "@/lib/email";
import { markOrderPaid } from "@/lib/orders";
import { rateLimit } from "@/lib/rate-limit";

export type ActionState = { ok?: boolean; message?: string };

export async function login(_prev: ActionState, form: FormData): Promise<ActionState> {
  const h = await headers();
  const ip = (h.get("cf-connecting-ip") ?? h.get("x-forwarded-for") ?? "unknown").split(",")[0];
  if (!rateLimit(`admin-login:${ip}`, 8, 15 * 60 * 1000)) return { message: "Too many attempts. Try again in 15 minutes." };
  if (!passwordMatches(String(form.get("password") ?? ""))) return { message: "That password isn't right." };
  (await cookies()).set(ADMIN_COOKIE, createSessionValue(), sessionCookieOptions);
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

export async function markPaid(_prev: ActionState, form: FormData): Promise<ActionState> {
  await requireAdmin();
  const id = String(form.get("orderId"));
  const ref = String(form.get("paymentReference") ?? "").trim().slice(0, 120);
  const changed = await markOrderPaid(prisma, id, ref || undefined);
  if (changed) {
    const order = await prisma.order.findUnique({ where: { id }, include: { items: true } });
    if (order) await sendPaymentReceivedEmail(order);
  }
  revalidatePath(`/admin/orders/${id}`);
  revalidatePath("/admin");
  return changed
    ? { ok: true, message: "Marked as paid. The customer has been emailed." }
    : { ok: true, message: "This order isn't awaiting payment, so nothing changed." };
}

export async function cancelOrder(form: FormData) {
  await requireAdmin();
  const id = String(form.get("orderId"));
  await prisma.order.updateMany({ where: { id, status: "awaiting_payment" }, data: { status: "cancelled" } });
  revalidatePath(`/admin/orders/${id}`);
  revalidatePath("/admin");
}
