// src/app/layout.tsx

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stimmie's Guides",
  description: "Guides and handbooks written by Stimmie.",
  openGraph: {
    images: [
      {
        url: "/embed.webp",
        width: 1200,
        height: 900,
        alt: "UPLB Freshie Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/embed.webp"],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌻</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
