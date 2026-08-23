const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

const oldPageMap = `  const pageMap = {
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

const newPageMap = `  const getRange = (start, length) => 
    length === 1 ? String(start).padStart(2, '0') : \`\${String(start).padStart(2, '0')}–\${String(start + length - 1).padStart(2, '0')}\`;

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
  };`;

appContent = appContent.replace(oldPageMap, newPageMap);
appContent = appContent.replace('<Section00Index pageNumber={pIndex} pages={pageMap} />', '<Section00Index pageNumber={pIndex} pages={pageRanges} />');

fs.writeFileSync('src/App.tsx', appContent);
