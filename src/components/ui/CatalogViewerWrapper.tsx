import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

// Canonical A4 Landscape width: 297mm at standard 96 DPI CSS pixels (297 * 96 / 25.4)
export const CANONICAL_PAGE_WIDTH = 297 * (96 / 25.4); // ~1122.519685 px
export const CANONICAL_PAGE_HEIGHT = 210 * (96 / 25.4); // ~793.700787 px
export const DESKTOP_BREAKPOINT = 1123; // Breakpoint below which mobile proportional scaling is applied

interface CatalogViewerWrapperProps {
  children: React.ReactNode;
}

export function CatalogViewerWrapper({ children }: CatalogViewerWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const [scaleState, setScaleState] = useState(() => {
    if (typeof window === 'undefined') {
      return { scale: 1, isMobile: false, offsetX: 0, scaledHeight: 0 };
    }
    const viewportWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth || window.innerWidth
    );
    if (viewportWidth < DESKTOP_BREAKPOINT) {
      const scale = viewportWidth / CANONICAL_PAGE_WIDTH;
      return {
        scale,
        isMobile: true,
        offsetX: 0,
        scaledHeight: 0
      };
    }
    return { scale: 1, isMobile: false, offsetX: 0, scaledHeight: 0 };
  });

  const updateScaleAndHeight = () => {
    // If in PDF generation mode, do not scale
    if (typeof document !== 'undefined' && document.body.classList.contains('pdf-export-mode')) {
      setScaleState({
        scale: 1,
        isMobile: false,
        offsetX: 0,
        scaledHeight: 0
      });
      return;
    }

    const viewportWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth || window.innerWidth
    );

    if (viewportWidth < DESKTOP_BREAKPOINT) {
      // Proportional scale to fit full landscape page within viewport
      const scale = viewportWidth / CANONICAL_PAGE_WIDTH;
      const scaledWidth = CANONICAL_PAGE_WIDTH * scale;
      // Mathematical centering offset (0 when scaledWidth equals viewportWidth)
      const offsetX = Math.max(0, (viewportWidth - scaledWidth) / 2);

      const unscaledHeight = catalogRef.current?.offsetHeight || catalogRef.current?.scrollHeight || 0;
      const scaledHeight = unscaledHeight > 0 ? Math.ceil(unscaledHeight * scale) : 0;

      setScaleState({
        scale,
        isMobile: true,
        offsetX,
        scaledHeight
      });
    } else {
      // Desktop breakpoint: exactly 1.0 scale (unchanged desktop rendering)
      setScaleState({
        scale: 1,
        isMobile: false,
        offsetX: 0,
        scaledHeight: 0
      });
    }
  };

  useLayoutEffect(() => {
    updateScaleAndHeight();
  }, []);

  useEffect(() => {
    updateScaleAndHeight();

    const handleResize = () => {
      updateScaleAndHeight();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    window.addEventListener('load', handleResize, { passive: true });

    // Observe catalog content size changes (e.g. image loads, fonts)
    let resizeObserver: ResizeObserver | null = null;
    if (catalogRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateScaleAndHeight();
      });
      resizeObserver.observe(catalogRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('load', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="catalog-viewport-wrapper w-full relative flex justify-center"
      style={
        scaleState.isMobile
          ? {
              width: '100%',
              height: scaleState.scaledHeight > 0 ? `${scaleState.scaledHeight}px` : 'auto',
              position: 'relative',
              overflow: 'visible'
            }
          : {
              width: '100%'
            }
      }
    >
      <div
        id="catalog-root"
        ref={catalogRef}
        className="w-full relative z-10 flex flex-col items-center"
        style={
          scaleState.isMobile
            ? {
                width: '297mm',
                position: 'absolute',
                top: 0,
                left: 0,
                transformOrigin: '0 0',
                transform: `translate3d(${scaleState.offsetX}px, 0, 0) scale(${scaleState.scale})`,
                willChange: 'transform'
              }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
