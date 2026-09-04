import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ImageIcon, Info } from 'lucide-react';

export function EditableText({ as: Component = 'div', className = '', children, ...props }: any) {
  // @ts-ignore
  const isDev = import.meta.env.DEV;
  const editableClasses = isDev ? "hover:bg-brand-gold/10 focus:bg-brand-gold/10 rounded px-1 -mx-1" : "";
  return (
    <Component
      className={`outline-none transition-colors ${editableClasses} ${className}`}
      contentEditable={isDev}
      suppressContentEditableWarning
      {...props}
    >
      {children}
    </Component>
  );
}

const LeafDecoration = ({ className }: { className?: string }) => (
  <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute opacity-[0.04] pointer-events-none z-0 ${className}`}>
    <path d="M100 200C100 200 60 160 60 100C60 40 100 0 100 0C100 0 140 40 140 100C140 160 100 200 100 200Z" fill="currentColor"/>
    <path d="M50 150C50 150 20 120 20 75C20 30 50 0 50 0C50 0 80 30 80 75C80 120 50 150 50 150Z" fill="currentColor" transform="rotate(-45 50 150)"/>
    <path d="M150 150C150 150 120 120 120 75C120 30 150 0 150 0C150 0 180 30 180 75C180 120 150 150 150 150Z" fill="currentColor" transform="rotate(45 150 150)"/>
  </svg>
);

export function Section({ 
  children, 
  className = '', 
  id = '', 
  pageNumber, 
  bgType = 'none', 
  bgImage, 
  bgMode = 'corporate-soft',
  noSafeArea = false 
}: { 
  children: React.ReactNode, 
  className?: string, 
  id?: string, 
  pageNumber?: number, 
  bgType?: 'pattern' | 'leaves' | 'none', 
  bgImage?: string, 
  bgMode?: 'hero-dark' | 'corporate-soft' | 'category-image',
  noSafeArea?: boolean, 
  key?: React.Key 
}) {
  return (
    <section id={id} className={`landscape-page mb-8 print:my-0 print:mb-0 print:shadow-none print:border-none print:page-break-after-always shadow-[0_15px_40px_rgba(0,0,0,0.1)] ${className}`}>
      
      {bgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <img src={bgImage} alt="Background" className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.05]" />
           {bgMode === 'hero-dark' ? (
             <div className="absolute inset-0 bg-gradient-to-b from-brand-forest/90 via-black/35 to-brand-forest/90"></div>
           ) : bgMode === 'category-image' ? (
             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/60"></div>
           ) : (
             /* MODE B — CORPORATE SOFT: Image clearly visible with light soft overlay and localized contrast */
             <div className="absolute inset-0 bg-white/70 backdrop-brightness-[0.98]"></div>
           )}
        </div>
      )}

      {bgType === 'leaves' && !bgImage && (
        <>
          <LeafDecoration className="-top-20 -left-20 text-brand-forest -scale-x-100 rotate-45" />
          <LeafDecoration className="-bottom-20 -right-20 text-brand-forest -rotate-45" />
        </>
      )}
      {bgType === 'pattern' && !bgImage && (
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-brand-forest) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      )}

      {noSafeArea ? (
        children
      ) : (
        <div className="landscape-content">
          {children}
        </div>
      )}

      {pageNumber !== undefined && (
        <div className="absolute bottom-[4mm] left-[20mm] right-[20mm] h-[10mm] flex items-center justify-between text-[8.5px] text-brand-dark/40 font-sans tracking-widest uppercase z-40 border-t border-brand-warm/15 pt-1.5">
           <div className="w-1/3 flex items-center justify-start gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Saudi_Vision_2030_logo.svg" alt="Vision 2030" className="h-5 opacity-60 mix-blend-multiply filter grayscale contrast-125" />
              <EditableText as="span" className="font-medium text-[8px] opacity-70">Rayat Najd Corporate Profile</EditableText>
           </div>
           <div className="w-1/3 flex justify-center items-center gap-2">
              <div className="w-5 h-px bg-brand-gold/50"></div>
              <span className="font-bold text-brand-forest drop-shadow-sm text-[11px] font-sans">{pageNumber < 10 ? `0${pageNumber}` : pageNumber}</span>
              <div className="w-5 h-px bg-brand-gold/50"></div>
           </div>
           <EditableText as="span" dir="rtl" className="w-1/3 text-right font-arabic font-medium pb-0.5 text-[9.5px]">ملف الشركة - رايات نجد</EditableText>
        </div>
      )}
    </section>
  );
}

export function BilingualContainer({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
     <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start ${className}`}>
       {children}
     </div>
  )
}

export function EnglishContent({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`text-left font-sans ${className}`} dir="ltr">{children}</div>;
}

export function ArabicContent({ children, className = '' }: { children: React.ReactNode, className?: string }) {
   return <div className={`text-right font-arabic ${className}`} dir="rtl">{children}</div>;
}

interface ImagePlaceholderProps {
  title?: string;
  specs?: string;
  className?: string;
}

export function ImagePlaceholder({ title = "Image Placeholder", specs, className = "" }: ImagePlaceholderProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // @ts-ignore
  const isDev = import.meta.env.DEV;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
       const url = URL.createObjectURL(file);
       setImageSrc(url);
    }
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-brand-light border border-brand-warm/20 overflow-visible group shadow-3d ${isDev ? "cursor-pointer" : ""} ${className}`}
      onClick={() => isDev && fileInputRef.current?.click()}
    >
       {isDev && <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />}

       {imageSrc ? (
          <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover z-0 rounded-[inherit]" />
       ) : (
         <>
           <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer rounded-[inherit]" />
           <div className="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-[inherit]" />
           
           <div className="relative z-10 flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm border border-brand-warm/10 rounded-sm shadow-3d max-w-[80%] text-center group-hover:scale-105 transition-transform duration-500">
             <ImageIcon className="w-6 h-6 mb-3 text-brand-olive/70 icon-shadow-3d" strokeWidth={1.5} />
             <p className="font-sans font-medium text-[11px] tracking-[0.2em] uppercase text-brand-dark mb-2">{title}</p>
             {specs && (
               <div className="w-full h-[1px] bg-brand-warm/20 mb-2" />
             )}
             {specs && (
               <div className="text-[9px] text-brand-dark/60 whitespace-pre-line leading-relaxed uppercase tracking-wider font-sans">
                 {specs}
               </div>
             )}
           </div>
         </>
       )}

       {isDev && (
       <div
         className="absolute top-4 right-4 z-30 flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold/90 text-white shadow-3d cursor-help hover:bg-brand-gold hover:scale-110 transition-all no-print"
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}
         onClick={(e) => { e.stopPropagation(); setShowTooltip(!showTooltip); }}
       >
          <Info size={16} className="icon-shadow-3d" />
          {showTooltip && (
             <div className="absolute top-full right-0 mt-3 w-64 bg-white/95 backdrop-blur-md text-brand-dark p-5 rounded-xl shadow-3d text-xs font-sans text-left z-40 border border-brand-gold/30 cursor-default" onClick={(e) => e.stopPropagation()}>
                <p className="font-bold mb-2 uppercase tracking-[0.2em] text-[10px] text-brand-olive border-b border-brand-warm/10 pb-2 text-shadow-3d">Photography Guide</p>
                <p className="font-light leading-relaxed mb-3">Maintain strict Swiss Grid alignment. Ensure natural daylight (golden hour preferred). Focus on depth of field.</p>
                <p className="font-medium leading-relaxed text-brand-gold text-[10px] uppercase tracking-wider">Click to upload image</p>
             </div>
          )}
       </div>
       )}
    </div>
  );
}
