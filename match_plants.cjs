const fs = require('fs');

const catalog = JSON.parse(fs.readFileSync('catalog_state.json', 'utf8'));
const manifestRaw = fs.readFileSync('bunny_manifest/assets-index.csv', 'utf8').split('\n');
const headers = manifestRaw[0].split(',');

const manifest = manifestRaw.slice(1).map(line => {
  const parts = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') inQuotes = !inQuotes;
    else if (line[i] === ',' && !inQuotes) {
      parts.push(current);
      current = '';
    } else {
      current += line[i];
    }
  }
  parts.push(current);
  if(parts.length !== headers.length) return null;
  const obj = {};
  headers.forEach((h, i) => obj[h] = parts[i]);
  return obj;
}).filter(Boolean);

let matches = [];

for (const category of catalog) {
  for (const item of category.items) {
    const sciLower = item.sci.toLowerCase();
    const enLower = item.en.toLowerCase();
    
    // search manifest
    const candidates = manifest.filter(m => {
      const text = [m.title, m.alt_text, m.short_description, m.keywords_tags, m.final_filename].join(' ').toLowerCase();
      if (text.includes(sciLower)) return true;
      if (text.includes(enLower)) return true;
      return false;
    });

    matches.push({
      item: item,
      candidates: candidates.map(c => ({
        filename: c.final_filename,
        title: c.title,
        alt: c.alt_text,
        desc: c.short_description,
        tags: c.keywords_tags,
        url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd" + c.intended_bunny_destination
      }))
    });
  }
}

fs.writeFileSync('matches.json', JSON.stringify(matches, null, 2));
console.log("Matches generated");
