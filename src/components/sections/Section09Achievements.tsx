import { Section, EditableText } from '../ui/Layouts';

export function Section09Achievements({ startPageNumber = 36 }: { startPageNumber?: number }) {
  const achievements = [
    {
      num: "01",
      titleEn: "Large-Scale Agricultural Production",
      titleAr: "الإنتاج الزراعي الكمي للمشاتل",
      descEn: "Establishment of high-capacity production facilities in Riyadh providing continuous supply for mega-developments.",
      descAr: "تأسيس مشاتل إنتاجية كبرى بالرياض وتوفير إمداد زراعي مستمر لتلبية متطلبات المشاريع الحضرية والتنموية."
    },
    {
      num: "02",
      titleEn: "Arid Habitat Greening Projects",
      titleAr: "مشاريع التشجير وإعادة التأهيل البيئي",
      descEn: "Successful execution of environmental afforestation contracts supporting national vegetative cover enhancement.",
      descAr: "تنفيذ عقود تشجير ومبادرات بيئية نوعية ساهمت في تنمية الغطاء النباتي واستعادة النظم البيئية الطبيعية."
    },
    {
      num: "03",
      titleEn: "Mature Tree Relocation Capability",
      titleAr: "ريادة نقل وزراعة الأشجار المعمرة",
      descEn: "Pioneering specialized heavy transport and transplantation methods with proven high survival rates.",
      descAr: "تطوير قدرات هندسية متقدمة لنقل وزراعة الأشجار الكبيرة مع تحقيق أعلى نسب استقرار واستدامة للأشجار المنقولة."
    },
    {
      num: "04",
      titleEn: "Institutional Procurement Partnership",
      titleAr: "شراكات التوريد للمشاريع الكبرى",
      descEn: "Trusted supplier and execution partner for government authorities, municipalities, and major contracting entities.",
      descAr: "شريك توريد وتنفيذ موثوق لدى الجهات الحكومية والأمانات وكبرى شركات التطوير العقاري والمقاولات."
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
            <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Track Record</EditableText>
            <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Strategic Milestones & Capability Proof</EditableText>
          </div>
          <div className="text-right" dir="rtl">
            <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">سجل الإنجاز والريادة</EditableText>
            <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">محطات التميز والريادة الميدانية</EditableText>
          </div>
        </div>

        {/* 4 Balanced Achievement Cards */}
        <div className="grid grid-cols-4 gap-4 my-auto items-stretch">
          {achievements.map((item, i) => (
            <div 
              key={i} 
              className="card-surface card-surface-hover p-4 flex flex-col justify-between"
            >
              <div>
                <div className="card-number-badge mb-2.5">
                  {item.num}
                </div>
                <EditableText as="h3" className="card-title-en text-xs mb-0.5">{item.titleEn}</EditableText>
                <EditableText as="h4" className="card-title-ar text-xs mb-2" dir="rtl">{item.titleAr}</EditableText>

                <div className="space-y-1.5 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    {item.descEn}
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    {item.descAr}
                  </EditableText>
                </div>
              </div>

              <div className="mt-3 pt-1.5 border-t border-brand-warm/10 text-center card-tag-gold">
                Milestone Verified
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
          <span>Rayat Najd Strategic Milestones & Proof of Delivery</span>
          <span className="font-arabic" dir="rtl">خبرة ميدانية موثقة وشراكات استراتيجية ناجحة</span>
        </div>
      </div>
    </Section>
  );
}
