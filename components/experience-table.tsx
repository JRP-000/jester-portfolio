'use client';
import { useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

type Experience = {
  name: string;
  type: 'Employment' | 'Project' | 'Education';
  role: string;
  client?: string;
  highlights: string[];
  skills: string[];
};

// Role names, clients, and responsibilities are drawn from PEDROSA_CV.pdf.
const experience: Experience[] = [
  {
    name: 'IOL Inc.',
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
    type: 'Education',
    role: 'Bachelor of Science in Computer Engineering',
    highlights: ['Graduated with a Bachelor of Science in Computer Engineering.'],
    skills: ['Computer Engineering'],
  },
];

export function ExperienceTable() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(experience[0]);
  const previousOverflow = useRef('');
  function show(entry: Experience) {
    setSelected(entry);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
  }
  function unlock() { document.body.style.overflow = previousOverflow.current; }
  return <section className="experience-section section" id="experience">
    <div className="experience-content">
      <div className="section-heading"><h2>Experience &amp; <em>education.</em></h2><p>Quality assurance, support, development,<br/>and the training behind the work.</p></div>
      <div className="experience-table-wrap"><table className="experience-table">
        <caption className="sr-only">Employment, project experience, and education. Select an entry to view details.</caption>
        <thead><tr><th scope="col">Company / Project</th><th scope="col">Role / Focus</th><th scope="col"><span className="sr-only">Details</span></th></tr></thead>
        <tbody>{experience.map(entry => <tr key={entry.name} onClick={() => show(entry)}>
          <th scope="row"><button onClick={e => { e.stopPropagation(); show(entry); }} aria-haspopup="dialog"><span>{entry.name}</span><small>{entry.type}</small></button></th>
          <td>{entry.role}</td><td><ArrowUpRight size={18} aria-hidden="true"/></td>
        </tr>)}</tbody>
      </table></div>
    </div>
    <dialog ref={dialog} className="experience-dialog" aria-labelledby="experience-dialog-title" onClose={unlock} onClick={e => {
      if (e.target === dialog.current) {
        const r = dialog.current.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.current.close();
      }
    }} data-lenis-prevent>
      <div className="dialog-top"><span>{selected.type}</span><button autoFocus aria-label="Close experience details" onClick={() => dialog.current?.close()}><X size={22}/></button></div>
      <h3 id="experience-dialog-title">{selected.name}</h3>
      <p className="dialog-role">{selected.role}</p>
      {selected.client && <p className="dialog-client">Client: {selected.client}</p>}
      <ul className="dialog-highlights">{selected.highlights.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="role-skills">{selected.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
      <a className="text-link" href="mailto:pedrosajester28@gmail.com">Ask me about this work <ArrowUpRight size={16}/></a>
    </dialog>
  </section>;
}
