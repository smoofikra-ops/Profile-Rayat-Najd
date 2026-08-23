const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Section11Contact.tsx', 'utf-8');
const replacement = `
         <div className="mt-20 flex flex-col items-center justify-center gap-4">
            <div className="w-32 h-32 mb-4">
               <img src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/12-shared-assets/government-partner-logos/rayat-najd-partner-logo-02.webp" alt="Rayat Najd Logo" className="w-full h-full object-contain filter grayscale contrast-125 opacity-70" />
            </div>
            <div className="w-40 h-40 border border-brand-warm/20 bg-white p-3 shadow-3d rounded-xl">
`;
content = content.replace(/<div className="mt-20 flex flex-col items-center justify-center gap-4">\s*<div className="w-40 h-40 border border-brand-warm\/20 bg-white p-3 shadow-3d rounded-xl">/, replacement.trim());
fs.writeFileSync('src/components/sections/Section11Contact.tsx', content);
