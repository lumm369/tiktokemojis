import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use TikTok Emojis - Complete Guide for Creators",
  description: "Learn how to use TikTok emojis effectively in your content. Tips, best practices and strategies for using TikTok emojis to boost engagement.",
  keywords: "how to use tiktok emojis, tiktok emoji guide, tiktok emoji tutorial, tiktok emoji best practices",
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