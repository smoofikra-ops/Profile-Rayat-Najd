import { Section, EditableText } from '../ui/Layouts';

export function Section03Services({ startPageNumber = 6 }: { startPageNumber?: number }) {
  const services = [
    {
      titleEn: "Landscape Execution",
      titleAr: "تنفيذ اللاندسكيب والمشاريع",
      descEn: "Turnkey hardscape and softscape execution for giga-projects, commercial developments, and public parks.",
      descAr: "تنفيذ متكامل لأعمال اللاندسكيب الصلب والناعم للمشاريع الكبرى والمجمعات التجارية والحدائق العامة.",
      image: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-04.webp"
    },
    {
      titleEn: "Landscape Design",
      titleAr: "تصميم وتخطيط المواقع",
      descEn: "Comprehensive master-planning, microclimate analysis, and horticultural architecture tailored to the Saudi environment.",
      descAr: "مخططات هندسية متكاملة ودراسات مناخية وتصاميم زراعية متوافقة مع البيئة الطبيعية للمملكة.",
      image: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-09.webp"
    },
    {
      titleEn: "Greening & Afforestation",
      titleAr: "الخدمات البيئية والتشجير",
      descEn: "Large-scale desert greening, native habitat restoration, and active participation in the Saudi Green Initiative.",
      descAr: "مشاريع تشجير صحراوي كبرى، وإعادة تأهيل الغطاء النباتي الطبيعي، ودعم مبادرة السعودية الخضراء.",
      image: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-05.webp"
    },
    {
      titleEn: "Operation & Maintenance",
      titleAr: "التشغيل والصيانة المستدامة",
      descEn: "Routine arboricultural management, automated irrigation upkeep, and preventive plant health programs.",
      descAr: "برامج تشغيل وصيانة شاملة تشمل العناية بالأشجار وشبكات الري وإدارة صحة النباتات لضمان استدامة الأصول.",
      image: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-10.webp"
    }
  ];

  return (
    <Section 
      className="bg-brand-beige border-b border-brand-warm/10" 
      pageNumber={startPageNumber} 
      bgType="pattern"
      bgImage="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/backgrounds/rayat-najd-website-background-services.webp"
    >
      <div className="flex flex-col h-full justify-between py-2">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-3">
          <div className="flex flex-col items-start">
            <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Core Offerings</EditableText>
            <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Comprehensive Services</EditableText>
          </div>
          <div className="flex flex-col items-end" dir="rtl">
            <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">خدماتنا الرئيسية</EditableText>
            <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">حلول متكاملة لتنسيق المواقع</EditableText>
          </div>
        </div>

        {/* 4-Card Premium Landscape Grid */}
        <div className="grid grid-cols-4 gap-4 my-auto items-stretch">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="card-surface card-surface-hover overflow-hidden flex flex-col justify-between group"
            >
              {/* Image: top of card */}
              <div className="h-36 relative bg-brand-forest overflow-hidden shrink-0">
                <img 
                  src={svc.image} 
                  alt={svc.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between items-end text-white">
                  <span className="card-title-en text-[11px] text-white leading-tight">{svc.titleEn}</span>
                  <span className="card-title-ar text-[12px] leading-tight text-brand-gold" dir="rtl">{svc.titleAr}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    {svc.descEn}
                  </EditableText>
                  <div className="w-full h-px bg-brand-warm/10"></div>
                  <EditableText as="p" className="card-body-ar text-[11px] leading-snug" dir="rtl">
                    {svc.descAr}
                  </EditableText>
                </div>
                <div className="mt-2.5 pt-1.5 border-t border-brand-warm/10 flex items-center justify-between text-[8px] uppercase tracking-widest text-brand-forest font-bold">
                  <span>Professional Service</span>
                  <span className="font-arabic" dir="rtl">تنفيذ معتمد</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
          <span>Rayat Najd Integrated Service Portfolio</span>
          <span className="font-arabic" dir="rtl">خدمات متكاملة من التخطيط إلى الإنجاز</span>
        </div>
      </div>
    </Section>
  );
}
