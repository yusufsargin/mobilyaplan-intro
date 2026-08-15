import type { APIRoute } from 'astro';
import { MARKETING_URL } from '../config/urls';

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${MARKETING_URL.tr}sitemap.xml`,
    `Sitemap: ${MARKETING_URL.en}sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
