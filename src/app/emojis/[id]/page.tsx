'use client';

import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import Image from 'next/image';
import { Copy, Download, Share, MessageCircle, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmojiCard from '@/components/EmojiCard';
import { tikTokEmojis, getEmojisByCategory } from '@/data/emojis';
import { emojiDetails, type UsageScenario } from '@/data/emojiDetails';

interface EmojiPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EmojiPage({ params }: EmojiPageProps) {
  const resolvedParams = use(params);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const emoji = tikTokEmojis.find(e => e.id === resolvedParams.id);
  
  if (!emoji) {
    notFound();
  }

  const emojiDetail = emojiDetails[emoji.id];
  const relatedEmojis = getEmojisByCategory(emoji.category).filter(e => e.id !== emoji.id).slice(0, 4);

  // If no detailed data is available, create a fallback
  const fallbackDetail = {
    meaning: emoji.description,
    usageScenarios: [
      {
        title: 'General Usage',
        description: 'Use this emoji to express appropriate emotions in your TikTok content',
        example: `Check out this content ${emoji.symbol}`
      }
    ],
    examples: [
      `Love this video ${emoji.symbol}`,
      `This is amazing ${emoji.symbol}`,
      `Perfect mood ${emoji.symbol}`
    ],
    bestPractices: [
      'Use appropriately based on context and emotion',
      'Great for expressing the right mood in your TikTok videos',
      'Pair with relevant content for maximum impact'
    ],
    relatedEmojis: []
  };

  const currentDetail = emojiDetail || fallbackDetail;

  const copyEmoji = async () => {
    try {
      // For hidden emojis, copy the shortcode instead of the symbol
      const textToCopy = emoji.hidden ? emoji.code : emoji.symbol;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy emoji: ', err);
    }
  };

  const downloadEmoji = async () => {
    // For hidden emojis with images, download the actual image file
    if (emoji.hidden && emoji.imagePath) {
      try {
        const response = await fetch(emoji.imagePath);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${emoji.name.replace(/\s+/g, '_').toLowerCase()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 3000);
        return;
      } catch (error) {
        console.error('Failed to download image:', error);
        alert('下载失败，请稍后重试');
        return;
      }
    }

    // For hidden emojis without images, show alert
    if (emoji.hidden) {
      alert('Hidden emojis are text codes and cannot be downloaded as images. Copy the code instead!');
      return;
    }

    // Fallback for standard emojis
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
          a.download = `${emoji.name.toLowerCase().replace(/\s+/g, '-')}-emoji.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          setDownloaded(true);
          setTimeout(() => setDownloaded(false), 3000);
        }
      });
    }
  };

  const shareEmoji = (platform: string) => {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(`${emoji.name} TikTok Emoji`);
    const shareDesc = encodeURIComponent(emoji.description);
    
    let shareLink = '';
    
    switch (platform) {
      case 'wechat':
        // 在微信中，通常会显示二维码，这里简化为复制链接
        navigator.clipboard.writeText(window.location.href);
        alert('链接已复制，请在微信中分享');
        break;
      case 'weibo':
        shareLink = `https://service.weibo.com/share/share.php?url=${shareUrl}&title=${shareTitle}`;
        window.open(shareLink, '_blank');
        break;
      case 'qq':
        shareLink = `https://connect.qq.com/widget/shareqq/index.html?url=${shareUrl}&title=${shareTitle}&desc=${shareDesc}`;
        window.open(shareLink, '_blank');
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`;
        window.open(shareLink, '_blank');
        break;
      default:
        navigator.clipboard.writeText(window.location.href);
        alert('链接已复制到剪贴板');
    }
    
    setShowShareOptions(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        {/* Hero Section - More compact */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-6xl md:text-7xl mb-4">
                  {emoji.hidden && emoji.imagePath ? (
                    <div className="flex justify-center">
                      <Image
                        src={emoji.imagePath}
                        alt={emoji.name}
                        width={120}
                        height={120}
                        className="rounded-lg"
                        priority
                      />
                    </div>
                  ) : emoji.hidden ? (
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-2xl">
                      {emoji.symbol}
                    </div>
                  ) : (
                    emoji.symbol
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  {emoji.name} TikTok Emoji Details
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {emoji.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <Button onClick={copyEmoji} size="default" className="px-6 cursor-pointer">
                    <Copy className="mr-2 h-4 w-4" />
                    {copied ? 'Copied!' : (emoji.hidden ? 'Copy Code' : 'Copy Emoji')}
                  </Button>
                  <Button onClick={downloadEmoji} variant="outline" size="default" className="px-6 cursor-pointer">
                    <Download className="mr-2 h-4 w-4" />
                    {downloaded ? 'Downloaded!' : 'Download PNG'}
                  </Button>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      size="default" 
                      className="px-6 cursor-pointer"
                      onClick={() => setShowShareOptions(!showShareOptions)}
                    >
                      <Share className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    
                    {showShareOptions && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => shareEmoji('twitter')}
                          >
                            Twitter
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Emoji Meta Info */}
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant={emoji.popular ? 'default' : 'secondary'} className="text-xs">
                    {emoji.popular ? '🔥 Popular Emoji' : 'Classic Emoji'}
                  </Badge>
                  <Badge variant="outline" className="text-xs capitalize">
                    {emoji.category} Category
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Code: {emoji.code}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emoji Interpretation - More compact */}
        <section className="py-8 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Emoji Meaning & Interpretation
              </h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {currentDetail.meaning}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Usage Scenarios - Left-Right Layout */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Usage Scenarios & Examples
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Usage Scenarios */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Usage Scenarios
                  </h3>
                  {currentDetail.usageScenarios.map((scenario: UsageScenario, index: number) => (
                    <Card key={index}>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center space-x-2 text-base">
                          <MessageCircle className="h-4 w-4 text-primary" />
                          <span>{scenario.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {scenario.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-gray-900 dark:text-white">Example:</h4>
                          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                              &quot;{scenario.example}&quot;
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Right Column - Additional Examples */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    More Usage Examples
                  </h3>
                  {currentDetail.examples && currentDetail.examples.length > 0 && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center space-x-2 text-base">
                          <MessageCircle className="h-4 w-4 text-primary" />
                          <span>Example Comments & Captions</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {currentDetail.examples.map((example: string, index: number) => (
                            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                              <p className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                                &quot;{example}&quot;
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices - More compact */}
        <section className="py-8 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Usage Tips & Best Practices
              </h2>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-base">
                    <Video className="h-4 w-4 text-primary" />
                    <span>TikTok Content Creation Tips</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {currentDetail.bestPractices.map((practice: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-primary font-bold text-sm">•</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {copied && (
                <Alert className="mt-4">
                  <Copy className="h-4 w-4" />
                  <AlertDescription>
                    {emoji.hidden 
                      ? `TikTok emoji code copied to clipboard! Type ${emoji.code} in TikTok to use it.`
                      : 'Emoji copied to clipboard! You can now paste it into your TikTok content.'
                    }
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </section>

        {/* Related Emojis - More compact */}
        {relatedEmojis.length > 0 && (
          <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Related Emojis
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedEmojis.map((relatedEmoji) => (
                    <EmojiCard key={relatedEmoji.id} emoji={relatedEmoji} showCategory={false} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
} 