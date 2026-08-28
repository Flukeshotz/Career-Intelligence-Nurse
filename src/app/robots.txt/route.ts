export async function GET() {
  const robotsTxt = `# SkillCase Robots Policy
User-agent: *
Allow: /nursing/jobs/*
Allow: /nursing/exams/*
Allow: /nursing
Disallow: /api/*
Disallow: /admin/*
Disallow: /for-you
Disallow: /profile
Disallow: /cycles
Disallow: /alerts
Disallow: /*?s=*
Disallow: /*?share_token=*

# AI & LLM Assistants (GEO Visibility Loop 4)
User-agent: GPTBot
Allow: /nursing/jobs/*
Allow: /nursing/exams/*
Allow: /llms.txt

User-agent: PerplexityBot
Allow: /nursing/jobs/*
Allow: /nursing/exams/*
Allow: /llms.txt

Sitemap: https://skillcase.in/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
