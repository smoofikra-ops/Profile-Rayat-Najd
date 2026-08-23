const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

appContent = appContent.replace(
  "import { CoverSection } from './components/sections/CoverSection';",
  "import { CoverSection } from './components/sections/CoverSection';\nimport { Section00Index } from './components/sections/Section00Index';"
);

const oldPageLengths = `  const pageLengths = {
    about: 3,
    whyUs: 2,
    services: 2,
    nurseries: 2,
    capabilities: 9, // SectionCapabilities generates 9 pages
    products: 19,
    // Section05Products generates 1 (cover) + 9 categories * 2 = 19 pages
    projects: 2,
    process: 2,
    quality: 2,
    achievements: 1,
    gallery: 1,
    contact: 1
  };`;

const newPageLengths = `  const pageLengths = {
    index: 1,
    about: 3,
    whyUs: 2,
    services: 2,
    nurseries: 2,
    capabilities: 9, // SectionCapabilities generates 9 pages
    products: 19,
    // Section05Products generates 1 (cover) + 9 categories * 2 = 19 pages
    projects: 2,
    process: 2,
    quality: 2,
    achievements: 1,
    gallery: 1,
    contact: 1
  };`;

appContent = appContent.replace(oldPageLengths, newPageLengths);

const oldCurrentPage = `  let currentPage = 1;
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
  const pContact = currentPage; currentPage += pageLengths.contact;`;

const newCurrentPage = `  let currentPage = 1;
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
  
  const pageMap = {
    about: pAbout,
    whyUs: pWhyUs,
    services: pServices,
    nurseries: pNurseries,
    capabilities: pCapabilities,
    products: pProducts,
    projects: pProjects,
    process: pProcess,
    quality: pQuality,
    achievements: pAchievements,
    gallery: pGallery,
    contact: pContact
  };`;

appContent = appContent.replace(oldCurrentPage, newCurrentPage);

const oldRender = `<CoverSection />
        <CatalogSeparator />
        <Section01About startPageNumber={pAbout} />`;

const newRender = `<CoverSection />
        <CatalogSeparator />
        <Section00Index pageNumber={pIndex} pages={pageMap} />
        <CatalogSeparator />
        <Section01About startPageNumber={pAbout} />`;

appContent = appContent.replace(oldRender, newRender);

fs.writeFileSync('src/App.tsx', appContent);
