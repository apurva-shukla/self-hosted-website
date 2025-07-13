import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Metadata } from "@/lib/types";

import "./globals.css";

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon/Copy of Baingan face.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/Copy of Baingan face.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/Copy of Baingan face.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/Copy of Baingan face.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/Copy of Baingan face.png"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/Copy of Baingan face.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link href="https://db.onlinewebfonts.com/c/2b2a0e640a6c016b18b8ff6574a4c75b?family=JJannon" rel="stylesheet" />
        
        {/* Google Fonts optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-hero-bg">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}