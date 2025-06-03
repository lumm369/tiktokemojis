import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download TikTok Emojis PNG - High Quality Emoji Images",
  description: "Download free high-quality TikTok emoji PNG images for your content creation. Get all TikTok emojis in PNG format with transparent backgrounds.",
  keywords: "tiktok emoji png, download tiktok emojis, tiktok emoji images, tiktok emoji transparent png",
  alternates: {
    canonical: "/tiktok-emojis-download",
  }
};

export default function TikTokEmojisDownloadLayout({
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