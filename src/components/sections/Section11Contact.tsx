import { Section, EditableText } from '../ui/Layouts';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

export function Section11Contact({ pageNumber = 38 }: { pageNumber?: number }) {
  return (
    <Section 
      className="bg-brand-forest text-white !p-0" 
      pageNumber={pageNumber} 
      noSafeArea={true}
    >
      <div className="relative w-full h-full flex flex-col justify-between overflow-hidden px-12 py-10">
        {/* Background Subtle Gradient & Pattern */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/backgrounds/rayat-najd-website-background-trees.webp" 
            alt="Rayat Najd Back Cover" 
            className="w-full h-full object-cover filter brightness-50 contrast-125 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-brand-forest/90 to-brand-forest"></div>
        </div>

        {/* Top Branding */}
        <div className="relative z-10 flex items-center justify-between border-b border-brand-gold/40 pb-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/01-branding/logo-and-icon/rayat-najd-logo-light.webp" 
              alt="Rayat Najd" 
              className="h-10 object-contain" 
            />
            <div className="border-l border-white/20 pl-3">
              <span className="text-white font-sans text-xs tracking-wider uppercase font-bold block">Rayat Najd For Landscaping</span>
              <span className="text-brand-gold text-[9px] uppercase tracking-widest font-sans">Capability Profile • 2025</span>
            </div>
          </div>

          <div className="text-right" dir="rtl">
            <span className="text-white font-arabic text-sm font-bold block">شركة رايات نجد للتشجير وتنسيق الحدائق</span>
            <span className="text-brand-gold font-arabic text-xs font-semibold">شريك التخضير للمشاريع الكبرى</span>
          </div>
        </div>

        {/* Main Content: Center Executive Invitation & Contact Columns */}
        <div className="relative z-10 grid grid-cols-12 gap-8 my-auto items-center">
          {/* Left Invitation Statement (6 Cols) */}
          <div className="col-span-6 space-y-4">
            <div>
              <EditableText as="h2" className="text-white font-sans text-2xl font-bold uppercase tracking-wider mb-1">
                Partner With Rayat Najd
              </EditableText>
              <EditableText as="h3" className="text-brand-gold font-arabic text-2xl font-bold mb-3" dir="rtl">
                شريككم الاستراتيجي لتخضير المستقبل
              </EditableText>
              <div className="w-16 h-0.5 bg-brand-gold mb-3"></div>
            </div>

            <div className="space-y-2 text-[11.5px] text-brand-beige/90">
              <EditableText as="p" className="text-justify font-sans leading-relaxed">
                We invite government entities, institutional developers, lead consultants, and general contractors to connect with our technical teams for project tenders, plant procurement schedules, and master greening consultations.
              </EditableText>
              <EditableText as="p" className="text-justify font-arabic leading-relaxed" dir="rtl">
                يسعدنا التعاون مع الجهات الحكومية، والمطورين العقاريين، والاستشاريين، والمقاولين الرئيسيين لتقديم عروض الأسعار، وجداول التوريد الزراعي، واستشارات اللاندسكيب التخصصية.
              </EditableText>
            </div>
          </div>

          {/* Right Official Contact Directory (6 Cols) */}
          <div className="col-span-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl space-y-3">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left flex-1">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold block">Headquarters & Nurseries</span>
                <span className="text-xs font-sans text-white/90">Riyadh, Kingdom of Saudi Arabia</span>
              </div>
              <div className="text-right flex-1" dir="rtl">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold font-arabic block">المقر الرئيسي والمشاتل</span>
                <span className="text-xs font-arabic text-white/90">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left flex-1">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold block">Direct Inquiries & WhatsApp</span>
                <span className="text-xs font-sans text-white/90 font-bold">+966 55 330 8786</span>
              </div>
              <div className="text-right flex-1" dir="rtl">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold font-arabic block">الاتصال المباشر وواتساب</span>
                <span className="text-xs font-sans text-white/90 font-bold" dir="ltr">+966 55 330 8786</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left flex-1">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold block">Official Communications</span>
                <span className="text-xs font-sans text-white/90">info@rayatnajd.com</span>
              </div>
              <div className="text-right flex-1" dir="rtl">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold font-arabic block">البريد الإلكتروني الرسمي</span>
                <span className="text-xs font-sans text-white/90">info@rayatnajd.com</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-left flex-1">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold block">Digital Portal</span>
                <span className="text-xs font-sans text-white/90">www.rayatnajd.com</span>
              </div>
              <div className="text-right flex-1" dir="rtl">
                <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold font-arabic block">الموقع الإلكتروني</span>
                <span className="text-xs font-sans text-white/90">www.rayatnajd.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Regulatory / Corporate Footer */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-brand-gold/40 text-[9.5px] text-white/70">
          <span className="font-sans uppercase tracking-widest">© {new Date().getFullYear()} Rayat Najd For Landscaping Co. All Rights Reserved.</span>
          <span className="font-arabic font-semibold" dir="rtl">شركة رايات نجد للتشجير وتنسيق الحدائق — سجل تجاري معتمد</span>
        </div>
      </div>
    </Section>
  );
}
