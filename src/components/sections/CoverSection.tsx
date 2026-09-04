import { motion } from 'motion/react';
import { EditableText } from '../ui/Layouts';
import { RayatNajdEmblem } from '../brand/RayatNajdLogo';

export function CoverSection() {
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

          {/* Official Emblem Logo (Reconstructed Clean Transparent Mark) */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/95 backdrop-blur-md shadow-2xl border-2 border-brand-gold shrink-0 p-2 hover:scale-105 transition-transform">
            <RayatNajdEmblem size={68} variant="dark" />
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

        {/* Center: Open Dominant Photographic Space */}
        <div className="flex-1 flex items-center justify-center">
          {/* Clean open photography visible through center */}
        </div>

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
