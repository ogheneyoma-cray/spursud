export type Currency = "USD" | "KES";

export type Money = { USD: number; KES: number };

// KES prices are set independently (not live-converted) so quotes stay stable.
export const hourlyRate: Money = { USD: 35, KES: 4500 };

export type Plan = {
  name: string;
  tagline: string;
  image: string;
  price: Money;
  prefix?: string;
  suffix?: string;
  timeline: string;
  features: string[];
  featured?: boolean;
};

export const projectPlans: Plan[] = [
  {
    name: "Launch",
    tagline: "A fast, professional website for a small business or new venture.",
    image: "/images/websites.png",
    price: { USD: 450, KES: 58000 },
    timeline: "2–3 weeks",
    features: [
      "Up to 6 custom-designed pages",
      "Mobile-first, responsive build",
      "Contact form and WhatsApp click-to-chat",
      "Basic on-page SEO and Google Analytics",
      "Domain, hosting and SSL setup",
      "30 days of post-launch fixes",
    ],
  },
  {
    name: "Build",
    tagline: "A web application or portal with user accounts and real business logic.",
    image: "/images/web-apps.png",
    price: { USD: 2500, KES: 325000 },
    prefix: "From",
    timeline: "6–10 weeks",
    features: [
      "Discovery workshop and written specification",
      "User authentication and role-based access",
      "Admin dashboard and database design",
      "M-Pesa, card or bank payment integration",
      "Automated tests and staging environment",
      "60 days of post-launch support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    tagline: "Custom software, mobile apps and integrations for growing organisations.",
    image: "/images/cloud.png",
    price: { USD: 6000, KES: 780000 },
    prefix: "From",
    timeline: "3–6 months",
    features: [
      "Product strategy and technical architecture",
      "Web plus Android / iOS applications",
      "Third-party API and ERP integrations",
      "Cloud infrastructure and CI/CD pipelines",
      "Security review and load testing",
      "90 days of support and a handover pack",
    ],
  },
];

export const retainerPlans: Plan[] = [
  {
    name: "Care",
    tagline: "Keep an existing site or app secure and up to date.",
    image: "/images/support.png",
    price: { USD: 150, KES: 19500 },
    suffix: "/ month",
    timeline: "Monthly, cancel anytime",
    features: [
      "Security patches and dependency updates",
      "Uptime monitoring and daily backups",
      "Up to 3 hours of small changes",
      "Response within 2 business days",
    ],
  },
  {
    name: "Grow",
    tagline: "Ongoing improvements from a team that knows your codebase.",
    image: "/images/integrations.png",
    price: { USD: 600, KES: 78000 },
    suffix: "/ month",
    timeline: "Monthly, 3-month minimum",
    features: [
      "Everything in Care",
      "Up to 18 hours of development",
      "Monthly performance report",
      "Response within 1 business day",
    ],
    featured: true,
  },
  {
    name: "Dedicated",
    tagline: "A full-time developer embedded in your team.",
    image: "/images/team.png",
    price: { USD: 2200, KES: 285000 },
    suffix: "/ month",
    timeline: "Monthly, 3-month minimum",
    features: [
      "One full-time developer (160 hrs)",
      "Joins your standups and tools",
      "Senior review of all code",
      "Same-day response on business days",
    ],
  },
];

export function formatMoney(amount: number, currency: Currency): string {
  const formatted = new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(amount);
  return currency === "USD" ? `$${formatted}` : `KES ${formatted}`;
}
