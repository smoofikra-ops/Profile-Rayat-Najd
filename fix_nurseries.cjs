const fs = require('fs');
let nurseries = fs.readFileSync('src/components/sections/Section04Nurseries.tsx', 'utf-8');
nurseries = nurseries.replace(/"https:\/\/nmolabs-cdn.b-cdn.net\/Rayat-najd\/06-media-library\/nursery-photography-al-hair\/rayat-najd-al-hair-nursery-riyadh-08.webp"/,
  '"https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-12.webp"');
fs.writeFileSync('src/components/sections/Section04Nurseries.tsx', nurseries);
