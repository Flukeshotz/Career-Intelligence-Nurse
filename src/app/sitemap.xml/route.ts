import { SITE_URL } from '@/lib/site';
import { INITIAL_JOBS, INITIAL_EXAMS } from '@/lib/mock-data';
import { getTrust } from '@/lib/verification';

export async function GET() {
  const baseUrl = SITE_URL;
  const now = new Date().toISOString();

  const staticUrls = [
    { url: `${baseUrl}/nursing`, lastMod: now, changeFreq: 'daily', priority: '1.0' },
    { url: `${baseUrl}/nursing/jobs`, lastMod: now, changeFreq: 'daily', priority: '0.9' },
    { url: `${baseUrl}/nursing/exams`, lastMod: now, changeFreq: 'daily', priority: '0.9' },
    { url: `${baseUrl}/nursing/upcoming-exams`, lastMod: now, changeFreq: 'daily', priority: '0.9' },
  ];

  const jobUrls = INITIAL_JOBS.filter((job) => !getTrust(job.id).suppressFromListings).map((job) => ({
    url: `${baseUrl}/${job.professionCode}/jobs/${job.slug}`,
    lastMod: new Date(job.lastVerified).toISOString(),
    changeFreq: 'daily',
    priority: '0.8',
  }));

  const examUrls = INITIAL_EXAMS.filter((exam) => !getTrust(exam.id).suppressFromListings).map((exam) => ({
    url: `${baseUrl}/${exam.professionCode}/exams/${exam.slug}`,
    lastMod: new Date(exam.lastVerified).toISOString(),
    changeFreq: 'daily',
    priority: '0.8',
  }));

  const allUrls = [...staticUrls, ...jobUrls, ...examUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastMod}</lastmod>
    <changefreq>${u.changeFreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
