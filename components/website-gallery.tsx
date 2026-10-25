'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { websites } from '@/lib/websites';

export function WebsiteGallery() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const dragged = useRef(false);
  const website = websites[active];
  const move = (step: number) => setActive(index => (index + step + websites.length) % websites.length);

  return <div className="website-gallery carousel-gallery exhibition-gallery" role="region" aria-roledescription="carousel" aria-label="Website gallery">
    <div className="exhibition-layout">
      <div className="exhibition-details">
        <span className="exhibition-label">SELECTED WEBSITE</span>
        <div aria-live="polite" aria-atomic="true">
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={website.name} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: reduced ? 0 : .15}}>
              <h3>{website.name}</h3><p>{website.category}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <a className="exhibition-visit" href={website.url} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={17}/><span className="sr-only"> (opens in a new tab)</span></a>
        <div className="exhibition-count"><span>{String(active + 1).padStart(2, '0')}</span><span>/ {String(websites.length).padStart(2, '0')}</span></div>
      </div>
      <div className="exhibition-view">
        <div className="exhibition-window">
          <motion.div className="exhibition-track" drag={reduced ? false : 'x'} dragConstraints={{left:0,right:0}} dragElastic={.16} dragSnapToOrigin
            onDragStart={() => { dragged.current = true; }}
            onDragEnd={(_, info) => { if(Math.abs(info.offset.x)>45 || Math.abs(info.velocity.x)>350) move(info.offset.x < 0 ? 1 : -1); }}>
            {websites.map((item,index) => {
              const offset = ((index-active+websites.length+2)%websites.length)-2;
              const selected = offset === 0;
              return <motion.button key={item.url} type="button" className="exhibition-artwork" aria-label={`Show ${item.name}`} aria-pressed={selected} tabIndex={Math.abs(offset)>1 ? -1 : 0}
                initial={false} animate={{transform:`translate(-50%, -50%) translateX(${offset*77}%) scale(${selected ? 1 : .77}) rotate(${reduced ? 0 : offset*-5}deg)`,opacity:Math.abs(offset)>1 ? 0 : selected ? 1 : .48}}
                transition={{duration:reduced ? 0 : .55,ease:[.23,1,.32,1]}}
                style={{zIndex:3-Math.abs(offset),pointerEvents:Math.abs(offset)>1 ? 'none' : 'auto'}}
                onPointerDown={() => {dragged.current=false;}}
                onClick={() => {if(!dragged.current)setActive(index);}}>
                <img src={item.image} alt={`${item.name} website homepage`} width={1440} height={1000} draggable={false}/>
              </motion.button>;
            })}
          </motion.div>
        </div>
        <div className="exhibition-controls">
          <button type="button" onClick={()=>move(-1)} aria-label="Previous website"><ArrowLeft size={22}/></button>
          <span>Click a preview · drag to explore</span>
          <button type="button" onClick={()=>move(1)} aria-label="Next website"><ArrowRight size={22}/></button>
        </div>
      </div>
    </div>
    <div className="gallery-thumbnails" role="group" aria-label="Choose a website">
      {websites.map((item,index)=><button key={item.url} type="button" className="gallery-thumbnail" aria-pressed={active===index} aria-label={`Select ${item.name}`} onClick={()=>setActive(index)}>
        <img src={item.image} alt="" width={288} height={180}/><span><span className="thumbnail-number">{String(index+1).padStart(2,'0')}</span>{item.name}</span>
      </button>)}
    </div>
  </div>;
}
