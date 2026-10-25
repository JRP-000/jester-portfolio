'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,ArrowDown,ArrowRight,Pause,Play,Copy,Check} from 'lucide-react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {CustomEase} from 'gsap/CustomEase';
import {useGSAP} from '@gsap/react';
import Lenis from 'lenis';
import {AsciiHero} from './ascii-hero';
import {WebsiteGallery} from './website-gallery';
import {ExperienceTable} from './experience-table';
gsap.registerPlugin(ScrollTrigger,CustomEase,useGSAP);
CustomEase.create('section-reveal','0.16, 1, 0.3, 1');
const email='pedrosajester28@gmail.com';
export default function Portfolio(){
 const heroIntro=useRef<gsap.core.Timeline|null>(null);
 const root=useRef<HTMLDivElement>(null);const [paused,setPaused]=useState(false);const [copied,setCopied]=useState(false);const [copyError,setCopyError]=useState(false);const [boot,setBoot]=useState(true);
 useEffect(()=>{const id=setTimeout(()=>setBoot(false),1100);return()=>clearTimeout(id)},[]);
 useGSAP(()=>{
  const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{
   // Animate the artwork inside its scroll wrapper so the two effects never compete.
   if(!window.location.hash || window.location.hash==='#home'){
    const intro=gsap.timeline({delay:.45,defaults:{ease:'section-reveal',clearProps:'transform,opacity'}});
    heroIntro.current=intro;
    intro.fromTo('.hero-name-line',{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:.85,stagger:.18},0)
     .fromTo('.hero-copy>p',{y:16,opacity:0},{y:0,opacity:1,duration:.55},.65)
     .fromTo('.hero-actions',{y:12,opacity:0},{y:0,opacity:1,duration:.5},.85)
     .fromTo('.hero-artwork',{opacity:0,scale:.97},{opacity:1,scale:1,duration:1.15},.35)
     .fromTo('.hero-topline, .hero-bottom',{opacity:0},{opacity:1,duration:.5,stagger:.08},.95);
    const finish=()=>intro.progress(1);
    const hero=root.current?.querySelector('.hero');
    hero?.addEventListener('focusin',finish);
    intro.eventCallback('onComplete',()=>hero?.removeEventListener('focusin',finish));
   }
   const lenis=new Lenis({anchors:true,lerp:.09});lenis.on('scroll',ScrollTrigger.update);const tick=(t:number)=>lenis.raf(t*1000);gsap.ticker.add(tick);
   gsap.to('.scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:root.current,start:'top top',end:'bottom bottom',scrub:true}});
   gsap.to('.hero-visual',{y:90,opacity:.15,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
   gsap.fromTo('.manifesto-word',{opacity:.18},{opacity:1,stagger:.08,scrollTrigger:{trigger:'.manifesto',start:'top 75%',end:'bottom 65%',scrub:1}});

   return()=>{heroIntro.current?.progress(1);heroIntro.current=null;gsap.ticker.remove(tick);lenis.destroy()};
  });
  mm.add({regular:'(prefers-reduced-motion: no-preference)',reduced:'(prefers-reduced-motion: reduce)'},context=>{
   const reduced=Boolean(context.conditions?.reduced);
   // Each preview owns its reveal; the outer Motion element owns cursor parallax.
   const reveal=(target:HTMLElement,y:number,duration:number,delay=0)=>{
    const tween=gsap.fromTo(target,{opacity:reduced?.7:0,y:reduced?0:y},{opacity:1,y:0,duration:reduced?.15:duration,delay:reduced?0:delay,ease:'section-reveal',paused:true,clearProps:'transform,opacity'});
    ScrollTrigger.create({trigger:target,start:'top 90%',once:true,onEnter:()=>tween.play()});
    // Keyboard navigation must never wait for a decorative entrance.
    const onFocus=()=>tween.progress(1);
    target.addEventListener('focusin',onFocus);
    return()=>target.removeEventListener('focusin',onFocus);
   };
   const cleanups:Array<()=>void>=[];
   for(const [selector,y,duration] of [['.experience-content',16,.45],['.stack > .section-heading',20,.5]] as const){
    const element=root.current?.querySelector<HTMLElement>(selector);
    if(element)cleanups.push(reveal(element,y,duration));
   }
   const footer=root.current?.querySelector<HTMLElement>('.contact-content');
   if(footer){
    if(reduced)cleanups.push(reveal(footer,0,.15));
    else gsap.fromTo(footer,{scale:.97,opacity:.6},{scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:root.current,start:'bottom bottom+=250',end:'bottom bottom',scrub:true}});
   }
   return()=>cleanups.forEach(cleanup=>cleanup());
  });return()=>mm.revert();
 },{scope:root});
 async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopied(true);setCopyError(false);setTimeout(()=>setCopied(false),2500)}catch{setCopyError(true)}}
 return <div ref={root} className={paused?'site motion-paused':'site'}>
  <a href="#work" className="skip-link">Skip to websites</a><div className="scroll-progress"/>
  {boot&&<div className="boot" role="status"><span>jester.dev / initializing</span><button onClick={()=>{heroIntro.current?.progress(1);setBoot(false)}}>Skip intro <ArrowRight size={14}/></button></div>}
  <header className="nav"><a className="wordmark" href="#home" aria-label="Jester Pedrosa home">jp<span>.</span></a><nav aria-label="Main navigation"><a href="#work">Websites</a><a href="#experience">Experience</a><a href="#contact">Let’s talk <ArrowUpRight size={14}/></a></nav><span className="nav-note"><i/> Systems made legible.</span></header>
  <main className="overflow-x-hidden w-full max-w-full">
   <section className="hero" id="home"><div className="hero-topline"><span>IT SUPPORT / QA ENGINEERING / WEB DEVELOPMENT</span><span>PORTFOLIO — 2026</span></div>
    <div className="hero-content"><div className="hero-copy"><h1 className="max-w-6xl" aria-label="Jester Pedrosa."><span className="hero-name-mask" aria-hidden="true"><span className="hero-name-line">Jester</span></span><span className="hero-name-mask" aria-hidden="true"><em className="hero-name-line">Pedrosa.</em></span></h1><p>I find the signal in the noise.<br/>Then build something that works.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDown size={17}/></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div></div>
    <div className="hero-visual"><div className="hero-artwork"><AsciiHero paused={paused}/><div className="canvas-axis">+<span>+</span></div></div></div></div>
    <div className="hero-bottom"><span>Thoughtful interfaces. Reliable systems.</span><a href="#intro">A little further down <ArrowDown size={14}/></a><button className="motion-control" onClick={()=>setPaused(!paused)} aria-label={paused?'Play ambient animations':'Pause ambient animations'}>{paused?<Play size={13}/>:<Pause size={13}/>}<span>{paused?'Motion paused':'Motion on'}</span></button></div>
   </section>
   <section className="manifesto section" id="intro"><div className="section-side">A builder’s mindset.<br/>An engineer’s eye.</div><div><p className="manifesto-text">{'Good work lives between how it feels and how it functions. I connect the two.'.split(' ').map((w,i)=><span className={`manifesto-word ${i>12?'serif':''}`} key={i}>{w} </span>)}</p><p className="supporting">From finding the bug to shaping the interface, I care about the details that make a digital experience feel effortless.</p></div></section>
   <section id="work" className="work-section section art-showcase"><div className="section-heading"><h2>A few digital<br/><em>worlds.</em></h2><p>Different moods. Different stories.<br/>Five websites, made to be explored.</p></div>
    <WebsiteGallery/>
   </section>
   <ExperienceTable/>
   <section className="stack section"><div className="section-heading"><h2>The right tools.<br/><em>The human touch.</em></h2><p>Different tools. One constant:<br/>care for the thing being built.</p></div><div className="marquee" aria-label="Tools: Sanity, n8n, Telegram, Next.js, TypeScript, React"><div className="marquee-track">{[0,1].map(n=><div key={n} aria-hidden={n===1}>{['Sanity','n8n','Telegram','Next.js','TypeScript','React'].map(tool=><span key={tool}>{tool}<i>·</i></span>)}</div>)}</div></div><p className="stack-note">From content systems to connected workflows.</p></section>
  </main>
  <footer className="contact section" id="contact"><div className="contact-content"><div className="contact-top"><span>Have something in mind?</span><span>Let’s make it work.</span></div><a href={`mailto:${email}`} className="contact-heading">Let’s build<br/><em>something good.</em><ArrowUpRight/></a><div className="contact-details"><a href={`mailto:${email}`}>{email}</a><button className="copy-button" onClick={copyEmail}>{copied?<Check size={16}/>:<Copy size={16}/>} {copied?'Copied':'Copy email'}</button><span role="status">{copyError?'Please select the email to copy it manually.':''}</span></div><div className="footer-bottom"><a href="#home" className="wordmark">jp<span>.</span></a><span>© {new Date().getFullYear()} Jester Pedrosa</span><span>Made with intention.</span><a href="#home">Back to top <ArrowUpRight size={14}/></a></div></div></footer>
 </div>
}
