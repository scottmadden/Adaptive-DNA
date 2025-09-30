import fs from 'node:fs/promises';
import crypto from 'node:crypto';

const targets = [
  { file: 'docs/openapi.html', tags: [
      { attr: 'src', url: 'https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js' },
  ]},
  { file: 'docs/swagger.html', tags: [
      { attr: 'href', url: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css' },
      { attr: 'src',  url: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js' },
      { attr: 'src',  url: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-standalone-preset.js' },
  ]},
];

async function sri(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const hash = crypto.createHash('sha384').update(buf).digest('base64');
  return `sha384-${hash}`;
}

for (const t of targets) {
  let html = await fs.readFile(t.file, 'utf8');
  for (const tag of t.tags) {
    const integrity = await sri(tag.url);
    const rx = new RegExp(`(${tag.attr}="${tag.url.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}")(?![^>]*integrity=)`);
    html = html.replace(rx, `$1 integrity="${integrity}" crossorigin="anonymous"`);
    console.log(`Injected SRI for ${tag.url} in ${t.file}`);
  }
  await fs.writeFile(t.file, html, 'utf8');
}
console.log('SRI injection complete.');
