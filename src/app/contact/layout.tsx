import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TikTok Emojis - Get Support & Share Feedback",
  description: "Contact TikTok Emojis support team for help with emoji tools, feature requests, or technical issues. We help content creators succeed.",
  keywords: "contact tiktok emojis, emoji support, customer service, technical help, feature requests, creator support",
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactLayout({
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