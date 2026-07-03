#!/usr/bin/env node
/**
 * public/sitemap.xml を data/courses.ts の学校一覧から自動生成する。
 * 学校を追加したら `node scripts/generate-sitemap.js` を実行して再生成すること。
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE_URL = 'https://exam.zaibase.group';

const coursesContent = fs.readFileSync(path.join(ROOT, 'data/courses.ts'), 'utf8');
const keys = [...coursesContent.matchAll(/key:\s*'([a-zA-Z0-9-]+)'/g)].map((m) => m[1]);

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'weekly' },
  ...keys.map((k) => ({ loc: `${BASE_URL}/school/${k}`, priority: '0.8', changefreq: 'monthly' })),
];

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n') +
  '\n</urlset>\n';

fs.writeFileSync(path.join(ROOT, 'public/sitemap.xml'), xml);
console.log(`Written ${urls.length} URLs to public/sitemap.xml`);
