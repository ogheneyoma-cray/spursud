import Link from "next/link";
import { company } from "@/lib/site";

export function CtaBand({
  title = "Have a project in mind?",
  text = "Tell us what you are building. We reply to every enquiry within one business day with next steps and an honest estimate.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Start a project
            </Link>
            <a href={company.whatsappHref} className="btn btn-ghost" rel="noopener" target="_blank">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
