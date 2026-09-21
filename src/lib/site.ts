/** One place for the public site address. Set NEXT_PUBLIC_SITE_URL when a custom domain goes live. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://career-intelligence-nurse.vercel.app').replace(/\/+$/, '');
