"use client";

import Link from "next/link";
import { TABS } from "./tabs";

export default function TabNav({ activeSlug }: { activeSlug: string }) {
  return (
    <nav className="tab-nav">
      {TABS.map((tab) => (
        <Link
          key={tab.slug}
          href={`/${tab.slug}`}
          className={tab.slug === activeSlug ? "tab-link active" : "tab-link"}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
