const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  for (const [src, out] of [['profile.html','out/Rayat-Najd-Company-Profile-PRINT.pdf'],['profile_web.html','out/Rayat-Najd-Company-Profile-EMAIL.pdf']]) {
    await p.goto('file://' + __dirname + '/' + src); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
    await p.pdf({ path: out, width: '1920px', height: '1080px', printBackground: true, margin:{top:0,right:0,bottom:0,left:0} });
  }
  await b.close();
})();
