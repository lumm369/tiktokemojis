import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All TikTok Emojis - Complete Free Collection",
  description: "Browse the complete collection of all TikTok emojis in one place. Copy, paste, and download every TikTok emoji instantly for free.",
  keywords: "all tiktok emojis, complete emoji collection, full emoji library, tiktok emoji database, comprehensive emojis",
  alternates: {
    canonical: "/all-tiktok-emojis",
  }
};

export default function AllTikTokEmojisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
} 