import { notFound } from "next/navigation";
import { TABS, getPreviewUrl, getViewUrl } from "../tabs";
import TabNav from "../TabNav";

export function generateStaticParams() {
  return TABS.map((tab) => ({ tab: tab.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab: slug } = await params;
  const tab = TABS.find((t) => t.slug === slug);
  if (!tab) return {};
  return { title: `${tab.label} — Stimmie's Freshie Guide (2026)` };
}

export default async function TabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab: slug } = await params;
  const tab = TABS.find((t) => t.slug === slug);
  if (!tab) notFound();

  return (
    <div className="neocities-layout">
      <header>
        <div className="title">UPLB_GUIDE.DOC</div>
        <nav>
          <a href="http://room-tba.stimmie.dev/" target="_blank" rel="noopener noreferrer">
            [ROOM_TBA]
          </a>
          <a href={getViewUrl(tab)} target="_blank" rel="noopener noreferrer">
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

      <TabNav activeSlug={tab.slug} />

      <main>
        <div className="guide-container">
          <iframe
            src={getPreviewUrl(tab)}
            title={`UPLB Freshie Guide — ${tab.label}`}
          ></iframe>
        </div>
      </main>
    </div>
  );
}
