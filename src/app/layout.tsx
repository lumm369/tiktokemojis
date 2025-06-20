import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TikTok Emojis - Free Copy, Paste & Download Tool",
  description: "Ultimate TikTok emojis collection. Copy, paste & download your favorite emojis instantly! Free PNG downloads for content creators.",
  keywords: "tiktok emojis, emoji copy paste, emoji download, tiktok emoji codes, free emoji png, content creator tools",
  authors: [{ name: "TikTok Emojis" }],
  openGraph: {
    title: "TikTok Emojis - Free Copy, Paste & Download Tool",
    description: "Ultimate TikTok emojis collection. Copy, paste & download your favorite emojis instantly! Free PNG downloads for content creators.",
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
    title: "TikTok Emojis - Free Copy, Paste & Download Tool",
    description: "Ultimate TikTok emojis collection. Copy, paste & download your favorite emojis instantly! Free PNG downloads for content creators.",
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
      <body className={inter.className}>
        {children}

        {/* 选项2: Google Analytics 4 (GA4) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SVTKFNV0DW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SVTKFNV0DW');
          `}
        </Script>
      </body>
    </html>
  );
}
