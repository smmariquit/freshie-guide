export const ABACUS_BASE = "https://abacus.jasoncameron.dev";
export const ABACUS_KEY = "visitors";
export const VISITOR_STORAGE_KEY = "guide_visitor_last_counted";

export function getAbacusNamespace(): string {
  if (typeof window === "undefined") return "guide.stimmie.dev";
  return window.location.hostname.replace(/^www\./, "");
}

export function getTodayKey(): string {
  return new Date().toLocaleDateString("en-CA");
}

export async function fetchAbacusCount(
  endpoint: "hit" | "get",
  namespace: string,
): Promise<number | null> {
  try {
    const res = await fetch(
      `${ABACUS_BASE}/${endpoint}/${namespace}/${ABACUS_KEY}`,
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { value?: number };
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}
