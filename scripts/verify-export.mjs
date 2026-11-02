import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const origin = 'https://jester-portfolio.vercel.app';
const routes = ['/', '/work/baxterip', '/work/iris-bot', '/work/portfolio'];
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
const titles = new Set();
for (const route of routes) {
  const file = route === '/' ? 'out/index.html' : `out${route}.html`;
  const html = readFileSync(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `Unique title missing: ${route}`);
  titles.add(title);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One H1 required: ${route}`);
  assert(html.includes(`rel="canonical" href="${origin}${route === '/' ? '' : route}"`) || html.includes(`rel="canonical" href="${origin}${route}"`), `Canonical missing: ${route}`);
  assert(/<meta name="description" content="[^"]+"/.test(html), `Description missing: ${route}`);
  assert(html.includes('property="og:image"') && html.includes('/social-preview.png'), `Social image missing: ${route}`);
  assert(sitemap.includes(`<loc>${origin}${route === '/' ? '' : route}</loc>`), `Sitemap entry missing: ${route}`);
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert(jsonLd.length > 0, `Structured data missing: ${route}`);
  jsonLd.forEach(match => JSON.parse(match[1]));
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const target = decodeURIComponent(match[1]);
    if (target.startsWith('//')) continue;
    assert([join('out',target),join('out',`${target}.html`),join('out',target,'index.html')].some(existsSync), `Broken local resource ${target} in ${route}`);
  }
  console.log(`PASS ${route}: title, description, canonical, social image, structured data, sitemap, local resources`);
}
const home = readFileSync('out/index.html', 'utf8');
for (const text of ['BaxterIP','IRIS-BOT','Figma','Technical SEO','Sanity','October 2020']) assert(home.includes(text), `Static HTML missing content: ${text}`);
assert(readFileSync('out/robots.txt','utf8').includes(`Sitemap: ${origin}/sitemap.xml`));
assert(readFileSync('out/downloads/jester-pedrosa-profile.pdf').subarray(0,5).toString() === '%PDF-');
assert(existsSync('out/404.html'));
console.log('PASS crawlable content, robots.txt, PDF signature, and 404 export');
