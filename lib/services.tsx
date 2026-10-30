import type { ReactNode } from "react";
import { IconApp, IconCloud, IconCode, IconPlug, IconShield, IconWeb } from "@/components/Icons";
import type { Money } from "./pricing";

export type Service = {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  description: string;
  from: Money;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "websites",
    title: "Websites & web design",
    icon: <IconWeb />,
    summary: "Fast, search-friendly websites that turn visitors into customers.",
    description:
      "Company sites, landing pages and online catalogues designed around your customers and built to load quickly on mobile networks. You get a site you can update yourself, plus the analytics to see what is working.",
    from: { USD: 450, KES: 58000 },
    deliverables: [
      "Custom design, no off-the-shelf themes",
      "Content management so your team can edit pages",
      "On-page SEO, sitemap and analytics",
      "Hosting, domain and SSL configuration",
    ],
    stack: ["Next.js", "WordPress", "Tailwind CSS", "Vercel", "Cloudflare"],
  },
  {
    id: "web-apps",
    title: "Web applications",
    icon: <IconCode />,
    summary: "Portals, dashboards and SaaS products built around your workflow.",
    description:
      "When a spreadsheet or off-the-shelf tool no longer fits, we build the system your business actually needs: customer portals, booking platforms, inventory and order management, internal dashboards and multi-tenant SaaS.",
    from: { USD: 2500, KES: 325000 },
    deliverables: [
      "Requirements workshop and written specification",
      "User accounts, roles and permissions",
      "Admin panel, reporting and data exports",
      "Automated tests and a staging environment",
    ],
    stack: ["React", "Next.js", "Node.js", "Python / Django", "PostgreSQL"],
  },
  {
    id: "mobile",
    title: "Mobile apps",
    icon: <IconApp />,
    summary: "Android and iOS apps from a single, maintainable codebase.",
    description:
      "Cross-platform mobile apps that work well on mid-range Android phones and patchy connections as well as on the latest iPhone. We handle the design, build, store listings and release process.",
    from: { USD: 4000, KES: 520000 },
    deliverables: [
      "UX flows and clickable prototype",
      "Offline-first data where it matters",
      "Push notifications and in-app payments",
      "Google Play and App Store submission",
    ],
    stack: ["React Native", "Flutter", "Firebase", "Expo"],
  },
  {
    id: "integrations",
    title: "APIs & integrations",
    icon: <IconPlug />,
    summary: "Connect payments, ERPs and third-party tools so data flows automatically.",
    description:
      "We connect the systems you already use. Typical work includes M-Pesa Daraja and card payments, eTIMS invoicing, SMS and WhatsApp messaging, accounting packages and custom REST or GraphQL APIs for your partners.",
    from: { USD: 800, KES: 104000 },
    deliverables: [
      "Integration design and API documentation",
      "Secure credential handling and logging",
      "Retry, reconciliation and error alerts",
      "Sandbox testing before go-live",
    ],
    stack: ["M-Pesa Daraja", "Stripe", "REST", "GraphQL", "Webhooks"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <IconCloud />,
    summary: "Reliable hosting, automated deployments and sensible cloud bills.",
    description:
      "We set up and run the infrastructure behind your software: containerised deployments, CI/CD pipelines, monitoring, backups and cost reviews. We also migrate legacy apps off ageing servers.",
    from: { USD: 600, KES: 78000 },
    deliverables: [
      "Infrastructure set up as code",
      "CI/CD pipelines with automated checks",
      "Monitoring, alerting and backups",
      "Cost and performance review",
    ],
    stack: ["Docker", "AWS", "Google Cloud", "Coolify", "GitHub Actions"],
  },
  {
    id: "support",
    title: "Maintenance & support",
    icon: <IconShield />,
    summary: "Keep existing software secure, fast and up to date.",
    description:
      "Inherited a codebase or lost your developer? We take over existing projects, run a code and security audit, fix the urgent problems and then keep the system patched and improving on a monthly retainer.",
    from: { USD: 150, KES: 19500 },
    deliverables: [
      "Code and security audit with a written report",
      "Dependency and security updates",
      "Uptime monitoring and incident response",
      "A monthly bank of development hours",
    ],
    stack: ["Laravel / PHP", "WordPress", "Node.js", "Python", "Legacy systems"],
  },
];
