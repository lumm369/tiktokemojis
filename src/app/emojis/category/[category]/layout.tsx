import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category.charAt(0).toUpperCase() + resolvedParams.category.slice(1);
  return {
    title: `${categoryName} TikTok Emojis - Complete Collection`,
    description: `Explore all ${categoryName} TikTok emojis in one place. Copy and download ${categoryName} emojis instantly for your content. Perfect for expressing emotions.`,
    keywords: `${resolvedParams.category} tiktok emojis, ${resolvedParams.category} emoji collection, copy ${resolvedParams.category} emojis, ${resolvedParams.category} emotions`,
    alternates: {
      canonical: `/emojis/category/${resolvedParams.category}-tiktok-emoji`,
    }
  };
}

export default function EmojiCategoryLayout({
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