import { Plus } from 'lucide-react';
import { experience } from '@/lib/experience';

export function ExperienceTable() {
  return <section className="experience-section section" id="experience" aria-labelledby="experience-heading">
    <div className="experience-content">
      <div className="section-heading"><h2 id="experience-heading">Experience behind<br/><em>the work.</em></h2><p>Development, quality assurance, and technical support across real software projects.</p></div>
      <div className="experience-list">
        {experience.map((entry, index) => <details className="experience-entry" key={entry.name} open={index === 0}>
          <summary><span className="experience-name">{entry.name}<small>{entry.type}{entry.period && ` · ${entry.period}`}</small></span><span className="experience-role">{entry.role}</span><Plus size={20} aria-hidden="true"/></summary>
          <div className="experience-body">
            {entry.client && <p className="experience-client">Client: {entry.client}</p>}
            <ul>{entry.highlights.map(item => <li key={item}>{item}</li>)}</ul>
            <div className="role-skills">{entry.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          </div>
        </details>)}
      </div>
    </div>
  </section>;
}
