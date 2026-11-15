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
    badge: "v4.0",
    description:
      "A handbook for incoming UPLB students. It covers appeals, enrollment, scholarships, acads, every college, dorms and student life.",
    tabs: [
      { slug: "welcome", label: "Welcome", googleTabId: "t.o3qfs0vtwulq" },
      { slug: "basics", label: "The Basics", googleTabId: "t.x4v4n1hmvuo9", titled: true },
      { slug: "campus", label: "Campus", googleTabId: "t.bdt3h6xrtp23", parent: "basics" },
      { slug: "student-life", label: "Student life", googleTabId: "t.frxp489pw5wi", parent: "basics", titled: true },
      { slug: "faq", label: "FAQ", googleTabId: "t.jr9ha87f0n90", parent: "basics", titled: true },
      { slug: "resources", label: "Resources", googleTabId: "t.g3kiwn7bihy3", parent: "basics", titled: true },
      { slug: "enrollment", label: "Enrollment", googleTabId: "t.2l7i4xm13skk", titled: true },
      { slug: "appeals", label: "Appeals", googleTabId: "t.r2fgw0rk79ze", parent: "enrollment", titled: true },
      { slug: "medical-exam", label: "Medical exam", googleTabId: "t.oxv9unyjmo7y", parent: "enrollment", titled: true },
      { slug: "scholarships", label: "Scholarships", googleTabId: "t.8hyk875j9d0x", parent: "enrollment", titled: true },
      { slug: "dorms", label: "Dorms", googleTabId: "t.cyl9dnjsiuuh", parent: "enrollment", titled: true },
      { slug: "acads", label: "Acads", googleTabId: "t.e6y7tjk46qkw", titled: true },
      { slug: "ge-courses", label: "GE courses", googleTabId: "t.rxkupq3h722f", parent: "acads", titled: true },
      { slug: "feared-courses", label: "Feared courses", googleTabId: "t.hl3hrkdyp7f8", parent: "acads", titled: true },
      { slug: "shifting", label: "Shifting", googleTabId: "t.1wol48qfaop4", parent: "acads", titled: true },
      { slug: "second-sem", label: "Finals and second sem", googleTabId: "t.d1emg5gq51q2", parent: "acads", titled: true },
      { slug: "colleges", label: "Colleges", googleTabId: "t.vxs0un4kisbm" },
      { slug: "cafs", label: "CAFS", googleTabId: "t.49wk5lylll3j", parent: "colleges" },
      { slug: "bsac", label: "BS AgChem", googleTabId: "t.spy11llrzp5m", parent: "colleges" },
      { slug: "cas", label: "CAS", googleTabId: "t.4yjmcufxbcce", parent: "colleges" },
      { slug: "bscs", label: "BS CS", googleTabId: "t.vxe0iibpqn6k", parent: "colleges", titled: true },
      { slug: "cdc", label: "CDC", googleTabId: "t.ynybvrjeuqjg", parent: "colleges" },
      { slug: "ceat", label: "CEAT", googleTabId: "t.ntvgnbt7g8i1", parent: "colleges" },
      { slug: "bsche", label: "BS ChE", googleTabId: "t.xjfltyjske4p", parent: "colleges" },
      { slug: "cem", label: "CEM", googleTabId: "t.ci93pabb6n1k", parent: "colleges" },
      { slug: "cfnr", label: "CFNR", googleTabId: "t.kz4e4yjj2soa", parent: "colleges" },
      { slug: "che", label: "CHE", googleTabId: "t.ik1apzjigimj", parent: "colleges" },
      { slug: "cvm", label: "CVM", googleTabId: "t.v4mvmta2ypxh", parent: "colleges" },
      { slug: "tips", label: "Tips", googleTabId: "t.1lnet9qwezog", titled: true },
      { slug: "class-tips", label: "Class", googleTabId: "t.7wvgevbykm16", parent: "tips", titled: true },
      { slug: "student-tips", label: "Student", googleTabId: "t.h4lqh7gda4dh", parent: "tips", titled: true },
      { slug: "fitness", label: "Fitness", googleTabId: "t.ckbbc4vqbly4", parent: "tips", titled: true },
      { slug: "legends", label: "Legends", googleTabId: "t.7nunjkrcw23h", parent: "tips", titled: true },
      { slug: "packing-list", label: "Packing list", googleTabId: "t.o0usphlx38l5", titled: true },
      { slug: "locations", label: "Locations", googleTabId: "t.eoi1mi2nevzm", titled: true },
      { slug: "mental-health", label: "Mental health", googleTabId: "t.bgsiz1fp9x7f", titled: true },
    ],
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
