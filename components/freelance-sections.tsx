import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Download } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies';

const services = [
  {name: 'Websites & landing pages', description: 'A clear, responsive home for your business, portfolio, or next idea.', deliverables: 'Responsive interfaces · Content structure · Technical SEO foundations'},
  {name: 'Testing & quality assurance', description: 'Find the broken flows and overlooked details before your users do.', deliverables: 'Functional & regression testing · UAT · Actionable bug reports'},
  {name: 'CMS & technical support', description: 'Keep content manageable and investigate the issues getting in your way.', deliverables: 'Sanity CMS · Cross-browser fixes · Technical documentation'},
];

export function Services() {
  return <section id="services" className="services section" aria-labelledby="services-heading">
    <div className="section-heading"><h2 id="services-heading">A useful partner<br/><em>for your next project.</em></h2><p>Start with a new website, an existing product, or a specific problem that needs attention.</p></div>
    <div className="service-list">{services.map(service => <article key={service.name} className="service-row"><h3>{service.name}</h3><div><p>{service.description}</p><p className="service-deliverables">{service.deliverables}</p></div><a href="#contact" aria-label={`Discuss ${service.name.toLowerCase()}`}><ArrowUpRight size={24}/></a></article>)}</div>
  </section>;
}

export function ProjectStories() {
  return <section className="stories section" id="case-studies" aria-labelledby="stories-heading">
    <div className="section-heading"><h2 id="stories-heading">Behind<br/><em>the interface.</em></h2><p>The role, tools, and practical contribution behind selected projects.</p></div>
    <div className="story-list">{caseStudies.map(study => <article className="story-row" key={study.slug}>
      <div><h3>{study.name}</h3><p className="story-category">{study.category}</p></div>
      <div><p>{study.summary}</p><span className="story-role">{study.role}</span></div>
      <Link className="text-link" href={`/work/${study.slug}`} aria-label={`Read ${study.name} project`}>Read project <ArrowRight size={17}/></Link>
    </article>)}</div>
  </section>;
}

export function Skills() {
  return <section className="stack section" id="skills" aria-labelledby="skills-heading">
    <div className="section-heading"><h2 id="skills-heading">The right tools.<br/><em>A careful approach.</em></h2><p>Development skills backed by testing, troubleshooting, and clear documentation.</p></div>
    <dl className="skills-list">
      <div><dt>Web development</dt><dd>Next.js, React, TypeScript, responsive HTML & CSS, GSAP</dd></div>
      <div><dt>Quality assurance</dt><dd>Manual testing, functional & regression testing, UAT, bug reporting</dd></div>
      <div><dt>Content & workflows</dt><dd>Sanity.io, n8n workflow testing, Telegram API, technical support</dd></div>
      <div><dt>Website foundations</dt><dd>Semantic structure, keyboard accessibility, metadata, sitemaps, structured data</dd></div>
    </dl>
    <div className="design-handoff"><h3>Have a design in Figma?</h3><p>Include your Figma link, wireframes, or prototype in the brief. We can discuss the components, responsive layouts, and interactions your website needs.</p><a className="text-link" href="#contact">Discuss your design <ArrowUpRight size={17}/></a></div>
  </section>;
}

export function Process() {
  return <section className="process section" id="process" aria-labelledby="process-heading">
    <div className="section-heading"><h2 id="process-heading">Clear scope.<br/><em>Thoughtful delivery.</em></h2><p>A straightforward way to move from an idea to a working result.</p></div>
    <ol className="process-list">
      <li><h3>Understand</h3><p>Share your goals, existing site or Figma designs, timeline, and budget range. We agree on the scope before work begins.</p></li>
      <li><h3>Build & review</h3><p>Review the work against the brief, with feedback on the pages, content, and interactions as they take shape.</p></li>
      <li><h3>Test & hand over</h3><p>Check the agreed flows and responsive layouts, document the essentials, and plan the launch or handoff.</p></li>
    </ol>
    <div className="qa-sample"><div><h3>See what a release check covers.</h3><p>A sample portfolio QA checklist: navigation, mobile layouts, accessibility, contact actions, and SEO.</p></div><a className="text-link" href="/downloads/website-qa-checklist.md" download>Download checklist <Download size={17}/></a></div>
  </section>;
}
