// src/app/[guide]/[tab]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { GUIDES, getPreviewUrl, getViewUrl } from "../../guides";
import TabNav from "../../TabNav";

export function generateStaticParams() {
  const params: { guide: string; tab: string }[] = [];
  for (const guide of GUIDES) {
    for (const tab of guide.tabs) {
      params.push({ guide: guide.slug, tab: tab.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string; tab: string }>;
}) {
  const { guide: guideSlug, tab: tabSlug } = await params;
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  if (!guide) return {};
  const tab = guide.tabs.find((t) => t.slug === tabSlug);
  if (!tab) return {};
  return { title: `${tab.label} — Stimmie's ${guide.label}` };
}

export default async function TabPage({
  params,
}: {
  params: Promise<{ guide: string; tab: string }>;
}) {
  const { guide: guideSlug, tab: tabSlug } = await params;
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  if (!guide) notFound();

  const tab = guide.tabs.find((t) => t.slug === tabSlug);
  if (!tab) notFound();

  return (
    <div className="layout-wrapper">
      <div className="guide-tabs">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/${g.slug}/${g.tabs[0].slug}`}
            className={g.slug === guide.slug ? "guide-tab active" : "guide-tab"}
          >
            <span>{g.icon}</span>
            <span>{g.slug}.doc</span>
          </Link>
        ))}
      </div>

      <div className="neocities-layout">
        <header>
          <div className="title">{guide.slug.toUpperCase()}_GUIDE.DOC</div>
          <nav>
            <a href="http://room-tba.stimmie.dev/" target="_blank" rel="noopener noreferrer">
              [ROOM_TBA]
            </a>
            <a href={getViewUrl(guide, tab)} target="_blank" rel="noopener noreferrer">
              [VIEW_DOC]
            </a>
            <a href="https://uplb-trail.vercel.app" target="_blank" rel="noopener noreferrer">
              [TRAIL]
            </a>
            <a href="https://upsked.com/uplb" target="_blank" rel="noopener noreferrer">
              [UPSKED]
            </a>
          </nav>
        </header>

        <TabNav guide={guide} activeTabSlug={tab.slug} />

        <main>
          <div className="guide-container">
            <iframe
              src={getPreviewUrl(guide, tab)}
              title={`${guide.label} — ${tab.label}`}
            ></iframe>
          </div>
        </main>
      </div>
    </div>
  );
}
