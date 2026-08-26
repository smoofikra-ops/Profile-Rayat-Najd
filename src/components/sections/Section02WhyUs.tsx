import { Section, BilingualContainer, EnglishContent, ArabicContent, EditableText } from '../ui/Layouts';

export function Section02WhyUs({ startPageNumber = 4 }: { startPageNumber?: number }) {
  return (
    <>
      {/* Page 1: Strategic Differentiators */}
      <Section className="bg-brand-beige border-b border-brand-warm/10" pageNumber={startPageNumber} bgType="pattern">
        <div className="flex flex-col h-full justify-between py-2">
          {/* Top 25%: Strong Strategic Positioning Statement */}
          <div className="flex flex-col items-center justify-center text-center border-b border-brand-gold/30 pb-3 mb-2">
            <EditableText as="h2" className="text-brand-forest font-arabic text-2xl font-bold mb-0.5 leading-snug" dir="rtl">
              لماذا رايات نجد — شريك التميز للمشاريع الكبرى
            </EditableText>
            <EditableText as="h3" className="text-brand-gold font-sans text-xs tracking-[0.18em] uppercase font-bold">
              Why Rayat Najd — Your Strategic Partner For Mega Projects
            </EditableText>
            <div className="w-24 h-0.5 bg-brand-gold/50 my-2"></div>
            <div className="grid grid-cols-2 gap-8 w-full max-w-4xl text-[11.5px] text-brand-dark/80">
              <EditableText as="p" className="text-justify font-sans leading-relaxed">
                Combining immense in-house nursery assets, precision engineering, and specialized arid-zone expertise to deliver sustainable ecological landmarks across the Kingdom.
              </EditableText>
              <EditableText as="p" className="text-justify font-arabic leading-relaxed" dir="rtl">
                نجمع بين البنية التحتية الزراعية الضخمة لمشاتلنا، والخبرة الهندسية الميدانية، والمعرفة العميقة ببيئة المملكة لتقديم مشاريع لاندسكيب نوعية ومستدامة.
              </EditableText>
            </div>
          </div>

          {/* Bottom 65%: Four Equal Differentiator Cards */}
          <div className="grid grid-cols-4 gap-4 my-auto items-stretch">
            {/* Card 1: High-Volume Nursery Capacity */}
            <div className="card-surface card-surface-hover p-4 flex flex-col justify-between">
              <div>
                <div className="card-number-badge mb-2.5">
                  01
                </div>
                <EditableText as="h4" className="card-title-en text-xs mb-1">High-Volume Nursery Capacity</EditableText>
                <EditableText as="h5" className="card-title-ar text-xs mb-2" dir="rtl">طاقة إنتاجية ضخمة للمشاتل</EditableText>
                <div className="space-y-1.5 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    Vast propagation facilities supplying millions of acclimatized trees, shrubs, and native flora on demand.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    مشاتل متطورة توفر طاقة إنتاجية هائلة للأشجار والشجيرات والنباتات المتوافقة مع احتياجات المشاريع الكبرى.
                  </EditableText>
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-brand-warm/10 text-center card-tag-gold">
                Capacity & Supply
              </div>
            </div>

            {/* Card 2: Full Execution Capabilities */}
            <div className="card-surface card-surface-hover p-4 flex flex-col justify-between">
              <div>
                <div className="card-number-badge mb-2.5">
                  02
                </div>
                <EditableText as="h4" className="card-title-en text-xs mb-1">Full Execution Capabilities</EditableText>
                <EditableText as="h5" className="card-title-ar text-xs mb-2" dir="rtl">قدرات تنفيذ متكاملة للمشاريع</EditableText>
                <div className="space-y-1.5 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    End-to-end site engineering, hydraulic irrigation design, planting, and heavy civil landscape works.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    جاهزية هندسية وميدانية شاملة تشمل تجهيز المواقع، وشبكات الري، والغرس، والأعمال الإنشائية التكميلية.
                  </EditableText>
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-brand-warm/10 text-center card-tag-gold">
                Engineering & Delivery
              </div>
            </div>

            {/* Card 3: Climate-Adapted Plant Varieties */}
            <div className="card-surface card-surface-hover p-4 flex flex-col justify-between">
              <div>
                <div className="card-number-badge mb-2.5">
                  03
                </div>
                <EditableText as="h4" className="card-title-en text-xs mb-1">Climate-Adapted Varieties</EditableText>
                <EditableText as="h5" className="card-title-ar text-xs mb-2" dir="rtl">أصناف نباتية متكيفة مناخياً</EditableText>
                <div className="space-y-1.5 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    Rigorous acclimatization ensuring superior drought tolerance, low salinity sensitivity, and long-term vitality.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    تأهيل زراعي دقيق لضمان تحمل الجفاف والملوحة وحرارة الصيف، وتحقيق أعلى نسب استدامة نباتية.
                  </EditableText>
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-brand-warm/10 text-center card-tag-gold">
                Resilience & Survival
              </div>
            </div>

            {/* Card 4: Institutional Reliability & Compliance */}
            <div className="card-surface card-surface-hover p-4 flex flex-col justify-between">
              <div>
                <div className="card-number-badge mb-2.5">
                  04
                </div>
                <EditableText as="h4" className="card-title-en text-xs mb-1">Institutional Reliability</EditableText>
                <EditableText as="h5" className="card-title-ar text-xs mb-2" dir="rtl">موثوقية مؤسسية ومطابقة</EditableText>
                <div className="space-y-1.5 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    Strict adherence to government specifications, milestone phasing, and institutional procurement standards.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    التزام تام بالمواصفات الفنية المعتمدة للمشاريع الحكومية وجداول التسليم المرحلية ومتطلبات الاستشاريين.
                  </EditableText>
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-brand-warm/10 text-center card-tag-gold">
                Governance & Standards
              </div>
            </div>
          </div>

          {/* Sub Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Strategic Value Proposition</span>
            <span className="font-arabic" dir="rtl">القيمة المضافة والشراكة الاستراتيجية</span>
          </div>
        </div>
      </Section>

      {/* Page 2: Four Capability Evidence Blocks */}
      <Section 
        className="bg-brand-light border-b border-brand-warm/10" 
        pageNumber={startPageNumber + 1} 
        bgType="pattern"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-warm/15 pb-2 mb-3">
            <div>
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Operational Evidence</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Core Institutional Capabilities</EditableText>
            </div>
            <div className="text-right" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">شواهد التميز الميداني</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">القدرات التشغيلية والميدانية</EditableText>
            </div>
          </div>

          {/* 4 Capability/Evidence Blocks */}
          <div className="grid grid-cols-4 gap-4 my-auto items-stretch">
            
            {/* Block 1: Infrastructure Greening */}
            <div className="card-surface card-surface-hover overflow-hidden flex flex-col justify-between">
              <div className="h-28 relative bg-brand-forest">
                <img 
                  src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-03.webp" 
                  alt="Infrastructure Greening" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-white">
                  <span className="card-title-en text-[11px] text-white">Urban Greening</span>
                  <span className="card-title-ar text-[12px] text-brand-gold" dir="rtl">التشجير الحضري</span>
                </div>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    Specialized in highway corridors, civic plazas, and municipal parks.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    تنفيذ تشجير الطرق السريعة والميادين والمرافق البلدية والحدائق الكبرى.
                  </EditableText>
                </div>
                <div className="mt-2 pt-1 border-t border-brand-warm/10 card-tag-gold">
                  Field Proven
                </div>
              </div>
            </div>

            {/* Block 2: Advanced Irrigation */}
            <div className="card-surface card-surface-hover overflow-hidden flex flex-col justify-between">
              <div className="h-28 relative bg-brand-forest">
                <img 
                  src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-10.webp" 
                  alt="Irrigation Systems" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-white">
                  <span className="card-title-en text-[11px] text-white">Irrigation Systems</span>
                  <span className="card-title-ar text-[12px] text-brand-gold" dir="rtl">شبكات الري الذكية</span>
                </div>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    Automated telemetry and water-saving subsurface irrigation networks.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    تصميم وتنفيذ شبكات ري أوتوماتيكية موفرة للمياه ومحطات تحكم مركزي.
                  </EditableText>
                </div>
                <div className="mt-2 pt-1 border-t border-brand-warm/10 card-tag-gold">
                  Water Efficient
                </div>
              </div>
            </div>

            {/* Block 3: Specimen Tree Relocation */}
            <div className="card-surface card-surface-hover overflow-hidden flex flex-col justify-between">
              <div className="h-28 relative bg-brand-forest">
                <img 
                  src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/05-services/mature-tree-relocation/rayat-najd-mature-tree-relocation-01.webp" 
                  alt="Specimen Tree Relocation" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-white">
                  <span className="card-title-en text-[11px] text-white">Tree Relocation</span>
                  <span className="card-title-ar text-[12px] text-brand-gold" dir="rtl">نقل الأشجار الكبيرة</span>
                </div>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    Heavy-lift rootball protection and safe transplanting of historic trees.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    معدات ثقيلة وخبرة زراعية متخصصة لنقل وزراعة الأشجار المعمرة بنجاح.
                  </EditableText>
                </div>
                <div className="mt-2 pt-1 border-t border-brand-warm/10 card-tag-gold">
                  Heavy Machinery
                </div>
              </div>
            </div>

            {/* Block 4: Operations & Maintenance */}
            <div className="card-surface card-surface-hover overflow-hidden flex flex-col justify-between">
              <div className="h-28 relative bg-brand-forest">
                <img 
                  src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-10.webp" 
                  alt="Operations and Maintenance" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-white">
                  <span className="card-title-en text-[11px] text-white">Asset Maintenance</span>
                  <span className="card-title-ar text-[12px] text-brand-gold" dir="rtl">التشغيل والصيانة</span>
                </div>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                    Comprehensive preventive maintenance, arboriculture care, and pest management.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                    برامج صيانة وقائية وعلاجية دورية لضمان نمو وازدهار الأصول الزراعية.
                  </EditableText>
                </div>
                <div className="mt-2 pt-1 border-t border-brand-warm/10 card-tag-gold">
                  Long-Term Value
                </div>
              </div>
            </div>

          </div>

          {/* Sub Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Integrated Delivery Capacity</span>
            <span className="font-arabic" dir="rtl">جاهزية تنفيذية لكافة متطلبات المشاريع</span>
          </div>
        </div>
      </Section>
    </>
  );
}
