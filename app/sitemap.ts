import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/case-studies';
import { site } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url }, ...caseStudies.map(({ slug }) => ({ url: `${site.url}/work/${slug}` }))];
}
