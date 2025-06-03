import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Emoji Codes - Complete List of Secret Emoji Codes",
  description: "Get all the secret TikTok emoji codes in one place. Copy and paste secret TikTok emojis to make your content stand out.",
  keywords: "tiktok emoji codes, secret tiktok emojis, secret tiktok emoji codes, tiktok emoji shortcodes",
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