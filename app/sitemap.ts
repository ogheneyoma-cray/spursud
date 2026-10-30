import type { MetadataRoute } from "next";
import { company, legalNav, nav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...legalNav].map((item) => ({
    url: `${company.siteUrl}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : legalNav.includes(item) ? 0.3 : 0.8,
  }));
}
