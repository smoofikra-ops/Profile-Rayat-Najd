import { Section, EditableText } from '../ui/Layouts';

interface Section00IndexProps {
  pageNumber: number;
  pages: {
    about: string;
    whyUs: string;
    services: string;
    nurseries: string;
    capabilities: string;
    productsCover: string;
    palmTrees: string;
    shadeTrees: string;
    nativeTrees: string;
    ornamentalTrees: string;
    shrubs: string;
    groundCovers: string;
    seasonal: string;
    desert: string;
    climbing: string;
    projects: string;
    process: string;
    quality: string;
    achievements: string;
    gallery: string;
    contact: string;
  };
}

interface IndexRowProps {
  titleAr: string;
  titleEn: string;
  range: string;
  isSpecial?: boolean;
}

function IndexRow({ titleAr, titleEn, range, isSpecial = false }: IndexRowProps) {
  return (
    <div className={`flex items-center justify-between px-3 py-1 rounded-lg border transition-all duration-200 ${
      isSpecial 
        ? 'bg-white/90 border-brand-gold/40 shadow-xs' 
        : 'bg-white/70 hover:bg-white border-brand-warm/15 shadow-xs'
    }`}>
      {/* Arabic and English Titles on the right side in RTL */}
      <div className="flex flex-col text-right justify-center">
        <span className="font-arabic text-brand-forest font-bold text-[12px] leading-tight" dir="rtl">
          {titleAr}
        </span>
        <span className="font-sans text-brand-dark/75 text-[8.5px] uppercase tracking-wider font-semibold leading-tight mt-0.5" dir="ltr">
          {titleEn}
        </span>
      </div>

      {/* Page Number Badge on the left edge in RTL */}
      <div className="flex items-center justify-center shrink-0 pl-1" dir="ltr">
        <span className="font-sans text-brand-forest font-bold text-[11px] px-2 py-0.5 rounded bg-brand-gold/15 border border-brand-gold/30 tabular-nums">
          {range}
        </span>
      </div>
    </div>
  );
}

interface GroupHeaderProps {
  num?: string;
  titleAr: string;
  titleEn: string;
}

function GroupHeader({ num, titleAr, titleEn }: GroupHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-brand-gold/40 pb-1 mb-1.5 pt-0.5">
      <div className="flex items-center gap-2">
        {num && (
          <span className="w-5 h-5 rounded-full bg-brand-forest text-brand-gold font-sans font-bold text-[9px] flex items-center justify-center shrink-0">
            {num}
          </span>
        )}
        <span className="font-arabic text-brand-forest font-bold text-[13px]" dir="rtl">
          {titleAr}
        </span>
      </div>
      <span className="font-sans text-brand-dark/65 font-bold text-[8.5px] uppercase tracking-widest" dir="ltr">
        {titleEn}
      </span>
    </div>
  );
}

export function Section00Index({ pageNumber, pages }: Section00IndexProps) {
  return (
    <Section 
      className="bg-brand-beige border-b border-brand-warm/10" 
      pageNumber={pageNumber} 
      bgType="pattern"
    >
      <div className="flex flex-col h-full justify-between py-2" dir="rtl">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
          <div className="flex items-center gap-3">
            <EditableText as="h1" className="font-arabic text-brand-forest text-2xl font-bold !mb-0">
              فهرس المحتويات
            </EditableText>
            <span className="text-brand-gold/60 text-lg font-sans">•</span>
            <EditableText as="h2" className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase font-bold !mb-0" dir="ltr">
              Table of Contents
            </EditableText>
          </div>
          <div className="text-left" dir="ltr">
            <span className="text-brand-dark/60 text-[9.5px] uppercase tracking-widest font-sans font-semibold">
              Rayat Najd Corporate Profile & Botanical Catalog
            </span>
          </div>
        </div>

        {/* 2-Column Continuous RTL Executive Grid */}
        <div className="grid grid-cols-2 gap-5 items-stretch my-auto flex-1">
          
          {/* ========================================================================= */}
          {/* RIGHT COLUMN (FIRST READING COLUMN IN RTL) */}
          {/* ========================================================================= */}
          <div className="flex flex-col justify-between h-full gap-3">
            {/* GROUP 01: CORPORATE PROFILE */}
            <div className="flex flex-col gap-1">
              <GroupHeader 
                num="01" 
                titleAr="الملف التعريفي للشركة" 
                titleEn="Corporate Profile" 
              />
              <div className="flex flex-col gap-1">
                <IndexRow titleAr="نبذة عن الشركة" titleEn="Company Overview" range={pages.about} />
                <IndexRow titleAr="لماذا رايات نجد" titleEn="Why Rayat Najd" range={pages.whyUs} />
                <IndexRow titleAr="الخدمات" titleEn="Our Services" range={pages.services} />
                <IndexRow titleAr="المشاتل والقدرات التشغيلية" titleEn="Nurseries & Operational Capabilities" range={pages.nurseries} />
                <IndexRow titleAr="القدرات المتكاملة" titleEn="Integrated Capabilities" range={pages.capabilities} isSpecial={true} />
              </div>
            </div>

            {/* GROUP 02: PLANT CATALOG (PART 1) */}
            <div className="flex flex-col gap-1">
              <GroupHeader 
                num="02" 
                titleAr="الكتالوج النباتي" 
                titleEn="Plant Catalog" 
              />
              <div className="flex flex-col gap-1">
                <IndexRow titleAr="مدخل الكتالوج النباتي" titleEn="Plant Catalog Overview" range={pages.productsCover} isSpecial={true} />
                <IndexRow titleAr="أشجار النخيل" titleEn="Palm Trees" range={pages.palmTrees} />
                <IndexRow titleAr="أشجار الظل" titleEn="Shade Trees" range={pages.shadeTrees} />
                <IndexRow titleAr="الأشجار المحلية" titleEn="Native Trees" range={pages.nativeTrees} />
                <IndexRow titleAr="أشجار الزينة" titleEn="Ornamental Trees" range={pages.ornamentalTrees} />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* LEFT COLUMN (SECOND READING COLUMN IN RTL) */}
          {/* ========================================================================= */}
          <div className="flex flex-col justify-between h-full gap-3">
            {/* GROUP 02 (CONTINUED): PLANT CATALOG (PART 2) */}
            <div className="flex flex-col gap-1">
              <GroupHeader 
                titleAr="الكتالوج النباتي (تتمة)" 
                titleEn="Plant Catalog (Cont.)" 
              />
              <div className="flex flex-col gap-1">
                <IndexRow titleAr="الشجيرات والنباتات" titleEn="Shrubs & Plants" range={pages.shrubs} />
                <IndexRow titleAr="مغطيات التربة" titleEn="Ground Covers" range={pages.groundCovers} />
                <IndexRow titleAr="النباتات الموسمية" titleEn="Seasonal Plants" range={pages.seasonal} />
                <IndexRow titleAr="النباتات الصحراوية" titleEn="Desert Plants" range={pages.desert} />
                <IndexRow titleAr="النباتات المتسلقة" titleEn="Climbing Plants" range={pages.climbing} />
              </div>
            </div>

            {/* GROUP 03: PROJECTS & CORPORATE PERFORMANCE */}
            <div className="flex flex-col gap-1">
              <GroupHeader 
                num="03" 
                titleAr="المشاريع والأداء المؤسسي" 
                titleEn="Projects & Corporate Performance" 
              />
              <div className="flex flex-col gap-1">
                <IndexRow titleAr="المشاريع" titleEn="Projects" range={pages.projects} isSpecial={true} />
                <IndexRow titleAr="منهجية العمل" titleEn="Process" range={pages.process} />
                <IndexRow titleAr="الجودة" titleEn="Quality" range={pages.quality} />
                <IndexRow titleAr="الإنجازات" titleEn="Achievements" range={pages.achievements} />
                <IndexRow titleAr="معرض الصور" titleEn="Gallery" range={pages.gallery} />
              </div>
            </div>

            {/* GROUP 04: CONTACT */}
            <div className="flex flex-col gap-1">
              <GroupHeader 
                num="04" 
                titleAr="التواصل" 
                titleEn="Contact" 
              />
              <div className="flex flex-col gap-1">
                <IndexRow titleAr="التواصل والمعلومات الرسمية" titleEn="Corporate Contact & Directory" range={pages.contact} isSpecial={true} />
              </div>
            </div>
          </div>

        </div>

        {/* Footer Navigation Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/55 uppercase tracking-widest font-sans" dir="ltr">
          <span className="font-semibold text-brand-forest">Rayat Najd Corporate Profile • Document Index & Navigation</span>
          <span className="font-arabic font-semibold text-brand-forest" dir="rtl">فهرس المحتويات والمراجع الرسمية — شركة رايات نجد</span>
        </div>
      </div>
    </Section>
  );
}
