'use client';

import { useState } from 'react';
import { Download, Image, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmojiCard from '@/components/EmojiCard';
import { getPopularEmojis } from '@/data/emojis';

export default function DownloadPage() {
  const [downloadCount, setDownloadCount] = useState(0);
  const popularEmojis = getPopularEmojis();

  const handleBatchDownload = () => {
    // Create a zip or multiple downloads
    popularEmojis.slice(0, 10).forEach((emoji, index) => {
      setTimeout(() => {
        // 检查emoji是否有imagePath属性
        if (emoji.imagePath) {
          // 下载表情图片文件
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
              console.error('下载表情图片失败:', err);
              alert(`下载表情 ${emoji.name} 失败，请稍后重试`);
            });
        } else {
          // 对于没有imagePath的表情，保持原有的Canvas绘制方式
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = 128;
            canvas.height = 128;
            ctx.font = '96px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(emoji.symbol, 64, 64);
            
            canvas.toBlob((blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `tiktok-emoji-${emoji.name.toLowerCase().replace(/\s+/g, '-')}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }
            });
          }
        }
      }, index * 100);
    });
    setDownloadCount(prev => prev + 10);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
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
                TikTok Emoji PNG Download
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Download high-quality TikTok emoji PNG files for your videos, thumbnails, and content creation. 
                All TikTok emoji PNG downloads are free and available in multiple formats.
              </p>
              
              {/* Quick Download Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" onClick={handleBatchDownload} className="text-lg px-8 cursor-pointer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Popular Pack (10 PNG)
                </Button>
                {/* <Button size="lg" variant="outline" className="text-lg px-8 cursor-pointer">
                  <FileImage className="mr-2 h-5 w-5" />
                  Custom Selection
                </Button>  */}
              </div>
              
              {downloadCount > 0 && (
                <Badge variant="secondary" className="text-sm">
                  {downloadCount} TikTok emoji PNG files downloaded
                </Badge>
              )}
            </div>
          </div>
        </section>

        {/* Download Features */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                TikTok Emoji PNG Download Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Professional quality TikTok emoji PNG downloads for all your content needs
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
                    Download TikTok emoji PNG files in crystal clear 128x128 resolution. 
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
                    Download multiple TikTok emoji PNG files at once. Save time with our 
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
                    All TikTok emoji PNG downloads are free for commercial and personal use. 
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
                Most Downloaded TikTok Emoji PNG
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                The most popular TikTok emoji PNG downloads by content creators
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {popularEmojis.slice(0, 10).map((emoji) => (
                <EmojiCard key={emoji.id} emoji={emoji} showCategory={false} />
              ))}
            </div>
          </div>
        </section>

        {/* How to Download */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                How to Download TikTok Emoji PNG Files
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Individual Download</h3>
                  <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>1. Find your favorite TikTok emoji</li>
                    <li>2. Click the download button on the emoji card</li>
                    <li>3. The TikTok emoji PNG will download automatically</li>
                    <li>4. Use in your videos, thumbnails, or posts</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Batch Download</h3>
                  <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>1. Click &quot;Download Popular Pack&quot; button</li>
                    <li>2. Multiple TikTok emoji PNG files will download</li>
                    <li>3. Files are automatically named and organized</li>
                    <li>4. Ready to use in your content creation workflow</li>
                  </ol>
                </div>
              </div>
              
              <Alert>
                <Download className="h-4 w-4" />
                <AlertDescription>
                  <strong>Pro Tip:</strong> All TikTok emoji PNG downloads include transparent backgrounds, 
                  making them perfect for overlaying on videos, thumbnails, and social media posts. 
                  Files are optimized for fast loading and small file sizes.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                TikTok Emoji PNG Technical Specifications
              </h2>
              
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">File Specifications</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Format:</strong> PNG (Portable Network Graphics)</li>
                      <li><strong>Resolution:</strong> 128x128 pixels</li>
                      <li><strong>Background:</strong> Transparent</li>
                      <li><strong>Color Depth:</strong> 32-bit RGBA</li>
                      <li><strong>File Size:</strong> 2-8 KB average</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Compatibility</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Video Editors:</strong> Adobe Premiere, Final Cut Pro, DaVinci Resolve</li>
                      <li><strong>Image Editors:</strong> Photoshop, GIMP, Canva</li>
                      <li><strong>Platforms:</strong> TikTok, Instagram, YouTube, Twitter</li>
                      <li><strong>Devices:</strong> Desktop, mobile, tablet</li>
                      <li><strong>Operating Systems:</strong> Windows, macOS, iOS, Android</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                TikTok Emoji PNG Download FAQ
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Are TikTok emoji PNG downloads free?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes, all TikTok emoji PNG downloads are completely free for both personal and commercial use. 
                    No registration or payment required.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">What quality are the TikTok emoji PNG files?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    All TikTok emoji PNG files are high-quality 128x128 pixel images with transparent backgrounds, 
                    perfect for professional content creation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I use TikTok emoji PNG in commercial projects?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Absolutely! Our TikTok emoji PNG downloads are free for commercial use, including videos, 
                    marketing materials, and business content.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">How many TikTok emoji PNG files can I download?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    There&apos;s no limit! Download as many TikTok emoji PNG files as you need for your projects. 
                    We offer both individual and batch download options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 