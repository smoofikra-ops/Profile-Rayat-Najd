import { useState, useEffect } from 'react';
import { 
  subscribeToPdfState, 
  downloadCorporateProfilePdf, 
  DownloadSource 
} from '../utils/pdfDownload';

export function usePdfDownload() {
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    return subscribeToPdfState(setIsGenerating);
  }, []);

  const handleDownload = (source?: DownloadSource) => {
    return downloadCorporateProfilePdf(source);
  };

  return {
    isGenerating,
    downloadPdf: handleDownload
  };
}
