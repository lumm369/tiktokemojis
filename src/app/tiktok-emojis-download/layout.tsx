import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download TikTok Emojis PNG - Free Transparent PNG Images",
  description: "Download free high-quality TikTok emoji PNG images with transparent backgrounds. Perfect for video editing, content creation, and design.",
  keywords: "download tiktok emoji png, free emoji images, transparent emoji png, high quality emoji download, emoji graphics",
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