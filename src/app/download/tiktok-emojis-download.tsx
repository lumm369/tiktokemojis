'use client';

import { useState } from 'react';
import { Download, Image, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmojiCard from '@/components/EmojiCard';
import { getPopularEmojis } from '@/data/emojis';

export default function TikTokEmojisDownloadPage() {
  const [downloadCount, setDownloadCount] = useState(0);
  const popularEmojis = getPopularEmojis();

  const handleBatchDownload = () => {
    // Create a zip or multiple downloads
    popularEmojis.slice(0, 10).forEach((emoji, index) => {
      setTimeout(() => {
        if (emoji.imagePath) {
          fetch(emoji.imagePath)
            .then(response => response.blob())
            .then(blob => {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `tiktok-emoji-${emoji.name.toLowerCase().replace(/\s+/g, '-')}.png`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            })
            .catch(err => {
              console.error('Download failed:', err);
            });
        }
      }, index * 100);
    });
    setDownloadCount(prev => prev + 10);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#FE2C55] via-[#ffdfe6] to-white dark:from-[#121212] dark:via-[#292929] dark:to-[#1D1D1D]">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="flex justify-center space-x-2 text-4xl md:text-6xl">
                <span>📥</span>
                <span>📱</span>
                <span>🖼️</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                TikTok Emojis PNG Download
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Download high-quality TikTok emojis PNG for your videos, thumbnails, and content creation. 
                All TikTok emojis PNG files are free and optimized for professional use.
              </p>
              
              {/* Quick Download Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button onClick={handleBatchDownload} className="text-lg px-8 cursor-pointer bg-[#FE2C55] hover:bg-[#fe4365] text-white tiktok-button-hover">
                  <Download className="mr-2 h-5 w-5" />
                  Download TikTok Emojis PNG Pack (10 Files)
                </Button>
              </div>
              
              {downloadCount > 0 && (
                <Badge variant="secondary" className="text-sm">
                  {downloadCount} TikTok emojis PNG files downloaded
                </Badge>
              )}
            </div>
          </div>
        </section>

        {/* TikTok Emojis PNG Guide */}
        <section className="py-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Ultimate Guide to TikTok Emojis PNG
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-8">
                <p className="mb-4">
                  TikTok emojis PNG files are essential resources for content creators looking to enhance their TikTok videos and social media content. Our collection of high-quality TikTok emojis PNG images allows you to incorporate these unique emojis directly into your video editing software, thumbnail designs, and promotional materials.
                </p>
                
                <p className="mb-4">
                  Each TikTok emojis PNG in our collection features a transparent background, making them perfect for overlaying on videos and images without unsightly borders. These TikTok emojis PNG files are optimized for both file size and visual quality, ensuring they look crisp and professional in all your content.
                </p>
                
                <p className="mb-4">
                  Professional content creators regularly use TikTok emojis PNG files to add unique visual elements to their videos. Unlike standard emoji keyboards, these TikTok emojis PNG downloads allow for precise placement, sizing, and editing within your content. Every TikTok emojis PNG in our library is available in 128x128 pixel resolution, providing ample detail for most content creation needs.
                </p>

                <p className="mb-4">
                  Our TikTok emojis PNG download service is completely free and requires no attribution or licensing fees. You can use these TikTok emojis PNG files in both personal and commercial projects without restriction. We regularly update our TikTok emojis PNG collection to include the latest and most popular emojis from the platform.
                </p>
                
                <p className="mb-4">
                  When you download TikTok emojis PNG files from our collection, you&apos;re getting professionally prepared graphics that save you time and enhance your content quality. Many top TikTok creators incorporate these TikTok emojis PNG files into their editing workflow to create more engaging and visually appealing videos that stand out in the crowded TikTok ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Features */}
        <section className="py-12 bg-white/70 dark:bg-[#121212]/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                TikTok Emojis PNG Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Professional quality TikTok emojis PNG downloads for all your content needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Image className="h-6 w-6 text-primary" />
                    <span>High Quality PNG</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Download TikTok emojis PNG files in crystal clear 128x128 resolution. 
                    Perfect for video thumbnails, social media posts, and content creation.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• 128x128 pixel resolution</li>
                    <li>• Transparent background</li>
                    <li>• Optimized file size</li>
                    <li>• Compatible with all editing software</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-6 w-6 text-primary" />
                    <span>Batch Download</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Download multiple TikTok emojis PNG files at once. Save time with our 
                    batch download feature for popular emoji collections.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Download popular packs</li>
                    <li>• Category-based downloads</li>
                    <li>• Custom selection tool</li>
                    <li>• Organized file naming</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span>Commercial Use</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    All TikTok emojis PNG downloads are free for commercial and personal use. 
                    Perfect for content creators, businesses, and personal projects.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Free for commercial use</li>
                    <li>• No attribution required</li>
                    <li>• Unlimited downloads</li>
                    <li>• Content creator friendly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Most Downloaded TikTok Emojis PNG
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                The most popular TikTok emojis PNG downloads by content creators
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {popularEmojis.slice(0, 10).map((emoji) => (
                <EmojiCard key={emoji.id} emoji={emoji} showCategory={false} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 