# Spursud website

Marketing website for **Spursud Trading Limited** (computer programming services), built with Next.js (App Router) and TypeScript.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/services` | Service details |
| `/pricing` | Packages, retainers and hourly rate in USD / KES |
| `/about` | Company story and registration details |
| `/contact` | Enquiry form (opens the visitor's email app) and contact details |
| `/terms`, `/privacy`, `/refund-policy` | Legal pages |

Visitors can switch the currency between **USD and KES** from the header or the pricing page, and their choice is remembered in the browser. All prices live in `lib/pricing.ts` and `lib/services.tsx`. The KES amounts are set by hand there, not converted live, so update them when you change rates. Company details are kept in `lib/site.ts`.

## Development

```bash
npm install
npm run dev
```

## Deploying on Coolify

1. In Coolify, create a new resource from this Git repository.
2. Choose the **Dockerfile** build pack (the `Dockerfile` is in the repo root).
3. Set **Ports Exposes** to `3000`.
4. (Optional) Add the build variable `NEXT_PUBLIC_SITE_URL` with your production domain, for example `https://spursud.com`. The sitemap, robots.txt and metadata use it.
5. Add your domain and deploy.

The image uses Next.js `standalone` output, runs as a non-root user and includes a container health check.

To test the image locally:

```bash
docker build -t spursud .
docker run -p 3000:3000 spursud
```
