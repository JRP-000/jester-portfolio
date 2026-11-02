import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies';
import { site, socialImage } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(item => item.slug === slug);
  if (!study) return {};
  const title = `${study.name}: ${study.category} | Jester Pedrosa`;
  return {
    title, description: study.summary, alternates: { canonical: `/work/${slug}` },
    openGraph: { title, description: study.summary, url: `/work/${slug}`, type: 'article', images: [socialImage] },
    twitter: { card: 'summary_large_image', title, description: study.summary, images: [socialImage.url] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find(item => item.slug === slug);
  if (!study) notFound();
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Portfolio', item: site.url },
      { '@type': 'ListItem', position: 2, name: study.name, item: `${site.url}/work/${slug}` },
    ],
  };
  return <div className="case-page">
    <a className="skip-link" href="#project-content">Skip to project</a>
    <header className="nav"><Link className="wordmark" href="/" aria-label="Jester Pedrosa home">jp<span>.</span></Link><Link className="text-link" href="/#contact">Discuss a project <ArrowUpRight size={17}/></Link></header>
    <main id="project-content" className="case-main section">
      <Link className="text-link case-back" href="/#case-studies"><ArrowLeft size={17}/> All project stories</Link>
      <h1>{study.name}<span>{study.title}</span></h1>
      <p className="case-summary">{study.summary}</p>
      <dl className="case-facts"><div><dt>My role</dt><dd>{study.role}</dd></div><div><dt>Tools & focus</dt><dd>{study.tools.join(' · ')}</dd></div></dl>
      <section className="case-section"><h2>The context</h2><p>{study.context}</p></section>
      <section className="case-section"><h2>My contribution</h2><ul>{study.contributions.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className="case-section"><h2>How this helps your project</h2><p>{study.handoff}</p></section>
      <aside className="case-evidence"><h2>About this example</h2><p>{study.evidence}</p>{study.source && <a className="text-link" href={study.source} target="_blank" rel="noopener noreferrer">Explore the source <ArrowUpRight size={17}/><span className="sr-only"> (opens in a new tab)</span></a>}</aside>
      <div className="case-next"><h2>Working on something similar?</h2><Link className="button primary" href="/#contact">Tell me about it <ArrowUpRight size={17}/></Link></div>
      <nav className="related-projects" aria-label="More project stories">{caseStudies.filter(item => item.slug !== slug).map(item => <Link key={item.slug} className="text-link" href={`/work/${item.slug}`}>{item.name} <ArrowUpRight size={16}/></Link>)}</nav>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}/>
  </div>;
}
