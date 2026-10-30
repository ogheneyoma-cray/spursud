import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/site";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Spursud | Software Development & Computer Programming in Kenya",
    template: "%s | Spursud",
  },
  description:
    "Spursud Trading Limited builds websites, web applications, mobile apps and custom software for businesses in Kenya and worldwide. Transparent pricing in USD and KES.",
  openGraph: {
    type: "website",
    siteName: company.shortName,
    locale: "en_KE",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5eee3" },
    { media: "(prefers-color-scheme: dark)", color: "#141918" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <CurrencyProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
