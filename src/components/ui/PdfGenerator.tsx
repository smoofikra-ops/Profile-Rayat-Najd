import { useState, useEffect } from 'react';
import { FileDown, Loader2 } from 'lucide-react';
import { usePdfDownload } from '../../hooks/usePdfDownload';

export function PdfGenerator() {
  const { isGenerating, downloadPdf } = usePdfDownload();
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past the hero section (~450px)
      if (window.scrollY > 450) {
        setHasScrolledPastHero(true);
      } else {
        setHasScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Do not render if user is still in the hero section to keep UI pristine and uncluttered
  if (!hasScrolledPastHero && !isGenerating) {
    return null;
  }

  return (
    <button 
      onClick={() => downloadPdf('sticky_download_button')}
      disabled={isGenerating}
      className="fixed bottom-8 right-8 z-50 bg-brand-forest hover:bg-brand-forest/90 text-brand-gold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 no-print flex items-center gap-2.5 font-sans text-xs uppercase tracking-wider backdrop-blur-md border border-brand-gold/50 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-105 cursor-pointer min-h-[44px]"
      aria-label="تحميل الملف التعريفي الرسمي لشركة رايات نجد بصيغة PDF"
      title="تحميل الملف التعريفي PDF - Rayat Najd Corporate Profile"
    >
      {isGenerating ? (
        <Loader2 size={18} className="animate-spin text-brand-gold shrink-0" />
      ) : (
        <FileDown size={18} className="text-brand-gold group-hover:-translate-y-0.5 transition-transform shrink-0" />
      )}
      <span className="font-arabic font-bold text-sm text-brand-gold pr-1" dir="rtl">
        {isGenerating ? 'جاري التحميل...' : 'تحميل PDF'}
      </span>
      <span className="hidden sm:inline-block font-sans font-semibold text-[10px] text-white/90 border-r border-white/20 pr-2 tracking-wider">
        {isGenerating ? 'Generating...' : 'Download PDF'}
      </span>
    </button>
  );
}
