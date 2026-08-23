const fs = require('fs');
const lines = fs.readFileSync('bunny_manifest/assets-index.csv', 'utf8').split('\n');
const dirs = new Set();
lines.slice(1).forEach(line => {
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
  if (parts.length > 18) {
    const path = parts[18];
    if (path) dirs.add(path.substring(0, path.lastIndexOf('/')));
  }
});
console.log(Array.from(dirs).join('\n'));
