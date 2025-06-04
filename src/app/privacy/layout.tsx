import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TikTok Emojis Data Protection",
  description: "Learn how TikTok Emojis protects your privacy and data. Our privacy policy explains data collection, usage, and your rights when using our tools.",
  keywords: "tiktok emojis privacy, data protection, user privacy rights, emoji website privacy, data security",
  alternates: {
    canonical: "/privacy",
  }
};

export default function PrivacyLayout({
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