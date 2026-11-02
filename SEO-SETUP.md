# Search visibility and measurement

## Implemented
- Static, crawlable HTML for the homepage and three project stories.
- Unique page titles, descriptions, and production canonical URLs.
- A 1200 x 630 social sharing image with Open Graph and Twitter metadata.
- Person and WebSite structured data on the homepage; breadcrumbs on project pages.
- A generated sitemap at `/sitemap.xml` and a robots.txt sitemap reference.
- Descriptive internal project links, semantic headings, and a useful 404 page.
- Image dimensions and lazy loading on website previews.

Run `npm run build` followed by `npm run verify:export` to validate the export.
The check covers local links/assets, page metadata, structured-data syntax, sitemap
entries, crawlable content, and the downloadable profile.

## Google Search Console — owner setup
1. Open https://search.google.com/search-console/ and add the URL-prefix property
   `https://jester-portfolio.vercel.app/`.
2. Choose HTML-tag verification and copy the tag's `content` value.
3. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the Vercel project's Production
   environment, then rebuild/redeploy. Static exports bake the value into the HTML.
4. Return to Search Console and verify ownership.
5. Submit `https://jester-portfolio.vercel.app/sitemap.xml` and inspect the homepage.
6. Review indexing and search performance after Google has processed the pages.

No ownership verification or sitemap submission is claimed by this repository.
No search rankings, traffic gains, or indexing guarantees are claimed.

## Existing Google Analytics
The existing GA4 integration is preserved. It uses the public measurement ID
`G-LL3DE84B4G` unless `NEXT_PUBLIC_GA_MEASUREMENT_ID` overrides it. To disable the
integration, set that variable to `disabled` and redeploy. Only valid `G-...` values
load the analytics script. Check the matching property's Realtime report after
release. Custom conversion tracking has not been added.

## Maintaining content
- Update `lib/site.ts` if the production domain changes; also update robots.txt.
- Project pages and the sitemap use `lib/case-studies.ts`.
- Keep claims specific to actual work. Never add invented traffic or ranking metrics.
- Add a LinkedIn URL only after Jester supplies the correct profile.
- The Figma section invites design handoffs; it does not claim a certification or
  past Figma client work.

References:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://nextjs.org/docs/app/getting-started/metadata-and-og-images
