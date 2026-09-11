# Deployment Checklist

## Project Information
**Project Name**: Qiskit Fall Fest 2026
**Platform**: Vercel (Recommended for Next.js) or Netlify

## Pre-Deployment Verification
- [x] TypeScript compiler passes (`npx tsc --noEmit`)
- [x] Linter passes (`npm run lint`)
- [x] Production build passes (`npm run build`)
- [x] Routing & Anchors verified
- [x] Responsive layout verified (375px to 4K)
- [x] Accessibility (ARIA, focus states) verified
- [x] No unintentional fake/TBD info is hardcoded on primary CTAs

## Environment Variables
Ensure the following are configured in your deployment platform (e.g., Vercel Project Settings > Environment Variables):
- `NEXT_PUBLIC_SITE_URL` = `https://your-production-domain.com` (Required for dynamic SEO sitemap and canonical URLs).

## Build & Deploy Commands
**Framework Preset**: Next.js
**Build Command**: `npm run build`
**Install Command**: `npm install`
**Output Directory**: `.next`

*If deploying via Vercel CLI:*
```bash
npx vercel build --prod
npx vercel deploy --prebuilt --prod
```

## Production URLs to Configure
- Configure the Custom Domain in Vercel.
- Verify that `https://www.your-domain.com` redirects to the naked domain (or vice versa depending on your SEO preference).

## Post-Deployment Checks
1. **Routing**: Click all navigation links to ensure anchor smooth scrolling works in the production environment.
2. **CTAs**: Click the "Register Now" buttons and ensure they open the official Qiskit portal in a new tab.
3. **SEO**: Run the production URL through [https://metatags.io/](https://metatags.io/) to verify the OpenGraph thumbnail and title render correctly.
4. **Console**: Open Chrome DevTools (F12) and check the Console tab to ensure 0 runtime errors.

## Rollback Notes
If the production deployment introduces a critical bug:
1. Navigate to the **Deployments** tab in Vercel.
2. Locate the previous working deployment.
3. Click the three dots (Options) and select **Promote to Production** (or **Assign Custom Domains**).
4. The rollback will execute instantly via Vercel's Edge Network.
