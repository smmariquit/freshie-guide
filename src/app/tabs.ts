// To find a tab's googleTabId:
//   1. Open the Google Doc in your browser
//   2. Click on the tab you want
//   3. Copy the `tab` query parameter from the URL (e.g. ?tab=t.ABC123)
//   4. Paste the value (e.g. "t.ABC123") as the googleTabId below

export interface Tab {
  slug: string;
  label: string;
  /** The `tab` query-param value from the Google Doc URL, e.g. "t.0" */
  googleTabId: string;
}

const DOC_ID = "1AtzyVcQGWWCwJFFzmE8ZBTDNSVMQPaRzd8TYhlJFnWk";

export const TABS: Tab[] = [
  { slug: "overview",   label: "Overview",   googleTabId: "t.0" },
  { slug: "academics",  label: "Academics",  googleTabId: "t.1" },
  { slug: "orgs",       label: "Orgs",       googleTabId: "t.2" },
  { slug: "housing",    label: "Housing",    googleTabId: "t.3" },
  { slug: "faq",        label: "FAQ",        googleTabId: "t.4" },
];

export function getPreviewUrl(tab: Tab): string {
  return `https://docs.google.com/document/d/${DOC_ID}/preview?tab=${tab.googleTabId}`;
}

export function getViewUrl(tab: Tab): string {
  return `https://docs.google.com/document/d/${DOC_ID}/edit?tab=${tab.googleTabId}`;
}
