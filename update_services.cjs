const fs = require('fs');

const newContent = `import { Section, BilingualContainer, EnglishContent, ArabicContent, EditableText, ImagePlaceholder } from '../ui/Layouts';

export function Section03Services({ startPageNumber = 6 }: { startPageNumber?: number }) {
  return (
    <Section className="bg-white border-b border-brand-warm/10" pageNumber={startPageNumber} bgType="pattern" bgImage="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/backgrounds/rayat-najd-website-background-services.webp">
      <BilingualContainer className="mb-8">
        <EnglishContent>
          <EditableText as="h3" className="typo-eyebrow">Our Services</EditableText>
          <EditableText as="h2" className="typo-h1 text-left">Comprehensive Landscape Solutions</EditableText>
        </EnglishContent>
        <ArabicContent>
          <EditableText as="h3" className="typo-eyebrow font-arabic text-right">خدماتنا</EditableText>
          <EditableText as="h2" className="typo-h1 font-arabic text-right">حلول شاملة لتنسيق الحدائق</EditableText>
        </ArabicContent>
      </BilingualContainer>

      <div className="grid grid-cols-2 gap-4 h-[calc(100%-120px)] pb-2">
         <ServiceCard
            image="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-09.webp"
            titleEn="Landscape Design"
            titleAr="تصميم المناظر الطبيعية"
            descEn="Garden Design, Villa Landscape Design, Public Landscape Design, Urban Landscape Design."
            descAr="تصميم الحدائق، تصميم مناظر الفلل، تصميم المناظر العامة، تصميم المناظر الحضرية."
         />
         <ServiceCard
            image="https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-04.webp"
            titleEn="Execution"
            titleAr="التنفيذ"
            descEn="Landscape Construction, Irrigation Networks, Tree Planting, Palm Planting, Government Projects, Private Projects."
            descAr="إنشاء المناظر الطبيعية، شبكات الري، زراعة الأشجار، زراعة النخيل، المشاريع الحكومية، المشاريع الخاصة."
         />
         <ServiceCard
            image="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-10.webp"
            titleEn="Maintenance"
            titleAr="الصيانة"
            descEn="Garden Maintenance, Irrigation Maintenance, Tree Maintenance, Pruning, Pest Control."
            descAr="صيانة الحدائق، صيانة الري، صيانة الأشجار، التقليم، مكافحة الآفات."
         />
         <ServiceCard
            image="https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-05.webp"
            titleEn="Environmental Services"
            titleAr="الخدمات البيئية"
            descEn="Green Riyadh, Afforestation, Desert Greening, Vegetation Development, Environmental Sustainability."
            descAr="الرياض الخضراء، التشجير، تخضير الصحراء، التنمية النباتية، الاستدامة البيئية."
         />
      </div>
    </Section>
  );
}

function ServiceCard({ image, titleEn, titleAr, descEn, descAr }: any) {
  return (
     <div className="group relative overflow-hidden bg-brand-light flex flex-col h-full rounded-2xl shadow-3d border border-brand-warm/10 max-h-[340px]">
        <div className="h-40 overflow-hidden relative shrink-0">
           {image ? (
              <img src={image} alt={titleEn} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 border-none !shadow-none rounded-none" />
           ) : (
              <ImagePlaceholder title={titleEn} specs="Upload Service Image" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 border-none !shadow-none rounded-none" />
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 to-transparent"></div>
           <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <EditableText as="h3" className="typo-h3 !text-brand-beige text-shadow-3d text-sm">{titleEn}</EditableText>
              <EditableText as="h3" className="typo-h3 !text-brand-beige font-arabic text-shadow-3d text-sm" dir="rtl">{titleAr}</EditableText>
           </div>
        </div>
        <div className="p-5 flex flex-col justify-between flex-grow">
           <div className="space-y-3">
              <EditableText as="p" className="typo-caption text-xs leading-tight">{descEn}</EditableText>
              <div className="w-8 h-[1px] bg-brand-gold/50"></div>
              <EditableText as="p" className="typo-caption font-arabic text-xs leading-tight" dir="rtl">{descAr}</EditableText>
           </div>
           <div className="mt-4 flex justify-between items-center text-[10px] tracking-widest uppercase font-sans text-brand-gold group-hover:text-brand-forest transition-colors">
              <span>Explore Service</span>
              <span>اكتشف الخدمة</span>
           </div>
        </div>
     </div>
  );
}
`;

fs.writeFileSync('src/components/sections/Section03Services.tsx', newContent);
console.log("Services section updated!");
