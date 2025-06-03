'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Globe } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const footerNavigation = {
  main: [
    { name: 'All TikTok Emojis', href: '/all-tiktok-emojis' },
    { name: 'Download PNG', href: '/tiktok-emojis-download' },
    { name: 'Emoji Codes', href: '/tiktok-emoji-codes' },
    { name: 'How to Use', href: '/how-to-use-tiktok-emojis' }
  ],
  categories: [
    { name: 'Happy Emojis', href: '/emojis/category/happy-tiktok-emoji' },
    { name: 'Proud Emojis', href: '/emojis/category/proud-tiktok-emoji' },
    { name: 'Crying Emojis', href: '/emojis/category/sad-tiktok-emoji' },
    { name: 'Smug Emojis', href: '/emojis/category/smug-tiktok-emoji' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/logo.png" 
                alt="TikTok Emojis Logo" 
                width={32} 
                height={32} 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-foreground">
                TikTok Emojis.cc
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
              The ultimate TikTok emojis collection for content creators. 
              Copy, paste, and download your favorite TikTok emojis instantly.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Heart className="h-4 w-4" />
              <span>Made for TikTok creators</span>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              TikTok Emojis Tools
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Popular Categories
            </h3>
            <ul className="space-y-3">
              {footerNavigation.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <span>© 2025 TikTok Emojis.cc. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Free TikTok Emojis for Everyone</span>
            </div>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
            <p className="mb-2">
              <strong>TikTok Emojis Collection:</strong> This website provides a comprehensive collection of TikTok emojis 
              for content creators, social media managers, and emoji enthusiasts. Our TikTok emojis library includes 
              popular emojis like the proud TikTok emojis, happy TikTok emojis, crying TikTok emojis, 
              and many more trending emojis used across the TikTok platform.
            </p>
            <p>
              All TikTok emojis are available for free copy-paste usage and PNG downloads. We regularly update our 
              TikTok emojis collection to include the latest trending emojis from the TikTok community. 
              Use our TikTok emojis to enhance your content engagement and connect better with your audience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 