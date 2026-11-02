import Portfolio from '@/components/portfolio';
import { site } from '@/lib/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Person', '@id': `${site.url}/#person`, name: site.name, url: site.url, email: `mailto:${site.email}`, sameAs: [site.github], jobTitle: 'Web Developer / QA Engineer / IT Support Specialist', knowsAbout: ['Web development', 'Software testing', 'Sanity CMS', 'Technical support'] },
    { '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: 'Jester Pedrosa Portfolio', description: site.description, inLanguage: 'en', publisher: { '@id': `${site.url}/#person` } },
  ],
};
export default function Page() {
  return <><Portfolio/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}/></>;
}
