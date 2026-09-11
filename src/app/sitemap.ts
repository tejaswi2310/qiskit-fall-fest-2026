import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Uses the environment variable if deployed, otherwise falls back to localhost to avoid hardcoding fake URLs
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qiskit-fall-fest-2026.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
