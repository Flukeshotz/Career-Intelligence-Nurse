/**
 * Generate stable, human-readable slugs for opportunities.
 * Format: title + organisation/employer + year (e.g. aiims-delhi-nursing-officer-2026)
 */
export function generateSlug(title: string, organisation: string, dateOrYear?: string | Date | number | null): string {
  const cleanTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  const cleanOrg = organisation
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  let year = new Date().getFullYear().toString();
  if (dateOrYear) {
    if (typeof dateOrYear === 'number') {
      year = dateOrYear.toString();
    } else if (typeof dateOrYear === 'string') {
      const match = dateOrYear.match(/\d{4}/);
      if (match) year = match[0];
    } else if (dateOrYear instanceof Date && !isNaN(dateOrYear.getTime())) {
      year = dateOrYear.getFullYear().toString();
    }
  }

  // If title already contains year, avoid duplicate
  if (cleanTitle.includes(year)) {
    return `${cleanOrg}-${cleanTitle}`.replace(/--+/g, '-').replace(/^-|-$/g, '');
  }

  return `${cleanOrg}-${cleanTitle}-${year}`.replace(/--+/g, '-').replace(/^-|-$/g, '');
}
