"use client";

import Link from "next/link";
import { Guide } from "./guides";

interface TabNavProps {
  guide: Guide;
  activeTabSlug: string;
}

export default function TabNav({ guide, activeTabSlug }: TabNavProps) {
  // If the guide only has 1 tab, we don't need to render the sub-tab navigation
  if (guide.tabs.length <= 1) {
    return null;
  }

  return (
    <nav className="tab-nav">
      {guide.tabs.map((tab) => (
        <Link
          key={tab.slug}
          href={`/${guide.slug}/${tab.slug}`}
          className={tab.slug === activeTabSlug ? "tab-link active" : "tab-link"}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
