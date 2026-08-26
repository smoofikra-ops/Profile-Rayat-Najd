import { Section, EditableText } from '../ui/Layouts';

export function Section10Gallery({ startPageNumber = 37 }: { startPageNumber?: number }) {
  const images = [
    {
      url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-12.webp",
      captionEn: "Al-Ha'ir Central Production Nursery",
      captionAr: "مشاتل الحائر المركزية — الرياض"
    },
    {
      url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/05-services/mature-tree-relocation/rayat-najd-mature-tree-relocation-01.webp",
      captionEn: "Mature Tree Relocation Logistics",
      captionAr: "نقل وزراعة الأشجار الكبيرة"
    },
    {
      url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-01.webp",
      captionEn: "Specimen Date Palm Cultivation",
      captionAr: "إنتاج ورعاية نخيل التمر"
    },
    {
      url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-03.webp",
      captionEn: "Umm Shalfah Afforestation Site",
      captionAr: "موقع تشجير أم شلفة البيئي"
    },
    {
      url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-10.webp",
      captionEn: "Hydraulic Irrigation Engineering",
      captionAr: "تنفيذ شبكات الري الذكية"
    },
    {
      url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-01.webp",
      captionEn: "Heavy Logistics & Delivery Fleet",
      captionAr: "أسطول النقل والخدمات اللوجستية"
    }
  ];

  return (
    <Section 
      className="bg-brand-beige border-b border-brand-warm/10" 
      pageNumber={startPageNumber} 
      bgType="pattern"
    >
      <div className="flex flex-col h-full justify-between py-2">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
          <div>
            <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Visual Documentation</EditableText>
            <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Field Operations & Evidence</EditableText>
          </div>
          <div className="text-right" dir="rtl">
            <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">التوثيق الميداني</EditableText>
            <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">شواهد العمليات والإنتاج الزراعي</EditableText>
          </div>
        </div>

        {/* 6-Image Balanced Landscape Grid */}
        <div className="grid grid-cols-3 gap-3.5 my-auto items-stretch">
          {images.map((item, idx) => (
            <div 
              key={idx} 
              className="card-surface card-surface-hover overflow-hidden flex flex-col justify-between"
            >
              <div className="h-28 relative bg-brand-forest overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.captionEn} 
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-2.5 flex items-center justify-between gap-2">
                <span className="card-title-en text-[10px] truncate">{item.captionEn}</span>
                <span className="card-title-ar text-[11px] truncate" dir="rtl">{item.captionAr}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
          <span>Rayat Najd Photographic Archive & Field Records</span>
          <span className="font-arabic" dir="rtl">توثيق شامل لمواقع الإنتاج والتنفيذ الميداني</span>
        </div>
      </div>
    </Section>
  );
}
