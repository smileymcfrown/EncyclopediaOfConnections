// Render the drawn renders (R35): node render.mjs [page ...] [--preview DIR] [--dry]
// Renders models/<page>.js (all of them if no page is named) in stage.html with headless Chromium
// and writes content/media/render/<page>.webp, plus content/media/render/renders.json (each page's
// alt text, kind and note, read by tools/make_entries.py). --preview also writes <page>.png to DIR;
// --dry writes only the previews (for trying a model out without touching content/).
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..', '..', 'content', 'media', 'render');
const args = process.argv.slice(2);
const pi = args.indexOf('--preview');
const preview = pi >= 0 ? args.splice(pi, 2)[1] : null;
const di = args.indexOf('--dry');
const dry = di >= 0 && args.splice(di, 1).length > 0;
if (dry && !preview) { console.log('--dry needs --preview DIR'); process.exit(2); }
const pages = args.length ? args : readdirSync(join(HERE, 'models')).filter((f) => f.endsWith('.js') && !f.startsWith('_')).map((f) => f.slice(0, -3)).sort();

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json' };
const server = createServer((req, res) => {
  const p = join(HERE, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!p.startsWith(HERE) || !existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[extname(p)] || 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;

mkdirSync(OUT, { recursive: true });
if (preview) mkdirSync(preview, { recursive: true });
const metaFile = join(OUT, 'renders.json');
const meta = existsSync(metaFile) ? JSON.parse(readFileSync(metaFile, 'utf8')) : {};
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
page.on('pageerror', (e) => console.log('page error:', e.message));
let failed = 0;
for (const p of pages) {
  await page.goto(`http://127.0.0.1:${port}/stage.html?model=${encodeURIComponent(p)}`);
  await page.waitForFunction(() => window.result, null, { timeout: 120000 });
  const r = await page.evaluate(() => window.result);
  if (!r.ok) { console.log(`${p}: FAILED\n${r.error}`); failed++; continue; }
  if (!r.meta.alt) { console.log(`${p}: FAILED: the model has no alt text`); failed++; continue; }
  if (!dry) writeFileSync(join(OUT, p + '.webp'), Buffer.from(r.webp.split(',')[1], 'base64'));
  if (preview) writeFileSync(join(preview, p + '.png'), Buffer.from(r.png.split(',')[1], 'base64'));
  meta[p] = r.meta;
  console.log(`${p}: ok`);
}
if (!dry) writeFileSync(metaFile, JSON.stringify(Object.fromEntries(Object.entries(meta).sort()), null, 1) + '\n');
await browser.close();
server.close();
process.exit(failed ? 1 : 0);
