# Rayat Najd — Company Profile v2

Single source: `profile.html` (28 landscape pages, 1920×1080 / 16:9).

Outputs (all generated from the same source):
- `export.js` → `out/Rayat-Najd-Company-Profile-PRINT.pdf` (full-resolution images) and `-EMAIL.pdf` (compressed images), both with clickable contact links.
- `render_digital.js` → `viewer/pages/*.webp`, `viewer/thumbs/*.webp`, `viewer/links.json` (link hotspots).
- `viewer/` → static interactive viewer (fit-to-page, zoom, lightbox, thumbnails, PDF download, print via the print PDF, WhatsApp / call / website). Deploy `viewer/` as a static site; it does not touch the production React app.

Tests: `test_viewer.js` (8 device sizes × pages 1/14/28, zoom, lightbox, navigation, links, download, print).
