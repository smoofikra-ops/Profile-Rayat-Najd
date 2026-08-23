const fs = require('fs');

let content = fs.readFileSync('src/components/ui/Layouts.tsx', 'utf-8');

// Replace `(import.meta as any).env.DEV` with `import.meta.env.DEV` and add `@ts-ignore`
content = content.replace(/const isDev = \(import\.meta as any\)\.env\.DEV;/g, 
  '// @ts-ignore\n  const isDev = import.meta.env.DEV;');

fs.writeFileSync('src/components/ui/Layouts.tsx', content);

