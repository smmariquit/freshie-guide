// src/app/guides.ts

export interface GuideTab {
  slug: string;
  label: string;
  googleTabId?: string;
}

export interface Guide {
  slug: string;
  label: string;
  docId: string;
  tabs: GuideTab[];
  icon: string;
  description: string;
}

export const GUIDES: Guide[] = [
  {
    slug: "freshie",
    label: "Freshie Guide",
    docId: "1AtzyVcQGWWCwJFFzmE8ZBTDNSVMQPaRzd8TYhlJFnWk",
    icon: "🌻",
    description: "A comprehensive handbook for incoming students of UPLB, covering academics, organizations, housing, and FAQs.",
    tabs: [
      { slug: "guide",      label: "Guide" },
    ],
  },
  {
    slug: "hackathons",
    label: "Hackathon Guide",
    docId: "1cJya3Zb2ck9vkxIKc1LQjJomQS_LFtBOABlzHrb7Z5s",
    icon: "🏆",
    description: "A playbook and survival guide detailing strategies, tips, and guidelines for competing in and winning hackathons.",
    tabs: [
      { slug: "guide",      label: "Guide" },
    ],
  },
  {
    slug: "tech",
    label: "Tech Guide",
    docId: "1cJya3Zb2ck9vkxIKc1LQjJomQS_LFtBOABlzHrb7Z5s", // Placeholder docId for now
    icon: "💻",
    description: "A collection of tech guides, tutorials, system setups, and development practices.",
    tabs: [
      { slug: "guide",      label: "Guide" },
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
