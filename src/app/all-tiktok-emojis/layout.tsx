import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All TikTok Emojis Collection - Complete Emoji Library",
  description: "Browse our complete collection of all TikTok emojis. Find, copy and download every TikTok emoji with our extensive emoji library.",
  keywords: "all tiktok emojis, tiktok emoji collection, complete emoji library, tiktok emoji database",
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