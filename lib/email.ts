import { formatMoney } from "./pricing";
import { company } from "./site";

type Mail = { to: string; subject: string; text: string; replyTo?: string };

type OrderForEmail = {
  reference: string;
  currency: "USD" | "KES";
  customerName: string;
  customerEmail: string;
  customerPhone: string | null;
  companyName: string | null;
  notes: string | null;
  total: number;
  items: { name: string; quantity: number; lineTotal: number }[];
};

/**
 * Sends through Resend when RESEND_API_KEY is set. Without it the email is only
 * logged. Never throws: a failed email must not fail an order.
 */
export async function sendMail(mail: Mail): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info(`[email:log] to=${mail.to} subject="${mail.subject}"\n${mail.text}\n`);
    return true;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || `${company.shortName} <${company.email}>`,
        to: mail.to,
        subject: mail.subject,
        text: mail.text,
        reply_to: mail.replyTo,
      }),
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    return true;
  } catch (err) {
    console.error(`[email] failed to send "${mail.subject}" to ${mail.to}:`, err);
    return false;
  }
}

function orderLines(order: OrderForEmail): string {
  return [
    ...order.items.map((i) => `- ${i.name} × ${i.quantity}: ${formatMoney(i.lineTotal, order.currency)}`),
    `Total: ${formatMoney(order.total, order.currency)}`,
  ].join("\n");
}

export function orderUrl(reference: string): string {
  return `${company.siteUrl}/order/${reference}`;
}

export async function sendOrderPlacedEmails(order: OrderForEmail) {
  await sendMail({
    to: order.customerEmail,
    subject: `Your Spursud order ${order.reference}`,
    replyTo: company.email,
    text: [
      `Hi ${order.customerName},`,
      "",
      "Thank you for your order. We'll email you an invoice with payment details within one business day. Work starts once payment is confirmed.",
      "",
      orderLines(order),
      "",
      `View your order: ${orderUrl(order.reference)}`,
      "",
      `${company.name}`,
    ].join("\n"),
  });
  await sendMail({
    to: company.email,
    subject: `New order ${order.reference}: ${formatMoney(order.total, order.currency)}`,
    replyTo: order.customerEmail,
    text: [
      `Customer: ${order.customerName} <${order.customerEmail}>`,
      `Phone: ${order.customerPhone ?? "-"}`,
      `Company: ${order.companyName ?? "-"}`,
      "",
      orderLines(order),
      "",
      `Notes: ${order.notes ?? "-"}`,
      "",
      `Send the invoice, then mark it paid in ${company.siteUrl}/admin`,
    ].join("\n"),
  });
}

export async function sendPaymentReceivedEmail(order: OrderForEmail) {
  await sendMail({
    to: order.customerEmail,
    subject: `Payment received for order ${order.reference}`,
    replyTo: company.email,
    text: [
      `Hi ${order.customerName},`,
      "",
      "We've received your payment and work on your order is starting. We'll be in touch shortly to agree the details and timeline.",
      "",
      orderLines(order),
      "",
      `View your order: ${orderUrl(order.reference)}`,
      "",
      `${company.name}`,
    ].join("\n"),
  });
}
