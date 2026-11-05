const { chromium } = require('playwright'); const fs=require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 4/3 });
  await p.goto('file://' + __dirname + '/profile.html'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
  const n = await p.locator('section.page').count(); const links=[];
  for (let i = 0; i < n; i++) {
    const sec=p.locator('section.page').nth(i);
    await sec.screenshot({ path: `viewer/tmp-${String(i+1).padStart(2,'0')}.png` });
    const L = await sec.evaluate(s=>{const r0=s.getBoundingClientRect(); return [...s.querySelectorAll('a[href]')].map(a=>{const r=a.getBoundingClientRect(); return {href:a.getAttribute('href'),x:(r.left-r0.left)/r0.width,y:(r.top-r0.top)/r0.height,w:r.width/r0.width,h:r.height/r0.height}})});
    links.push(L);
  }
  fs.writeFileSync('viewer/links.json', JSON.stringify(links));
  await b.close();
})();
