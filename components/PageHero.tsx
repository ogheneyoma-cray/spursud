import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero-with-image" : ""}`}>
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </div>
        {image && (
          <div className="page-hero-media arch">
            <Image src={image} alt={imageAlt} width={600} height={400} priority sizes="(min-width: 960px) 40vw, 90vw" />
          </div>
        )}
      </div>
    </section>
  );
}
