const fs = require('fs');
const files = fs.readdirSync('dist/assets').filter(f => f.endsWith('.css'));
if (files.length > 0) {
  const content = fs.readFileSync('dist/assets/' + files[0], 'utf8');
  console.log("oklch count:", (content.match(/oklch/g) || []).length);
  console.log("oklab count:", (content.match(/oklab/g) || []).length);
}
