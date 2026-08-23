const fs = require('fs');
let content = fs.readFileSync('src/components/ui/Layouts.tsx', 'utf-8');
content = content.replace(/import\.meta\.env\.DEV/g, '(import.meta as any).env.DEV');
fs.writeFileSync('src/components/ui/Layouts.tsx', content);
