import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stimmie's Freshie Guide (2026)",
  description: "This is definitely one of the guides of all time.",
  openGraph: {
    images: [
      {
        url: "/embed.webp",
        width: 1200,
        height: 630,
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
      </body>
    </html>
  );
}
