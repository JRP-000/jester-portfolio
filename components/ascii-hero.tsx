'use client';
import { useEffect, useRef } from 'react';
export function AsciiHero({ paused }: { paused: boolean }) {
 const ref = useRef<HTMLCanvasElement>(null);
 useEffect(() => {
  const canvas=ref.current!; const ctx=canvas.getContext('2d')!;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0, visible=true, last=0, width=0, height=0;
  const mask=document.createElement('canvas');const maskCtx=mask.getContext('2d')!;let maskData:Uint8ClampedArray|null=null;let maskScene=-1;const cells=new Map<string,number>();
  const pointer={x:-1000,y:-1000};
  const resize=()=>{width=canvas.clientWidth;height=canvas.clientHeight;cells.clear();maskScene=-1;const d=Math.min(devicePixelRatio,2);canvas.width=width*d;canvas.height=height*d;ctx.setTransform(d,0,0,d,0,0)};
  const observer=new ResizeObserver(resize);observer.observe(canvas);
  const intersection=new IntersectionObserver(([entry])=>visible=entry.isIntersecting);intersection.observe(canvas);
  const move=(e:PointerEvent)=>{const r=canvas.getBoundingClientRect();pointer.x=e.clientX-r.left;pointer.y=e.clientY-r.top};
  window.addEventListener('pointermove',move);
  const draw=(time:number)=>{frame=requestAnimationFrame(draw);if(!visible||document.hidden||time-last<(width<450?34:25))return;last=time;
   const t=reduce.matches||paused?1.5:time*.0003;ctx.clearRect(0,0,width,height);ctx.font='10px -apple-system, BlinkMacSystemFont, sans-serif';
   const cell=width<450?10:9; const cy=height*.5,cx=width*.5;const size=Math.min(width*(width<450?.65:.58),height*.72);const chars=' .,:;+=xX#@';
   const scene=reduce.matches?1:Math.floor(t/2)%5;
   if(maskScene!==scene||mask.width!==Math.floor(width)){maskScene=scene;mask.width=Math.floor(width);mask.height=Math.floor(height);maskCtx.clearRect(0,0,width,height);maskCtx.fillStyle='white';maskCtx.textAlign='center';maskCtx.textBaseline='middle';maskCtx.font=`bold ${scene===1?width*.12:width*.32}px -apple-system, BlinkMacSystemFont, sans-serif`;if(scene===1){maskCtx.fillText('JESTER',width/2,height*.43);maskCtx.fillText('PEDROSA',width/2,height*.57)}if(scene===2)maskCtx.fillText('</>',width/2,height/2);if(scene===3)maskCtx.fillText('QA',width/2,height/2);maskData=maskCtx.getImageData(0,0,mask.width,mask.height).data;}
   for(let y=10;y<height;y+=12)for(let x=0;x<width;x+=cell){
    const nx=(x-cx)/size,ny=(y-cy)/size;const r=Math.sqrt(nx*nx+ny*ny),a=Math.atan2(ny,nx);
    const petal=.52+.19*Math.sin(a*5+t*.45)+.09*Math.sin(a*9-t);
    let v=Math.exp(-Math.pow((r-petal)*8,2))*(.55+.45*Math.sin(a*12+r*20+t));
    if(scene===4)v=Math.exp(-Math.pow((r-(.52+.12*Math.sin(a*3+t)))*10,2))*.9+Math.exp(-r*8)*.8;
    if(scene===4)v+=Math.exp(-Math.pow((ny-Math.sin(nx*5+t)*.35)*9,2))*(1-Math.min(1,Math.abs(nx)));
    if(scene===0)v+=Math.exp(-Math.pow((r-(.4+.18*Math.cos(a*6+t)))*9,2));
    v+=Math.exp(-r*5)*.45;
    if(scene>0&&scene<4&&maskData){const pixel=(Math.floor(y)*mask.width+Math.floor(x))*4+3;v=(maskData[pixel]||0)/255*(.55+.3*Math.sin(x*.1+y*.12+t));}
    const key=`${x},${y}`;const previous=cells.get(key)??0;v=reduce.matches||paused?v:previous+(v-previous)*.14;cells.set(key,v);
    const near=Math.hypot(x-pointer.x,y-pointer.y)<90;
    if(v>.06){ctx.fillStyle=`rgba(${near?'198,255,61':'57,255,20'},${Math.min(.95,.15+v*.85)})`;ctx.fillText(chars[Math.min(9,Math.floor(v*9)+1)],x,y)}
    else if((x*13+y*7)%131<3){ctx.fillStyle='rgba(127,185,139,.13)';ctx.fillText('.',x,y)}
   }
  };resize();frame=requestAnimationFrame(draw);
  return()=>{cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();window.removeEventListener('pointermove',move)};
 },[paused]);
 return <canvas ref={ref} className="ascii-canvas" aria-hidden="true"/>;
}
