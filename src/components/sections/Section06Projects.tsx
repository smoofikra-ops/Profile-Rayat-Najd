import { Section, EditableText } from '../ui/Layouts';
import { getAllProjectsWithMedia, ProjectRecord } from '../../data/projects';
import { MapPin, Sprout, ShieldCheck, TreePine, Video } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectRecord;
  isFeatured?: boolean;
  key?: string | number;
}

function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const hasImage = Boolean(project.primaryImage);
  const hasVideo = project.videos && project.videos.length > 0;

  return (
    <div className={`card-surface card-surface-hover overflow-hidden flex flex-col justify-between ${isFeatured ? 'h-full' : 'h-full'}`}>
      {/* Media / Header Visual */}
      <div className={`relative overflow-hidden shrink-0 ${isFeatured ? 'h-44 sm:h-52' : 'h-28'} bg-brand-forest/90`}>
        {hasImage ? (
          <img 
            src={project.primaryImage!} 
            alt={project.nameEn} 
            className="w-full h-full object-cover filter brightness-95" 
          />
        ) : (
          <div className="w-full h-full relative flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-brand-forest via-brand-forest/95 to-brand-forest/85">
            {/* Subtle background motif */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="relative z-10 flex flex-col items-center justify-center gap-1">
              <div className="w-8 h-8 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shadow-sm">
                <TreePine className="w-4 h-4" />
              </div>
              <span className="text-white/80 font-sans text-[8px] uppercase tracking-widest font-semibold">
                Rayat Najd Project
              </span>
              <span className="text-brand-gold/90 font-arabic text-[9.5px] font-bold" dir="rtl">
                {project.locationAr}
              </span>
            </div>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-center pointer-events-none">
          <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-brand-gold font-sans text-[7.5px] font-bold uppercase tracking-wider border border-brand-gold/30">
            {project.categoryEn}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white font-arabic text-[8.5px] font-semibold border border-white/20" dir="rtl">
            {project.categoryAr}
          </span>
        </div>

        {/* Video Indicator (if available) */}
        {hasVideo && (
          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-brand-gold flex items-center gap-1 text-[7.5px] font-sans font-bold">
            <Video className="w-2.5 h-2.5" />
            <span>Video</span>
          </div>
        )}

        {/* Location Strip on Image Base */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2.5 py-1 flex items-center justify-between text-white">
          <div className="flex items-center gap-1 text-brand-gold font-sans text-[8.5px] font-semibold">
            <MapPin className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate max-w-[120px]">{project.locationEn}</span>
          </div>
          <div className="flex items-center gap-1 text-white font-arabic text-[9px] font-semibold" dir="rtl">
            <MapPin className="w-2.5 h-2.5 shrink-0 text-brand-gold" />
            <span className="truncate max-w-[120px]">{project.locationAr}</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className={`p-3 flex-1 flex flex-col justify-between ${isFeatured ? 'p-4' : ''}`}>
        <div className="space-y-1">
          <div className="text-right" dir="rtl">
            <EditableText as="h3" className="card-title-ar text-[11.5px] leading-snug line-clamp-2">
              {project.nameAr}
            </EditableText>
          </div>
          <div className="text-left">
            <EditableText as="h4" className="card-title-en text-[9.5px] leading-snug line-clamp-2 uppercase tracking-wide">
              {project.nameEn}
            </EditableText>
          </div>
        </div>

        {/* Bottom Metadata Divider */}
        <div className="mt-2 pt-1.5 border-t border-brand-warm/15 flex items-center justify-between text-[7.5px] text-brand-dark/55 font-sans">
          <span className="uppercase tracking-wider font-semibold text-brand-gold">
            National Execution
          </span>
          <span className="font-arabic font-semibold text-[8.5px]" dir="rtl">
            المملكة العربية السعودية
          </span>
        </div>
      </div>
    </div>
  );
}

export function Section06Projects({ startPageNumber = 38 }: { startPageNumber?: number }) {
  const allProjects = getAllProjectsWithMedia();
  
  // Page 1: Projects 0–5 (6 projects)
  const page1Projects = allProjects.slice(0, 6);
  // Page 2: Projects 6–11 (6 projects)
  const page2Projects = allProjects.slice(6, 12);
  // Page 3: Project 12 (13th project) + Regional Coverage Synthesis
  const page3Project = allProjects[12];

  const coveredRegions = [
    { nameEn: "Taif", nameAr: "الطائف" },
    { nameEn: "Makkah", nameAr: "مكة المكرمة" },
    { nameEn: "Al Shuqaiq", nameAr: "الشقيق" },
    { nameEn: "Al Jouf", nameAr: "الجوف" },
    { nameEn: "Al Asyah", nameAr: "الأسياح" },
    { nameEn: "Al Jumum", nameAr: "الجموم" },
    { nameEn: "Khulais", nameAr: "خليص" },
    { nameEn: "Al Aflaj", nameAr: "الأفلاج" },
    { nameEn: "Al Nafthah", nameAr: "النفذة" },
    { nameEn: "Al Owaisi", nameAr: "العويصي" }
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* PAGE 1: PROJECTS 1 TO 6 (6-CARD BALANCED GRID) */}
      {/* ========================================================================= */}
      <Section 
        className="bg-brand-beige border-b border-brand-warm/10" 
        pageNumber={startPageNumber} 
        bgType="pattern"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
            <div>
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Field Achievement Record</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Selected Project Portfolio (Part I)</EditableText>
            </div>
            <div className="text-right" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">سجل الإنجاز الميداني</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">نماذج من مشاريعنا المنفذة (١)</EditableText>
            </div>
          </div>

          {/* Subtitle description */}
          <div className="flex items-center justify-between px-1 text-[9.5px] text-brand-dark/65 mb-1 font-sans">
            <span>Selected Afforestation, Landscaping, Care & Maintenance Projects</span>
            <span className="font-arabic" dir="rtl">نماذج من مشاريع التشجير والزراعة والرعاية والصيانة المعتمدة</span>
          </div>

          {/* 6-Card Grid: 3 cols x 2 rows */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3.5 my-auto items-stretch flex-1">
            {page1Projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Field Projects — Section 06 / Page 1 of 3</span>
            <span className="font-arabic" dir="rtl">سجل المشاريع الميدانية — الجزء الأول</span>
          </div>
        </div>
      </Section>

      {/* ========================================================================= */}
      {/* PAGE 2: PROJECTS 7 TO 12 (6-CARD BALANCED GRID) */}
      {/* ========================================================================= */}
      <Section 
        className="bg-brand-beige border-b border-brand-warm/10" 
        pageNumber={startPageNumber + 1} 
        bgType="pattern"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
            <div>
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Field Achievement Record</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Selected Project Portfolio (Part II)</EditableText>
            </div>
            <div className="text-right" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">سجل الإنجاز الميداني</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">نماذج من مشاريعنا المنفذة (٢)</EditableText>
            </div>
          </div>

          {/* Subtitle description */}
          <div className="flex items-center justify-between px-1 text-[9.5px] text-brand-dark/65 mb-1 font-sans">
            <span>Environmental Afforestation & Ongoing Vegetation Care Contracts</span>
            <span className="font-arabic" dir="rtl">مشاريع تنمية الغطاء النباتي وعقود الرعاية والصيانة المستمرة</span>
          </div>

          {/* 6-Card Grid: 3 cols x 2 rows */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3.5 my-auto items-stretch flex-1">
            {page2Projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Field Projects — Section 06 / Page 2 of 3</span>
            <span className="font-arabic" dir="rtl">سجل المشاريع الميدانية — الجزء الثاني</span>
          </div>
        </div>
      </Section>

      {/* ========================================================================= */}
      {/* PAGE 3: PROJECT 13 + REGIONAL COVERAGE SYNTHESIS (EDITORIAL CLOSING) */}
      {/* ========================================================================= */}
      <Section 
        className="bg-brand-beige border-b border-brand-warm/10" 
        pageNumber={startPageNumber + 2} 
        bgType="pattern"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
            <div>
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Field Achievement Record</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Geographic Breadth & Project Delivery</EditableText>
            </div>
            <div className="text-right" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">سجل الإنجاز الميداني</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">الانتشار الجغرافي والخبرة الميدانية</EditableText>
            </div>
          </div>

          {/* Main 2-Column Editorial Composition */}
          <div className="grid grid-cols-12 gap-5 my-auto items-stretch flex-1">
            {/* Left Column (5 Cols): Project 13 Featured Card */}
            <div className="col-span-5 flex flex-col">
              <div className="text-[10px] font-sans text-brand-forest font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Featured Project</span>
                <span className="font-arabic text-[11px]" dir="rtl">مشروع معتمد</span>
              </div>
              {page3Project && (
                <div className="flex-1">
                  <ProjectCard project={page3Project} isFeatured={true} />
                </div>
              )}
            </div>

            {/* Right Column (7 Cols): Regional Presence & Execution Breadth */}
            <div className="col-span-7 card-surface p-5 flex flex-col justify-between">
              <div>
                {/* Title */}
                <div className="border-b border-brand-warm/15 pb-2.5 mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <EditableText as="h3" className="card-title-en text-sm uppercase tracking-wide">
                      Field Experience Across Multiple Regions
                    </EditableText>
                    <EditableText as="h3" className="card-title-ar text-sm" dir="rtl">
                      خبرات ميدانية في مناطق متعددة من المملكة
                    </EditableText>
                  </div>
                  <div className="w-12 h-0.5 bg-brand-gold mt-1"></div>
                </div>

                {/* Editorial statement based strictly on approved records */}
                <div className="space-y-2 leading-relaxed">
                  <EditableText as="p" className="text-justify card-body-en text-[10.5px]">
                    Rayat Najd has mobilized specialized engineering teams, heavy nursery logistics, and horticultural stewardship across diverse climatic zones of Saudi Arabia—spanning the Western, Central, Southern, and Northern regions.
                  </EditableText>
                  <EditableText as="p" className="text-justify card-body-ar text-[11.5px]" dir="rtl">
                    تمتلك شركة رايات نجد قدرات تشغيلية ولوجستية مكنتها من تنفيذ وإدارة مشاريع تشجير ورعاية بيئية نوعية في مختلف مناطق المملكة، متكيفةً مع التباينات المناخية وطبيعة التربة في مختلف البيئات الصحراوية والساحلية والجبلية.
                  </EditableText>
                </div>

                {/* Approved Regional Locations Grid */}
                <div className="mt-3.5 pt-3 border-t border-brand-warm/15">
                  <span className="font-sans text-[8.5px] uppercase tracking-widest text-brand-gold font-bold block mb-2">
                    Verified Execution Footprint • المواقع والمناطق المنفذة
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {coveredRegions.map((reg, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-brand-beige/60 border border-brand-warm/15 text-[9.5px]"
                      >
                        <div className="flex items-center gap-1.5 font-sans font-semibold text-brand-forest">
                          <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
                          <span>{reg.nameEn}</span>
                        </div>
                        <span className="font-arabic font-bold text-brand-forest" dir="rtl">
                          {reg.nameAr}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Execution Pillars Tag */}
              <div className="mt-3 pt-2.5 border-t border-brand-warm/15 flex items-center justify-between text-[8px] uppercase tracking-wider text-brand-dark/60 font-sans">
                <span className="flex items-center gap-1 font-semibold text-brand-forest">
                  <Sprout className="w-3 h-3 text-brand-gold" />
                  Native Species Conservation
                </span>
                <span className="flex items-center gap-1 font-semibold text-brand-forest">
                  <ShieldCheck className="w-3 h-3 text-brand-gold" />
                  Certified Operational Quality
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Field Projects — Section 06 / Page 3 of 3</span>
            <span className="font-arabic" dir="rtl">سجل المشاريع الميدانية — الانتشار الجغرافي</span>
          </div>
        </div>
      </Section>
    </>
  );
}
