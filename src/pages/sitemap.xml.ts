import type { APIRoute } from 'astro';
import { MARKETING_URL } from '../config/urls';

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${MARKETING_URL.tr}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="${MARKETING_URL.tr}" />
    <xhtml:link rel="alternate" hreflang="en" href="${MARKETING_URL.en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${MARKETING_URL.en}" />
  </url>
  <url>
    <loc>${MARKETING_URL.en}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="${MARKETING_URL.tr}" />
    <xhtml:link rel="alternate" hreflang="en" href="${MARKETING_URL.en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${MARKETING_URL.en}" />
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
