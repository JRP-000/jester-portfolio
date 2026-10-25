import { ArrowUpRight, Plus, Activity } from 'lucide-react';
import type { projects } from '@/lib/projects';
export function ProjectPreview({project, compact=false}: {project:typeof projects[number];compact?:boolean}) {
 return <div className={`project-preview ${project.className} ${compact?'compact':''}`} aria-hidden="true">
  <div className="preview-nav"><b>{project.name==='BaxterIP'?'baxterip.':project.name==='CyberMeds'?'cybermeds':project.name==='ZIGMAFY'?'ZIGMAFY':project.name==='IRIS-BOT'?'iris / automation':'ARCS'}</b><span>Built for what’s next <ArrowUpRight size={10}/></span></div>
  <div className="preview-body"><div><p>{project.category.split(' · ')[0]}</p><h3>{project.title.split('\n').map((line,i)=><span key={i}>{line}<br/></span>)}</h3><span className="preview-cta">Explore the possibilities <ArrowUpRight size={12}/></span></div><div className="preview-art">{project.className==='cyber'?<Plus/>:project.className==='iris'?<Activity/>:<div className="sculpture"><i/><i/><i/><i/><i/></div>}</div></div>
  <div className="preview-foot"><span>CONCEPT PREVIEW</span><span>Original screens coming soon</span></div>
 </div>
}
