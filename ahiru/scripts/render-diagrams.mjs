// 図解スライドを SVG→PNG にして目で確かめる（作業用。リポジトリには入れない）
import { build } from 'esbuild';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [,, entry, exportName, outDir, only] = process.argv;
fs.mkdirSync(outDir, { recursive: true });
await build({ entryPoints: [entry], bundle: true, format: 'cjs', platform: 'node', outfile: outDir + '/bundle.cjs', logLevel: 'silent' });
const mod = require(outDir + '/bundle.cjs');
const map = mod[exportName];
const ACCENT='#B5622E', AXIS='#6E645C', INK='#2B2420';
const units = (l)=>[...l].reduce((u,ch)=>u+(ch.charCodeAt(0)<256?0.55:1),0);
function txt(text,cx,cy,maxW,size,color,bold,anchor){
  const lines=text.split('\n'); const widest=Math.max(...lines.map(units),1);
  const fs=Math.max(8,Math.min(size,maxW/widest)); const lh=fs*1.25; const y0=cy-((lines.length-1)*lh)/2+fs*0.36;
  return lines.map((ln,i)=>`<text x="${cx}" y="${y0+i*lh}" font-size="${fs}" fill="${color}" text-anchor="${anchor??'middle'}" font-weight="${bold?'bold':'normal'}">${ln.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</text>`).join('');
}
function sectorPath(cx,cy,r,from,to){const rad=d=>d*Math.PI/180;const x1=cx+r*Math.cos(rad(from)),y1=cy-r*Math.sin(rad(from)),x2=cx+r*Math.cos(rad(to)),y2=cy-r*Math.sin(rad(to));return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${Math.abs(to-from)>180?1:0} 0 ${x2},${y2} Z`}
function part(el){
  switch(el.t){
    case 'box': return `<rect x="${el.x}" y="${el.y}" width="${el.w}" height="${el.h}" rx="6" fill="${el.fill??'#FFF8EC'}" stroke="${el.color??ACCENT}" stroke-width="1.6"/>`+(el.text!=null?txt(el.text,el.x+el.w/2,el.y+el.h/2,el.w-8,el.size??12,INK,true):'');
    case 'label': return txt(el.text,el.x,el.y,312,el.size??12,el.color??INK,el.bold,el.anchor);
    case 'line': return `<line x1="${el.x1}" y1="${el.y1}" x2="${el.x2}" y2="${el.y2}" stroke="${el.color??AXIS}" stroke-width="${el.width??1.6}" ${el.dashed?'stroke-dasharray="4 3"':''}/>`;
    case 'arrow': {const dx=el.x2-el.x1,dy=el.y2-el.y1,len=Math.max(1,Math.hypot(dx,dy)),ux=dx/len,uy=dy/len,hx=el.x2-ux*8,hy=el.y2-uy*8,c=el.color??ACCENT;return `<line x1="${el.x1}" y1="${el.y1}" x2="${el.x2}" y2="${el.y2}" stroke="${c}" stroke-width="1.8" ${el.dashed?'stroke-dasharray="4 3"':''}/><polygon points="${el.x2},${el.y2} ${hx-uy*4.5},${hy+ux*4.5} ${hx+uy*4.5},${hy-ux*4.5}" fill="${c}"/>`}
    case 'circle': return `<circle cx="${el.cx}" cy="${el.cy}" r="${el.r}" fill="${el.fill??'#FFF8EC'}" stroke="${el.color??ACCENT}" stroke-width="1.6"/>`+(el.text!=null?txt(el.text,el.cx,el.cy,el.r*1.7,el.size??12,INK,true):'');
    case 'poly': return `<polygon points="${el.pts.map(p=>p.join(',')).join(' ')}" fill="${el.fill??'rgba(14,165,233,0.14)'}" stroke="${el.color??ACCENT}" stroke-width="1.6"/>`;
    case 'sector': return `<path d="${sectorPath(el.cx,el.cy,el.r,el.from,el.to)}" fill="${el.fill??'rgba(181,98,46,0.25)'}" stroke="${el.color??ACCENT}" stroke-width="1.6"/>`;
  }
  return '';
}
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1320, height: 800 }, deviceScaleFactor: 1 });
let n=0;
for (const [label, fig] of Object.entries(map)) {
  if (only && !label.includes(only)) continue;
  const cells = fig.steps.map((note,i)=>{
    const svg=fig.parts.slice(0,fig.stepParts[i]).map(part).join('');
    return `<div style="width:320px;margin:4px"><svg width="320" height="240" viewBox="0 0 320 240" style="background:#fff;border:1px solid #ccc;font-family:sans-serif">${svg}</svg><div style="font:11px sans-serif;width:320px;color:#333">${i+1}/${fig.steps.length} ${note}</div></div>`;
  }).join('');
  await page.setContent(`<html><body style="margin:6px;font-family:'Noto Sans CJK JP','Noto Sans JP',sans-serif"><h4 style="margin:2px">${label}</h4><div style="display:flex;flex-wrap:wrap">${cells}</div></body></html>`);
  const file=`${outDir}/${String(++n).padStart(2,'0')}.png`;
  await page.screenshot({ path: file, fullPage: true });
  console.log(file, label, fig.steps.length+'枚');
}
await browser.close();
