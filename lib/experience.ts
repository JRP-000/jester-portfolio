export type Experience = {
  name: string;
  type: 'Employment' | 'Project' | 'Education';
  role: string;
  client?: string;
  period?: string;
  highlights: string[];
  skills: string[];
};

// Role names, clients, and responsibilities are drawn from PEDROSA_CV.pdf.
export const experience: Experience[] = [
  {
    name: 'IOL Inc.',
    period: 'October 2020 – present',
    type: 'Employment',
    role: 'IT Support Specialist / QA Engineer',
    highlights: [
      'Designed and carried out manual testing and user acceptance testing against technical specifications.',
      'Supported quality assurance and technical troubleshooting across enterprise software products.',
      'Translated client feedback into technical requirements for the development team.',
      'Wrote bug reports, test logs, user manuals, and other technical documentation.',
    ],
    skills: ['Manual testing', 'User acceptance testing', 'Technical support', 'Documentation'],
  },
  {
    name: 'BaxterIP',
    type: 'Project',
    role: 'Developer / IT Support',
    client: 'Baxter IP',
    highlights: [
      'Managed backend content architecture and deployment with Sanity.io headless CMS.',
      'Resolved functional bugs to improve cross-browser compatibility and consistent interface rendering.',
    ],
    skills: ['Sanity.io', 'Content architecture', 'Cross-browser support'],
  },
  {
    name: 'CyberMeds',
    type: 'Project',
    role: 'QA Engineer / IT Support',
    client: 'Conjug8 Corp',
    highlights: [
      'Ran functional and regression testing for an e-commerce web application, covering data integrity and transaction flows.',
      'Reviewed user flows and checkout friction before production release.',
    ],
    skills: ['Functional testing', 'Regression testing', 'E-commerce'],
  },
  {
    name: 'ZIGMAFY',
    type: 'Project',
    role: 'QA Engineer / IT Support',
    client: 'DOST-TAPI',
    highlights: [
      'Tested platform functionality and performance and worked with developers to prioritize fixes.',
      'Helped deliver regional training to small and medium enterprises across the Cordillera Region.',
      'Conducted user validation and gathered requests from multiple stakeholders.',
    ],
    skills: ['Functional testing', 'User training', 'Stakeholder communication'],
  },
  {
    name: 'Advanced Robust Cooperative System',
    type: 'Project',
    role: 'QA Engineer / IT Support',
    client: 'DOST-PCIEERD',
    highlights: [
      'Led testing and validation for a multi-module SaaS platform against institutional requirements.',
      'Documented technical issues and translated bug reports into improvements for developers.',
      'Delivered technical training and onboarding to cooperative managers.',
    ],
    skills: ['System validation', 'SaaS', 'Technical training'],
  },
  {
    name: 'IRIS-BOT',
    type: 'Project',
    role: 'QA Tester',
    client: 'Adamson Phil Inc.',
    highlights: [
      'Tested document-retrieval workflows built with n8n and the Telegram API for response accuracy and edge cases.',
      'Diagnosed workflow failures and mapped user commands to improve reliability.',
    ],
    skills: ['n8n', 'Telegram API', 'Workflow testing'],
  },
  {
    name: 'Lorma Colleges',
    period: 'Graduated August 2020',
    type: 'Education',
    role: 'Bachelor of Science in Computer Engineering',
    highlights: ['Graduated with a Bachelor of Science in Computer Engineering.'],
    skills: ['Computer Engineering'],
  },
];

