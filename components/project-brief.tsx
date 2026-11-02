'use client';
import { useState } from 'react';
import { ArrowUpRight, Copy } from 'lucide-react';
import { site } from '@/lib/site';

export function ProjectBrief() {
  const [status, setStatus] = useState('');
  const [brief, setBrief] = useState('');
  const [service, setService] = useState('Website or landing page');
  const message = `Hi Jester,\n\nI would like to discuss: ${service}.\n\n${brief.trim()}\n`;
  async function copyBrief() {
    try { await navigator.clipboard.writeText(message); setStatus('Brief copied. Paste it into an email to Jester.'); }
    catch { setStatus('Copy is unavailable. Select your project details below and paste them into an email.'); }
  }
  return <div className="project-brief">
    <div><h2>Tell me what<br/>you have in mind.</h2><p>Include your goal, timeline, and budget range. Have an existing website or Figma design? Add the link too.</p><p className="brief-note">This opens a draft in your email app. You review and send it yourself.</p></div>
    <form onSubmit={event => { event.preventDefault(); if (!brief.trim()) { setStatus('Please add a short description of your project.'); return; } window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry: ${service}`)}&body=${encodeURIComponent(message)}`; setStatus('Your email app should open with a draft. If it does not, copy the brief and email it to Jester.'); }}>
      <label htmlFor="project-service">What do you need help with?</label>
      <select id="project-service" value={service} onChange={event => setService(event.target.value)}><option>Website or landing page</option><option>QA and software testing</option><option>CMS or technical support</option><option>Something else</option></select>
      <label htmlFor="project-details">Your project</label>
      <textarea id="project-details" name="project" rows={5} maxLength={1200} required value={brief} onChange={event => setBrief(event.target.value)} placeholder="What are you building or improving?" aria-describedby="brief-help"/>
      <p id="brief-help" className="brief-note">A short overview is enough to start. Up to 1,200 characters.</p>
      <div className="brief-actions"><button className="button brief-submit" type="submit">Create email draft <ArrowUpRight size={17}/></button><button className="text-link" type="button" onClick={copyBrief} disabled={!brief.trim()}><Copy size={16}/> Copy brief</button></div>
      <p className="brief-status" role="status">{status}</p>
    </form>
  </div>;
}
