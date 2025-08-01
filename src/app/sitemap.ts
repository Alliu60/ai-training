import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: 在 Vercel 和 Netlify 的环境变量中设置 SITE_URL
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000';

  const staticRoutes = [
    '/',
    '/metasoAI',
    '/felo-ai',
    '/Tongyi-App',
    '/NotebookLM',
    '/aa-general',
    '/canva-code',
    '/education-prompt',
    '/Gamma-AI',
    '/gemini2_5',
    '/grok',
    '/Study-Gemini_NotebookLM'
  ];

  const sitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
