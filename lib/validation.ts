import { z } from "zod";
import { MAX_QUANTITY } from "./packages";

const optional = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => v || undefined);

export const checkoutSchema = z.object({
  currency: z.enum(["USD", "KES"]),
  items: z
    .array(
      z.object({
        packageId: z.string().min(1).max(60),
        quantity: z.number().int().min(1).max(MAX_QUANTITY, `You can order up to ${MAX_QUANTITY} of each service.`),
      }),
    )
    .min(1, "Your cart is empty.")
    .max(20),
  name: z.string().trim().min(2, "Enter your name.").max(120),
  email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(200),
  phone: optional(40),
  company: optional(160),
  notes: optional(2000),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
