const fs = require('fs');
const content = fs.readFileSync('src/components/sections/Section05Products.tsx', 'utf8');

// Use a quick regex or eval to get the categories array.
const categoriesMatch = content.match(/const categories = (\[[\s\S]*?\]);\n\nexport function Section05Products/);
if (categoriesMatch) {
  const code = categoriesMatch[1];
  let cat;
  try {
    cat = eval(code);
    const report = cat.map(c => ({
      category: c.en,
      itemCount: c.items.length,
      items: c.items.map(i => ({
        en: i.titleEn,
        ar: i.titleAr,
        sci: i.scientific,
        img: i.img || 'MISSING'
      }))
    }));
    fs.writeFileSync('catalog_state.json', JSON.stringify(report, null, 2));
    console.log("Analysis saved to catalog_state.json");
  } catch(e) {
    console.error("Eval failed", e);
  }
} else {
  console.log("Match failed");
}
