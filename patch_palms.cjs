const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Section05Products.tsx', 'utf8');

content = content.replace(
  'titleEn: "Mexican Fan Palm", titleAr: "واشنطونيا روبستا", scientific: "Washingtonia robusta",\n        indicators:',
  'titleEn: "Mexican Fan Palm", titleAr: "واشنطونيا روبستا", scientific: "Washingtonia robusta",\n        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-63.webp",\n        indicators:'
);

content = content.replace(
  'titleEn: "California Fan Palm", titleAr: "واشنطونيا فيليفيرا", scientific: "Washingtonia filifera",\n        indicators:',
  'titleEn: "California Fan Palm", titleAr: "واشنطونيا فيليفيرا", scientific: "Washingtonia filifera",\n        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-65.webp",\n        indicators:'
);

fs.writeFileSync('src/components/sections/Section05Products.tsx', content);
console.log("Patched Washingtonia");
