import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TikTok Emojis - Emoji Collection for Creators",
  description: "Learn about TikTok Emojis mission to help content creators express better. Discover our comprehensive emoji collection and free tools.",
  keywords: "about tiktok emojis, emoji website, content creator tools, emoji collection, free emoji tools",
  alternates: {
    canonical: "/about",
  }
};

export default function AboutLayout({
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