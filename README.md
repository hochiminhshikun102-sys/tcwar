# TC War Storefront

Independent ecommerce storefront for `tcwar.com`, inspired by the Terracotta Warriors visual direction.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Current Scope

- Next.js app router storefront
- Tailwind CSS visual system
- Homepage sections:
  - Hero campaign
  - Trust badges
  - Warrior Movement categories
  - Warrior Archetypes/IP figures
  - Quiz CTA
  - Best sellers
  - Social proof gallery
  - Newsletter/footer

The current product images and lifestyle photos are placeholders. Replace them with brand-owned model photos, product photography, logos, and final copy before launch.

## Cloudflare Pages Launch Path

Recommended setup: push this repo to GitHub, then connect it to Cloudflare Pages.

Cloudflare Pages settings:

- Framework preset: `Next.js`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: `24`

This project uses `output: "export"` in `next.config.ts`, so `next build` creates a static `out/` directory that Cloudflare Pages can publish directly.

## GoDaddy Domain Setup

Option A, recommended: use Cloudflare DNS.

1. Add `tcwar.com` to Cloudflare.
2. Cloudflare will show two nameservers.
3. In GoDaddy, change the domain nameservers to the Cloudflare nameservers.
4. In Cloudflare Pages, add custom domains:
   - `tcwar.com`
   - `www.tcwar.com`
5. Wait for DNS and SSL to become active.

Option B: keep DNS records in GoDaddy.

1. In Cloudflare Pages, add `tcwar.com` as a custom domain.
2. Copy the DNS target Cloudflare gives you.
3. In GoDaddy DNS, create the required `CNAME`/verification records Cloudflare shows.
4. Repeat for `www.tcwar.com`.

## Ecommerce Next Steps

- Add product catalog data and product detail pages.
- Choose checkout provider:
  - Shopify Storefront API if you want Shopify admin, inventory, and orders.
  - Stripe Checkout if you want a lean custom checkout.
- Add email capture provider, analytics, Meta/TikTok pixels, and legal pages.
- Replace placeholder assets with licensed or owned imagery.
