export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  tools: string[];
  context: string;
  contributions: string[];
  handoff: string;
  evidence: string;
  source?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'baxterip', name: 'BaxterIP', category: 'CMS & website support',
    title: 'Content architecture and cross-browser support.',
    summary: 'Sanity content architecture, deployment support, and functional fixes for Baxter IP.',
    role: 'Developer / IT Support', tools: ['Sanity.io', 'Content architecture', 'Cross-browser testing'],
    context: 'A website needs both a maintainable content system and a consistent experience for its visitors. My work on BaxterIP covered backend content architecture and website support.',
    contributions: [
      'Managed backend content architecture and deployment using the Sanity.io headless CMS.',
      'Resolved functional bugs affecting cross-browser compatibility.',
      'Worked on consistent interface rendering across browsers.',
    ],
    handoff: 'This experience informs how I approach freelance CMS work: understand the content structure, investigate the issue, and check the affected pages across browsers.',
    evidence: 'This project summary describes my documented responsibilities. Client source code, internal screens, and performance metrics are not published here.',
  },
  {
    slug: 'iris-bot', name: 'IRIS-BOT', category: 'Workflow QA',
    title: 'Testing the conversation behind an automation.',
    summary: 'Document-retrieval workflow testing for an n8n and Telegram API integration.',
    role: 'QA Tester', tools: ['n8n', 'Telegram API', 'Workflow testing', 'Edge-case analysis'],
    context: 'IRIS-BOT connected user commands to document-retrieval workflows for Adamson Phil Inc. My role focused on checking the accuracy of responses and investigating failure cases.',
    contributions: [
      'Tested document-retrieval workflows built with n8n and the Telegram API.',
      'Checked response accuracy and edge cases in user commands.',
      'Diagnosed workflow failures and mapped commands to improve reliability.',
    ],
    handoff: 'For a similar freelance engagement, I can help turn expected user commands into test scenarios, investigate failures, and document issues for the people maintaining the workflow.',
    evidence: 'This is a summary of my QA contribution, not a claim that I designed or built the entire automation. Internal documents and conversations remain private.',
  },
  {
    slug: 'portfolio', name: 'This portfolio', category: 'Web development & technical SEO',
    title: 'A portfolio that explains the work behind the visuals.',
    summary: 'A Next.js portfolio combining an interactive gallery with readable project stories and search-friendly pages.',
    role: 'Personal portfolio project', tools: ['Next.js', 'React', 'TypeScript', 'GSAP', 'Technical SEO'],
    context: 'The portfolio brings together website examples and professional QA experience. Its purpose is to help potential collaborators understand the services, inspect relevant work, and start a project conversation.',
    contributions: [
      'Organized freelance services, project summaries, and professional experience into clearly labeled sections.',
      'Added static project pages with individual titles, descriptions, canonical URLs, and social share metadata.',
      'Included Person and WebSite structured data, an updated sitemap, and crawlable links.',
      'Provided reduced-motion support, keyboard controls, readable content, and a downloadable professional profile.',
    ],
    handoff: 'The public repository makes the implementation inspectable. The release checklist covers navigation, responsive layouts, keyboard use, metadata, and contact actions.',
    evidence: 'This demonstrates technical SEO foundations. Search rankings and traffic results are not claimed; those require Search Console verification and observation after release.',
    source: 'https://github.com/JRP-000/jester-portfolio',
  },
];
