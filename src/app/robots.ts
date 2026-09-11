import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Uses the environment variable if deployed, otherwise falls back to localhost
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qiskit-fall-fest-2026.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
