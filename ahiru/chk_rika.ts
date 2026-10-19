import { lintDiagram } from './scripts/figlint';
import { TEIKI_J1_RIKA } from './data/teiki/j1-rika';
import { TEIKI_J2_RIKA } from './data/teiki/j2-rika';
import { TEIKI_J3_RIKA } from './data/teiki/j3-rika';
for (const u of [...TEIKI_J1_RIKA,...TEIKI_J2_RIKA,...TEIKI_J3_RIKA]) {
  const f:any = u.figure; const r = lintDiagram(u.id, f);
  const steps = f.steps?.length, parts = f.stepParts?.length;
  const short = (f.steps||[]).filter((s:any)=>(typeof s==='string'?s:s.note||'').length<40).length;
  console.log(u.id, r.length, steps, parts, short, JSON.stringify(f).includes('**'));
  r.forEach((x:string)=>console.log('  ',x));
}
