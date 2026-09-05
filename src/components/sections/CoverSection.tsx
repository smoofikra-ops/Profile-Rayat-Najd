import { motion } from 'motion/react';
import { EditableText } from '../ui/Layouts';
import { RAYAT_NAJD_LOGO_URL } from '../../constants/brand';
import { FileDown, BookOpen, Loader2 } from 'lucide-react';
import { usePdfDownload } from '../../hooks/usePdfDownload';

export function CoverSection() {
  const { isGenerating, downloadPdf } = usePdfDownload();

  const handleDownload = () => {
    downloadPdf('hero_download_button');
  };

  const handleBrowseProfile = () => {
    const el = document.getElementById('catalog-index');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-[297mm] h-[210mm] mx-auto flex flex-col bg-brand-forest overflow-hidden shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8 print:my-0 print:mb-0 print:shadow-none print:border-none print:h-[210mm] print:page-break-after-always">
      {/* Real Hero Landscape Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/hero-selects/rayat-najd-hero-banner-nursery-01.webp"
          alt="Rayat Najd Primary Agricultural Nursery"
          className="w-full h-full object-cover filter brightness-95 contrast-105"
        />
        {/* Subtle localized dark gradients to ensure perfect text contrast while keeping image bright & dominant */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-forest/90 via-transparent to-brand-forest/95"></div>
      </div>

      <div className="relative z-20 w-full h-full px-[20mm] py-[14mm] flex flex-col justify-between">
        
        {/* Top 15-20%: Clean Brand Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between w-full pt-1"
        >
          {/* English Identity */}
          <div className="flex flex-col items-start">
            <EditableText as="h1" className="text-white font-sans text-2xl font-bold tracking-[0.15em] uppercase leading-none mb-1 drop-shadow-md">
              Rayat Najd
            </EditableText>
            <EditableText as="span" className="text-brand-gold font-sans text-[10px] tracking-[0.25em] uppercase font-semibold drop-shadow">
              Corporate Profile
            </EditableText>
          </div>

          {/* Official Approved Circular Transparent Logo */}
          <div className="flex items-center justify-center shrink-0">
            <img 
              src={RAYAT_NAJD_LOGO_URL} 
              alt="Rayat Najd Logo" 
              className="w-20 h-20 object-contain drop-shadow-xl hover:scale-105 transition-transform select-none" 
            />
          </div>

          {/* Arabic Identity */}
          <div className="flex flex-col items-end" dir="rtl">
            <EditableText as="h1" className="text-white font-arabic text-3xl font-bold leading-none mb-1 drop-shadow-md">
              رايات نجد
            </EditableText>
            <EditableText as="span" className="text-brand-gold font-arabic text-sm font-semibold drop-shadow">
              الملف التعريفي للشركة
            </EditableText>
          </div>
        </motion.div>

        {/* Center: Hero Action CTAs (Primary Download & Secondary Browse) - Hidden on Print/PDF Export */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center justify-center my-auto no-print z-30"
        >
          <div className="flex flex-col items-center gap-3 bg-black/30 backdrop-blur-xs pl-8 pt-4.5 pr-[29px] pb-[14px] mr-[2px] mt-[300px] h-[121.875px] rounded-2xl border border-white/20 shadow-2xl">
            {/* Primary & Secondary Button Group */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              {/* PRIMARY CTA: Download Corporate Profile PDF */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={isGenerating}
                aria-label="تحميل الملف التعريفي الرسمي لشركة رايات نجد بصيغة PDF"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-brand-gold hover:bg-[#c9a349] text-brand-dark font-sans shadow-xl border border-brand-gold/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-forest min-h-[48px]"
              >
                {isGenerating ? (
                  <Loader2 className="w-5 h-5 animate-spin text-brand-dark shrink-0" />
                ) : (
                  <FileDown className="w-5 h-5 text-brand-dark group-hover:-translate-y-0.5 transition-transform shrink-0" />
                )}
                <div className="flex flex-col items-start text-right" dir="rtl">
                  <span className="font-arabic font-bold text-[15px] leading-tight text-brand-dark">
                    {isGenerating ? 'جاري تجهيز الملف...' : 'تحميل الملف التعريفي PDF'}
                  </span>
                  <span className="font-sans font-bold text-[9.5px] uppercase tracking-wider text-brand-dark/85 leading-tight">
                    {isGenerating ? 'Preparing PDF...' : 'Download Corporate Profile'}
                  </span>
                </div>
              </button>

              {/* SECONDARY CTA: Browse Profile */}
              <button
                type="button"
                onClick={handleBrowseProfile}
                aria-label="تصفح صفحات الملف التعريفي"
                className="group inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-brand-forest/90 hover:bg-brand-forest text-white font-sans backdrop-blur-md border border-brand-gold/40 shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold/50 min-h-[48px]"
              >
                <BookOpen className="w-4 h-4 text-brand-gold group-hover:scale-105 transition-transform shrink-0" />
                <div className="flex flex-col items-start text-right" dir="rtl">
                  <span className="font-arabic font-bold text-[14px] leading-tight text-white">
                    تصفح الملف
                  </span>
                  <span className="font-sans font-medium text-[9.5px] uppercase tracking-wider text-brand-gold/90 leading-tight">
                    Browse Profile
                  </span>
                </div>
              </button>
            </div>

            {/* Supporting Information Line Under Button */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-center text-white/95 drop-shadow">
              <span className="font-arabic text-[12px] font-medium" dir="rtl">
                الملف التعريفي الرسمي لشركة رايات نجد
              </span>
              <span className="text-brand-gold text-[9px]">•</span>
              <span className="font-sans text-[11px] font-semibold text-brand-gold tracking-wide">
                Official Rayat Najd Corporate Profile
              </span>
              <span className="text-brand-gold text-[9px]">•</span>
              <span className="text-[9.5px] font-sans text-white/90 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded border border-white/15">
                PDF • النسخة المعتمدة
              </span>
            </div>
          </div>
        </motion.div>

        {/* Lower Third: Approved Strategic Headline & 4 Approved Capability Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col w-full"
        >
          {/* Strategic Bilingual Headline */}
          <div className="w-full pb-5 pt-3 text-center border-b border-brand-gold/40">
            <EditableText as="h2" className="text-brand-gold font-arabic text-2xl font-bold drop-shadow-lg mb-1 leading-snug" dir="rtl">
              من التوريد إلى التنفيذ — قدرات متكاملة للمشاريع الكبرى
            </EditableText>
            <EditableText as="h3" className="text-white font-sans text-[13px] tracking-[0.18em] uppercase font-semibold drop-shadow-md">
              From Supply to Execution — Integrated Capabilities for Major Projects
            </EditableText>
          </div>

          {/* Bottom: ONLY Four Approved Capability Labels */}
          <div className="grid grid-cols-4 gap-4 pt-4 text-center">
            {/* 1. Plant & Tree Supply */}
            <div className="flex flex-col items-center justify-center px-2 py-2 bg-black/40 backdrop-blur-sm rounded-xl border border-white/15">
              <span className="text-brand-gold font-arabic text-[13px] font-bold mb-0.5" dir="rtl">توريد النباتات والأشجار</span>
              <span className="text-brand-beige/95 font-sans text-[10px] uppercase tracking-wider font-medium">Plant & Tree Supply</span>
            </div>

            {/* 2. Landscape Execution */}
            <div className="flex flex-col items-center justify-center px-2 py-2 bg-black/40 backdrop-blur-sm rounded-xl border border-white/15">
              <span className="text-brand-gold font-arabic text-[13px] font-bold mb-0.5" dir="rtl">تنفيذ اللاندسكيب</span>
              <span className="text-brand-beige/95 font-sans text-[10px] uppercase tracking-wider font-medium">Landscape Execution</span>
            </div>

            {/* 3. Irrigation Systems */}
            <div className="flex flex-col items-center justify-center px-2 py-2 bg-black/40 backdrop-blur-sm rounded-xl border border-white/15">
              <span className="text-brand-gold font-arabic text-[13px] font-bold mb-0.5" dir="rtl">أنظمة الري</span>
              <span className="text-brand-beige/95 font-sans text-[10px] uppercase tracking-wider font-medium">Irrigation Systems</span>
            </div>

            {/* 4. Greening & Sustainability */}
            <div className="flex flex-col items-center justify-center px-2 py-2 bg-black/40 backdrop-blur-sm rounded-xl border border-white/15">
              <span className="text-brand-gold font-arabic text-[13px] font-bold mb-0.5" dir="rtl">التشجير والاستدامة</span>
              <span className="text-brand-beige/95 font-sans text-[10px] uppercase tracking-wider font-medium">Greening & Sustainability</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
