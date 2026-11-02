// Company details as recorded on the CR12 issued by the Business Registration Service.
export const company = {
  name: "Spursud Trading Limited",
  shortName: "Spursud",
  number: "PVT-RXU22JQR",
  registered: "16 February 2021",
  registeredYear: 2021,
  email: "hello@spursud.com",
  phone: "+254 725 950 000",
  phoneHref: "tel:+254725950000",
  whatsappHref: "https://wa.me/254725950000",
  address: {
    building: "Epic Business Park",
    street: "Links Road",
    locality: "Nyali",
    county: "Mombasa",
    postal: "P.O. Box 34470 – 80118, Nyali",
    country: "Kenya",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://spursud.com",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const legalNav = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];
