// After `vite build`: the existing React product catalog moves to /catalog/,
// and the new company profile viewer (profile-site/) becomes the site root.
import { cpSync, mkdirSync, renameSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
if (!existsSync(join(dist, 'index.html'))) throw new Error('dist/index.html missing — run vite build first');
mkdirSync(join(dist, 'catalog'), { recursive: true });
renameSync(join(dist, 'index.html'), join(dist, 'catalog', 'index.html'));
cpSync('profile-site', dist, { recursive: true });
console.log('Assembled: / = company profile, /catalog/ = product catalog');
