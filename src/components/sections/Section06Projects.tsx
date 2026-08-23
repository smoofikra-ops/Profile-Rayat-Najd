import { Section, EditableText } from '../ui/Layouts';

export function Section06Projects({ startPageNumber = 33 }: { startPageNumber?: number }) {
  const projects = [
    {
      titleEn: "Umm Shalfah Afforestation",
      titleAr: "مشروع تشجير وتأهيل أم شلفة البيئي",
      locationEn: "Riyadh Province, KSA",
      locationAr: "منطقة الرياض، المملكة العربية السعودية",
      scopeEn: "Large-scale native afforestation, smart drip irrigation networks, deep soil conditioning, and desert ecology preservation.",
      scopeAr: "تشجير صحراوي واسع النطاق بأشجار محلية، وتمديد شبكات ري ذكية، وتجهيز التربة وحماية النظم البيئية الصحراوية.",
      roleEn: "Turnkey Planting & Irrigation Infrastructure",
      roleAr: "التنفيذ المتكامل لشبكات الري والغرس والإنتاج",
      img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-03.webp"
    },
    {
      titleEn: "Municipal Corridors & Civic Greening",
      titleAr: "تخضير المحاور الحضرية والحدائق العامة",
      locationEn: "Central Region, KSA",
      locationAr: "المنطقة الوسطى، المملكة العربية السعودية",
      scopeEn: "Avenue palm alignment, median shade canopies, groundcover installation, and urban heat mitigation.",
      scopeAr: "زراعة أشجار النخيل والواشنطونيا، وتشجير الجزر الوسطية، وفرش مغطيات التربة لتحسين المشهد الحضري.",
      roleEn: "Supply, Soil Preparation & Site Execution",
      roleAr: "التوريد الزراعي وتجهيز المواقع والغرس",
      img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-08.webp"
    },
    {
      titleEn: "Institutional & Commercial Grounds",
      titleAr: "مشاريع المجمعات والمرافق المؤسسية",
      locationEn: "Riyadh, KSA",
      locationAr: "الرياض، المملكة العربية السعودية",
      scopeEn: "Hardscape integration, specimen ornamental flora, automated telemetry irrigation, and long-term maintenance.",
      scopeAr: "دمج أعمال الهاردسكيب مع الغطاء النباتي الزخرفي، وتفعيل أنظمة الري المؤتمتة، وتقديم خدمات الصيانة.",
      roleEn: "Master Landscape Engineering & Maintenance",
      roleAr: "الهندسة التنفيذية للاندسكيب والتشغيل",
      img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-10.webp"
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
            <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Selected Track Record</EditableText>
            <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Key Project Showcase</EditableText>
          </div>
          <div className="text-right" dir="rtl">
            <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">سجل الإنجاز الميداني</EditableText>
            <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">نماذج من مشاريعنا المنفذة</EditableText>
          </div>
        </div>

        {/* 3 Prominent Landscape Projects Grid */}
        <div className="grid grid-cols-3 gap-4 my-auto items-stretch">
          {projects.map((proj, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-brand-warm/15 shadow-sm overflow-hidden flex flex-col justify-between"
            >
              {/* Image */}
              <div className="h-32 relative bg-brand-forest overflow-hidden shrink-0">
                <img 
                  src={proj.img} 
                  alt={proj.titleEn} 
                  className="w-full h-full object-cover filter brightness-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end text-white">
                  <span className="text-[10px] font-sans text-brand-gold font-bold">{proj.locationEn}</span>
                  <span className="text-[10.5px] font-arabic font-bold text-white" dir="rtl">{proj.locationAr}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <EditableText as="h3" className="font-sans text-brand-forest font-bold text-xs">{proj.titleEn}</EditableText>
                    <EditableText as="h3" className="font-arabic text-brand-forest font-bold text-xs" dir="rtl">{proj.titleAr}</EditableText>
                  </div>

                  <div className="space-y-1.5 border-t border-brand-warm/10 pt-2 mb-2">
                    <EditableText as="p" className="text-brand-dark/80 font-sans text-[9.5px] leading-snug text-justify">
                      {proj.scopeEn}
                    </EditableText>
                    <EditableText as="p" className="text-brand-dark/80 font-arabic text-[10.5px] leading-snug text-justify" dir="rtl">
                      {proj.scopeAr}
                    </EditableText>
                  </div>
                </div>

                {/* Role / Delivery Tag */}
                <div className="pt-2 border-t border-brand-warm/10 flex items-center justify-between text-[8px] uppercase tracking-wider text-brand-gold font-bold">
                  <span>{proj.roleEn}</span>
                  <span className="font-arabic text-[9px]" dir="rtl">{proj.roleAr}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
          <span>Rayat Najd Proven Field Execution Track Record</span>
          <span className="font-arabic" dir="rtl">جاهزية تشغيلية لتنفيذ المشاريع الكبرى</span>
        </div>
      </div>
    </Section>
  );
}
