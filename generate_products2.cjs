const fs = require('fs');

const fileContent = `import React from 'react';
import { Leaf } from 'lucide-react';
import { Section, BilingualContainer, EnglishContent, ArabicContent, EditableText, ImagePlaceholder } from '../ui/Layouts';

export function ProductImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={\`flex items-center justify-center bg-brand-warm/5 \${className}\`}>
      <Leaf className="w-8 h-8 text-brand-dark/20" />
    </div>
  );
}

const categories = ` + fs.readFileSync('generate_products.cjs', 'utf-8').match(/const categories = (\[[\s\S]*?\]);/)[1] + `;

export function Section05Products({ startPageNumber = 14 }: { startPageNumber?: number }) {
  return (
    <div className="bg-brand-beige print:bg-transparent">
       <Section className="bg-white !mb-0 border-b border-brand-warm/10" pageNumber={startPageNumber} bgType="pattern" bgImage="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-04.webp">
          <BilingualContainer className="mb-16">
             <EnglishContent>
                <EditableText as="h3" className="typo-eyebrow">Nursery Products</EditableText>
                <EditableText as="h2" className="typo-h1 text-left">Plant Collection</EditableText>
                <div className="typo-body-en">
                   <EditableText as="p">
                     An exquisite selection of flora cultivated to the highest standards, ready to breathe life into any landscape.
                   </EditableText>
                </div>
             </EnglishContent>
             <ArabicContent>
                <EditableText as="h3" className="typo-eyebrow font-arabic text-right">منتجات المشتل</EditableText>
                <EditableText as="h2" className="typo-h1 font-arabic text-right">مجموعة النباتات</EditableText>
                <div className="typo-body-ar">
                   <EditableText as="p">
                     مجموعة رائعة من النباتات المزروعة وفقاً لأعلى المعايير، جاهزة لبث الحياة في أي منظر طبيعي.
                   </EditableText>
                </div>
             </ArabicContent>
          </BilingualContainer>
       </Section>

       {categories.map((cat, index) => {
         const catPageStart = startPageNumber + 1 + (index * 2);
         return (
           <div key={index}>
             <CategoryDivider en={cat.en} ar={cat.ar} img={cat.img} pageNum={catPageStart} />
             <Section pageNumber={catPageStart + 1} bgType="pattern">
                <SectionDivider />
                <div className="text-center mb-8">
                   <EditableText as="h3" className="typo-h3 mb-2">{cat.en}</EditableText>
                   <EditableText as="h3" className="typo-h3 font-arabic" dir="rtl">{cat.ar}</EditableText>
                </div>
                
                {cat.items && cat.items.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3 h-[calc(100%-120px)]">
                     {cat.items.map((item, i) => (
                         <ProductCard
                            key={i}
                            categoryEn={cat.en}
                            categoryAr={cat.ar}
                            isSmall={true}
                            titleEn={item.titleEn}
                           titleAr={item.titleAr}
                           scientific={item.scientific}
                           descEn={item.indicators}
                           descAr={item.indicatorsAr}
                           imageUrl={item.img}
                         />
                     ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[calc(100%-120px)] border border-dashed border-brand-warm/30 rounded-xl bg-brand-warm/5">
                     <EditableText as="p" className="typo-body-en text-brand-dark/50 mb-2">CATEGORY DATA GAP — DATA REQUIRED</EditableText>
                     <EditableText as="p" className="typo-body-ar text-brand-dark/50" dir="rtl">فجوة بيانات الفئة — مطلوب بيانات</EditableText>
                  </div>
                )}
             </Section>
           </div>
         );
       })}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex justify-center mb-8 opacity-20">
      <div className="w-16 h-px bg-brand-forest"></div>
      <div className="w-2 h-2 rounded-full bg-brand-gold mx-2 -mt-1"></div>
      <div className="w-16 h-px bg-brand-forest"></div>
    </div>
  );
}

function CategoryDivider({ en, ar, img, pageNum }: { en: string, ar: string, img: string, pageNum: number }) {
  return (
    <Section className="bg-brand-forest !p-0" pageNumber={pageNum}>
        <div className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <ImagePlaceholder title={\`\${en} Cover\`} specs="Upload Category Cover Image" className="w-full h-full opacity-40 mix-blend-overlay object-cover border-none !shadow-none" />
               <img src={img} alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
            </div>
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex flex-col items-center justify-center text-center">
               <div className="bg-black/40 backdrop-blur-md px-12 py-8 rounded-3xl border border-white/20 shadow-2xl">
                 <EditableText as="h2" className="typo-h1 !text-brand-beige tracking-wide drop-shadow-lg !mb-4">{en}</EditableText>
                 <EditableText as="h2" className="typo-h1 !text-brand-gold font-arabic drop-shadow-lg !mb-0">{ar}</EditableText>
               </div>
            </div>
        </div>
    </Section>
  );
}

function ProductCard({ 
  categoryEn, 
  categoryAr, 
  isSmall,
  titleEn = "Product Name",
  titleAr = "اسم المنتج",
  scientific = "Scientific Name",
  descEn,
  descAr,
  imageUrl
}: { 
  categoryEn: string, 
  categoryAr: string, 
  isSmall?: boolean,
  titleEn?: string,
  titleAr?: string,
  scientific?: string,
  descEn?: string,
  descAr?: string,
  imageUrl?: string
}) {
  return (
    <div className={\`flex flex-col bg-white border border-brand-warm/10 rounded-lg overflow-hidden group shadow-3d shadow-3d-hover transition-all duration-700 h-[calc(100%-1rem)] break-inside-avoid \${isSmall ? 'max-h-[240px]' : 'max-h-[300px]'}\`}>
       {imageUrl ? (
         <div className={\`w-full flex-1 border-b border-brand-warm/10 overflow-hidden \${isSmall ? 'min-h-[90px]' : 'min-h-[140px]'}\`}>
           <img src={imageUrl} alt={titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
         </div>
       ) : (
         <ProductImagePlaceholder className={\`w-full flex-1 border-b border-brand-warm/10 \${isSmall ? 'min-h-[90px]' : 'min-h-[140px]'}\`} />
       )}
       
       <div className={\`\${isSmall ? 'p-2.5' : 'p-4'} relative z-10 bg-white flex flex-col shrink-0\`}>
          <div className="flex justify-between items-end mb-1">
             <EditableText as="h4" className={\`typo-h4 font-bold \${isSmall ? 'text-xs' : 'text-sm'}\`}>{titleEn}</EditableText>
             <EditableText as="h4" className={\`typo-h4 font-bold font-arabic \${isSmall ? 'text-xs' : 'text-sm'}\`} dir="rtl">{titleAr}</EditableText>
          </div>
          <EditableText as="p" className={\`text-brand-olive \${isSmall ? 'text-[8px] mb-1' : 'text-[9px] mb-2'} italic font-serif text-center\`}>{scientific}</EditableText>
          
          <div className={\`grid grid-cols-1 gap-1 \${isSmall ? 'pt-1' : 'pt-2'} border-t border-brand-warm/10\`}>
             <EditableText as="p" className={\`\${isSmall ? 'text-[7px]' : 'text-[9px]'} text-brand-dark/80 font-light leading-snug line-clamp-2 text-center\`}>{descEn}</EditableText>
             <EditableText as="p" className={\`\${isSmall ? 'text-[7px]' : 'text-[9px]'} font-arabic text-brand-dark/80 font-light leading-snug line-clamp-2 text-center\`} dir="rtl">{descAr}</EditableText>
          </div>
       </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/sections/Section05Products.tsx', fileContent);
