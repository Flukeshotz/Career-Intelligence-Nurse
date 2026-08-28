import { nanoid } from 'nanoid';

export function createShareToken(): string {
  return nanoid(10);
}

export function buildOpportunityShareUrl(
  profession: string,
  type: 'jobs' | 'exams',
  slug: string,
  shareToken?: string,
  baseUrl: string = ''
): string {
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  const url = `${base}/${profession}/${type}/${slug}`;
  return shareToken ? `${url}?s=${shareToken}` : url;
}

export function buildWhatsAppShareUrl(options: {
  title: string;
  employerOrOrg: string;
  deadline?: string | null;
  location?: string | null;
  url: string;
}): string {
  const parts: string[] = [];
  parts.push(`📢 *${options.title}*`);
  parts.push(`🏥 ${options.employerOrOrg}`);
  if (options.location) {
    parts.push(`📍 ${options.location}`);
  }
  if (options.deadline) {
    const formatted = new Date(options.deadline).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    parts.push(`⏳ Deadline: ${formatted}`);
  }
  parts.push(`\n👉 Check eligibility & details: ${options.url}`);

  const message = parts.join('\n');
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

export function buildTelegramShareUrl(url: string, text: string): string {
  return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
}
