// src/app/page.tsx

import Link from "next/link";
import { GUIDES } from "./guides";

export const metadata = {
  title: "Stimmie's Guides",
  description: "A directory of handbooks, guides, and tutorials.",
};

export default function Home() {
  return (
    <div className="landing-container">
      <header style={{ marginBottom: "40px" }}>
        <h1 className="landing-title">Stimmie&apos;s Guides</h1>
        <p className="landing-subtitle">A collection of resources, handbooks, and playbooks.</p>
      </header>

      <main>
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
      </main>

      <footer style={{ marginTop: "80px", borderTop: "1px solid #eaeaea", paddingTop: "20px", fontSize: "0.8rem", color: "#666", fontFamily: "inherit" }}>
        &copy; {new Date().getFullYear()} Stimmie. All rights reserved.
      </footer>
    </div>
  );
}
