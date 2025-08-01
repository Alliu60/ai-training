import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: 将 'https://your-website-url.com' 替换为您的真实域名
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

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}