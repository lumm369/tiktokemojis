import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - TikTok Emojis Usage Rights",
  description: "Read TikTok Emojis terms of service. Understand your rights for copying, downloading, and using our emoji collection for personal and commercial use.",
  keywords: "tiktok emojis terms, emoji usage rights, legal guidelines, emoji license, commercial use emoji",
  alternates: {
    canonical: "/terms",
  }
};

export default function TermsLayout({
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