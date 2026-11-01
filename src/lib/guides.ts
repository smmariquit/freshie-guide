// src/lib/guides.ts

export interface GuideTab {
  slug: string;
  label: string;
  googleTabId?: string;
  /** slug of the top-level tab this one sits under (shown as a sub-tab) */
  parent?: string;
  /** the doc tab opens with its own title line; below ~1100px we crop Google's tab chip
   *  (it covers that line) and show the title ourselves */
  titled?: boolean;
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
  ogImage?: string;
  badge?: string;
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
      { label: "Room TBA", href: "https://room-tba.uplb.tools" },
      { label: "Trail", href: "https://uplb-trail.vercel.app" },
    ],
  },
  {
    slug: "hackathons",
    label: "Hackathon Guide",
    kind: "doc",
    docId: "1cJya3Zb2ck9vkxIKc1LQjJomQS_LFtBOABlzHrb7Z5s",
    icon: "🏆",
    ogImage: "/og/hackathons.jpg",
    badge: "v1.0",
    description:
      "A free playbook for joining and winning hackathons: team building, a day-of plan, templates, my full history and 16 sample projects.",
    tabs: [
      { slug: "start", label: "Start here", googleTabId: "t.0" },
      { slug: "history", label: "My history", googleTabId: "t.g1fclldhwua3" },
      { slug: "samples", label: "Samples", googleTabId: "t.bdfczov910l7", titled: true },
      { slug: "software-products", label: "Software", googleTabId: "t.t7nb4ajnravk", parent: "samples", titled: true },
      { slug: "pitch-decks", label: "Pitch decks", googleTabId: "t.75afdatjuapn", parent: "samples", titled: true },
      { slug: "pitch-videos", label: "Pitch videos", googleTabId: "t.o9b3dg5rb4d1", parent: "samples", titled: true },
      { slug: "prototypes", label: "Prototypes", googleTabId: "t.udvwiwivkx5w", parent: "samples", titled: true },
      { slug: "briefers", label: "Briefers", googleTabId: "t.x9q5z7qri449", parent: "samples" },
      { slug: "illumina", label: "Illumina", googleTabId: "t.3o43od4o2xu8", parent: "samples" },
      { slug: "aquaguard", label: "AquaGuard", googleTabId: "t.q5xu2tbzapw", parent: "samples" },
      { slug: "resources", label: "Resources", googleTabId: "t.httv08bv1acd", titled: true },
      { slug: "ui-ux", label: "UI/UX", googleTabId: "t.2xo8xloew3or", parent: "resources", titled: true },
      { slug: "developer-tools", label: "Developer tools", googleTabId: "t.6fqxcjxbq9or", parent: "resources", titled: true },
      { slug: "software", label: "Software", googleTabId: "t.ofxp0ge89jgg", parent: "resources", titled: true },
      { slug: "web", label: "Web", googleTabId: "t.fd884egwbwg", parent: "resources", titled: true },
      { slug: "mobile", label: "Mobile", googleTabId: "t.y727igprr9jg", parent: "resources", titled: true },
      { slug: "data", label: "Data", googleTabId: "t.34eq3m7iaseo", parent: "resources", titled: true },
      { slug: "business", label: "Business", googleTabId: "t.ln77w6jxu39b", parent: "resources", titled: true },
      { slug: "hackathon-info", label: "Hackathon info", googleTabId: "t.em0ut7q43cph", parent: "resources", titled: true },
      { slug: "pitching", label: "Pitching", googleTabId: "t.x9idl025b0gq", parent: "resources", titled: true },
      { slug: "hardware", label: "Hardware", googleTabId: "t.eaxqknrtcdv9", parent: "resources", titled: true },
      { slug: "ideation-pm", label: "Ideation and PM", googleTabId: "t.1jw3zlm6aeua", parent: "resources", titled: true },
      { slug: "templates", label: "Templates", googleTabId: "t.b8ce0yldh1mj", titled: true },
      { slug: "find-hackathons", label: "Find hackathons", googleTabId: "t.wtdp07d5nbx8", titled: true },
      { slug: "faq", label: "FAQ", googleTabId: "t.5wfk8k8jzv8f", titled: true },
    ],
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
      { label: "Career", href: "https://stimmie.dev/career" },
      { label: "CV", href: "https://cv.stimmie.dev" },
      { label: "Book a call", href: "https://cal.stimmie.dev" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/stimmie/" },
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


  return links;
}

export function getTabHref(guide: Guide, tab: GuideTab): string {
  return tab.slug === guide.tabs[0].slug
    ? `/${guide.slug}/`
    : `/${guide.slug}/${tab.slug}/`;
}
