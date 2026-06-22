// Helpers for working with the per-locale content collections.
// Entry ids look like "networking.th" (or "subdir/foo.en"). These split that
// into a clean slug + locale, and filter a collection to one locale.
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { defaultLang } from '../i18n/ui';

export interface ParsedEntryId {
  slug: string; // filename without the locale suffix, e.g. "networking"
  locale: Lang; // 'th' | 'en', defaults to the default locale if absent
}

/**
 * Parse an Astro content entry id into { slug, locale }.
 *
 * Astro 5's glob loader slugifies the file id, which DROPS the dot in the
 * per-locale suffix: `networking.th.md` → id `networkingth` (not `networking.th`).
 * So we match either the dotted form (`networking.th`) or the slugified form
 * (`networkingth`) and strip the trailing locale token.
 */
export function parseEntryId(id: string): ParsedEntryId {
  // Dotted form first (in case a loader preserves it).
  const dotted = id.match(/^(.*)\.(th|en)$/);
  if (dotted) {
    return { slug: dotted[1], locale: dotted[2] as Lang };
  }
  // Slugified form: trailing `th`/`en` with no separator.
  const slugified = id.match(/^(.*?)(th|en)$/);
  if (slugified && slugified[1].length > 0) {
    return { slug: slugified[1], locale: slugified[2] as Lang };
  }
  return { slug: id, locale: defaultLang };
}

/** The clean slug for a services/projects entry (drops the locale suffix). */
export function entrySlug(
  entry: CollectionEntry<'services'> | CollectionEntry<'projects'>,
): string {
  // Use the entry's own `locale` field to strip the suffix off the id robustly,
  // independent of how the loader slugified it.
  const locale = entry.data.locale as Lang;
  const id = entry.id;
  if (id.endsWith(`.${locale}`)) return id.slice(0, -(locale.length + 1));
  if (id.endsWith(locale)) return id.slice(0, -locale.length);
  return parseEntryId(id).slug;
}

/** Keep only the entries for a given locale (and drop drafts in production). */
export function filterByLocale<
  T extends CollectionEntry<'services'> | CollectionEntry<'projects'>,
>(entries: T[], lang: Lang): T[] {
  return entries
    .filter((e) => e.data.locale === lang && !e.data.draft)
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}
