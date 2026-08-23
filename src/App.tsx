/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CoverSection } from './components/sections/CoverSection';
import { Section00Index } from './components/sections/Section00Index';
import { Section01About } from './components/sections/Section01About';
import { Section02WhyUs } from './components/sections/Section02WhyUs';
import { Section03Services } from './components/sections/Section03Services';
import { Section04Nurseries } from './components/sections/Section04Nurseries';
import { SectionCapabilities } from './components/sections/SectionCapabilities';
import { Section05Products } from './components/sections/Section05Products';
import { Section06Projects } from './components/sections/Section06Projects';
import { Section07Process } from './components/sections/Section07Process';
import { Section08Quality } from './components/sections/Section08Quality';
import { Section09Achievements } from './components/sections/Section09Achievements';
import { Section10Gallery } from './components/sections/Section10Gallery';
import { Section11Contact } from './components/sections/Section11Contact';
import { PdfGenerator } from './components/ui/PdfGenerator';
import { GridToggle } from './components/ui/GridToggle';
import { BotanicalBackground } from './components/ui/BotanicalBackground';

const CatalogSeparator = () => (
  <div className="w-full max-w-[297mm] mx-auto py-6 print:hidden flex items-center justify-center opacity-70">
    <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-brand-gold/60"></div>
    <div className="mx-6 text-brand-gold/80 text-xs tracking-[0.3em] uppercase">Section</div>
    <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-brand-gold/60"></div>
  </div>
);

export default function App() {
  // Centralized page numbering computation
  // Ensure that each section correctly expects its length and renders that many page components.
  const pageLengths = {
    index: 1, about: 3,
    whyUs: 2,
    services: 1,
    nurseries: 2,
    capabilities: 9, // SectionCapabilities generates 9 pages
    products: 19,    // Section05Products generates 1 (cover) + 9 categories * 2 = 19 pages
    projects: 1,
    process: 1,
    quality: 1,
    achievements: 1,
    gallery: 1,
    contact: 1
  };

  let currentPage = 1;
  const pIndex = currentPage; currentPage += pageLengths.index;
  const pAbout = currentPage; currentPage += pageLengths.about;
  const pWhyUs = currentPage; currentPage += pageLengths.whyUs;
  const pServices = currentPage; currentPage += pageLengths.services;
  const pNurseries = currentPage; currentPage += pageLengths.nurseries;
  const pCapabilities = currentPage; currentPage += pageLengths.capabilities;
  const pProducts = currentPage; currentPage += pageLengths.products;
  const pProjects = currentPage; currentPage += pageLengths.projects;
  const pProcess = currentPage; currentPage += pageLengths.process;
  const pQuality = currentPage; currentPage += pageLengths.quality;
  const pAchievements = currentPage; currentPage += pageLengths.achievements;
  const pGallery = currentPage; currentPage += pageLengths.gallery;
  const pContact = currentPage; currentPage += pageLengths.contact;
  
  const getRange = (start, length) => 
    length === 1 ? String(start).padStart(2, '0') : `${String(start).padStart(2, '0')}–${String(start + length - 1).padStart(2, '0')}`;

  const pageRanges = {
    about: getRange(pAbout, pageLengths.about),
    whyUs: getRange(pWhyUs, pageLengths.whyUs),
    services: getRange(pServices, pageLengths.services),
    nurseries: getRange(pNurseries, pageLengths.nurseries),
    capabilities: getRange(pCapabilities, pageLengths.capabilities),
    productsCover: getRange(pProducts, 1),
    palmTrees: getRange(pProducts + 1, 2),
    shadeTrees: getRange(pProducts + 3, 2),
    nativeTrees: getRange(pProducts + 5, 2),
    ornamentalTrees: getRange(pProducts + 7, 2),
    shrubs: getRange(pProducts + 9, 2),
    groundCovers: getRange(pProducts + 11, 2),
    seasonal: getRange(pProducts + 13, 2),
    desert: getRange(pProducts + 15, 2),
    climbing: getRange(pProducts + 17, 2),
    projects: getRange(pProjects, pageLengths.projects),
    process: getRange(pProcess, pageLengths.process),
    quality: getRange(pQuality, pageLengths.quality),
    achievements: getRange(pAchievements, pageLengths.achievements),
    gallery: getRange(pGallery, pageLengths.gallery),
    contact: getRange(pContact, pageLengths.contact)
  };

  return (
    <div className="min-h-screen bg-brand-beige w-full overflow-x-hidden selection:bg-brand-olive selection:text-white font-sans text-brand-dark relative pb-16">
      <BotanicalBackground />
      
      <div id="catalog-root" className="w-full relative z-10 flex flex-col items-center">
        <CoverSection />
        <CatalogSeparator />
        <Section00Index pageNumber={pIndex} pages={pageRanges} />
        <CatalogSeparator />
        <Section01About startPageNumber={pAbout} />
        <CatalogSeparator />
        <Section02WhyUs startPageNumber={pWhyUs} />
        <CatalogSeparator />
        <Section03Services startPageNumber={pServices} />
        <CatalogSeparator />
        <Section04Nurseries startPageNumber={pNurseries} />
        <CatalogSeparator />
        <SectionCapabilities startPageNumber={pCapabilities} />
        <CatalogSeparator />
        <Section05Products startPageNumber={pProducts} />
        <CatalogSeparator />
        <Section06Projects startPageNumber={pProjects} />
        <CatalogSeparator />
        <Section07Process startPageNumber={pProcess} />
        <CatalogSeparator />
        <Section08Quality startPageNumber={pQuality} />
        <CatalogSeparator />
        <Section09Achievements startPageNumber={pAchievements} />
        <CatalogSeparator />
        <Section10Gallery startPageNumber={pGallery} />
        <CatalogSeparator />
        <Section11Contact pageNumber={pContact} />
      </div>

      <PdfGenerator />
      <GridToggle />
    </div>
  );
}
