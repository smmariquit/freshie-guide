// src/app/guides.ts

export interface GuideTab {
  slug: string;
  label: string;
  googleTabId?: string;
}

export interface GuideHeaderLink {
  label: string;
  href: string;
}

export interface Guide {
  slug: string;
  label: string;
  kind: "doc" | "native";
  docId?: string;
  tabs: GuideTab[];
  icon: string;
  description: string;
  headerLinks?: GuideHeaderLink[];
}

export const GUIDES: Guide[] = [
  {
    slug: "freshie",
    label: "Freshie Guide",
    kind: "doc",
    docId: "1AtzyVcQGWWCwJFFzmE8ZBTDNSVMQPaRzd8TYhlJFnWk",
    icon: "🌻",
    description:
      "A comprehensive handbook for incoming students of UPLB, covering academics, organizations, housing, and FAQs.",
    tabs: [{ slug: "guide", label: "Guide" }],
    headerLinks: [
      { label: "[ROOM_TBA]", href: "http://room-tba.stimmie.dev/" },
      { label: "[TRAIL]", href: "https://uplb-trail.vercel.app" },
      { label: "[UPSKED]", href: "https://upsked.com/uplb" },
    ],
  },
  {
    slug: "hackathons",
    label: "Hackathon Guide",
    kind: "doc",
    docId: "1cJya3Zb2ck9vkxIKc1LQjJomQS_LFtBOABlzHrb7Z5s",
    icon: "🏆",
    description:
      "A playbook and survival guide detailing strategies, tips, and guidelines for competing in and winning hackathons.",
    tabs: [{ slug: "guide", label: "Guide" }],
  },
  {
    slug: "tech",
    label: "Tech Guide",
    kind: "doc",
    docId: "1cJya3Zb2ck9vkxIKc1LQjJomQS_LFtBOABlzHrb7Z5s",
    icon: "💻",
    description:
      "A collection of tech guides, tutorials, system setups, and development practices.",
    tabs: [{ slug: "guide", label: "Guide" }],
  },
  {
    slug: "resume",
    label: "Resume & Professional Identity",
    kind: "doc",
    docId: "1H6wD2lv-TLf5FDO4KJR56UvstU00o-Mu9n3KW_CO1So",
    icon: "📄",
    description:
      "How to present yourself on paper and online: resumes, CVs, LinkedIn, GitHub, and the stuff that makes you more than a bullet list.",
    tabs: [{ slug: "guide", label: "Guide" }],
    headerLinks: [
      { label: "[CAREER]", href: "https://stimmie.dev/career" },
      { label: "[CV]", href: "https://cv.stimmie.dev" },
      { label: "[BOOK_CALL]", href: "https://cal.stimmie.dev" },
      { label: "[LINKEDIN]", href: "https://www.linkedin.com/in/stimmie/" },
    ],
  },
];

export function getPreviewUrl(guide: Guide, tab: GuideTab): string {
  const base = `https://docs.google.com/document/d/${guide.docId}/preview`;
  return tab.googleTabId ? `${base}?tab=${tab.googleTabId}` : base;
}

export function getViewUrl(guide: Guide, tab: GuideTab): string {
  const base = `https://docs.google.com/document/d/${guide.docId}/edit`;
  return tab.googleTabId ? `${base}?tab=${tab.googleTabId}` : base;
}

export function getHeaderLinks(
  guide: Guide,
  tab: GuideTab,
): GuideHeaderLink[] {
  const links = [...(guide.headerLinks ?? [])];

  if (guide.kind === "doc" && guide.docId) {
    links.push({ label: "[VIEW_DOC]", href: getViewUrl(guide, tab) });
  }

  return links;
}
