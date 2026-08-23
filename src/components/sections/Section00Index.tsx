import { Section } from '../ui/Layouts';

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
  <div className={`flex items-stretch justify-between w-full px-2 py-1 rounded-md border ${highlight ? 'border-brand-gold/50 bg-white/90 shadow-sm' : isSub ? 'border-brand-warm/25 bg-white/50' : 'border-brand-gold/20 bg-white/70 shadow-sm'}`}>
    <div className="flex flex-col justify-center flex-grow pr-2.5 text-left border-r border-brand-warm/25">
       <span className="font-arabic text-brand-dark text-[12.5px] font-bold text-right leading-tight" dir="rtl">{titleAr}</span>
       <span className="font-sans text-brand-dark/70 text-[9px] tracking-wider uppercase leading-tight">{titleEn}</span>
    </div>
    
    <div className="flex flex-col items-center justify-center w-[48px] shrink-0 pl-1.5">
       <span className="font-sans text-[7.5px] text-brand-gold uppercase tracking-[0.1em]">{range.includes('–') ? 'Pages' : 'Page'}</span>
       <span className="font-sans text-brand-dark font-bold text-[11.5px] leading-none">{range}</span>
    </div>
  </div>
);

export function Section00Index({ pageNumber, pages }: Section00IndexProps) {
  return (
    <Section 
      className="bg-brand-beige relative overflow-hidden" 
      pageNumber={pageNumber} 
      bgType="none"
      bgImage="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-08.webp"
    >
       <div className="w-full h-full flex flex-col justify-between py-1">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
             <div className="flex items-center gap-3">
               <h1 className="font-arabic text-brand-dark text-2xl font-bold">فهرس المحتويات</h1>
               <span className="text-brand-gold/50">•</span>
               <h2 className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase font-bold">Table of Contents</h2>
             </div>
             <span className="text-brand-dark/50 text-[10px] uppercase tracking-widest font-sans">Rayat Najd Corporate Profile</span>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-row w-full gap-5 flex-grow">
             
             {/* Left Column: Corporate & Capabilities */}
             <div className="flex flex-col w-1/2 gap-1 justify-between h-full">
                <div>
                    <h3 className="font-sans text-brand-dark text-[9.5px] tracking-widest uppercase border-b border-brand-dark/10 pb-0.5 mb-1 flex justify-between font-bold">
                      <span>Corporate Profile</span>
                      <span className="font-arabic">الملف التعريفي</span>
                    </h3>
                    <div className="flex flex-col gap-1">
                        <IndexCard titleEn="Company Overview" titleAr="نبذة عن الشركة" range={pages.about} />
                        <IndexCard titleEn="Why Rayat Najd" titleAr="لماذا رايات نجد" range={pages.whyUs} />
                        <IndexCard titleEn="Our Services" titleAr="الخدمات" range={pages.services} />
                        <IndexCard titleEn="Nurseries & Operational Capabilities" titleAr="المشاتل والقدرات التشغيلية" range={pages.nurseries} />
                        <IndexCard titleEn="Integrated Capabilities" titleAr="القدرات المتكاملة" range={pages.capabilities} highlight={true} />
                    </div>
                </div>
                
                <div>
                    <h3 className="font-sans text-brand-dark text-[9.5px] tracking-widest uppercase border-b border-brand-dark/10 pb-0.5 mb-1 flex justify-between font-bold">
                      <span>Corporate Evidence & Contact</span>
                      <span className="font-arabic">الأعمال والتواصل</span>
                    </h3>
                    <div className="flex flex-col gap-1">
                        <IndexCard titleEn="Projects" titleAr="المشاريع" range={pages.projects} />
                        <IndexCard titleEn="Process" titleAr="منهجية العمل" range={pages.process} />
                        <IndexCard titleEn="Quality" titleAr="الجودة" range={pages.quality} />
                        <IndexCard titleEn="Achievements" titleAr="الإنجازات" range={pages.achievements} />
                        <IndexCard titleEn="Gallery" titleAr="معرض الصور" range={pages.gallery} />
                        <IndexCard titleEn="Contact" titleAr="التواصل" range={pages.contact} highlight={true} />
                    </div>
                </div>
             </div>

             {/* Right Column: Plant Catalog */}
             <div className="flex flex-col w-1/2 gap-1 justify-between h-full">
                <div>
                  <h3 className="font-sans text-brand-dark text-[9.5px] tracking-widest uppercase border-b border-brand-dark/10 pb-0.5 mb-1 flex justify-between font-bold">
                    <span>Plant Catalog</span>
                    <span className="font-arabic">الكتالوج النباتي</span>
                  </h3>
                  <IndexCard titleEn="Plant Catalog Overview" titleAr="مدخل الكتالوج النباتي" range={pages.productsCover} highlight={true} />
                </div>
                
                <div className="flex flex-col gap-1 pl-3 border-l-2 border-brand-gold/30 ml-1">
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
