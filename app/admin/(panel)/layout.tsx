import Link from "next/link";
import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/admin-auth";
import { logout } from "../actions";

export const dynamic = "force-dynamic";

export default async function PanelLayout({ children }: { children: ReactNode }) {
  await requireAdmin();
  return (
    <section className="section">
      <div className="container">
        <div className="admin-bar">
          <Link href="/admin" className="admin-home">
            Orders
          </Link>
          <form action={logout}>
            <button type="submit" className="link-button">
              Sign out
            </button>
          </form>
        </div>
        {children}
      </div>
    </section>
  );
}
