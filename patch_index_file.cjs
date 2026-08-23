const fs = require('fs');

const content = `import { Section } from '../ui/Layouts';

interface Section00IndexProps {
  pageNumber: number;
  pages: {
    about: string;
    whyUs: string;
    services: string;
    nurseries: string;
    capabilities: string;
    productsCover: string;
    palmTrees: string;
    shadeTrees: string;
    nativeTrees: string;
    ornamentalTrees: string;
    shrubs: string;
    groundCovers: string;
    seasonal: string;
    desert: string;
    climbing: string;
    projects: string;
    process: string;
    quality: string;
    achievements: string;
    gallery: string;
    contact: string;
  }
}

const IndexCard = ({ titleEn, titleAr, range, isSub = false, highlight = false }: { titleEn: string; titleAr: string; range: string; isSub?: boolean; highlight?: boolean }) => (
  <div className={\`flex items-stretch justify-between w-full p-2.5 rounded-lg border \${highlight ? 'border-brand-gold/40 bg-white/80 shadow-sm' : isSub ? 'border-brand-warm/30 bg-white/40' : 'border-brand-gold/20 bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'}\`}>
    <div className="flex flex-col justify-center flex-grow pr-4 text-left border-r border-brand-warm/30">
       <span className="font-arabic text-brand-dark text-[15px] font-bold text-right leading-tight" dir="rtl">{titleAr}</span>
       <span className="font-sans text-brand-dark/70 text-[10px] tracking-wider uppercase mt-1 leading-tight">{titleEn}</span>
    </div>
    
    <div className="flex flex-col items-center justify-center w-[60px] shrink-0 pl-2">
       <span className="font-sans text-[8px] text-brand-gold uppercase tracking-[0.15em] mb-0.5">{range.includes('–') ? 'Pages' : 'Page'}</span>
       <span className="font-sans text-brand-dark font-bold text-[13px] leading-none">{range}</span>
    </div>
  </div>
);

export function Section00Index({ pageNumber, pages }: Section00IndexProps) {
  return (
    <Section className="bg-brand-beige relative overflow-hidden" pageNumber={pageNumber} bgType="none">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
           <img src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-08.webp" alt="Nursery" className="w-full h-full object-cover opacity-15 mix-blend-multiply" />
           <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/95 via-brand-beige/80 to-brand-beige/95"></div>
       </div>

       <div className="relative z-10 w-full h-full flex flex-col pt-12 pb-8 px-12">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-6 border-b border-brand-gold/30 pb-4">
             <h1 className="font-arabic text-brand-dark text-3xl font-bold mb-1">فهرس المحتويات</h1>
             <h2 className="font-sans text-brand-gold text-sm tracking-[0.2em] uppercase">Table of Contents</h2>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-row w-full gap-8">
             
             {/* Left Column: Corporate & Capabilities */}
             <div className="flex flex-col w-1/2 gap-2">
                <h3 className="font-sans text-brand-dark text-[10px] tracking-widest uppercase border-b border-brand-dark/10 pb-1.5 mb-0.5 flex justify-between">
                  <span>Corporate Profile</span>
                  <span className="font-arabic">الملف التعريفي</span>
                </h3>
                <IndexCard titleEn="Company Overview" titleAr="نبذة عن الشركة" range={pages.about} />
                <IndexCard titleEn="Why Rayat Najd" titleAr="لماذا رايات نجد" range={pages.whyUs} />
                <IndexCard titleEn="Our Services" titleAr="الخدمات" range={pages.services} />
                <IndexCard titleEn="Nurseries & Operational Capabilities" titleAr="المشاتل والقدرات التشغيلية" range={pages.nurseries} />
                <IndexCard titleEn="Integrated Capabilities" titleAr="القدرات المتكاملة" range={pages.capabilities} highlight={true} />
                
                <h3 className="font-sans text-brand-dark text-[10px] tracking-widest uppercase border-b border-brand-dark/10 pb-1.5 mt-3 mb-0.5 flex justify-between">
                  <span>Corporate Evidence & Contact</span>
                  <span className="font-arabic">الأعمال والتواصل</span>
                </h3>
                <IndexCard titleEn="Projects" titleAr="المشاريع" range={pages.projects} />
                <IndexCard titleEn="Process" titleAr="منهجية العمل" range={pages.process} />
                <IndexCard titleEn="Quality" titleAr="الجودة" range={pages.quality} />
                <IndexCard titleEn="Achievements" titleAr="الإنجازات" range={pages.achievements} />
                <IndexCard titleEn="Gallery" titleAr="معرض الصور" range={pages.gallery} />
                <IndexCard titleEn="Contact" titleAr="التواصل" range={pages.contact} highlight={true} />
             </div>

             {/* Right Column: Plant Catalog */}
             <div className="flex flex-col w-1/2 gap-2">
                <h3 className="font-sans text-brand-dark text-[10px] tracking-widest uppercase border-b border-brand-dark/10 pb-1.5 mb-0.5 flex justify-between">
                  <span>Plant Catalog</span>
                  <span className="font-arabic">الكتالوج النباتي</span>
                </h3>
                <IndexCard titleEn="Plant Catalog Overview" titleAr="مدخل الكتالوج النباتي" range={pages.productsCover} highlight={true} />
                
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-brand-gold/30 ml-2 mt-1">
                   <IndexCard titleEn="Palm Trees" titleAr="أشجار النخيل" range={pages.palmTrees} isSub={true} />
                   <IndexCard titleEn="Shade Trees" titleAr="أشجار الظل" range={pages.shadeTrees} isSub={true} />
                   <IndexCard titleEn="Native Trees" titleAr="الأشجار المحلية" range={pages.nativeTrees} isSub={true} />
                   <IndexCard titleEn="Ornamental Trees" titleAr="أشجار الزينة" range={pages.ornamentalTrees} isSub={true} />
                   <IndexCard titleEn="Shrubs & Plants" titleAr="الشجيرات والنباتات" range={pages.shrubs} isSub={true} />
                   <IndexCard titleEn="Ground Covers" titleAr="مغطيات التربة" range={pages.groundCovers} isSub={true} />
                   <IndexCard titleEn="Seasonal Plants" titleAr="النباتات الموسمية" range={pages.seasonal} isSub={true} />
                   <IndexCard titleEn="Desert Plants" titleAr="النباتات الصحراوية" range={pages.desert} isSub={true} />
                   <IndexCard titleEn="Climbing Plants" titleAr="النباتات المتسلقة" range={pages.climbing} isSub={true} />
                </div>
             </div>

          </div>
       </div>
    </Section>
  );
}
`;

fs.writeFileSync('src/components/sections/Section00Index.tsx', content);
