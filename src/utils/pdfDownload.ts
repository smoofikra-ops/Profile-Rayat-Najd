// @ts-ignore
import html2pdf from 'html2pdf.js';

export type DownloadSource = 
  | 'hero_download_button' 
  | 'sticky_download_button' 
  | 'mobile_header_button' 
  | 'floating_button';

type Listener = (isGenerating: boolean) => void;
const listeners = new Set<Listener>();
let isCurrentlyGenerating = false;

export function subscribeToPdfState(listener: Listener) {
  listeners.add(listener);
  listener(isCurrentlyGenerating);
  return () => {
    listeners.delete(listener);
  };
}

function setGeneratingState(generating: boolean) {
  isCurrentlyGenerating = generating;
  listeners.forEach((l) => l(generating));
}

export function trackPdfDownload(source: DownloadSource) {
  if (typeof window === 'undefined') return;

  const eventData = {
    event: 'profile_pdf_download',
    page: window.location.pathname || '/',
    device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
    source,
    timestamp: new Date().toISOString()
  };

  try {
    // 1. Google Tag Manager dataLayer
    if ((window as any).dataLayer && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push(eventData);
    }
    // 2. Google Analytics gtag
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'profile_pdf_download', eventData);
    }
  } catch (err) {
    console.debug('Analytics dispatch error:', err);
  }
}

/**
 * Executes the download of the approved Rayat Najd Corporate Profile PDF.
 * Uses dynamic high-fidelity generation via html2pdf with landscape A4 optimization.
 * Filename: rayat-najd-corporate-profile.pdf
 */
export async function downloadCorporateProfilePdf(
  source: DownloadSource = 'hero_download_button'
): Promise<void> {
  if (isCurrentlyGenerating) return;

  trackPdfDownload(source);
  setGeneratingState(true);

  // Add pdf-export-mode class to hide controls and unneeded UI
  document.body.classList.add('pdf-export-mode');

  const element = document.getElementById('catalog-root');

  const opt: any = {
    margin: 0,
    filename: 'rayat-najd-corporate-profile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
    pagebreak: { mode: ['css', 'legacy'] }
  };

  try {
    if (!element) {
      throw new Error('catalog-root element not found in DOM');
    }
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('PDF generation error, falling back to window.print():', error);
    // Safe fallback for restricted mobile browsers or memory-constrained environments
    window.print();
  } finally {
    document.body.classList.remove('pdf-export-mode');
    setGeneratingState(false);
  }
}
