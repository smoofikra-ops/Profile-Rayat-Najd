import React from 'react';
import { FileDown, Loader2 } from 'lucide-react';
import { RAYAT_NAJD_LOGO_URL } from '../../constants/brand';
import { usePdfDownload } from '../../hooks/usePdfDownload';

export function MobileHeaderBar() {
  const { isGenerating, downloadPdf } = usePdfDownload();

  return (
    <header 
      className="sticky top-0 w-full z-40 bg-brand-forest/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between border-b border-brand-gold/30 shadow-md no-print md:hidden"
      dir="rtl"
    >
      {/* Brand Identity */}
      <div className="flex items-center gap-2.5">
        <img 
          src={RAYAT_NAJD_LOGO_URL} 
          alt="رايات نجد" 
          className="w-8 h-8 object-contain"
        />
        <div className="flex flex-col text-right">
          <span className="font-arabic font-bold text-white text-xs leading-tight">
            رايات نجد
          </span>
          <span className="font-arabic text-brand-gold text-[10px] leading-tight">
            الملف التعريفي للشركة
          </span>
        </div>
      </div>

      {/* Mobile Download CTA */}
      <button
        type="button"
        onClick={() => downloadPdf('mobile_header_button')}
        disabled={isGenerating}
        aria-label="تحميل الملف التعريفي الرسمي لشركة رايات نجد بصيغة PDF"
        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-arabic font-bold text-xs shadow-sm transition-all active:scale-95 disabled:opacity-50 cursor-pointer min-h-[38px]"
      >
        {isGenerating ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-dark" />
        ) : (
          <FileDown className="w-3.5 h-3.5 text-brand-dark" />
        )}
        <span>{isGenerating ? 'جاري التحميل...' : 'تحميل PDF'}</span>
      </button>
    </header>
  );
}
