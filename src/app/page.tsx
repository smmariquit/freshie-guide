// src/app/page.tsx

import Link from "next/link";
import { GUIDES } from "./guides";

export const metadata = {
  title: "Stimmie's Guides",
  description: "A directory of handbooks, guides, and tutorials.",
};

export default function Home() {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-card">
        <div className="landing-header">
          <h1 className="landing-title">Stimmie&apos;s Guides</h1>
          <p className="landing-subtitle">A collection of resources, handbooks, and playbooks.</p>
        </div>

        <div className="landing-main">
          <div className="guides-list">
            {GUIDES.map((guide) => (
              <Link key={guide.slug} href={`/${guide.slug}`} className="guide-card">
                <div className="guide-card-icon">{guide.icon}</div>
                <div className="guide-card-content">
                  <h3>{guide.label}</h3>
                  <p>{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="landing-footer">
          &copy; {new Date().getFullYear()} Stimmie. All rights reserved.
        </div>
      </div>
    </div>
  );
}
