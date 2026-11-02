# Website release checklist

A sample QA planning artifact from Jester Pedrosa's portfolio.
This is a reusable checklist, not a completed client test report. Record the
browser, device, build, expected behavior, actual behavior, and result when running it.

## Navigation and content
- [ ] All primary links reach the intended section or page.
- [ ] Direct links to project pages work after a page refresh.
- [ ] Unknown URLs show a useful 404 page with a route back home.
- [ ] Project descriptions distinguish the contributor's role from the whole team's work.
- [ ] External links and downloadable files point to the correct resources.

## Responsive layout
- [ ] Check narrow phones, landscape phones, tablets, and desktops.
- [ ] Main content does not cause horizontal page scrolling.
- [ ] Long headings, email addresses, and labels wrap without clipping.
- [ ] Buttons and gallery controls remain usable by touch.
- [ ] Text remains readable at 200% zoom.

## Keyboard and accessibility
- [ ] A skip link reaches the main content.
- [ ] Links, buttons, disclosures, and form fields have visible keyboard focus.
- [ ] Reading order, heading levels, labels, and image alternatives are meaningful.
- [ ] Gallery controls work without dragging or a mouse.
- [ ] Reduced-motion preference is respected and decorative motion can be paused.
- [ ] Text contrast is checked against its actual background.
- [ ] Feedback is announced when copying an email address or project brief.

## Contact and recovery
- [ ] Required fields reject empty submissions without clearing entered text.
- [ ] Email draft includes the selected service and project description.
- [ ] Copy-brief fallback works when an email application is unavailable.
- [ ] Clipboard failure explains how to copy manually.
- [ ] The UI distinguishes opening a draft from sending a message.

## SEO and release
- [ ] Each indexable page has an appropriate title, description, and canonical URL.
- [ ] Meaningful content and project links are present in server-rendered HTML.
- [ ] robots.txt permits the intended public pages and links to the sitemap.
- [ ] The sitemap lists the public pages and contains no development URLs.
- [ ] Social preview image URLs resolve and the images have useful alt text.
- [ ] Structured data matches visible page content.
- [ ] Images have dimensions and below-the-fold images load lazily.
- [ ] Production build and type checks pass.
- [ ] After deployment, verify Search Console ownership and submit the sitemap.

## Bug report template
Title:
Environment and build:
Steps to reproduce:
Expected behavior:
Actual behavior:
Impact / severity:
Screenshot or recording:
Retest result:
