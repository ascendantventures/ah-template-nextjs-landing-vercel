# aa-template-nextjs-landing-vercel

Angel Agents landing page template. Next.js 14 + Resend + Vercel.

**No Supabase. No auth. No dashboard.** Just a fast marketing site with email capture.

## Sections
- Navbar
- Hero (tagline + CTA)
- Features (6-grid)
- Pricing (3 tiers)
- Waitlist form (Resend-powered)
- Footer

## Customize
```bash
node scripts/customize.js '{"name":"My App","tagline":"Do X better","primaryColor":"#E86F2C"}'
```

## Environment Variables
```
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=...
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/isaacdl15/aa-template-nextjs-landing-vercel)
