export const ABACUS_BASE = "https://abacus.jasoncameron.dev";
export const SITE_VISITOR_KEY = "visitors";
export const VISITOR_STORAGE_PREFIX = "guide_visitor_last_counted";

export function getAbacusNamespace(): string {
  if (typeof window === "undefined") return "guide.stimmie.dev";
  return window.location.hostname.replace(/^www\./, "");
}

export function getAbacusKey(guideSlug?: string): string {
  return guideSlug ? `visitors-${guideSlug}` : SITE_VISITOR_KEY;
}

export function getVisitorStorageKey(guideSlug?: string): string {
  return guideSlug
    ? `${VISITOR_STORAGE_PREFIX}_${guideSlug}`
    : VISITOR_STORAGE_PREFIX;
}

export function getTodayKey(): string {
  return new Date().toLocaleDateString("en-CA");
}

export async function fetchAbacusCount(
  endpoint: "hit" | "get",
  namespace: string,
  key: string,
): Promise<number | null> {
  try {
    const res = await fetch(`${ABACUS_BASE}/${endpoint}/${namespace}/${key}`);
    if (!res.ok) return null;
    const data = (await res.json()) as { value?: number };
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}
