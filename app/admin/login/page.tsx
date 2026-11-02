import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin");
  return (
    <section className="section">
      <div className="container admin-login">
        <p className="eyebrow">Admin</p>
        <h1 className="shop-title">Sign in</h1>
        <LoginForm />
      </div>
    </section>
  );
}
