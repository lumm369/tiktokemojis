import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use TikTok Emojis - Complete Guide",
  description: "Master TikTok emojis with our complete guide for content creators. Learn proven strategies, best practices, and tips to boost engagement.",
  keywords: "how to use tiktok emojis, tiktok emoji guide, emoji engagement strategies, content creator tips, boost engagement",
  alternates: {
    canonical: "/how-to-use-tiktok-emojis",
  }
};

export default function HowToUseTikTokEmojisLayout({
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