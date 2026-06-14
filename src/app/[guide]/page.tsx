// src/app/[guide]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { NativeGuideContent } from "../guide-content";
import { GUIDES, getHeaderLinks } from "../guides";
import TabNav from "../TabNav";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ guide: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide: guideSlug } = await params;
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  if (!guide) return {};
  return { title: `Stimmie's ${guide.label}` };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide: guideSlug } = await params;
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  if (!guide) notFound();

  const tab = guide.tabs[0];
  const headerLinks = getHeaderLinks(guide, tab);

  return (
    <div className="layout-wrapper">
      <div className="guide-tabs">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/${g.slug}`}
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
            {headerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <TabNav guide={guide} activeTabSlug={tab.slug} />

        <main>
          {guide.kind === "native" ? (
            <div className="guide-container guide-container-native">
              <NativeGuideContent slug={guide.slug} />
            </div>
          ) : (
            <div className="guide-container">
              <iframe
                src={`https://docs.google.com/document/d/${guide.docId}/preview`}
                title={guide.label}
              ></iframe>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
