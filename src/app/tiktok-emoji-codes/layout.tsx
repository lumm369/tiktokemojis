import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Emoji Codes - Secret Hidden Emojis List",
  description: "Discover exclusive TikTok emoji codes and secret hidden emojis. Copy special TikTok emoji shortcodes that work only on TikTok to stand out.",
  keywords: "tiktok emoji codes, secret tiktok emojis, hidden emoji codes, tiktok shortcodes, exclusive emojis, special codes",
  alternates: {
    canonical: "/tiktok-emoji-codes",
  }
};

export default function TikTokEmojiCodesLayout({
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