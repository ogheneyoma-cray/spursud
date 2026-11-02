"use client";

import { useActionState } from "react";
import { markPaid, type ActionState } from "../../../actions";

export function MarkPaidForm({ orderId }: { orderId: string }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(markPaid, {});
  return (
    <form action={action} className="form">
      <input type="hidden" name="orderId" value={orderId} />
      <div className="field">
        <label htmlFor="paymentReference">Payment reference (optional)</label>
        <input id="paymentReference" name="paymentReference" placeholder="M-Pesa code or bank ref" />
      </div>
      {state.message && (
        <p className="form-status" role="status">
          {state.message}
        </p>
      )}
      <button type="submit" className="btn btn-coral btn-block" disabled={pending}>
        {pending ? "Saving…" : "Mark as paid"}
      </button>
    </form>
  );
}
