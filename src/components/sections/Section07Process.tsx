import { Section, EditableText } from '../ui/Layouts';

export function Section07Process({ startPageNumber = 34 }: { startPageNumber?: number }) {
  const steps = [
    {
      num: "01",
      titleEn: "Survey & Analysis",
      titleAr: "الدراسة والتحليل الميداني",
      descEn: "Topographic assessment, soil chemical testing, and microclimate evaluations.",
      descAr: "تقييم تضاريس الموقع، واختبارات التربة ومصادر المياه والمناخ الدقيق."
    },
    {
      num: "02",
      titleEn: "Engineering Design",
      titleAr: "التصميم الهندسي والزراعي",
      descEn: "Hydraulic irrigation schematics, species selection, and master plans.",
      descAr: "تصميم شبكات الري الهيدروليكية واختيار الأصناف والمخططات التنفيذية."
    },
    {
      num: "03",
      titleEn: "Cultivation & Staging",
      titleAr: "الإنتاج والتجهيز الزراعي",
      descEn: "Seedling hardening, specimen preparation, and scheduled logistics.",
      descAr: "تقسية الشتلات، وتجهيز الأشجار الكبيرة، وجدولة خطط الإمداد."
    },
    {
      num: "04",
      titleEn: "Execution & Planting",
      titleAr: "التنفيذ والغرس الميداني",
      descEn: "Grading, irrigation network assembly, soil amendments, and planting.",
      descAr: "تسوية الأرض، وتمديد شبكات الري، وخلط التربة والغرس المعياري."
    },
    {
      num: "05",
      titleEn: "Handover & Care",
      titleAr: "التسليم والصيانة المستدامة",
      descEn: "Testing, commissioning, warranty monitoring, and preventive upkeep.",
      descAr: "الفحص والتشغيل التجريبي، وشهادات التسليم، وبرامج الصيانة الدورية."
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
            <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Execution Methodology</EditableText>
            <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Project Delivery Workflow</EditableText>
          </div>
          <div className="text-right" dir="rtl">
            <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">منهجية التنفيذ</EditableText>
            <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">مراحل وخطوات إنجاز المشاريع</EditableText>
          </div>
        </div>

        {/* 5-Step Horizontal Flow */}
        <div className="my-auto">
          {/* Connecting Track Line */}
          <div className="relative mb-6">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-brand-gold/40 -translate-y-1/2 z-0 hidden md:block"></div>
            
            <div className="grid grid-cols-5 gap-3 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  {/* Step Bubble */}
                  <div className="w-12 h-12 rounded-full bg-brand-forest text-brand-gold font-sans font-bold text-sm flex items-center justify-center border-4 border-white shadow-md mb-3">
                    {step.num}
                  </div>

                  {/* Step Card */}
                  <div className="card-surface card-surface-hover p-3.5 w-full flex flex-col justify-between h-[180px]">
                    <div>
                      <EditableText as="h3" className="card-title-en text-xs mb-0.5">{step.titleEn}</EditableText>
                      <EditableText as="h4" className="card-title-ar text-[11px] mb-2" dir="rtl">{step.titleAr}</EditableText>
                      
                      <div className="space-y-1 border-t border-brand-warm/10 pt-2">
                        <EditableText as="p" className="card-body-en text-[9px] leading-snug">
                          {step.descEn}
                        </EditableText>
                        <EditableText as="p" className="card-body-ar text-[9.5px] leading-snug" dir="rtl">
                          {step.descAr}
                        </EditableText>
                      </div>
                    </div>

                    <div className="mt-1 pt-1 border-t border-brand-warm/10 text-center card-tag-gold">
                      Stage {step.num}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
          <span>Rayat Najd Standardized Project Lifecycle</span>
          <span className="font-arabic" dir="rtl">إدارة مشاريع احترافية تضمن أعلى معايير الجودة</span>
        </div>
      </div>
    </Section>
  );
}
