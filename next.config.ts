import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    unoptimized: true, // 禁用图片优化以避免Vercel的付费限制
  },
  async rewrites() {
    return [
      // 详情页面URL优化
      {
        source: '/emojis/:id-tiktok-emoji',
        destination: '/emojis/:id',
      },
      // 类别页面URL优化
      {
        source: '/emojis/category/:category-tiktok-emoji',
        destination: '/emojis/category/:category',
      },
    ];
  },
};

export default nextConfig;
