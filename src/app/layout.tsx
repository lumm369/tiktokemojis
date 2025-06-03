import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TikTok Emojis.cc - Free Collection & Copy Tool",
  description: "The ultimate collection of TikTok emojis for your videos. Copy, paste, and download your favorite emojis instantly! Free PNG downloads available.",
  keywords: "tiktok emojis, emoji copy paste, tiktok emoji codes, emoji png download, proud tiktok emoji",
  authors: [{ name: "TikTok Emojis" }],
  openGraph: {
    title: "TikTok Emojis.cc - Free Collection & Copy Tool",
    description: "The ultimate collection of TikTok emojis for your videos. Copy, paste, and download your favorite emojis instantly!",
    type: "website",
    locale: "en_US",
    siteName: "TikTok Emojis.cc",
    images: [
      {
        url: '/emojis/allEmojis.png',
        width: 1125,
        height: 1182,
        alt: 'TikTok Emojis Collection',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Emojis.cc - Free Collection & Copy Tool",
    description: "The ultimate collection of TikTok emojis for your videos. Copy, paste, and download your favorite emojis instantly!",
    images: ['/emojis/allEmojis.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://tiktokemojis.cc'),
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
