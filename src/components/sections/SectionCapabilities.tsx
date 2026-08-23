import React from 'react';
import { Section, EditableText } from '../ui/Layouts';

interface CapabilityItem {
  id: string;
  en: string;
  ar: string;
  bgImage: string;
  secondaryImage?: string;
  descEn: string;
  descAr: string;
  keyCapabilitiesEn: string[];
  keyCapabilitiesAr: string[];
}

export function SectionCapabilities({ startPageNumber = 10 }: { startPageNumber?: number }) {
  const capabilities: CapabilityItem[] = [
    {
      id: "01",
      en: "Landscape & Gardens",
      ar: "تنسيق المواقع والتشجير والحدائق",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-02.webp",
      descEn: "Comprehensive landscape architecture, civic park greening, and commercial master-planned garden execution tailored to the environmental conditions of the Kingdom.",
      descAr: "تصميم وتنفيذ متكامل لمشاريع تنسيق المواقع والمساحات المفتوحة والحدائق الكبرى، بما يتواءم مع المعايير البيئية والمناخية في المملكة.",
      keyCapabilitiesEn: [
        "Master-planned landscape engineering",
        "Public realm and municipal green spaces",
        "Commercial and institutional grounds"
      ],
      keyCapabilitiesAr: [
        "هندسة وتخطيط المساحات الخضراء الكبرى",
        "تخضير وتطوير المرافق العامة والبلدية",
        "تنفيذ حدائق المشاريع التجارية والمؤسسية"
      ]
    },
    {
      id: "02",
      en: "Plant & Tree Supply",
      ar: "توريد النباتات والأشجار",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-05.webp",
      descEn: "Reliable bulk procurement and supply of acclimatized native and ornamental trees, palms, shrubs, and groundcovers meeting rigorous project specifications.",
      descAr: "توريد موثوق وعالي الكفاءة للنباتات والأشجار المحلية والمستأنسة، والشجيرات، ومغطيات التربة وفق أعلى المواصفات الفنية المعتمدة للمشاريع.",
      keyCapabilitiesEn: [
        "Acclimatized drought-tolerant flora",
        "High-volume project procurement and staging",
        "Quality inspection and horticultural grading"
      ],
      keyCapabilitiesAr: [
        "نباتات مستأنسة ومقاومة للظروف المناخية",
        "توريد كميات ضخمة مع جاهزية التوريد المرحلي",
        "فحص الجودة والمطابقة للمواصفات الزراعية"
      ]
    },
    {
      id: "03",
      en: "Nursery & Plant Production",
      ar: "قدرات المشاتل والإنتاج النباتي",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-06.webp",
      secondaryImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-04.webp",
      descEn: "Modern nursery infrastructure and propagation facilities dedicated to mass production, seedling hardening, and plant conditioning for national greening demands.",
      descAr: "بنية تحتية متطورة للمشاتل ومرافق إكثار متقدمة مخصصة للإنتاج الكمي ورعاية الشتلات وتأهيل النباتات لتلبية متطلبات برامج التشجير الوطنية.",
      keyCapabilitiesEn: [
        "Extensive propagation and hardening zones",
        "Standardized soil and substrate preparation",
        "Controlled environment cultivation and monitoring"
      ],
      keyCapabilitiesAr: [
        "مساحات واسعة للإكثار والتقسية الميدانية",
        "تجهيز وتخصيب التربة والخلطات الزراعية المعيارية",
        "بيئات زراعية خاضعة للرقابة والتحكم البيئي"
      ]
    },
    {
      id: "04",
      en: "Large-Scale Project Supply",
      ar: "التوريد للمشاريع الكبرى",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-08.webp",
      descEn: "Specialized supply chain and logistics capabilities engineered to support giga-projects, infrastructure developments, and government afforestation initiatives.",
      descAr: "سلاسل إمداد وخدمات لوجستية متخصصة لدعم المشاريع العملاقة ومشاريع البنية التحتية والمبادرات الحكومية لزيادة الغطاء النباتي.",
      keyCapabilitiesEn: [
        "Phased delivery matching construction milestones",
        "Dedicated transport fleet and handling logistics",
        "Direct-to-site coordination with contractors"
      ],
      keyCapabilitiesAr: [
        "جداول توريد مرحلية متوافقة مع مراحل الإنجاز",
        "أسطول نقل متخصص ومجهز لضمان سلامة الشتلات",
        "تنسيق مباشر مع المقاولين والاستشاريين في الموقع"
      ]
    },
    {
      id: "05",
      en: "Mature Tree Relocation",
      ar: "نقل وزراعة الأشجار الكبيرة والمعمرة",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/05-services/mature-tree-relocation/rayat-najd-mature-tree-relocation-01.webp",
      descEn: "Heavy-spec machinery and arboricultural expertise for the safe extraction, rootball protection, heavy transport, and relocation of mature specimen trees.",
      descAr: "معدات متخصصة وكوادر فنية متقدمة لعمليات استخراج وتجهيز ونقل وزراعة الأشجار الكبيرة والمعمرة مع حماية المجموع الجذري.",
      keyCapabilitiesEn: [
        "Hydraulic root-balling and crane operations",
        "Arboricultural health assessment and pre-move care",
        "Post-transplant stabilization and vitality monitoring"
      ],
      keyCapabilitiesAr: [
        "تجهيز المجموع الجذري والرفع الهيدروليكي المتخصص",
        "تقييم صحة الأشجار والتأهيل الزراعي قبل النقل",
        "تثبيت الأشجار والمتابعة الدقيقة لضمان نجاح الزراعة"
      ]
    },
    {
      id: "06",
      en: "Urban Landscape Development",
      ar: "تطوير المشهد الحضري والمحاور",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-09.webp",
      descEn: "Transforming urban corridors, highway medians, streetscapes, and civic plazas into sustainable green corridors that elevate quality of life.",
      descAr: "تحسين وتطوير المشهد الحضري عبر تشجير الطرق والميادين والمحاور الحضرية لتعزيز جودة الحياة والحد من الانبعاثات الكربونية.",
      keyCapabilitiesEn: [
        "Civic streetscape and median greening",
        "Pedestrian walkway shaded corridors",
        "Urban heat island mitigation and air quality"
      ],
      keyCapabilitiesAr: [
        "تشجير الشوارع والمحاور الحضرية والجزر الوسطية",
        "إنشاء ممرات المشاة المظللة والواحات الحضرية",
        "تحسين المناخ المحلي وخفض درجات الحرارة الحضرية"
      ]
    },
    {
      id: "07",
      en: "Irrigation Solutions",
      ar: "حلول وأنظمة الري المتطورة",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-10.webp",
      secondaryImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-11.webp",
      descEn: "Deployment of water-efficient irrigation networks, automated central control systems, and water distribution infrastructure for large-scale agricultural and landscaping projects.",
      descAr: "تصميم وتنفيذ شبكات الري الموفرة للمياه وأنظمة التحكم الآلي ومحطات الضخ المتقدمة للمشاريع الزراعية وتنسيق المواقع واسعة النطاق.",
      keyCapabilitiesEn: [
        "Water-efficient drip and low-flow irrigation networks",
        "Automated central control and telemetry systems",
        "Filtration, pumping, and hydraulic distribution"
      ],
      keyCapabilitiesAr: [
        "شبكات ري بالتنقيط ذات كفاءة مائية عالية",
        "أنظمة تحكم مركزي ومحابس أوتوماتيكية",
        "محطات ضخ وفلترة متوافقة مع طبيعة المشروع"
      ]
    },
    {
      id: "08",
      en: "Landscape Maintenance",
      ar: "تشغيل وصيانة المسطحات الخضراء",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-10.webp",
      descEn: "Comprehensive preventive maintenance programs covering agronomic health, tree pruning, integrated pest management, and irrigation maintenance for asset longevity.",
      descAr: "برامج صيانة وقائية وتشغيل شامل لضمان استدامة الغطاء النباتي، وتقليم الأشجار، والإدارة المتكاملة للآفات، وصيانة أنظمة الري.",
      keyCapabilitiesEn: [
        "Horticultural inspection and proactive care schedules",
        "Arboricultural pruning, shaping, and palm maintenance",
        "Soil enrichment, aeration, and nutritional management"
      ],
      keyCapabilitiesAr: [
        "برامج فحص زراعي دوري وجداول صيانة منتظمة",
        "تقليم وتهذيب الأشجار والنخيل وفق الأصول الفنية",
        "تحسين التربة والتسميد وبرامج التغذية النباتية"
      ]
    },
    {
      id: "09",
      en: "Greening & Sustainability",
      ar: "مبادرات الاستدامة والتشجير البيئي",
      bgImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-12.webp",
      descEn: "Strategic participation in desert rehabilitation, anti-desertification programs, and national afforestation campaigns supporting Saudi Vision 2030.",
      descAr: "مساهمة استراتيجية في مشاريع إعادة تأهيل الغطاء النباتي ومكافحة التصحر، ودعم مبادرات التشجير الوطنية ومستهدفات رؤية المملكة 2030.",
      keyCapabilitiesEn: [
        "Native desert ecosystem rehabilitation",
        "Afforestation planning for arid climates",
        "Long-term environmental biodiversity support"
      ],
      keyCapabilitiesAr: [
        "إعادة تأهيل النظم البيئية والمراعي الطبيعية",
        "تخطيط وتنفيذ برامج التشجير في البيئات الجافة",
        "تعزيز التنوع الحيوي النباتي والحفاظ على البيئة"
      ]
    }
  ];

  return (
    <>
      {capabilities.map((cap, index) => {
        const pageNum = startPageNumber + index;
        const templateType = index % 4; // 0 -> Template A, 1 -> Template B, 2 -> Template C, 3 -> Template D

        if (templateType === 0) {
          // TEMPLATE A: 60% Hero Image / 40% Structured Content
          return (
            <Section key={cap.id} className="bg-brand-light border-b border-brand-warm/10" pageNumber={pageNum} bgType="pattern">
              <div className="flex flex-col h-full justify-between py-2">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-brand-warm/15 pb-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-forest text-brand-gold font-sans text-xs font-bold flex items-center justify-center">
                      {cap.id}
                    </span>
                    <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0">{cap.en}</EditableText>
                  </div>
                  <div className="flex items-center gap-3" dir="rtl">
                    <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0">{cap.ar}</EditableText>
                  </div>
                </div>

                {/* Main Split: 60% Image / 40% Text */}
                <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
                  {/* Real Dominant Photography (7 cols = ~58%) */}
                  <div className="col-span-7 rounded-2xl overflow-hidden shadow-sm border border-brand-warm/20 relative bg-brand-forest min-h-[220px]">
                    <img 
                      src={cap.bgImage} 
                      alt={cap.en} 
                      className="w-full h-full object-cover filter brightness-95 contrast-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-brand-gold font-bold">Rayat Najd Operational Evidence</span>
                      <span className="text-[11px] font-arabic font-bold" dir="rtl">شواهد التنفيذ والجاهزية</span>
                    </div>
                  </div>

                  {/* Content Column (5 cols = ~42%) */}
                  <div className="col-span-5 flex flex-col justify-between bg-white p-5 rounded-2xl border border-brand-warm/15 shadow-sm">
                    <div>
                      <div className="space-y-2 mb-3">
                        <EditableText as="p" className="text-brand-dark/85 font-sans text-[11px] leading-relaxed text-justify">
                          {cap.descEn}
                        </EditableText>
                        <div className="w-full h-px bg-brand-warm/10"></div>
                        <EditableText as="p" className="text-brand-dark/85 font-arabic text-[12px] leading-relaxed text-justify" dir="rtl">
                          {cap.descAr}
                        </EditableText>
                      </div>

                      <div className="border-t border-brand-warm/15 pt-2 space-y-1.5">
                        <span className="text-[9px] uppercase tracking-wider text-brand-forest font-bold block mb-1">Key Deliverables</span>
                        {cap.keyCapabilitiesEn.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[10px] text-brand-dark/80 font-sans">
                            <span className="text-brand-gold text-[8px]">■</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-brand-warm/10 text-right font-arabic" dir="rtl">
                      <div className="space-y-1">
                        {cap.keyCapabilitiesAr.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-start gap-1.5 text-[10.5px] text-brand-dark/80">
                            <span className="text-brand-gold text-[8px]">■</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
                  <span>Capability Track {cap.id} of 09</span>
                  <span className="font-arabic" dir="rtl">القدرات المؤسسية والتنفيذية — رايات نجد</span>
                </div>
              </div>
            </Section>
          );
        } else if (templateType === 1) {
          // TEMPLATE B: Full-Bleed Image with Localized Executive Side Panel
          return (
            <Section key={cap.id} className="bg-brand-forest !p-0" pageNumber={pageNum} noSafeArea={true}>
              <div className="relative w-full h-full flex items-stretch overflow-hidden">
                {/* Background Image with localized left-side darkness */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cap.bgImage} 
                    alt={cap.en} 
                    className="w-full h-full object-cover filter brightness-95 contrast-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/95 via-brand-forest/75 to-transparent"></div>
                </div>

                {/* Localized Left Editorial Panel */}
                <div className="relative z-10 w-[55%] h-full flex flex-col justify-between px-10 py-[14mm] pb-[20mm]">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3 border-b border-brand-gold/30 pb-2">
                      <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-dark font-sans text-xs font-bold flex items-center justify-center">
                        {cap.id}
                      </span>
                      <div>
                        <EditableText as="h2" className="text-white font-sans text-xl font-bold leading-tight drop-shadow">{cap.en}</EditableText>
                        <EditableText as="h2" className="text-brand-gold font-arabic text-xl font-bold leading-tight drop-shadow" dir="rtl">{cap.ar}</EditableText>
                      </div>
                    </div>

                    {/* Bilingual Descriptions */}
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/15 space-y-2 mb-3">
                      <EditableText as="p" className="text-brand-beige font-sans text-[11px] leading-relaxed text-justify">
                        {cap.descEn}
                      </EditableText>
                      <div className="w-full h-px bg-white/10"></div>
                      <EditableText as="p" className="text-brand-beige font-arabic text-[12px] leading-relaxed text-justify" dir="rtl">
                        {cap.descAr}
                      </EditableText>
                    </div>

                    {/* Bilingual Deliverables Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/10 space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold block mb-1">Specifications</span>
                        {cap.keyCapabilitiesEn.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[10px] text-white/90">
                            <span className="text-brand-gold text-[7px]">■</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/10 space-y-1 text-right" dir="rtl">
                        <span className="text-[10px] font-arabic font-bold text-brand-gold block mb-1">المعايير الفنية</span>
                        {cap.keyCapabilitiesAr.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-start gap-1.5 text-[10.5px] text-white/90">
                            <span className="text-brand-gold text-[7px]">■</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sub Info */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[9px] text-white/60 uppercase tracking-widest font-sans">
                    <span>Rayat Najd Major Projects Delivery</span>
                    <span className="font-arabic" dir="rtl">حلول معتمدة للمشاريع العملاقة</span>
                  </div>
                </div>
              </div>
            </Section>
          );
        } else if (templateType === 2) {
          // TEMPLATE C: Two-Image Editorial Mosaic + Capability Statement
          return (
            <Section key={cap.id} className="bg-brand-beige border-b border-brand-warm/10" pageNumber={pageNum} bgType="pattern">
              <div className="flex flex-col h-full justify-between py-2">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-forest text-brand-gold font-sans text-xs font-bold flex items-center justify-center">
                      {cap.id}
                    </span>
                    <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0">{cap.en}</EditableText>
                  </div>
                  <div className="flex items-center gap-3" dir="rtl">
                    <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0">{cap.ar}</EditableText>
                  </div>
                </div>

                {/* Two-Image Mosaic + Central Content */}
                <div className="grid grid-cols-12 gap-4 my-auto items-stretch">
                  {/* Image 1 (4 cols) */}
                  <div className="col-span-4 rounded-2xl overflow-hidden shadow-sm border border-brand-warm/20 relative bg-brand-forest min-h-[220px]">
                    <img 
                      src={cap.bgImage} 
                      alt={cap.en} 
                      className="w-full h-full object-cover filter brightness-95 contrast-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3 text-white">
                      <span className="text-[10px] font-sans font-bold text-brand-gold">Cultivation & Staging</span>
                    </div>
                  </div>

                  {/* Center Capability Statement (4 cols) */}
                  <div className="col-span-4 flex flex-col justify-between bg-white p-4 rounded-2xl border border-brand-warm/15 shadow-sm">
                    <div className="space-y-2">
                      <EditableText as="p" className="text-brand-dark/85 font-sans text-[10.5px] leading-snug text-justify">
                        {cap.descEn}
                      </EditableText>
                      <div className="w-full h-px bg-brand-warm/10"></div>
                      <EditableText as="p" className="text-brand-dark/85 font-arabic text-[11.5px] leading-snug text-justify" dir="rtl">
                        {cap.descAr}
                      </EditableText>
                    </div>

                    <div className="border-t border-brand-warm/10 pt-2 text-center">
                      <span className="text-[8.5px] uppercase tracking-widest text-brand-forest font-bold block">Certified Execution Standards</span>
                      <span className="text-[9.5px] font-arabic text-brand-gold font-bold block" dir="rtl">معايير هندسية معتمدة</span>
                    </div>
                  </div>

                  {/* Image 2 (4 cols) */}
                  <div className="col-span-4 rounded-2xl overflow-hidden shadow-sm border border-brand-warm/20 relative bg-brand-forest min-h-[220px]">
                    <img 
                      src={cap.secondaryImage || cap.bgImage} 
                      alt={cap.en} 
                      className="w-full h-full object-cover filter brightness-95 contrast-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3 text-white text-right" dir="rtl">
                      <span className="text-[11px] font-arabic font-bold text-brand-gold">الجاهزية الميدانية</span>
                    </div>
                  </div>
                </div>

                {/* Sub Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
                  <span>Integrated Infrastructure & Horticultural Systems</span>
                  <span className="font-arabic" dir="rtl">منظومة زراعية وهندسية متكاملة</span>
                </div>
              </div>
            </Section>
          );
        } else {
          // TEMPLATE D: Wide Image Strip + Bilingual Capability Blocks
          return (
            <Section key={cap.id} className="bg-brand-light border-b border-brand-warm/10" pageNumber={pageNum} bgType="pattern">
              <div className="flex flex-col h-full justify-between py-2">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-brand-warm/15 pb-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-forest text-brand-gold font-sans text-xs font-bold flex items-center justify-center">
                      {cap.id}
                    </span>
                    <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0">{cap.en}</EditableText>
                  </div>
                  <div className="flex items-center gap-3" dir="rtl">
                    <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0">{cap.ar}</EditableText>
                  </div>
                </div>

                {/* Wide Image Strip (Height ~110px) */}
                <div className="w-full h-28 rounded-2xl overflow-hidden shadow-sm border border-brand-warm/20 relative bg-brand-forest shrink-0">
                  <img 
                    src={cap.bgImage} 
                    alt={cap.en} 
                    className="w-full h-full object-cover filter brightness-95 contrast-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
                  <div className="absolute bottom-2 left-4 right-4 flex justify-between items-end text-white">
                    <span className="text-[10px] font-sans font-bold text-brand-gold uppercase tracking-wider">{cap.en} — Operational Delivery</span>
                    <span className="text-[11px] font-arabic font-bold text-brand-gold" dir="rtl">{cap.ar} — تنفيذ متكامل</span>
                  </div>
                </div>

                {/* Bilingual Capability Blocks */}
                <div className="grid grid-cols-2 gap-5 my-auto items-stretch">
                  {/* English Block */}
                  <div className="bg-white p-4 rounded-2xl border border-brand-warm/15 shadow-sm flex flex-col justify-between">
                    <div>
                      <EditableText as="p" className="text-brand-dark/85 font-sans text-[11px] leading-relaxed mb-3 text-justify">
                        {cap.descEn}
                      </EditableText>
                      <div className="space-y-1 border-t border-brand-warm/10 pt-2">
                        {cap.keyCapabilitiesEn.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[10px] text-brand-dark/80 font-sans">
                            <span className="text-brand-gold text-[8px]">■</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arabic Block */}
                  <div className="bg-white p-4 rounded-2xl border border-brand-warm/15 shadow-sm flex flex-col justify-between text-right" dir="rtl">
                    <div>
                      <EditableText as="p" className="text-brand-dark/85 font-arabic text-[12px] leading-relaxed mb-3 text-justify">
                        {cap.descAr}
                      </EditableText>
                      <div className="space-y-1 border-t border-brand-warm/10 pt-2">
                        {cap.keyCapabilitiesAr.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-start gap-1.5 text-[10.5px] text-brand-dark/80">
                            <span className="text-brand-gold text-[8px]">■</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
                  <span>Rayat Najd National Greening Solutions</span>
                  <span className="font-arabic" dir="rtl">حلول تشجير متقدمة للمشاريع الوطنية</span>
                </div>
              </div>
            </Section>
          );
        }
      })}
    </>
  );
}
