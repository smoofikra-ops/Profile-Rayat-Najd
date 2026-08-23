import React, { useState } from 'react';
import { Printer, Loader2 } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

export function PdfGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    
    // Add a class to hide non-essential elements before generation
    document.body.classList.add('pdf-export-mode');

    const element = document.getElementById('catalog-root');
    
    const opt: any = {
      margin:       0,
      filename:     'Rayat-Najd-Premium-Catalog.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' },
      pagebreak:    { mode: ['css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      document.body.classList.remove('pdf-export-mode');
      setIsGenerating(false);
    }
  };

  return (
    <button 
      onClick={generatePDF}
      disabled={isGenerating}
      className="fixed bottom-8 right-8 z-50 bg-brand-dark/90 hover:bg-brand-olive text-brand-beige p-4 rounded-full shadow-3d shadow-3d-hover transition-all duration-300 no-print flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] backdrop-blur-md border border-brand-warm/20 disabled:opacity-50 disabled:cursor-not-allowed group"
      aria-label="Generate PDF"
    >
      {isGenerating ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <Printer size={18} className="group-hover:scale-110 transition-transform duration-300 icon-shadow-3d" />
      )}
      <span className="hidden md:inline-block pr-2 text-shadow-3d">
        {isGenerating ? 'Generating...' : 'Generate PDF'}
      </span>
    </button>
  );
}
