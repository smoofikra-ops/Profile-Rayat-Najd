const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await p.goto('file://' + __dirname + '/profile.html'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  const n = await p.locator('section.page').count();
  for (let i = 0; i < n; i++) await p.locator('section.page').nth(i).screenshot({ path: `out/page-${String(i+1).padStart(2,'0')}.png` });
  await p.pdf({ path: 'out/preview.pdf', width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true });
  await b.close();
})();
