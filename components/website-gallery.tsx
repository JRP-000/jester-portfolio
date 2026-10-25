'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { websites } from '@/lib/websites';

export function WebsiteGallery() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const website = websites[active];

  function move(step: number) {
    setActive(index => (index + step + websites.length) % websites.length);
  }

  return <div className="website-gallery carousel-gallery" aria-label="Website gallery">
    <div className="carousel-stage">
      <span className="carousel-ghost" aria-hidden="true">{String(active + 1).padStart(2, '0')}</span>
    <div className="carousel-info">
      <div className="carousel-current" aria-live="polite" aria-atomic="true"><span>{String(active + 1).padStart(2, '0')} / {String(websites.length).padStart(2, '0')}</span><h3>{website.name}</h3><p>{website.category}</p></div>
    </div>
      <div className="carousel-preview-controls">
      <button className="carousel-side-arrow" type="button" onClick={() => move(-1)} aria-label="Previous website"><ArrowLeft size={22}/></button>
      <a className="carousel-feature-link" href={website.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${website.name} website (opens in a new tab)`}>
        <div className="carousel-image-clip">
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={website.image}
              src={website.image}
              alt={`${website.name} website homepage`}
              width={1440}
              height={1000}
              className="carousel-image"
              initial={reduced ? false : {opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: reduced ? 0 : .3, ease: "easeInOut"}}
            />
          </AnimatePresence>
          <span className="carousel-visit">Visit website <ArrowUpRight size={18}/></span>
        </div>
      </a>
      <button className="carousel-side-arrow" type="button" onClick={() => move(1)} aria-label="Next website"><ArrowRight size={22}/></button>
      </div>
    </div>
    <div className="gallery-thumbnails" role="group" aria-label="Choose a website">
      {websites.map((item, index) => <button
        key={item.url}
        type="button"
        className="gallery-thumbnail"
        aria-pressed={active === index}
        aria-label={`Show ${item.name}`}
        onClick={() => setActive(index)}
      >
        <img src={item.image} alt="" width={288} height={180}/>
        <span><span className="thumbnail-number">{String(index + 1).padStart(2, '0')}</span>{item.name}</span>
      </button>)}
    </div>

  </div>;
}
