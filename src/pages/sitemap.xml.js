import { estudos } from '../data/estudos.js';
const BASE = 'https://vektorgis.com';
export function GET() {
  const fixas = ['', '/galeria', '/pedir', '/privacidade'].map((p) => ({ loc: BASE + p, data: '2026-10-25' }));
  const est = estudos.map((e) => ({ loc: `${BASE}/estudos/${e.slug}`, data: e.data }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    [...fixas, ...est].map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.data}</lastmod></url>`).join('\n') + '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
