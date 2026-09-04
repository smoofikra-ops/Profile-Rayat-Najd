import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  variant?: 'dark' | 'light' | 'gold' | 'monochrome';
  isVertical?: boolean;
}

/**
 * VERSION 2 — ICON / EMBLEM ONLY
 * Clean circular tree & roots emblem with 100% transparent background.
 * No square box, perfectly integrated inside circular perimeter.
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
  const isLight = variant === 'light';

  const goldStart = '#DFBA73';
  const goldMid = '#C59B4E';
  const goldEnd = '#A57A2C';
  const forestColor = isLight ? '#FFFFFF' : '#143A2A';
  const leafColor1 = isLight ? '#EAF5EE' : '#2D7352';
  const leafColor2 = isLight ? '#D1EBDE' : '#408E67';
  const rootColor = '#C59B4E';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`inline-block select-none ${className}`}
      aria-label="Rayat Najd Emblem"
    >
      <defs>
        <linearGradient id={`rnGoldRing-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={goldStart} />
          <stop offset="35%" stopColor={goldMid} />
          <stop offset="70%" stopColor="#E8CA8C" />
          <stop offset="100%" stopColor={goldEnd} />
        </linearGradient>

        <linearGradient id={`rnForest-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={forestColor} />
          <stop offset="50%" stopColor={isLight ? '#F0F9F4' : '#1E4D38'} />
          <stop offset="100%" stopColor={isLight ? '#DDF0E6' : '#0F2E20'} />
        </linearGradient>

        <linearGradient id={`rnLeaf1-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={leafColor1} />
          <stop offset="100%" stopColor={isLight ? '#C2E0CE' : '#184832'} />
        </linearGradient>

        <linearGradient id={`rnLeaf2-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={leafColor2} />
          <stop offset="100%" stopColor={isLight ? '#A5D6B9' : '#20563C'} />
        </linearGradient>

        <linearGradient id={`rnRootGold-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={goldMid} />
          <stop offset="50%" stopColor={goldStart} />
          <stop offset="100%" stopColor="#9C7226" />
        </linearGradient>
      </defs>

      {/* Concentric Circular Outer Border Rings */}
      <circle cx="250" cy="250" r="236" fill="none" stroke={`url(#rnGoldRing-${variant})`} strokeWidth="5" />
      <circle cx="250" cy="250" r="226" fill="none" stroke={isLight ? 'rgba(255,255,255,0.4)' : `url(#rnForest-${variant})`} strokeWidth="2.5" opacity={isLight ? 0.6 : 0.4} />
      <circle cx="250" cy="250" r="220" fill="none" stroke={`url(#rnGoldRing-${variant})`} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.75" />

      {/* Horizontal Horizon / Ground Level Line */}
      <path d="M 68 256 Q 160 252 250 252 Q 340 252 432 256" fill="none" stroke={`url(#rnGoldRing-${variant})`} strokeWidth="3" strokeLinecap="round" />
      <circle cx="250" cy="252" r="4" fill={`url(#rnGoldRing-${variant})`} />

      {/* ================= CANOPY & LEAF CLUSTERS ================= */}
      {/* Central Main Canopy */}
      <path
        d="M 250 82 
           C 275 82, 305 95, 316 118 
           C 336 122, 355 142, 355 166 
           C 370 178, 376 200, 368 220 
           C 362 236, 345 248, 328 248
           C 305 248, 290 238, 275 228
           C 260 220, 240 220, 225 228
           C 210 238, 195 248, 172 248
           C 155 248, 138 236, 132 220
           C 124 200, 130 178, 145 166
           C 145 142, 164 122, 184 118
           C 195 95, 225 82, 250 82 Z"
        fill={`url(#rnForest-${variant})`}
      />

      {/* Canopy Highlight Layers */}
      <path d="M 250 86 C 268 86, 288 98, 296 114 C 285 120, 268 124, 250 124 C 232 124, 215 120, 204 114 C 212 98, 232 86, 250 86 Z" fill={`url(#rnLeaf2-${variant})`} opacity="0.9" />
      <path d="M 184 124 C 205 124, 222 138, 226 156 C 204 162, 178 162, 158 152 C 158 136, 170 124, 184 124 Z" fill={`url(#rnLeaf1-${variant})`} />
      <path d="M 148 170 C 168 170, 182 186, 182 202 C 160 208, 140 204, 134 190 C 132 180, 138 170, 148 170 Z" fill={`url(#rnLeaf2-${variant})`} opacity="0.85" />
      <path d="M 316 124 C 330 124, 342 136, 342 152 C 322 162, 296 162, 274 156 C 278 138, 295 124, 316 124 Z" fill={`url(#rnLeaf1-${variant})`} />
      <path d="M 352 170 C 362 170, 368 180, 366 190 C 360 204, 340 208, 318 202 C 318 186, 332 170, 352 170 Z" fill={`url(#rnLeaf2-${variant})`} opacity="0.85" />

      {/* Outer Stylized Botanical Leaves */}
      <path d="M 112 186 C 128 172, 146 178, 148 194 C 132 198, 118 194, 112 186 Z" fill={`url(#rnGoldRing-${variant})`} />
      <path d="M 132 140 C 146 128, 164 132, 166 148 C 150 152, 138 148, 132 140 Z" fill={`url(#rnLeaf2-${variant})`} />
      <path d="M 172 100 C 184 86, 202 92, 202 108 C 188 110, 178 106, 172 100 Z" fill={`url(#rnGoldRing-${variant})`} />

      <path d="M 388 186 C 382 194, 368 198, 352 194 C 354 178, 372 172, 388 186 Z" fill={`url(#rnGoldRing-${variant})`} />
      <path d="M 368 140 C 362 148, 350 152, 334 148 C 336 132, 354 128, 368 140 Z" fill={`url(#rnLeaf2-${variant})`} />
      <path d="M 328 100 C 322 106, 312 110, 298 108 C 298 92, 316 86, 328 100 Z" fill={`url(#rnGoldRing-${variant})`} />

      {/* ================= TRUNK & BRANCHES ================= */}
      <path
        d="M 242 252 
           C 243 215, 238 185, 226 165
           C 236 172, 244 175, 250 175
           C 256 175, 264 172, 274 165
           C 262 185, 257 215, 258 252 Z"
        fill={`url(#rnGoldRing-${variant})`}
      />
      <path d="M 240 210 C 220 198, 192 192, 164 198 C 182 188, 210 186, 234 195 Z" fill={`url(#rnGoldRing-${variant})`} />
      <path d="M 260 210 C 280 198, 308 192, 336 198 C 318 188, 290 186, 266 195 Z" fill={`url(#rnGoldRing-${variant})`} />
      <path d="M 247 175 L 250 128 L 253 175 Z" fill={`url(#rnGoldRing-${variant})`} />

      {/* ================= ROOTS NETWORK ================= */}
      <path d="M 245 252 C 246 295, 244 345, 250 395 C 256 345, 254 295, 255 252 Z" fill={`url(#rnRootGold-${variant})`} />
      <path d="M 248 395 L 250 412 L 252 395 Z" fill={`url(#rnRootGold-${variant})`} />

      <path d="M 244 254 C 235 290, 205 330, 168 368 C 185 340, 222 298, 238 256 Z" fill={`url(#rnRootGold-${variant})`} />
      <path d="M 198 316 C 172 340, 142 355, 114 366 C 136 352, 168 335, 190 310 Z" fill={`url(#rnRootGold-${variant})`} />
      <path d="M 174 360 C 196 385, 220 405, 242 414 C 224 404, 198 384, 178 358 Z" fill={`url(#rnRootGold-${variant})`} />

      <path d="M 256 254 C 265 290, 295 330, 332 368 C 315 340, 278 298, 262 256 Z" fill={`url(#rnRootGold-${variant})`} />
      <path d="M 302 316 C 328 340, 358 355, 386 366 C 364 352, 332 335, 310 310 Z" fill={`url(#rnRootGold-${variant})`} />
      <path d="M 326 360 C 304 385, 280 405, 258 414 C 276 404, 302 384, 322 358 Z" fill={`url(#rnRootGold-${variant})`} />

      <path d="M 238 254 C 200 262, 150 268, 92 278 C 135 268, 185 260, 234 256 Z" fill={`url(#rnRootGold-${variant})`} />
      <path d="M 148 266 C 122 284, 98 310, 82 338 C 96 312, 122 288, 146 270 Z" fill={`url(#rnRootGold-${variant})`} />

      <path d="M 262 254 C 300 262, 350 268, 408 278 C 365 268, 315 260, 266 256 Z" fill={`url(#rnRootGold-${variant})`} />
      <path d="M 352 266 C 378 284, 402 310, 418 338 C 404 312, 378 288, 354 270 Z" fill={`url(#rnRootGold-${variant})`} />

      {/* Subtle lower botanical arc */}
      <path d="M 120 372 C 160 412, 205 428, 250 428 C 295 428, 340 412, 380 372" fill="none" stroke={`url(#rnGoldRing-${variant})`} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    </svg>
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
