import { Section, EditableText } from '../ui/Layouts';

export function Section04Nurseries({ startPageNumber = 8 }: { startPageNumber?: number }) {
  return (
    <>
      {/* Page 1: Nursery Infrastructure Overview */}
      <Section 
        className="bg-brand-beige border-b border-brand-warm/10" 
        pageNumber={startPageNumber} 
        bgType="pattern"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-3">
            <div>
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Nursery Infrastructure</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Agricultural Capacity & Cultivation</EditableText>
            </div>
            <div className="text-right" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">البنية التحتية للمشاتل</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">الطاقة الإنتاجية والإنتاج النباتي</EditableText>
            </div>
          </div>

          {/* Core Content: Dominant Real Image + Strategic Metric Cards */}
          <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
            {/* Dominant Real Nursery Photography (7 Columns) */}
            <div className="col-span-7 rounded-2xl overflow-hidden shadow-sm border border-brand-warm/20 relative bg-brand-forest min-h-[220px]">
              <img 
                src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-12.webp" 
                alt="Rayat Najd Primary Production Nursery" 
                className="w-full h-full object-cover filter brightness-95 contrast-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                <div>
                  <span className="text-brand-gold text-[9px] uppercase tracking-widest block font-bold">Al-Ha'ir Primary Nursery — Riyadh</span>
                  <span className="text-xs font-medium">Over millions of acclimatized flora under specialized cultivation</span>
                </div>
                <span className="text-[11px] font-arabic font-bold text-brand-gold" dir="rtl">مشاتل الحائر المركزية — الرياض</span>
              </div>
            </div>

            {/* Strategic Pillars (5 Columns) */}
            <div className="col-span-5 flex flex-col justify-between gap-3">
              {/* Card 1: Production Scale */}
              <div className="card-surface card-surface-hover p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <EditableText as="h4" className="card-title-en text-xs">Vast Production Scale</EditableText>
                    <EditableText as="h4" className="card-title-ar text-xs" dir="rtl">طاقة إنتاجية كبرى</EditableText>
                  </div>
                  <div className="space-y-1 border-t border-brand-warm/10 pt-2">
                    <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                      High-volume annual output dedicated to mega-projects, municipal greening, and government master plans.
                    </EditableText>
                    <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                      إنتاج كمي سنوي مخصص لتلبية احتياجات المشاريع الكبرى والمبادرات الوطنية لزيادة الغطاء النباتي.
                    </EditableText>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-brand-warm/10 flex items-center justify-between card-tag-forest">
                  <span>High Volume</span>
                  <span className="font-arabic" dir="rtl">إنتاج كمي مستمر</span>
                </div>
              </div>

              {/* Card 2: Acclimatization & Quality */}
              <div className="card-surface card-surface-hover p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <EditableText as="h4" className="card-title-en text-xs">Acclimatization & Hardening</EditableText>
                    <EditableText as="h4" className="card-title-ar text-xs" dir="rtl">التقسية والتأهيل المناخي</EditableText>
                  </div>
                  <div className="space-y-1 border-t border-brand-warm/10 pt-2">
                    <EditableText as="p" className="card-body-en text-[10px] leading-snug">
                      Controlled open-field conditioning ensures maximum drought, heat, and salinity resistance.
                    </EditableText>
                    <EditableText as="p" className="card-body-ar text-[10.5px] leading-snug" dir="rtl">
                      عمليات تأهيل حقلي دقيقة لضمان أعلى درجات التكيف مع البيئة المحلية ومقاومة الجفاف والملوحة.
                    </EditableText>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-brand-warm/10 flex items-center justify-between card-tag-forest">
                  <span>Arid Resilience</span>
                  <span className="font-arabic" dir="rtl">تحمل بيئي فائق</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Agricultural Production Facilities</span>
            <span className="font-arabic" dir="rtl">مشاتل وطنية بمعايير زراعية عالمية</span>
          </div>
        </div>
      </Section>

      {/* Page 2: Supply Services, Staging & Logistics */}
      <Section 
        className="bg-brand-light border-b border-brand-warm/10" 
        pageNumber={startPageNumber + 1} 
        bgType="pattern"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-warm/15 pb-2 mb-3">
            <div>
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Supply Chain & Delivery</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Logistics & Nationwide Project Supply</EditableText>
            </div>
            <div className="text-right" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">سلاسل الإمداد والتوريد</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">الخدمات اللوجستية والتوريد للمشاريع</EditableText>
            </div>
          </div>

          {/* Layout: Operational Narrative (5 cols) + Real Logistics/Staging Image (7 cols) */}
          <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
            {/* Operational Text & Specifications (5 Columns) */}
            <div className="col-span-5 flex flex-col justify-between card-surface p-5">
              <div>
                <EditableText as="h3" className="card-title-en text-sm mb-1">Nationwide Distribution Capabilities</EditableText>
                <EditableText as="h4" className="card-title-ar text-sm mb-2.5 text-right" dir="rtl">أسطول متكامل للتوريد المباشر لكافة المواقع</EditableText>
                
                <div className="space-y-2 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10.5px] leading-relaxed text-justify">
                    A dedicated fleet of climate-managed transport vehicles and heavy crane carriers guarantees safe, phased delivery of fragile seedlings and mature specimen trees to remote project locations across Saudi Arabia.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[11.5px] leading-relaxed" dir="rtl">
                    أسطول مجهز بوسائل نقل مهيأة ورافعات متخصصة يضمن التوريد المرحلي الآمن للشتلات والأشجار المعمرة إلى مواقع المشاريع في كافة مناطق المملكة دون الإضرار بسلامة المجموع الجذري.
                  </EditableText>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-brand-warm/10 text-center">
                <div className="bg-brand-cream/60 border border-brand-warm/15 p-2 rounded-xl">
                  <span className="text-[10px] font-sans font-bold text-brand-forest block">Phased Staging</span>
                  <span className="text-[9px] font-arabic text-brand-dark/70 block" dir="rtl">توريد مرحلي منتظم</span>
                </div>
                <div className="bg-brand-cream/60 border border-brand-warm/15 p-2 rounded-xl">
                  <span className="text-[10px] font-sans font-bold text-brand-forest block">Rootball Integrity</span>
                  <span className="text-[9px] font-arabic text-brand-dark/70 block" dir="rtl">حماية المجموع الجذري</span>
                </div>
              </div>
            </div>

            {/* Real Logistics / Operational Photography (7 Columns) */}
            <div className="col-span-7 rounded-2xl overflow-hidden shadow-sm border border-brand-warm/20 relative bg-brand-forest min-h-[220px]">
              <img 
                src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/section-backgrounds/logistics.jpeg" 
                alt="Rayat Najd Logistics Services & Heavy Transport Fleet" 
                className="w-full h-full object-cover object-center filter brightness-100 contrast-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                <div>
                  <span className="text-brand-gold text-[9px] uppercase tracking-widest block font-bold">Staging & Transport Fleet</span>
                  <span className="text-xs font-medium">Scheduled deliveries aligned with project milestones</span>
                </div>
                <span className="text-[11px] font-arabic font-bold text-brand-gold" dir="rtl">جاهزية لوجستية مستمرة للمشاريع الكبرى</span>
              </div>
            </div>
          </div>

          {/* Sub Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Supply Chain & Staging</span>
            <span className="font-arabic" dir="rtl">سلسلة إمداد موثوقة تلبي جداول الإنجاز</span>
          </div>
        </div>
      </Section>
    </>
  );
}
