import React from 'react';
import { RAYAT_NAJD_LOGO_URL, VISION_2030_LOGO_URL } from '../../constants/brand';

export { RAYAT_NAJD_LOGO_URL, VISION_2030_LOGO_URL };

interface LogoProps {
  className?: string;
  size?: number | string;
  variant?: 'dark' | 'light' | 'gold' | 'monochrome';
  isVertical?: boolean;
}

/**
 * APPROVED RAYAT NAJD CIRCULAR TRANSPARENT EMBLEM
 * 1024x1024 high-resolution circular logo with transparent background.
 * Verified asset on Bunny CDN.
 */
export function RayatNajdEmblem({ 
  className = '', 
  size = 64, 
  variant = 'dark' 
}: { 
  className?: string; 
  size?: number | string; 
  variant?: 'dark' | 'light' | 'gold' | 'monochrome';
}) {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={RAYAT_NAJD_LOGO_URL}
      alt="Rayat Najd Logo"
      style={{ width: pixelSize, height: pixelSize }}
      className={`inline-block object-contain select-none shrink-0 ${className}`}
      loading="eager"
    />
  );
}

/**
 * VERSION 1 — MAIN FULL LOGO (Vertical or Horizontal Lockup)
 */
export function RayatNajdLogoFull({ 
  className = '', 
  layout = 'horizontal', 
  variant = 'dark',
  emblemSize = 56
}: { 
  className?: string; 
  layout?: 'horizontal' | 'vertical'; 
  variant?: 'dark' | 'light';
  emblemSize?: number;
}) {
  const isLight = variant === 'light';

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <RayatNajdEmblem size={emblemSize * 1.5} variant={variant} />
        
        {/* Arabic Brand Name */}
        <span 
          className={`font-arabic font-bold text-2xl mt-3 leading-tight ${isLight ? 'text-white' : 'text-brand-forest'}`}
          dir="rtl"
        >
          رايات نجد
        </span>

        {/* Gold Divider */}
        <div className="flex items-center gap-2 my-1.5 w-36">
          <div className="flex-1 h-px bg-brand-gold/60"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold"></div>
          <div className="flex-1 h-px bg-brand-gold/60"></div>
        </div>

        {/* Arabic Tagline */}
        <span 
          className={`font-arabic font-medium text-xs ${isLight ? 'text-brand-gold' : 'text-brand-forest/85'}`}
          dir="rtl"
        >
          للتشجير والاستدامة البيئية
        </span>

        {/* English Brand & Tagline */}
        <div className="mt-2 text-center" dir="ltr">
          <span className={`font-sans font-bold text-[11px] uppercase tracking-[0.25em] block ${isLight ? 'text-white/90' : 'text-brand-forest'}`}>
            RAYAT NAJD
          </span>
          <span className="font-sans font-medium text-[8px] uppercase tracking-[0.15em] text-brand-gold block mt-0.5">
            Landscaping &amp; Environmental Sustainability
          </span>
        </div>
      </div>
    );
  }

  // Horizontal Lockup
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <RayatNajdEmblem size={emblemSize} variant={variant} className="shrink-0" />

      <div className="flex flex-col justify-center border-r border-brand-gold/40 pr-3 mr-1" dir="rtl">
        <span className={`font-arabic font-bold text-lg leading-tight ${isLight ? 'text-white' : 'text-brand-forest'}`}>
          رايات نجد
        </span>
        <span className={`font-arabic font-medium text-[11px] leading-tight mt-0.5 ${isLight ? 'text-brand-gold' : 'text-brand-forest/80'}`}>
          للتشجير والاستدامة البيئية
        </span>
      </div>

      <div className="flex flex-col justify-center text-left pl-1" dir="ltr">
        <span className={`font-sans font-bold text-xs uppercase tracking-[0.18em] leading-tight ${isLight ? 'text-white' : 'text-brand-forest'}`}>
          Rayat Najd
        </span>
        <span className="font-sans font-semibold text-[8px] uppercase tracking-[0.12em] text-brand-gold leading-tight mt-0.5">
          Landscaping &amp; Sustainability
        </span>
      </div>
    </div>
  );
}

/**
 * VERSION 3 — FAVICON / APP ICON COMPONENT
 */
export function RayatNajdAppIcon({ 
  size = 32, 
  className = '' 
}: { 
  size?: number; 
  className?: string; 
}) {
  return <RayatNajdEmblem size={size} variant="dark" className={className} />;
}
