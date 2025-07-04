/**
 * slugifySafe(string, options?)
 * Converts a string into a URL-safe slug
 */
export function slugifySafe(str, {
  replacement = '-',
  lower = true,
  maxLength
} = {}) {
  let slug = str.normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // remove diacritics
    .replace(/[^a-zA-Z0-9\u{1F300}-\u{1FAFF}]+/gu, replacement) // keep emoji & alphanum
    .replace(new RegExp(`${replacement}+`, 'g'), replacement) // collapse multiple
    .replace(new RegExp(`^${replacement}|${replacement}$`, 'g'), ''); // trim

  if (lower) slug = slug.toLowerCase();
  if (maxLength) slug = slug.substring(0, maxLength);
  return slug;
}
