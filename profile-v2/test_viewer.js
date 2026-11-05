const { chromium, devices } = require('playwright');
const out='/home/claude/build/tests/'; const res=[];
(async()=>{
 const b=await chromium.launch();
 const sizes=[['desktop-1920x1080',{viewport:{width:1920,height:1080}}],['laptop-1366x768',{viewport:{width:1366,height:768}}],['short-1280x600',{viewport:{width:1280,height:600}}],
  ['ipad-landscape',devices['iPad (gen 7) landscape']],['ipad-portrait',devices['iPad (gen 7)']],['iphone-portrait',devices['iPhone 13']],['iphone-landscape',devices['iPhone 13 landscape']],['android-small',devices['Galaxy S8']]];
 for (const [name,opt] of sizes){
  const ctx=await b.newContext(opt); const p=await ctx.newPage();
  for (const n of [1,14,28]){
   await p.goto('http://localhost:8765/?n='+n+'#p'+n); await p.waitForFunction(()=>{const i=document.getElementById('pageImg');return i.complete&&i.naturalWidth>0}); await p.waitForTimeout(250);
   const r=await p.evaluate(()=>{const s=document.getElementById('stage').getBoundingClientRect(),sh=document.getElementById('sheet').getBoundingClientRect(),im=document.getElementById('pageImg');
     const vw=innerWidth,vh=innerHeight;
     return {inside: sh.left>=s.left-0.5&&sh.right<=s.right+0.5&&sh.top>=s.top-0.5&&sh.bottom<=s.bottom+0.5&&sh.right<=vw&&sh.bottom<=vh,
       ratio:(sh.width/sh.height).toFixed(4), natRatio:(im.naturalWidth/im.naturalHeight).toFixed(4), w:Math.round(sh.width), h:Math.round(sh.height),
       hscroll: document.documentElement.scrollWidth>vw+1, stageOverflow: document.getElementById('stage').scrollWidth>document.getElementById('stage').clientWidth+1 || document.getElementById('stage').scrollHeight>document.getElementById('stage').clientHeight+1 }});
   res.push({name,page:n,...r});
   if (n===1||n===28) await p.screenshot({path:`${out}${name}-p${n}.png`});
  }
  await ctx.close();
 }
 // interaction tests on laptop
 const ctx=await b.newContext({viewport:{width:1366,height:768}}); const p=await ctx.newPage();
 await p.goto('http://localhost:8765/'); await p.waitForTimeout(500);
 const T={};
 await p.click('#nextBtn'); T.next=await p.inputValue('#pageInput');
 await p.click('#prevBtn'); T.prev=await p.inputValue('#pageInput');
 await p.fill('#pageInput','20'); await p.press('#pageInput','Enter'); await p.waitForTimeout(200); T.jump=await p.inputValue('#pageInput');
 await p.keyboard.press('ArrowLeft'); T.keyNext=await p.inputValue('#pageInput');
 const w0=await p.evaluate(()=>document.getElementById('sheet').getBoundingClientRect().width);
 await p.click('#zoomIn'); await p.click('#zoomIn');
 T.zoomIn=await p.evaluate(()=>({w:document.getElementById('sheet').getBoundingClientRect().width,lbl:document.getElementById('zoomLbl').textContent,scrollable:document.getElementById('stage').scrollWidth>document.getElementById('stage').clientWidth}));
 T.zoomInRatio=(T.zoomIn.w/w0).toFixed(2);
 await p.screenshot({path:out+'zoom-150.png'});
 await p.click('#fitBtn'); T.fitBack=await p.evaluate(()=>Math.round(document.getElementById('sheet').getBoundingClientRect().width));
 await p.click('#sheet', {position:{x:100,y:100}}); await p.waitForTimeout(500);
 T.lbOpen=await p.evaluate(()=>document.getElementById('lb').classList.contains('open'));
 await p.click('#lbIn'); await p.click('#lbIn'); T.lbZoom=await p.textContent('#lbZoom');
 await p.mouse.move(600,400); await p.mouse.down(); await p.mouse.move(400,300,{steps:5}); await p.mouse.up();
 await p.screenshot({path:out+'lightbox-zoomed.png'});
 await p.keyboard.press('Escape'); await p.waitForTimeout(200); T.lbClosedEsc=!(await p.evaluate(()=>document.getElementById('lb').classList.contains('open')));
 await p.click('#openLb'); await p.waitForTimeout(300); await p.goBack(); await p.waitForTimeout(300);
 T.lbClosedBack=!(await p.evaluate(()=>document.getElementById('lb').classList.contains('open')));
 T.pageAfterBack=await p.inputValue('#pageInput');
 await p.click('#thumbsBtn'); await p.waitForTimeout(350); await p.screenshot({path:out+'thumbs.png'});
 await p.click('.drawer button:nth-child(28)'); await p.waitForTimeout(300); T.thumbJump=await p.inputValue('#pageInput');
 T.hotspots=await p.evaluate(()=>[...document.querySelectorAll('#sheet .hot')].map(a=>a.getAttribute('href')));
 T.buttons=await p.evaluate(()=>({wa:document.getElementById('waBtn').href,call:document.getElementById('callBtn').href,web:document.getElementById('webBtn').href,dl:document.getElementById('dlBtn').getAttribute('href'),dlAttr:document.getElementById('dlBtn').hasAttribute('download')}));
 const [dl]=await Promise.all([p.waitForEvent('download'),p.click('#dlBtn')]); await dl.saveAs(out+'downloaded.pdf'); T.download=dl.suggestedFilename();
 // print-media fallback of the viewer itself
 await p.emulateMedia({media:'print'}); await p.evaluate(()=>window.dispatchEvent(new Event('beforeprint'))); await p.waitForTimeout(1500);
 await p.pdf({path:out+'viewer-print-fallback.pdf',preferCSSPageSize:true,printBackground:true});
 // print button -> loads print PDF in iframe
 await p.emulateMedia({media:'screen'});
 const reqs=[]; p.on('request',r=>reqs.push(r.url()));
 await p.click('#printBtn'); await p.waitForTimeout(1500); T.printRequested=reqs.filter(u=>u.includes('PRINT.pdf')).length>0;
 console.log(JSON.stringify(T,null,1));
 const bad=res.filter(r=>!r.inside||r.hscroll||r.stageOverflow||Math.abs(r.ratio-r.natRatio)>0.01);
 console.log('LAYOUT CHECKS',res.length,'FAILED',bad.length); console.log(JSON.stringify(bad));
 console.log(res.filter(r=>r.page===1).map(r=>`${r.name}: ${r.w}x${r.h}`).join('\n'));
 await b.close();
})();
