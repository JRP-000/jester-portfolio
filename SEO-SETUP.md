# Search tracking setup

This portfolio supports Google Search Console verification and Google Analytics 4 (GA4). Both are off until you provide their actual values.

## 1. Search Console

1. At https://search.google.com/search-console/ add URL-prefix property `https://jester-portfolio.vercel.app/`.
2. Choose HTML tag verification. Copy only the `content` attribute from Google's `google-site-verification` meta tag.
3. In Vercel → Project → Settings → Environment Variables, add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` with that content value for Production. Redeploy to bake it into this statically exported Next.js site.
4. Back in Search Console, choose Verify.
5. Submit `https://jester-portfolio.vercel.app/sitemap.xml` under Sitemaps. Indexing and performance metrics can take time to appear.

## 2. GA4

1. At https://analytics.google.com/ create or select a GA4 property.
2. Create a Web data stream with `https://jester-portfolio.vercel.app/`.
3. Copy its *Measurement ID* (format `G-XXXXXXXXXX`), **not** its numeric stream ID.
4. In Vercel → Project → Settings → Environment Variables, add `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Production. Redeploy.
5. Visit the live site with analytics consent where applicable, then check GA4 → Reports → Realtime for your visit. Your own visit may not appear if tracking is blocked.

## Notes

- The Next.js app uses `output: 'export'`, so adding or modifying these environment variables requires a fresh build/deployment.
- Google Search Console shows clicks from Google Search, not all website clicks.
- GA4 tracks page views by default. Custom project, email and CTA click tracking should be configured and tested separately.
- The verification value and Measurement ID are public page metadata, not secret credentials. Never enter a service-account secret or Google account password in these variables.
- For cookie consent or privacy compliance, review the applicable jurisdiction and your site's data handling before enabling analytics for visitors.
