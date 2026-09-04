import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Load logo
  const logoBuf = fs.readFileSync("public/brand/rayat-najd-logo-circular-transparent.png");
  const logoResized = await sharp(logoBuf)
    .resize(190, 190, { fit: "contain" })
    .png()
    .toBuffer();

  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#144131" />
      <stop offset="50%" stop-color="#0F2F23" />
      <stop offset="100%" stop-color="#091E16" />
    </linearGradient>
    <radialGradient id="centerGlow" cx="50%" cy="26%" r="55%">
      <stop offset="0%" stop-color="#1E5C46" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#091E16" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background Base -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <rect width="${width}" height="${height}" fill="url(#centerGlow)" />

  <!-- Outer Architectural Border -->
  <rect x="28" y="28" width="1144" height="574" rx="6" fill="none" stroke="#B8933D" stroke-width="1.5" stroke-opacity="0.4" />
  <rect x="36" y="36" width="1128" height="558" rx="4" fill="none" stroke="#B8933D" stroke-width="0.75" stroke-opacity="0.2" />

  <!-- Corner Accents -->
  <polygon points="28,28 34,28 28,34" fill="#B8933D" opacity="0.7" />
  <polygon points="1172,28 1166,28 1172,34" fill="#B8933D" opacity="0.7" />
  <polygon points="28,602 34,602 28,596" fill="#B8933D" opacity="0.7" />
  <polygon points="1172,602 1166,602 1172,596" fill="#B8933D" opacity="0.7" />

  <!-- Logo Frame & Rings (Logo at cx=600, cy=160) -->
  <circle cx="600" cy="160" r="106" fill="#0C261D" stroke="#B8933D" stroke-width="1.5" stroke-opacity="0.65" />
  <circle cx="600" cy="160" r="113" fill="none" stroke="#B8933D" stroke-width="0.75" stroke-dasharray="4 4" stroke-opacity="0.35" />

  <!-- Arabic Main Title -->
  <text x="600" y="332" text-anchor="middle" font-family="IBM Plex Sans Arabic, sans-serif" font-weight="700" font-size="52" fill="#FAF8F4" letter-spacing="1">رايات نجد</text>

  <!-- Gold Divider Line with Center Diamond -->
  <line x1="390" y1="358" x2="570" y2="358" stroke="#B8933D" stroke-width="1.2" stroke-opacity="0.75" />
  <polygon points="600,353 605,358 600,363 595,358" fill="#C5A253" />
  <line x1="630" y1="358" x2="810" y2="358" stroke="#B8933D" stroke-width="1.2" stroke-opacity="0.75" />

  <!-- Supporting Arabic Title -->
  <text x="600" y="408" text-anchor="middle" font-family="IBM Plex Sans Arabic, sans-serif" font-weight="600" font-size="28" fill="#D6B567">الملف التعريفي والكتالوج النباتي</text>

  <!-- English Subtitle -->
  <text x="600" y="446" text-anchor="middle" font-family="Montserrat, sans-serif" font-weight="600" font-size="13.5" letter-spacing="3.5" fill="#FAF8F4" fill-opacity="0.9">CORPORATE PROFILE &amp; PLANT CATALOG</text>

  <!-- Capabilities Pill -->
  <rect x="230" y="482" width="740" height="42" rx="21" fill="#143F30" stroke="#B8933D" stroke-width="1" stroke-opacity="0.4" />
  <text x="600" y="508" text-anchor="middle" font-family="IBM Plex Sans Arabic, sans-serif" font-weight="500" font-size="14.5" fill="#EAE6DA">اللاندسكيب  •  التشجير  •  المشاتل المركزية  •  أنظمة الري  •  نقل الأشجار المعمرة</text>

  <!-- Domain Branding Footer -->
  <text x="600" y="565" text-anchor="middle" font-family="Montserrat, sans-serif" font-weight="600" font-size="13" letter-spacing="2.5" fill="#B8933D">PROFILE.RAYATNAJD.COM</text>
</svg>`;

  const svgBuf = Buffer.from(svg);

  // Composite SVG and the logo
  const compositeImage = await sharp(svgBuf)
    .composite([
      {
        input: logoResized,
        top: 160 - 95,
        left: 600 - 95,
      }
    ])
    .png()
    .toBuffer();

  // Save PNG
  fs.writeFileSync("public/rayat-najd-profile-og-image.png", compositeImage);
  fs.writeFileSync("public/brand/rayat-najd-profile-og-image.png", compositeImage);

  // Save JPEG
  const jpegImage = await sharp(compositeImage)
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync("public/rayat-najd-profile-og-image.jpg", jpegImage);
  fs.writeFileSync("public/brand/rayat-najd-profile-og-image.jpg", jpegImage);

  console.log("Successfully generated OG images: PNG (" + compositeImage.length + " bytes), JPG (" + jpegImage.length + " bytes)");
}

createOgImage().catch(console.error);
