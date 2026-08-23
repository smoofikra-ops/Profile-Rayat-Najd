import { Section, EditableText } from '../ui/Layouts';

export function Section08Quality({ startPageNumber = 35 }: { startPageNumber?: number }) {
  const pillars = [
    {
      num: "01",
      titleEn: "Quality Assurance (QA/QC)",
      titleAr: "ضمان ومراقبة الجودة",
      descEn: "Strict adherence to national horticultural specifications, rootball integrity standards, and certified soil composition.",
      descAr: "التزام صارم بالمواصفات القياسية المعتمدة للأشجار والتربة والمواد الزراعية وفحص سلامة المجموع الجذري قبل الزراعة."
    },
    {
      num: "02",
      titleEn: "Environmental Compliance",
      titleAr: "الامتثال والاستدامة البيئية",
      descEn: "Water-conserving irrigation technologies, native flora conservation, and active alignment with the Saudi Green Initiative.",
      descAr: "استخدام تقنيات الري المرشدة للمياه، وحماية الأنواع النباتية الفطرية، والتوافق الكامل مع معايير مبادرة السعودية الخضراء."
    },
    {
      num: "03",
      titleEn: "Health, Safety & Environment",
      titleAr: "الصحة والسلامة المهنية (HSE)",
      descEn: "Zero-compromise safety protocols for heavy tree transport, machinery operation, and on-site engineering crews.",
      descAr: "تطبيق أعلى معايير السلامة المهنية في مواقع العمل وأثناء تشغيل المعدات الثقيلة ونقل الأشجار الكبيرة."
    },
    {
      num: "04",
      titleEn: "Institutional Standards",
      titleAr: "معايير التسليم المؤسسي",
      descEn: "Full compliance with municipal guidelines, giga-project procurement requirements, and structured milestone handovers.",
      descAr: "المطابقة التامة لكراسات الشروط والمواصفات للجهات الحكومية والمشاريع الكبرى وجداول الاستلام المعتمدة."
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
            <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Standards & Compliance</EditableText>
            <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Quality, Safety & Environmental Governance</EditableText>
          </div>
          <div className="text-right" dir="rtl">
            <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">الجودة والامتثال</EditableText>
            <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">الحوكمة والجودة والسلامة المهنية</EditableText>
          </div>
        </div>

        {/* 4-Panel Balanced Landscape Spread */}
        <div className="grid grid-cols-4 gap-4 my-auto items-stretch">
          {pillars.map((p, i) => (
            <div 
              key={i} 
              className="bg-white p-4 rounded-2xl border border-brand-warm/15 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-brand-forest text-brand-gold font-sans text-xs font-bold flex items-center justify-center mb-2.5">
                  {p.num}
                </div>
                <EditableText as="h3" className="font-sans text-brand-forest font-bold text-xs mb-0.5">{p.titleEn}</EditableText>
                <EditableText as="h4" className="font-arabic text-brand-forest font-bold text-xs mb-2 text-right" dir="rtl">{p.titleAr}</EditableText>

                <div className="space-y-1.5 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="text-brand-dark/75 font-sans text-[10px] leading-snug">
                    {p.descEn}
                  </EditableText>
                  <EditableText as="p" className="text-brand-dark/75 font-arabic text-[10.5px] leading-snug text-right" dir="rtl">
                    {p.descAr}
                  </EditableText>
                </div>
              </div>

              <div className="mt-3 pt-1.5 border-t border-brand-warm/10 text-center text-[8px] uppercase tracking-widest text-brand-gold font-bold">
                Governance Pillar {p.num}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
          <span>Rayat Najd Corporate Governance & Compliance</span>
          <span className="font-arabic" dir="rtl">التزام تام بأعلى المعايير والمواصفات المعتمدة</span>
        </div>
      </div>
    </Section>
  );
}
