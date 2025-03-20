import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Metadata } from "@/lib/types";
import Navigation from "./_components/navigation";

import "./globals.css";

export const metadata: Metadata = {
  title: `Apurva Shukla's Personal Website`,
  description: `Welcome to Apurva Shukla's personal website featuring blogs, book summaries, and more.`,
  openGraph: {
    images: [{ url: HOME_OG_IMAGE_URL }],
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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
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
      <body>
        <Navigation />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
