const fs = require('fs');

let content = fs.readFileSync('src/components/sections/Section05Products.tsx', 'utf8');

// Farsetia burtoniae -> Moringa peregrina
content = content.replace(
  'titleEn: "Farsetia burtoniae", titleAr: "فارسيتيا بورتونيا", scientific: "Farsetia burtoniae",',
  'titleEn: "Arabian Moringa", titleAr: "البان العربي", scientific: "Moringa peregrina",'
);
content = content.replace(
  'indicators: "Very High Drought Tolerance | Sand Stabilization | Low Irrigation",\n        indicatorsAr: "تحمل شديد للجفاف | تثبيت الرمال | ري منخفض"',
  'indicators: "Very High Drought Tolerance | Medicinal Oil | Native Tree",\n        indicatorsAr: "تحمل شديد للجفاف | زيوت طبية | شجرة محلية"'
);

// Washingtonia robusta -> Mexican Fan Palm
content = content.replace(
  'titleEn: "Washingtonia robusta", titleAr: "واشنطونيا روبستا", scientific: "Washingtonia robusta",',
  'titleEn: "Mexican Fan Palm", titleAr: "واشنطونيا روبستا", scientific: "Washingtonia robusta",'
);

// Washingtonia filifera -> California Fan Palm
content = content.replace(
  'titleEn: "Washingtonia filifera", titleAr: "واشنطونيا فيليفيرا", scientific: "Washingtonia filifera",',
  'titleEn: "California Fan Palm", titleAr: "واشنطونيا فيليفيرا", scientific: "Washingtonia filifera",'
);

// Peltophorum -> Copperpod
content = content.replace(
  'titleEn: "Peltophorum", titleAr: "بيلتوفوروم", scientific: "Peltophorum pterocarpum",',
  'titleEn: "Copperpod", titleAr: "بيلتوفوروم", scientific: "Peltophorum pterocarpum",'
);

// Poinciana -> Royal Poinciana
content = content.replace(
  'titleEn: "Poinciana", titleAr: "البونسيانا", scientific: "Delonix regia",',
  'titleEn: "Royal Poinciana", titleAr: "البونسيانا", scientific: "Delonix regia",'
);

// Tipuana tipu -> Tipu Tree
content = content.replace(
  'titleEn: "Tipuana tipu", titleAr: "تيبوانا تيبو", scientific: "Tipuana tipu",',
  'titleEn: "Tipu Tree", titleAr: "تيبوانا تيبو", scientific: "Tipuana tipu",'
);

// Tabebuia -> Pink Trumpet Tree
content = content.replace(
  'titleEn: "Tabebuia", titleAr: "التابوبيا", scientific: "Tabebuia rosea",',
  'titleEn: "Pink Trumpet Tree", titleAr: "التابوبيا", scientific: "Tabebuia rosea",'
);

// Acacia Glauca -> Glossy Shower
content = content.replace(
  'titleEn: "Acacia Glauca", titleAr: "الأكاسيا جلوكا", scientific: "Senna surattensis",',
  'titleEn: "Glossy Shower", titleAr: "كاسيا جلوكا", scientific: "Senna surattensis",'
);

// Indian Jasmine -> Arabian Jasmine
content = content.replace(
  'titleEn: "Indian Jasmine", titleAr: "الياسمين الهندي", scientific: "Jasminum sambac",',
  'titleEn: "Arabian Jasmine", titleAr: "الفل", scientific: "Jasminum sambac",'
);

fs.writeFileSync('src/components/sections/Section05Products.tsx', content);
console.log("Patched Section05Products.tsx");
