# Spursud website

Marketing website for **Spursud Trading Limited** (computer programming services), built with Next.js (App Router) and TypeScript.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/services` | Fixed-price services you can order online, plus bigger projects |
| `/pricing` | Packages, retainers and hourly rate in USD / KES |
| `/about` | Company story and registration details |
| `/contact` | Enquiry form (opens the visitor's email app) and contact details |
| `/cart`, `/checkout` | Cart and checkout for the fixed-price services |
| `/order/[reference]` | The customer's order page (the reference is the secret link) |
| `/admin` | Orders list; mark an order paid or cancel it (password login) |
| `/terms`, `/privacy`, `/refund-policy` | Legal pages |

Visitors can switch the currency between **USD and KES** from the header or the pricing page, and their choice is remembered in the browser. All prices live in `lib/pricing.ts` and `lib/services.tsx`. The KES amounts are set by hand there, not converted live, so update them when you change rates. Company details are kept in `lib/site.ts`.

## Orders

The fixed-price services are in `lib/packages.ts`. Checkout reprices every order from that file, so a price sent by the browser is never used. There is no payment gateway: an order is saved as **awaiting payment**, you email the customer an invoice, and once the money arrives you click **Mark as paid** in `/admin`. The customer then gets a "payment received" email.

Emails are sent through Resend when `RESEND_API_KEY` is set (optionally `EMAIL_FROM`). Without it they are only written to the server log, so check `/admin` for new orders.

Runtime environment variables: `DATABASE_URL` (Postgres), `ADMIN_PASSWORD`, `SESSION_SECRET`, and optionally `RESEND_API_KEY` and `EMAIL_FROM`. The container runs `prisma migrate deploy` before it starts.

## Images

The product and page illustrations in `public/images/` were generated in Canva. Each service and pricing plan sets its image in `lib/services.ts` or `lib/pricing.ts`. To swap an image, replace the file and keep the same name.

## Development

```bash
npm install
# .env with DATABASE_URL, ADMIN_PASSWORD and SESSION_SECRET
npx prisma migrate deploy
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
