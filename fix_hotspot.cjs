const fs = require('fs');

let content = fs.readFileSync('src/components/ui/Layouts.tsx', 'utf-8');

content = content.replace(/\{isDev && \(\n       \{\/\* Hotspot \*\/\}/g, '{isDev && (');

fs.writeFileSync('src/components/ui/Layouts.tsx', content);
