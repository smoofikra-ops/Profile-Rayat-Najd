const fs = require('fs');

const content = `import { Section, BilingualContainer, EnglishContent, ArabicContent, EditableText } from '../ui/Layouts';

interface Section00IndexProps {
  pageNumber: number;
  pages: {
    about: number;
    whyUs: number;
    services: number;
    nurseries: number;
    capabilities: number;
    products: number;
    projects: number;
    process: number;
    quality: number;
    achievements: number;
    gallery: number;
    contact: number;
  }
}

const IndexRow = ({ titleEn, titleAr, page }: { titleEn: string; titleAr: string; page: number }) => (
  <div className="flex items-center justify-between w-full group py-5 border-b border-brand-warm/10 hover:bg-brand-light/30 transition-colors px-6 rounded-xl">
    <div className="flex flex-col w-[40%]">
      <span className="font-sans text-brand-dark text-lg md:text-xl font-medium tracking-wide group-hover:text-brand-gold transition-colors">{titleEn}</span>
    </div>
    
    <div className="flex-grow border-b-2 border-dotted border-brand-dark/10 mx-6 mb-2 group-hover:border-brand-gold/40 transition-colors"></div>
    
    <div className="w-16 text-center shrink-0 flex flex-col items-center justify-center bg-brand-gold/5 rounded-lg py-2 border border-brand-gold/10 group-hover:bg-brand-gold/10 transition-colors">
      <span className="font-sans text-brand-gold text-sm tracking-widest uppercase mb-1 opacity-70">Page</span>
      <span className="font-sans text-brand-gold font-bold text-xl leading-none">{String(page).padStart(2, '0')}</span>
    </div>
    
    <div className="flex-grow border-b-2 border-dotted border-brand-dark/10 mx-6 mb-2 group-hover:border-brand-gold/40 transition-colors"></div>
    
    <div className="flex flex-col w-[40%] text-right" dir="rtl">
      <span className="font-arabic text-brand-dark text-xl md:text-2xl font-bold group-hover:text-brand-gold transition-colors">{titleAr}</span>
    </div>
  </div>
);

export function Section00Index({ pageNumber, pages }: Section00IndexProps) {
  return (
    <Section className="bg-white border-b border-brand-warm/10" pageNumber={pageNumber} bgType="texture">
      <BilingualContainer className="mb-12 items-start mt-8">
         <EnglishContent>
            <EditableText as="h3" className="typo-eyebrow">Table of Contents</EditableText>
            <EditableText as="h2" className="typo-h1 text-left">Executive Index</EditableText>
         </EnglishContent>
         <ArabicContent>
            <EditableText as="h3" className="typo-eyebrow font-arabic text-right">فهرس المحتويات</EditableText>
            <EditableText as="h2" className="typo-h1 font-arabic text-right">المحتويات التنفيذية</EditableText>
         </ArabicContent>
      </BilingualContainer>

      <div className="flex flex-col w-full max-w-6xl mx-auto px-4 md:px-12 pb-16">
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-brand-warm/20 p-8 md:p-12">
           <IndexRow titleEn="Company Overview" titleAr="نبذة عن الشركة" page={pages.about} />
           <IndexRow titleEn="Why Rayat Najd" titleAr="لماذا رايات نجد" page={pages.whyUs} />
           <IndexRow titleEn="Our Services" titleAr="خدماتنا" page={pages.services} />
           <IndexRow titleEn="Nurseries & Operational Capabilities" titleAr="المشاتل والقدرات التشغيلية" page={pages.nurseries} />
           <IndexRow titleEn="Integrated Capabilities" titleAr="الحلول والقدرات المتكاملة" page={pages.capabilities} />
           <IndexRow titleEn="Plant Catalog" titleAr="الكتالوج النباتي" page={pages.products} />
           <IndexRow titleEn="Projects" titleAr="المشاريع" page={pages.projects} />
           <IndexRow titleEn="Quality" titleAr="الجودة" page={pages.quality} />
           <IndexRow titleEn="Gallery" titleAr="المعرض" page={pages.gallery} />
           <IndexRow titleEn="Contact" titleAr="التواصل" page={pages.contact} />
        </div>
      </div>
    </Section>
  );
}
`;

fs.writeFileSync('src/components/sections/Section00Index.tsx', content);
