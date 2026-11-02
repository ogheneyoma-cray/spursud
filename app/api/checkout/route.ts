import { prisma } from "@/lib/db";
import { sendOrderPlacedEmails } from "@/lib/email";
import { createOrder } from "@/lib/orders";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { checkoutSchema } from "@/lib/validation";

export async function POST(req: Request) {
  if (!rateLimit(`checkout:${clientIp(req)}`, 10, 15 * 60 * 1000)) {
    return Response.json({ error: "Too many orders from your connection. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const parsed = checkoutSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Check your details." }, { status: 400 });
  }

  try {
    const order = await createOrder(prisma, parsed.data);
    await sendOrderPlacedEmails(order);
    return Response.json({ reference: order.reference });
  } catch (err) {
    console.error("[checkout]", err);
    return Response.json({ error: (err as Error).message || "Could not place your order." }, { status: 400 });
  }
}
