# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---- Dependencies (postinstall runs `prisma generate`) ----
FROM base AS deps
COPY package.json package-lock.json prisma.config.ts ./
COPY prisma ./prisma
RUN npm ci

# ---- Build ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Public URL used for sitemap, robots.txt, canonical metadata and order emails.
ARG NEXT_PUBLIC_SITE_URL=https://spursud.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
RUN npx prisma generate && npm run build

# ---- Minimal toolchain for `prisma migrate deploy` at container start ----
FROM base AS migrator
WORKDIR /migrate
COPY package.json /tmp/package.json
RUN node -e 'const p=require("/tmp/package.json");const all={...p.dependencies,...p.devDependencies};const want=["prisma","@prisma/client","@prisma/adapter-pg","pg","dotenv"];require("fs").writeFileSync("package.json",JSON.stringify({name:"migrate",private:true,dependencies:Object.fromEntries(want.map(n=>[n,all[n]]))}))' \
  && npm install --omit=dev --no-audit --no-fund
COPY prisma ./prisma
COPY prisma.config.ts ./

# ---- Runtime ----
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=migrator --chown=nextjs:nodejs /migrate /migrate
COPY --chmod=755 scripts/start.sh /usr/local/bin/start.sh

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/api/health >/dev/null || exit 1

CMD ["/usr/local/bin/start.sh"]
