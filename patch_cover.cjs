const fs = require('fs');

const content = `import { motion } from 'motion/react';
import { EditableText } from '../ui/Layouts';

export function CoverSection() {
  return (
    <section className="relative w-[210mm] h-[297mm] mx-auto flex items-center justify-center bg-brand-forest overflow-hidden shrink-0 shadow-2xl mb-8 print:my-0 print:mb-0 print:shadow-none print:border-none print:h-[297mm] print:page-break-after-always">
       {/* Background Image - Urban Afforestation */}
      <div className="absolute inset-0 z-0">
          <img
             src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/hero-selects/rayat-najd-hero-banner-nursery-01.webp"
             alt="Urban Afforestation Background"
             className="w-full h-full object-cover opacity-100"
          />
          {/* A gradient overlay to ensure text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-forest/95 via-brand-forest/60 to-brand-forest/95 mix-blend-multiply"></div>
      </div>

      {/* Decorative Corner Trees (Kept for depth) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] z-10 pointer-events-none opacity-80" style={{ WebkitMaskImage: 'radial-gradient(circle at top left, black 20%, transparent 70%)', maskImage: 'radial-gradient(circle at top left, black 20%, transparent 70%)' }}>
         <img src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-03.webp" alt="Washingtonia Palm" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] z-10 pointer-events-none opacity-80" style={{ WebkitMaskImage: 'radial-gradient(circle at top right, black 20%, transparent 70%)', maskImage: 'radial-gradient(circle at top right, black 20%, transparent 70%)' }}>
         <img src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/backgrounds/rayat-najd-website-background-trees.webp" alt="Orange Tree" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] z-10 pointer-events-none opacity-80" style={{ WebkitMaskImage: 'radial-gradient(circle at bottom left, black 20%, transparent 70%)', maskImage: 'radial-gradient(circle at bottom left, black 20%, transparent 70%)' }}>
         <img src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/backgrounds/rayat-najd-website-background-services.webp" alt="Lavender" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] z-10 pointer-events-none opacity-80" style={{ WebkitMaskImage: 'radial-gradient(circle at bottom right, black 20%, transparent 70%)', maskImage: 'radial-gradient(circle at bottom right, black 20%, transparent 70%)' }}>
         <img src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-05.webp" alt="Yucca" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-20 w-full px-[50px] flex flex-col items-center text-center mt-[-100px]">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative flex flex-col items-center"
         >
            {/* Logo Image */}
            <div className="w-48 h-48 md:w-52 md:h-52 rounded-full flex items-center justify-center mb-6 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative group overflow-hidden border-4 border-brand-gold z-30 transition-all duration-700 hover:shadow-[0_15px_60px_rgba(202,160,82,0.4)] hover:scale-105">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-full z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <img src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/01-brand/logo/rayatnajd-logo.png" alt="Rayat Najd Logo" className="w-[75%] h-[75%] object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 drop-shadow-sm" />
            </div>
            
            <EditableText as="h2" className="text-brand-beige font-arabic text-5xl md:text-6xl mb-2 font-normal text-shadow-3d">رايات نجد</EditableText>
            <EditableText as="h3" className="text-brand-beige font-sans text-4xl md:text-5xl font-medium tracking-[0.2em] uppercase text-shadow-3d mb-8">Rayat Najd</EditableText>
            
            {/* MAIN HEADINGS - INSTITUTIONAL */}
            <div className="flex flex-col items-center gap-4 w-full max-w-4xl px-4 py-6 bg-brand-dark/20 backdrop-blur-md rounded-2xl border border-brand-gold/20 shadow-2xl">
                <EditableText as="h1" className="text-brand-gold font-sans text-xl md:text-2xl font-bold tracking-[0.1em] uppercase drop-shadow-lg text-center">
                    From Supply to Execution — Integrated Capabilities for Major Projects
                </EditableText>
                <EditableText as="p" className="text-brand-beige font-sans text-sm md:text-base opacity-90 text-center max-w-3xl leading-relaxed">
                    Plant and tree supply, landscape execution, urban landscape development, irrigation systems, maintenance, and greening for major projects and institutional clients.
                </EditableText>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent my-2"></div>

                <EditableText as="h1" className="text-brand-gold font-arabic text-2xl md:text-3xl font-bold drop-shadow-lg text-center" dir="rtl">
                    من التوريد إلى التنفيذ — قدرات متكاملة للمشاريع الكبرى
                </EditableText>
                <EditableText as="p" className="text-brand-beige font-arabic text-base md:text-lg opacity-90 text-center max-w-3xl leading-relaxed" dir="rtl">
                    توريد النباتات والأشجار، تنفيذ اللاندسكيب، تطوير المشهد الحضري، أنظمة الري، الصيانة، والتشجير للجهات والمشاريع الكبرى.
                </EditableText>
            </div>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="flex w-full max-w-4xl justify-between mt-10 relative"
         >
            {/* English Side - Left */}
            <div className="flex flex-col items-start text-left w-1/2 pr-10">
               <EditableText as="h4" className="text-brand-gold font-sans text-sm tracking-[0.15em] uppercase font-bold mb-5 drop-shadow-md border-b border-brand-gold/30 pb-2 inline-block">
                  Our Integrated Services & Solutions
               </EditableText>
               <ul className="text-brand-beige font-sans text-[15px] space-y-3 opacity-95 drop-shadow-md font-medium">
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Plant & Tree Supply</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Landscape Execution</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Urban Landscape Development</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Mature Tree Relocation</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Irrigation Solutions</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Landscape Maintenance</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Greening & Environmental Sustainability</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> Nursery & Project Supply Capability</li>
               </ul>
            </div>

            {/* Subtle Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 transform -translate-x-1/2"></div>

            {/* Arabic Side - Right */}
            <div className="flex flex-col items-end text-right w-1/2 pl-10" dir="rtl">
               <EditableText as="h4" className="text-brand-gold font-arabic text-xl font-bold mb-5 drop-shadow-md border-b border-brand-gold/30 pb-2 inline-block">
                  خدماتنا وحلولنا المتكاملة
               </EditableText>
               <ul className="text-brand-beige font-arabic text-[17px] space-y-3 opacity-95 drop-shadow-md font-medium">
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> توريد النباتات والأشجار</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> تنفيذ وتنسيق المواقع</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> تطوير المشهد الحضري</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> نقل وزراعة الأشجار الكبيرة</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> حلول وأنظمة الري</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> صيانة المسطحات الخضراء</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> التشجير والاستدامة البيئية</li>
                  <li className="flex items-center gap-2"><span className="text-brand-gold text-xs">■</span> قدرات المشاتل والتوريد للمشاريع</li>
               </ul>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/sections/CoverSection.tsx', content);
