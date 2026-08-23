const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Section05Products.tsx', 'utf8');

code = code.replace(/categoryEn: string, \n  categoryAr: string, \n  isSmall\?: boolean,/g, 'key?: React.Key, \n  categoryEn: string, \n  categoryAr: string, \n  isSmall?: boolean,');

fs.writeFileSync('src/components/sections/Section05Products.tsx', code);
