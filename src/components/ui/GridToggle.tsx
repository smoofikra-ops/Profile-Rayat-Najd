import React, { useState, useEffect } from 'react';
import { Grid3X3 } from 'lucide-react';

export function GridToggle() {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    if (showGrid) {
      document.body.classList.add('show-grid');
    } else {
      document.body.classList.remove('show-grid');
    }
  }, [showGrid]);

  return (
    <button
      onClick={() => setShowGrid(!showGrid)}
      className={`fixed bottom-24 right-8 z-50 p-4 rounded-full shadow-3d transition-all duration-300 no-print flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] backdrop-blur-md border border-brand-warm/20 group ${showGrid ? 'bg-brand-gold text-white' : 'bg-white text-brand-dark hover:bg-brand-light'}`}
      aria-label="Toggle Baseline Grid"
    >
      <Grid3X3 size={18} className="icon-shadow-3d group-hover:scale-110 transition-transform duration-300" />
      <span className="hidden md:inline-block pr-2">
        {showGrid ? 'Hide Grid' : 'Show Grid'}
      </span>
    </button>
  );
}
