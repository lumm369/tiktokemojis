import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  // title 首字母大写
  const id = resolvedParams.id.charAt(0).toUpperCase() + resolvedParams.id.slice(1);
  return {
    title: `${id} TikTok Emoji - Copy, Download & Usage Guide`,
    description: `Complete guide to ${id} TikTok emoji. Learn meaning, usage examples, best practices. Copy instantly or download PNG version for free.`,
    keywords: `${resolvedParams.id} tiktok emoji, ${resolvedParams.id} emoji meaning, copy ${resolvedParams.id} emoji, ${resolvedParams.id} emoji download`,
    alternates: {
      canonical: `/emojis/${resolvedParams.id}-tiktok-emoji`,
    }
  };
}

export default function EmojiDetailLayout({
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