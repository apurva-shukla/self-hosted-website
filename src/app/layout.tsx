import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ashukla.co"),
  title: "Apurva Shukla's Lil Website",
  description: "My internet corner 🪴",
  openGraph: {
    title: "Apurva Shukla's Lil Website",
    description: "My internet corner 🪴",
    url: "https://ashukla.co",
    siteName: "Apurva Shukla's Website",
    images: [{ url: HOME_OG_IMAGE_URL }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurva Shukla's Lil Website",
    description: "My internet corner 🪴",
    images: [HOME_OG_IMAGE_URL],
    creator: "@ashukla",
    site: "@ashukla",
  },
  alternates: {
    canonical: "https://ashukla.co",
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    other: [
      { rel: "mask-icon", url: "/favicon/safari-pinned-tab.svg" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={`${inter.className} bg-hero-bg`}>
        <div className="min-h-screen">{children}</div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}