import type { Money } from "./pricing";

export type Package = {
  id: string;
  title: string;
  category: "Web" | "Apps" | "Growth" | "Support";
  image: string;
  imageAlt: string;
  summary: string;
  includes: string[];
  delivery: string;
  price: Money;
};

// Fixed-price packages that can be bought online. KES prices are set by hand, like the rest of
// the site's pricing. Checkout always reprices from this list, never from the browser.
export const packages: Package[] = [
  {
    id: "website-audit",
    title: "Website health & speed audit",
    category: "Web",
    image: "/images/packages/website-audit.jpg",
    imageAlt: "Illustration of a magnifying glass over a website speed gauge",
    summary: "Find out why your site is slow, insecure or hard to find, with a fix list in plain English.",
    includes: [
      "Speed test on mobile and desktop",
      "Security, SSL and broken-link check",
      "SEO basics and Google indexing review",
      "Written report with prioritised fixes",
    ],
    delivery: "3 working days",
    price: { USD: 120, KES: 15500 },
  },
  {
    id: "landing-page",
    title: "Landing page design & build",
    category: "Web",
    image: "/images/packages/landing-page.jpg",
    imageAlt: "Illustration of a single landing page on a tablet with a sign-up button",
    summary: "One focused page for a product, campaign or event, designed and built to convert.",
    includes: [
      "Custom one-page design",
      "Mobile-first build with a contact or sign-up form",
      "Basic SEO and analytics set-up",
      "Two rounds of revisions",
    ],
    delivery: "7 working days",
    price: { USD: 250, KES: 32500 },
  },
  {
    id: "wordpress-fixes",
    title: "WordPress fixes & updates",
    category: "Support",
    image: "/images/packages/wordpress-fixes.jpg",
    imageAlt: "Illustration of a toolbox next to a website being repaired",
    summary: "Up to three hours of fixes, plugin updates and small changes on your WordPress site.",
    includes: [
      "Core, theme and plugin updates",
      "Fixes for layout or form problems",
      "Full backup before any change",
      "Summary of what was changed",
    ],
    delivery: "2 working days",
    price: { USD: 100, KES: 13000 },
  },
  {
    id: "local-seo",
    title: "Google Business Profile & SEO setup",
    category: "Growth",
    image: "/images/packages/local-seo.jpg",
    imageAlt: "Illustration of a map pin above a shopfront and a search bar",
    summary: "Get found on Google Search and Maps when customers look for what you sell nearby.",
    includes: [
      "Google Business Profile set-up or clean-up",
      "Titles and descriptions for up to 5 pages",
      "Google Search Console and sitemap",
      "Short guide to getting more reviews",
    ],
    delivery: "5 working days",
    price: { USD: 150, KES: 19500 },
  },
  {
    id: "mpesa-checkout",
    title: "M-Pesa payment integration",
    category: "Apps",
    image: "/images/packages/mpesa-checkout.jpg",
    imageAlt: "Illustration of a phone confirming a mobile money payment beside an online shop",
    summary: "Accept M-Pesa on your website or app with STK push through the Daraja API.",
    includes: [
      "Daraja API set-up and STK push",
      "Payment confirmation callback",
      "Testing in sandbox, then go-live",
      "Handover notes for your team",
    ],
    delivery: "7 working days",
    price: { USD: 250, KES: 32500 },
  },
  {
    id: "business-email",
    title: "Business email & domain setup",
    category: "Support",
    image: "/images/packages/business-email.jpg",
    imageAlt: "Illustration of envelopes flying out of a laptop with a globe behind it",
    summary: "Professional email on your own domain for up to 10 people, set up properly.",
    includes: [
      "Google Workspace or Microsoft 365 set-up",
      "Up to 10 mailboxes and aliases",
      "SPF, DKIM and DMARC records",
      "Migration of existing mail where possible",
    ],
    delivery: "3 working days",
    price: { USD: 100, KES: 13000 },
  },
  {
    id: "site-migration",
    title: "Website migration & hosting move",
    category: "Web",
    image: "/images/packages/site-migration.jpg",
    imageAlt: "Illustration of a website moving between two servers on a conveyor",
    summary: "Move your site to faster, cheaper hosting without losing pages, email or rankings.",
    includes: [
      "Full copy of files and database",
      "DNS switch-over with no downtime",
      "SSL certificate and redirects",
      "Checks after the move",
    ],
    delivery: "5 working days",
    price: { USD: 180, KES: 23500 },
  },
  {
    id: "bug-fix-sprint",
    title: "Bug fix sprint",
    category: "Apps",
    image: "/images/packages/bug-fix-sprint.jpg",
    imageAlt: "Illustration of a developer's screen with a bug being removed from code",
    summary: "Four hours of focused developer time on the bugs that are hurting your app or site.",
    includes: [
      "Triage of up to 5 reported issues",
      "Fixes tested on a staging copy",
      "Deployment of the fixes",
      "Notes on the cause of each bug",
    ],
    delivery: "3 working days",
    price: { USD: 200, KES: 26000 },
  },
  {
    id: "app-prototype",
    title: "Clickable app prototype",
    category: "Apps",
    image: "/images/packages/app-prototype.jpg",
    imageAlt: "Illustration of app screen wireframes linked by arrows",
    summary: "See your app idea before you build it, as a clickable prototype of up to 6 screens.",
    includes: [
      "Short workshop to map the user journey",
      "Up to 6 designed screens in Figma",
      "Clickable prototype to share with investors or users",
      "One round of revisions",
    ],
    delivery: "7 working days",
    price: { USD: 240, KES: 31000 },
  },
];

export const MAX_QUANTITY = 5;

export function findPackage(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}
